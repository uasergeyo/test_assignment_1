import promiseReducer from './promiseReducer';
import locationReducer from './locationReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    promiseReducer,
    locationReducer,
});

export default reducers;