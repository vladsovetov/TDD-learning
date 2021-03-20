import { combineReducers, configureStore } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({})
export type RootState = ReturnType<typeof rootReducer>

export const getConfiguredStore = (initialState?: RootState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState
  })
}
