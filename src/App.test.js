const puppeteer = require('puppeteer')
const faker = require('faker')

const note = {
  title: faker.lorem.sentence(word_count = 7, supplemental = false, random_words_to_add = 0),
  desc: faker.lorem.sentence(word_count = 74, supplemental = false, random_words_to_add = 0),
}


test('create note works correctly', async () => {
  let browser = await puppeteer.launch({headless: false})
  let page = await browser.newPage()
  
  const pageURL = 'http://localhost:3000/create-note';
  await page.goto(pageURL);

  await page.click('#root > div > div.oneNoteHolder > input[type=text]')
  await page.type('#root > div > div.oneNoteHolder > input[type=text]', note.title)

  await page.click('#root > div > div.oneNoteHolder > textarea')
  await page.type('#root > div > div.oneNoteHolder > textarea', note.desc)

  await page.click('#root > div > div.oneNoteHolder > span > button')
  await page.waitForSelector('#root > div > div.notesHolder')
  const title = await page.evaluate(() => document.querySelector('#root > div > div.notesHolder > div:last-child>h3').innerText)    
  await page.click('#root > div > div.notesHolder > div:last-child>div.noteMenu>p:first-child')
  const desc = await page.evaluate(()=>document.querySelector('#root > div > div.notesHolder > div:last-child > div.noteBody > p').innerText)

  expect(title).toBe(note.title);
  expect(desc).toBe(note.desc);

  browser.close()
}, 160000)
