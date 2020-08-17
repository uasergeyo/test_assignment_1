import initialState from "../intitialState";
import {CURRENT_LOCATION} from "../actions"

function locationReducer(state=initialState,action){
    if (action.type === CURRENT_LOCATION){
        return {
            location:action.location
        }
    }else{
        return state  
    }
}

export default locationReducer;