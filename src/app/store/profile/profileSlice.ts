import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ProfileState } from './types'

export const initialState: ProfileState = {
  firstName: '',
  lastName: ''
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile(state, action: PayloadAction<ProfileState>) {
      state = action.payload
    }
  }
})

export const { setProfile } = profileSlice.actions

export default profileSlice.reducer
