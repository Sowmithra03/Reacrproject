// import {BrowserRouter,Routes,Route} from "react-router-dom"
// import Layout from "./Layout"
// import Home from "./Page1/Home"
// import About from "./Page1/About"
// import Contact from "./Page1/Contact"
// import  "./Page1/Layout.css";

// export default function App() {
//   return (
//     <BrowserRouter>
//     <Routes>
//     <Route path="/" element={<Layout/>}>
//         <Route index element={<Home/>}/>
//         <Route path="about" element={<About/>}/>
//         <Route path="contact" element={<Contact/>}/>

//     </Route>
//     </Routes>
//     </BrowserRouter>
//   )
// } 

import React from 'react'
import Count from './Counters/Count'
import Effects from './Effects'
import Reducer from './Reduce/Reducer'
import Callbacks from './Usecallbk/Callback'
export default function App() {
  return (
   <div> 
    <Count/>
    <Effects/>
    <Reducer/>
    <Callbacks/>
    </div>
  )
}
