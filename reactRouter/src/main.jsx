import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";
import Github from "./components/Github/Github";

// const router = createBrowserRouter([
//   {
//     path : "/",
//     element : <Layout />,
//     // now we have to add path of children like home, about, contact, git
//     children: [
//       {
//         path : "",
//         element : <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }

//     ]
//   }
// ])



const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Layout />}>

    <Route path="" element={<Home />}/>
    <Route path="about" element={<About />}/>
    <Route path="contact" element={<Contact />}/>
    <Route path="github" element={<Github />}/>
    {/* Custom Route 
    use : after / and remember the variable after it
    */}
    <Route path="user/" element={<User/>}/>
    <Route path="user/:uid" element={<User/>} />

    <Route path="github/" element={<Github/>}/>
    <Route path="github/:uname" element={<Github/>}/>

  </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
