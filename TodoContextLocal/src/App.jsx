import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    // to do is an object with id, msg and isCompleted properties
    setTodos((prevTodo) => [...prevTodo, {id: Date.now(), ...todo}]);
  }

  const updateTodo = (id, todo) => {
    // update todo whose id matches with given id
    setTodos((prevTodosArray) => prevTodosArray.map((currentTodo) => currentTodo.id === id ? todo : currentTodo))
  }

  const deleteTodo = (id) => {
    //create an new array in which there is no existance of todo whose id is specified
    setTodos((prevTodosArray) => prevTodosArray.filter((currentTodo) => currentTodo.id !== id));
  }

  const toggleComlete = (id) => {
    setTodos((prevTodosArray) => prevTodosArray.map((currentTodo) => currentTodo.id === id ? {...currentTodo, isCompleted:!currentTodo.isCompleted}: currentTodo));
  }

  //storing data in localStorage
  useEffect(() => {
    // Note: localStorage stores data in string format, hence we need to convert it into an JSON
    const todos = JSON.parse(localStorage.getItem("todos"));

    if(todos && todos.length > 0){
      setTodos(todos);
    }
  }, []);


  //whenever there is a change oin todos array, update localStorage
  useEffect(() => {
    // Note: same name used while getItem
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])


  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComlete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-lg rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
            </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id}
              className="w-full"
              >
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>{" "}
    </TodoProvider>
  );
}

export default App;
