/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";

export const TodoContext = createContext({
 todos: [
  // every todo will have an id, todo(message) and a boolean check to determine whether its is completed or not.
  {
   id: 1,
   todo: "Simple Message",
   completed: false,
  }
 ],
 // functions required for todo, without implementation
 addTodo : (todo)  => {},
 deleteTodo : (id) => {},
 updateTodo : (id, todo) => {},
 toggleComlete: (id) => {}
});

export const useTodo = () => {
 return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;


