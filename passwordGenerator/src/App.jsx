/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  //set  default password length to 8
  const [length, setLength] = useState(8);

  //set default value to allow numbers in password
  const [allowNumbers, setAllowNumbers] = useState(false);

  //set default value to allow characters (special characters) in password
  const [allowChar, setAllowChar] = useState(false);

  //set default password
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  //main generator function
  //memoized function, stored in cache (resource intensive function)
  //only executed when dependencies updates
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRTUVWXYZabcdefghijklmnopqrstuvwxyz"; //characters for my password

    //if numbers are allowed in password
    if (allowNumbers) str += "0123456789";
    if (allowChar) str += "-/{}()[]&%$#@!^*+-=`~_|";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, allowNumbers, allowChar]);

  //fuction to copy the password
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();

    //you can also select a specific range
    // passwordRef.current?.setSelectionRange(0,5);

    window.navigator.clipboard.writeText(password);//here we are not using useRef
  }, [password])


  useEffect(() => {
    passwordGenerator();
  }, [length, allowNumbers, allowChar, passwordGenerator
  ])

  return (
    <div className="w-full max-w-md shadow-md mx-auto rounded-md px-4 py-2 my-8 text-orange-500 text-xl bg-gray-600">
      <div className="flex shadow rounded-md mb-4 overflow-hidden">
        <input type="text" 
        value={password}
        className="w-full outline-none py-1 px-3 rounded-md"
        readOnly
        placeholder="Password"
        ref={passwordRef}
        />

        <button
        className="rounded-md bg-blue-600 ml-3 py-1 px-3 text-white"
        onClick={copyPasswordToClipboard}
        >COPY</button>
      </div>
      <div className = "flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1"> 
        <input
         type="range" 
         min={8}
         max={16} 
         value={length}
         className="cursor-pointer"
         onChange={(event) => {setLength(event.target.value)}}/>
         <label>Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
           type="checkbox"
           defaultChecked={allowNumbers}
           id="numberInput"
           onChange={()=> {setAllowNumbers( (prev) => !prev )} }/>
           <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
        <input
           type="checkbox"
           defaultChecked={allowChar}
           id="charInput"
           onChange={()=> {setAllowChar( (prev) => !prev )} }/>
           <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
