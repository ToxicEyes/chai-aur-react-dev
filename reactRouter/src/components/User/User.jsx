import { useParams } from "react-router-dom";


export default function User() {
 const {uid} = useParams();
  return (
    <div
     className="text-center text-xl py-4 font-bold bg-green-500"
     >
      User: {uid} </div>
  )
}

// How to access params using React-router-dom
//Here we have to use useParams
// import { useParams } from 'react-router-dom'
//then destructure it like object
//const {userId} = useParams();