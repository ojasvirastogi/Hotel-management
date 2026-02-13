import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Footer from './components/Footer/Footer'
import Nav from './components/Nav/Nav'
import Index from './components/Pages/Index'
import About from "./components/Pages/About"
// import Rooms from "./components/Pages/Rooms"
// import RoomsDetails from "./components/Pages/RoomsDetails"
import Facilities from "./components/Pages/Facilities"

import Blogs from "./components/Pages/Blogs"
import Contact from "./components/Pages/Contact"

import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'




function App() {
    useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      // Cleanup on unmount
      lenis.destroy()
    }
  }, [])

  return (
    <>
     
   
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Index/>}/>
       <Route path="/home" element={<Index/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/facilities" element={<Facilities/>}/>
        <Route path="/blog" element={<Blogs/>}/>
        <Route path="/contact" element={<Contact/>}/>

        {/* <Route path="/Rooms" element={<Rooms/>}/> */}
        {/* <Route path="/RoomsDetails/:id" element={<RoomsDetails/>}/> */}


      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
