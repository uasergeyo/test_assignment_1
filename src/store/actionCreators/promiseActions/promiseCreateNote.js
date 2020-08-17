import actionPromise from '../actionPromise'

export default function actionPromiseCreateNote(data) {
    let promise = fetch(`/notes`, {
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(data)
    }).then(res => res.json())

    return actionPromise('createNote', promise)

}