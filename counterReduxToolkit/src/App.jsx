import './App.css'
import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement } from './features/counter/counterSlice'
import MyComponent from './component/MyComponent';

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  return (
    <>
      <h1>Count is {count}</h1>
      <button
      onClick={() => dispatch(increment())}
      >Increment</button>
      <button
      onClick={() => dispatch(decrement())}
      >Decrement</button>
      <br />
      <MyComponent />
    </>
  )
}

export default App
