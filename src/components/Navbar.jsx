import React from 'react'

const Navbar = () => {
    return (
        <div className='md:px-10'>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">
                        <div className='flex items-center md:gap-2'>
                            <div className=''>
                                <svg 
                                    width="70"
                                    height="70"
                                    viewBox="0 0 120 120"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle
                                        cx="60"
                                        cy="60"
                                        r="45"
                                        stroke="white"
                                        strokeWidth="6"
                                        fill="none" />
                                    <rect
                                        x="55"
                                        y="10"
                                        width="10"
                                        height="100"
                                        transform="rotate(-45 60 60)"
                                        fill="black" />
                                    <text
                                        x="50%"
                                        y="65%"
                                        textAnchor="middle"
                                        fontFamily="Arial Black, sans-serif"
                                        fontSize="48"
                                        fill="white">
                                        K
                                    </text>
                                </svg>
                            </div>
                            <div>
                                <h1 className='text-[#FF003D] font-bold md:text-2xl'>KRYPTON</h1>
                            </div>
                        </div></a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li className='flex flex-col items-end text-[#ff003d] tracking-tighter '>
                            <h1 className='font-semibold text-xl md:text-2xl leading-none'>KESHAV</h1>
                            <h1 className='font-bold text-2xl md:text-3xl leading-none'>GILHOTRA</h1>
                            </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
