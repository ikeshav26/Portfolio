import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center '>
        <div className='circle1 bg-[#ff003d] h-60 w-60 md:h-80 md:w-80 lg:h-100 lg:w-100 mb-44 md:mb-40 rounded-full flex justify-center items-center '>
      <div className='circle2 bg-[#111]  w-50 h-50 lg:w-88 lg:h-88 md:w-70 md:h-70 rounded-full'>
      <svg className=''
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "100%", height: "auto" }}
  >
    {/* Head Wrap */}
    <path
      d="M70,60 Q90,40 110,60 Q115,70 110,80 Q90,90 70,80 Q65,70 70,60 Z"
      fill="#555"
    />

    {/* Face Wrap */}
    <path
      d="M70,80 Q90,95 110,80 Q115,85 110,90 Q90,100 70,90 Q65,85 70,80 Z"
      fill="#444"
    />

    {/* Neck and Shoulder Wrap */}
    <path
      d="M70,90 Q85,110 115,100 Q110,120 90,130 Q70,120 70,100 Z"
      fill="#333"
    />

    {/* Body Wrap */}
    <path
      d="M75,130 Q90,150 105,130 Q110,160 85,170 Q70,160 75,130 Z"
      fill="#222"
    />
  </svg>
      </div>
      </div>
    </div>
  )
}

export default Hero
