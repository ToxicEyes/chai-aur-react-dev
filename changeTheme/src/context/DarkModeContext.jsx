/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

const DarkModeContext = createContext();

function DarkModeProvider({children}) {
 const [darkMode, setDarkMode] = useState(false);
 const toggleDarkMode = () => {
  setDarkMode(!darkMode);
 };
 return(
  <div>
   <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
    {children}
   </DarkModeContext.Provider>
  </div>
 )
}

export {DarkModeContext, DarkModeProvider};