import { combineReducers } from 'redux'
import count from './modules/count/reducer'
import todo from './modules/todo/reducer'

export default combineReducers({ count,todo })
