import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#111]'>
      <Navbar/>
      <Sidebar/>
      <Footer/>
    </div>
  )
}

export default Home
