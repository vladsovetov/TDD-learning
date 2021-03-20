import { combineReducers, configureStore } from '@reduxjs/toolkit'

import profileReducer from './profile/profileSlice'

export const rootReducer = combineReducers({ profile: profileReducer })
export type RootState = ReturnType<typeof rootReducer>

export const getConfiguredStore = (initialState?: RootState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState
  })
}
