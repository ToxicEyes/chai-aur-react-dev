import './App.css'
import Container from './component/Container'
import { DarkModeProvider } from './context/DarkModeContext'
function App() {
  return (
   <div className='App'>
    <DarkModeProvider>
      <Container />
    </DarkModeProvider>
   </div>
  )
}

export default App
