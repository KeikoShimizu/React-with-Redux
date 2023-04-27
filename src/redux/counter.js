import { createSlice } from '@reduxjs/toolkit'

//State
const initialState = {
  count: 0,
}

//Action (increment, decrement, incrementByAmount)
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
  },
})
//state = 0 / action = payload としてpassされる　variableのこと
//this is passed 33 as payload on App.js file! 
// dispatch(incrementByAmount(33))





// Action creators are generated for each case reducer function
//export all the actions I created then spread in all components in this project
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
//then this goes to store file!

//redux toolkit can define all state, Action and Deducer at one place with cleanly with "createSlice" function!
//General redux need to define one by one separately.