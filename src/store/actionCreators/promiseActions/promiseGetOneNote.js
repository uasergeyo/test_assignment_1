import actionPromise from '../actionPromise'

export default function actionPromiseGetOneNote(id) {
    let promise = fetch(`/notes/${id}`)
    .then(res=>res.json())
        
    return  actionPromise('oneNote', promise)

}