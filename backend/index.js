const express = require('express');
const app     = express();
let port      = 3123;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
let db = require('./database')

app.use(express.static('public'));

app.get('/',(req,res) => {
    res.send("Start page")
    
})

app.get('/notes',(req,res)=>{
        res.status(200).send(db.notes.list())
    
})

app.get('/notes/:id',(req,res)=>{ 
    if(db.notes.get(req.params.id)){
        res.status(200).send(db.notes.get(req.params.id))
    }else{
        res.status(404).send()
    }
    
})

app.post('/notes',(req,res) => {
    let result = db.notes.create({...req.body,createdAt:Date.now()})
    if(result){
        res.status(201).send(db.notes.get(result))
    }else{
        res.status(304).send()
    }
})

app.put('/notes/:id',(req,res) => {
    let i = db.notes.update({id:req.params.id,updatedAt:Date.now(),...req.body})
    res.status(200).send(db.notes.get(req.params.id))
})

app.delete('/notes/:id',(req,res) => {
    db.notes.delete(req.params.id)
    if(! db.notes.get(req.params.id)){
        res.status(204).send() 
    }else{
        res.status(304).send()
    }
})



app.listen(port,console.log(`Listen ${port} ........`))