// In Store store's only that data which is require on multiple page or component.

import { configureStore } from '@reduxjs/toolkit' 
// STEP-1
// Import the configureStore API from Redux Toolkit. This creates a Redux store, and also automatically configure the Redux DevTools extension so that you can inspect the store while developing.
// Once the store is created, we can make it available to our React components by putting a React-Redux <Provider> around our application in src/index.js.

import cartReducer from './cartSlice';
// STEP-4
// Next, we need to import the reducer function from the counter slice and add it to our store. 
// By defining a field inside the reducer parameter, we tell the store to use this slice reducer function to handle all updates to that state.

const store = configureStore({
  reducer: {
    cart: cartReducer,   // This is a name of reducer which is created in cartSlice. We are regestring here what ever we have create a slice. We can add as many reducer and then add in it by creating other abcSlice
  },
})

export default store;


// Flow of Redux-
// From products.js  button will clicked and then on onClick event Action(add()) will triggerd from cartSlice.js
// Then Reducer(add())(cartSlice.js) will dispatch and send payload to store for updating the value and to diaplay on Ui then store returns the updated value.    
