import React from 'react'
import Hero from './Components/Sections/Hero'
import NavBar from "../src/Components/NavBar"
import ClientSectionPreview from './Components/Sections/Client'
import Testimonials from './Components/Sections/Testimonials'
import Footer from "./Components/Sections/Footer"
import Contact from "./Components/Sections/Contact"

const App = () => {
  return (
    <>
    <NavBar/>
    <Hero/>
    <ClientSectionPreview/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App