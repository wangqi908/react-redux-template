import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import countReducer from './countReducer'

export default createStore(countReducer, applyMiddleware(thunk))
