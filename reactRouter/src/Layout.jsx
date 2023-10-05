import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

// the content in Ontlet chnages

function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer /> 
    </>
  )
}

export default Layout