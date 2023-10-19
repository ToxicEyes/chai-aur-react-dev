import {useSelector} from 'react-redux'

function MyComponent() {
 const count = useSelector((state) => state.counter.value)

  return (
    <div>MyComponent: {count}</div>
  )
}

export default MyComponent