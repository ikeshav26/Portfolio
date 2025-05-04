import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='absolute right-0 top-0 overflow-hidden'>
            <div className='bg-transparent h-screen'>
                <ul className="menu min-h-full w-23 md:w-36 p-4 flex flex-col items-center justify-center gap-40 md:gap-30 pt-20">
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive
                                    ? 'rotate-90 text-white font-semibold text-lg md:text-xl border-b-2 '
                                    : 'rotate-90 text-white font-semibold text-lg md:text-xl'
                            }
                        >
                            ABOUT
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) =>
                                isActive
                                    ? 'rotate-90 text-white font-semibold text-lg md:text-xl border-b-2'
                                    : 'rotate-90 text-white font-semibold text-lg md:text-xl'
                            }
                        >
                            PROJECTS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive
                                    ? 'rotate-90 text-white font-semibold text-lg md:text-xl border-b-2'
                                    : 'rotate-90 text-white font-semibold text-lg md:text-xl'
                            }
                        >
                            CONTACT
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
