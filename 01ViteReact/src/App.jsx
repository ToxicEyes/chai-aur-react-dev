import Intro from './intro.jsx';

//if we add a varibale using the JSX

function App() {
  const uname = 'Dev';
  return (
    <>
    {uname}
   <Intro />
   </>
  )
}

export default App
