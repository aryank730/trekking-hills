import React from 'react'
import { NavLink, Outlet } from "react-router-dom";
import '../Home_Page/Trackroot.css'
import cleanenv from '../../images/Clean_env.jpg'

function Trackroot() {
    return (
        <>
            <div style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.5718662464985995) 0%, rgba(193,193,193,1)31%)', }}
             className='tab-buttoz track-head sticky top-18 md:top-20 sm:top-18 z-10 flex gap-1 m-4 text-[12px] md:text-[14px] lg:text-[17px] '>
                <NavLink
                    to="/Nagtibba"
                    className={({ isActive }) =>
                        `nav-btn inline-block mx-1 rounded-lg p-2 m-1 text-[13px] md:text-[15px] font-medium text-gray-900 transition-all duration-200 ${isActive ? 'bg-white' : ''}`
                    }
                    aria-current="page"
                >
                    Nag-Tibba Trek
                </NavLink>

                <NavLink
                    to="/Kedarnath"
                    className={({ isActive }) =>
                        `nav-btn inline-block rounded-lg px-2 py-1 text-[13px] md:text-[15px] font-medium text-gray-900 transition-all duration-200 ${isActive ? 'bg-white' : ''}`
                    }
                    aria-current="page"
                >
                    Kedarkantha Trek
                </NavLink>

                <NavLink
                    to="/Chopta"
                    className={({ isActive }) =>
                        `nav-btn inline-block rounded-lg px-2 py-1 text-[13px] md:text-[15px] font-medium text-gray-900 transition-all duration-200 ${isActive ? 'bg-white' : ''}`
                    }
                    aria-current="page"
                >
                    Chopta Trek
                </NavLink>


            </div>

            <Outlet />




            {/* clean Env goes here  */}


            <div className="container  mx-auto flex justify-around px-5  md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Let the mountains restore your soul
                    </h1>
                    <p className="mb-8 leading-relaxed">The purest form of adventure is where the silence speaks louder than any city noise.</p>

                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src={cleanenv}
                    />
                </div>
            </div>



        </>
    )
}

export default Trackroot