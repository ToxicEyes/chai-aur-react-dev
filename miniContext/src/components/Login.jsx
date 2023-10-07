import  { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {

 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");

 // setUser is coming from UserContext.js
 const {setUser} = useContext(UserContext);


 const handleSubmit = (e) => {
   e.preventDefault();
   setUser({username, password});
 }

 return(
  <div>
   <h2>Login</h2>
   <input
   value={username}
   onChange={(e) => setUsername(e.target.value)}
   type="text" 
   placeholder="username"
   />
   {"   "}
   <input
   value={password}
   onChange={(e) => setPassword(e.target.value)}
   type="text" 
   placeholder="password"/>

   <button
   onClick={handleSubmit}
   >SUBMIT</button>
  </div>
 )
}

export default Login;