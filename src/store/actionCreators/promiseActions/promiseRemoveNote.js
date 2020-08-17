import actionPromise from '../actionPromise'

export default function actionPromiseRemoveNote(id) {
    let promise = fetch(`/notes/${id}`,{
        method: 'DELETE'
    })
    // .then(res=>res.json())
        
    return  actionPromise('removeNote', promise)

}