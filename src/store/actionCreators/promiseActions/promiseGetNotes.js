import actionPromise from '../actionPromise'

export default function actionPromiseGetAllNotes() {
    let promise = fetch('/notes').then(res=>res.json())
        
    return  actionPromise('allNotes', promise)

}