import React from 'react'
import Hero from './Home_Page/Hero'
import Trackroot from './Home_Page/Trackroot'
import Blog from './Home_Page/Blog';
import Blog_detail from './Blog/Blog_detail';
import close from '../icon/close.png'

function Home() {


  return (
    <>
      <Hero />
      <div className='m-4'>
        <Trackroot />
      </div>

      {/* <div className='glass-effe  sticky z-10 bottom-0 '>
        <div className='h-[80%] w-full m-auto md:w-[60%] lg- rounded-t-4xl  bg-amber-400'>
          <Blog_detail className='overflow-scroll' />
          <img className='absolute top-4 w-8 right-100 ' src={close} />
        </div>

      </div> */}

      <hr className='w-[80%] m-auto opacity-30' />

      <Blog />

      <hr className='w-[80%] m-auto opacity-30' />
      
    </>
  )
}



export default Home