import {combineReducers, createStore, compose, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import threeReducer from './threeReducer';
import configReducer from './configReducer';

let reducers =  combineReducers({
    three : threeReducer,
    config : configReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers
    ,composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ))
// let store = createStore(reducers)

export default store