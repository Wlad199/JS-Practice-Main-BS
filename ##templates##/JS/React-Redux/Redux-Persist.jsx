/*
npm install redux - persist (https://www.npmjs.com/package/redux-persist)
*/
//! Store ==========================//
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import todoReducer from './todoSlice'


//## rootReducer объединяет нескольких редюсеров
const rootReducer = combineReducers({
	todo: todoReducer
})

const persistConfig = {
	key: 'root',
	storage,
}

//## persistedReducer - редюсер с возможностями localStore
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		})
})

export const persistor = persistStore(store)
export default store

//! index.js ==========================//
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>
)