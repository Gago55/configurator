import {combineReducers, createStore} from 'redux'
import threeReducer from './threeReducer';
import configReducer from './configReducer';

let reducers =  combineReducers({
    three : threeReducer,
    config : configReducer
})

let store = createStore(reducers)

export default store