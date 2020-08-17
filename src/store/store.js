import { createStore,applyMiddleware } from 'redux';
import reducers from './reducers';
import initialState from './intitialState';
import thunk from 'redux-thunk';


const store = createStore(reducers, initialState,applyMiddleware(thunk));

// store.subscribe(()=>console.log("STORE ",store.getState()))

export default store;