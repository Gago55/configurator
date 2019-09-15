import {combineReducers, createStore} from 'redux'
import threeReducer from './threeReducer';

let reducers =  combineReducers({
    three : threeReducer
})

let store = createStore(reducers)

export default store