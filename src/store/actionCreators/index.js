import {
    actionPromiseGetAllNotes,
    actionPromiseRemoveNote,
    actionPromiseGetOneNote,
    actionPromiseEditNote,
    actionPromiseCreateNote

} from './promiseActions'

import actionLocation from './actionLocation';

export {
    actionGetAllNotes,
    actionRemoveNote,
    actionGetOneNote,
    actionEditNote,
    actionCreateNote,
    actionLocation,
    
}



function actionGetAllNotes() {
    return async dispatch => {
        return await dispatch(actionPromiseGetAllNotes())
    }
}

function actionRemoveNote(id){
    return async dispatch =>{
        return await dispatch(actionPromiseRemoveNote(id))
    }
}

function actionGetOneNote(id){
    return async dispatch =>{
        return await dispatch(actionPromiseGetOneNote(id))
    }
}

function actionEditNote(data){
    return async dispatch => {
        return await dispatch(actionPromiseEditNote(data))
    }
}

function actionCreateNote(data){
    return async dispatch => {
        return await dispatch(actionPromiseCreateNote(data))
    }
}