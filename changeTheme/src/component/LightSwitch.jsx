import  { useContext } from 'react'
import { DarkModeContext } from '../context/DarkModeContext'

function LightSwitch() {
 const {toggleDarkMode} = useContext(DarkModeContext);
 const handleClick = () => {
  toggleDarkMode();
 }
  return (
    <button
    onClick={handleClick}
    >Toggle Theme</button>
  )
}

export default LightSwitch;