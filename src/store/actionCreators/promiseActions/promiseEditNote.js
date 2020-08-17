import actionPromise from '../actionPromise'

export default function actionPromiseEditNote({id,title,description}) {
    let promise = fetch(`/notes/${id}`,{
        method:"PUT",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({
              title,description
          })
    }).then(res=>res.json())
        
    return  actionPromise('editNote', promise)

}