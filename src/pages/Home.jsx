import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#111] overflow-hidden'>
      <Navbar/>
      <Sidebar/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default Home
