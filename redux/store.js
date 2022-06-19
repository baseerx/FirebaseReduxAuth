import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './userDetails'

export const store = configureStore({
  reducer: {
    user: UserSlice,
  },
})