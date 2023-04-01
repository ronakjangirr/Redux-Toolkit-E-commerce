// Slice is used to maintain or organise our store data in small pieces.
// Slice is a feature of toolkit and not or core redux.
// add() & remove() are 2 reducers or pure function from which we can mutate our state.
// It doesn't actually mutate the state because it uses the Immer library,

// STEP-3
// Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated. 
// Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice.
// Redux requires that we write all state updates immutably, by making copies of data and updating the copies. 
// However, Redux Toolkit's createSlice and createReducer APIs use Immer inside to allow us to write "mutating" update logic that becomes correct immutable updates.

import { createSlice } from '@reduxjs/toolkit' 

const cartSlice = createSlice({  // createSlice takes 3 things name, initialstate, and reducer (pure function) with the help of reducer we can change our states or data.
  name: 'cart',      // string name to identify the slice.
  initialState:[],   // initially it is empty.
  reducers: {      //one or more reducer functions to define how the state can be updated.
    add:(state, action) => {          // pure functions take 2 parameters state(initial state) and action.
      // Redux Toolkit allows us to write "mutating" logic in reducers. 
        state.push(action.payload);   // we are directly putting action.payload in initial state in empty array (This is called a mutating)
        //Here, add is a reducer function that updates the data property of the slice with the value of the payload property of the action.                
      },
    remove:(state, action) => {
      return state.filter((item)=>item.id !== action.payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, remove } = cartSlice.actions   // Now exporting add & remove from createSlice.action

export default cartSlice.reducer // createSlice method will automatically create actions and reducers.