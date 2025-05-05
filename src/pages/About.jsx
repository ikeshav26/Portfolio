import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Me from '../components/Me'

const About = () => {
  return (
    <div className='w-full h-screen bg-[#111]'>
      <Navbar/>
      <Sidebar/>
      <Me/>
      <Footer/>
    </div>
  )
}

export default About
