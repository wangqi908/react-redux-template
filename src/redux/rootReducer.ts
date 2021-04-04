import { combineReducers } from 'redux'
import count from '@rm/count/reducer'
import todo from '@rm/todo/reducer'

export default combineReducers({ count,todo })
