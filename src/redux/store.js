import {createStore,combineReducers, applyMiddleware} from 'redux';

import productReducer from './reducers/productReducer';

import basketReducer from './reducers/basketReducer';

const rootReducer =  combineReducers({productReducer,basketReducer})

import thunk from 'redux-thunk'


export default createStore(rootReducer,applyMiddleware(thunk));