import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#111]'>
      <Navbar/>
      <Sidebar/>
    </div>
  )
}

export default Home
