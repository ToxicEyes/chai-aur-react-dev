import {createSlice, nanoid} from '@reduxjs/toolkit';
// nanoid is responsible to create unique ids

//every store will have an initial state, which can contain anything ,ike array or object
const initialState = {
 todos: [
  {id: 1, text: "Welcome..."}
 ]
}

//use createSlice to create a slice (slice is simply a bigger version of reducers:functionalities)
export const todoSlice = createSlice({
 name: "todos",
 initialState,
 reducers: {
  addTodo : (state, actions) => {
   //create a new todo, and push it into "todos" array
   const todo = {
    id: nanoid(),
    text: actions.payload
   }
   state.todos.push(todo);
  },
  removeTodo : (state, actions) => {
   state.todos = state.todos.filter((todo) => todo.id !== actions.payload)
  }
 }
})

export const {addTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;