import React from 'react'
import { Link } from 'react-router-dom'
import Typed from 'typed.js';

const Footer = () => {

    const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i >MERN DEVELOPER !!</i>', 'WEB DESIGNER !!'],
      typeSpeed: 30,
      backSpeed: 20, 
      loop: true, 
    });

    return () => {

      typed.destroy();
    };
  }, []);
    return (
        <div className='absolute bottom-0 w-full  px-2 md:px-10 pb-2'>
            <div className='flex items-center justify-between'>
                <div>
                    <h2 ref={el} className='text-xl h-0 font-semibold tracking-tight'></h2>
                    <h2 className='text-md text-gray-400'>From <span className='text-[#ff003d] text-lg'>IN</span></h2>
                </div>
                <div className='w-1/2 h-full  flex items-center justify-center gap-3 md:gap-10 lg:gap-20'>
                    <Link to="https://github.com/ikeshav26">
                        <svg className='w-7 h-7 md:h-9 md:w-9' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" >
                            <g fill="#ff003d">
                                <path d="M15 0c-8.3 0-15 6.7-15 15 0 6.6 4.3 12.2 10.3 14.2.8.1 1.1-.3 1.1-1.1v-3.5c-4.1.9-5-1.9-5-1.9-.7-1.8-1.7-2.3-1.7-2.3-1.4-.9 0-.9 0-.9 1.6 0 2.4 1.6 2.4 1.6 1.4 2.3 3.7 1.6 4.6 1.2.1-.9.5-1.6.9-1.9-3.5-.4-7.2-1.8-7.2-8 0-1.8.6-3.2 1.6-4.3-.2-.4-.7-2.3.1-4.8 0 0 1.3-.4 4.3 1.6C11 7.7 12.5 7.5 14 7.5c1.5 0 2.9.2 4.2.6 3-.2 4.3-1.6 4.3-1.6.8 2.5.3 4.4.1 4.8 1 1.1 1.6 2.5 1.6 4.3 0 6.3-3.7 7.7-7.2 8 .4.3.9.9.9 1.8v3.4c0 .8.3 1.2 1.1 1.1C25.7 27.2 30 21.6 30 15 30 6.7 23.3 0 15 0z" />
                            </g>
                            <g fill="#ff003d">
                                <circle cx="15" cy="5" r="1" />
                            </g>
                        </svg>
                    </Link>
                    <Link to="https://www.instagram.com/keshav_gilhotra_">
                        <svg className='w-7 h-7 md:h-9 md:w-9' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" >
                            <g fill="#fff">
                                <path d="M32 0C14.33 0 0 14.33 0 32s14.33 32 32 32 32-14.33 32-32S49.67 0 32 0zM32 58C15.43 58 6 48.57 6 32S15.43 6 32 6s26 9.43 26 26-9.43 26-26 26z" />
                                <path d="M32 15C22.95 15 16 21.95 16 32s6.95 17 16 17 16-6.95 16-17-6.95-17-16-17zM32 45c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z" />
                                <circle cx="39" cy="29" r="3.5" />
                            </g>
                        </svg>
                    </Link>
                    <Link to="">
                        <svg className='w-7 h-7 md:h-9 md:w-9' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                            <path fill="#ff003d" d="M23.954 4.569c-.885.392-1.83.656-2.825.775 
    1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 
    1.184-.897-.959-2.178-1.555-3.594-1.555-2.723 
    0-4.928 2.204-4.928 4.928 0 .39.045.765.127 
    1.124-4.094-.205-7.725-2.165-10.148-5.144-.424.729-.666 
    1.577-.666 2.475 0 1.708.87 3.213 2.188 
    4.096-.807-.026-1.566-.247-2.229-.616v.061c0 
    2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 
    0-.615-.03-.916-.086.631 1.953 2.445 3.377 
    4.6 3.419-1.68 1.318-3.809 2.105-6.102 
    2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 
    2.209 7.557 2.209 9.054 0 14-7.496 
    14-13.986 0-.21 0-.42-.015-.63.961-.689 
    1.8-1.56 2.46-2.548l-.047-.02z"/>
                        </svg>
                    </Link>
                    <Link >
                        <svg className='w-7 h-7 md:h-9 md:w-9' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" >
                            <path fill="#ffffff" d="M100.28 448H7.4V148.9h92.88zm-46.44-340C24.5 108 0 83.5 0 53.5S24.5-1 53.84-1s53.84 24.5 53.84 54.5S83.2 108 53.84 108zM447.9 448h-92.4V302.4c0-34.7-12.5-58.4-43.6-58.4-23.8 0-38 16-44.3 31.4-2.3 5.5-2.8 13.2-2.8 20.9V448h-92.4s1.2-264.9 0-292.1h92.4v41.4c12.3-19 34.3-46 83.5-46 60.9 0 106.6 39.8 106.6 125.3V448z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer