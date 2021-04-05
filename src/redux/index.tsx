import { createStore, applyMiddleware, Store, AnyAction } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'

export type AppState = ReturnType<typeof rootReducer>

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todo']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

persistStore((store as unknown) as Store<any, AnyAction>)
export default store
