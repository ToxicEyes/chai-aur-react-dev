/* eslint-disable no-unused-vars */
import "./App.css";
import Card from './components/Card';

function App() {

  let myObj = {
    name : 'Dev',
    age: '21'
  }

  let myArr = [1,2,3,17];
  
  return (
    <>
      <h1 className="bg-green-500 p-4 rounded-xl text-yellow-900 mb-4">
        Tailwind And Props
      </h1>
      {/* <Card uname="ToxicEyes" someObj={myObj} someArr = {myArr}/> */}
      <Card username = "Dev" btnText = "Click Me"/>
      <Card username = "Aryan" btnText = "Visit Me"/>
    </>
  );
}

export default App;
