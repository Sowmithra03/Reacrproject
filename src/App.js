import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from "./Layout"
import Home from "./Page1/Home"
import About from "./Page1/About"
import Contact from "./Page1/Contact"
import  "./Page1/Layout.css";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
  )
} 