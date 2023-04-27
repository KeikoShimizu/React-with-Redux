import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})

//this store file is touched only at the beginning when I have new reducer for building app.