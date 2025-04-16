import React from 'react'
import Hero from './Components/Sections/Hero'
import NavBar from "../src/Components/NavBar"
import ClientSectionPreview from './Components/Sections/Client'
import Testimonials from './Components/Sections/Testimonials'

const App = () => {
  return (
    <>
    <NavBar/>
    <Hero/>
    <ClientSectionPreview/>
    {/* <Testimonials/> */}
    </>
  )
}

export default App