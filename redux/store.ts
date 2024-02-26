import { combineReducers, configureStore } from '@reduxjs/toolkit'

import middlePageReducer from './slice/middlePageSlice'

const rootReducer = combineReducers({
  middlePage: middlePageReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export default store
