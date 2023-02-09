import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import strainReducer from '../features/strains/strainSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    strains: strainReducer,
  },
})
