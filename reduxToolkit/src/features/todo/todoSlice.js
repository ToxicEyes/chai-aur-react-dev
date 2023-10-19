import {createSlice, nanoid} from '@reduxjs/toolkit';
// nanoid is responsible to create unique ids

//every store will have an initial state, which can contain anything ,ike array or object
const initialState = {
 todos: [
  {id: 1, text: "Chai aur React"}
 ]
}

//use createSlice to create a slice (slice is simply a bigger version of reducers:functionalities)
export const todoSlice = createSlice({
 
})