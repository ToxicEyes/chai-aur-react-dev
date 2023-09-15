import {useState} from 'react'
import './App.css'



function App() {

  let [count, setCount] = useState(0);

  const addValue = () => {
    console.log("clicked", count);
    if(count >= 20){
      alert("You can not further increase");
      return;
    }
    setCount(count + 1);
  }

  const removeValue = () => {
    console.log("clicked ",count);
    if(count == 0 ){
      alert("You can not further decrease");
      return;
    }
    setCount(count - 1);
  }

  const resetValue = () => {
    setCount(0);
  }

  return (
    <>
    <h1>:Conter App:</h1>
    <h2>Conter Value: {count} </h2>
    <button id='increase' onClick={addValue}>+</button>
    <button id='decrease' onClick={removeValue}>-</button>
    <button id='reset' onClick={resetValue}>RESET</button>
    </>
  )
}

export default App
