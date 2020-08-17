import {CURRENT_LOCATION} from '../actions';

export default function actionLocation(location){
    return{
        type:CURRENT_LOCATION,
        location
    }
}