import React from 'react'
import { Link } from 'react-router-dom'
import { IoCloudDownload } from "react-icons/io5";
import dummy from '../../public/dummy.png'

const Hero = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center '>
      <div className='lg:px-20 w-50 md:w-70 lg:w-90 px-5 md:px-10 flex flex-col gap-3 absolute left-0 mt-[40vh] md:mt-[35vh] lg:mt-[25vh] '>
        <button className='btn-1 bg-[#ff003d] rounded-full px-2 py-1 md:px-5 md:py-2 cursor-pointer flex  gap-2  justify-center items-center'><IoCloudDownload className='logo-1 text-xl '/>DOWNLOAD CV</button>
        <Link to="/contact" className=''><button className='bg-[#ff003d] rounded-full px-2 py-1 md:px-5 md:py-2 cursor-pointer w-full flex justify-center'>HIRE ME</button></Link>
      </div>
        <div className='circle1 bg-[#ff003d] h-60 w-60 md:h-90 md:w-90 lg:h-100 lg:w-100 mb-54 md:mb-40 rounded-full flex justify-center items-center '>
      <div className='circle2 bg-[#111]  w-50 h-50 lg:w-88 lg:h-88 md:w-80 md:h-80 rounded-full'>
      <img className='md:absolute   md:h-104 md:bottom-0' src={dummy}/>
      </div>
      </div>
    </div>
  )
}

export default Hero
