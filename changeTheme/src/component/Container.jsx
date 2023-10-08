import  { useContext } from 'react'
import { DarkModeContext } from '../context/DarkModeContext'
import LightSwitch from './LightSwitch';

function Container() {
 const {darkMode} = useContext(DarkModeContext);
  return (
    <div className={darkMode ? `Container Container-dark` : `Container Container-light`}>
    <LightSwitch />
    </div>
    
  );
}

export default Container;