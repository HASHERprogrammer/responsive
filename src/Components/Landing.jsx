import React from 'react'

const Landing = () => {
  return (
    <div className='mt-16 2xl:mt-28 font-BebasNeue text-black    '>


      <div className=' grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] '>
        <div className='relative z-10 text-[clamp(2.5rem,calc(2rem+3vw),8rem)] 2xl:text-[11rem] 2xl:leading-[9rem] leading-[clamp(2rem,calc(1.7rem+3.5vw),8rem)]  px-6 pt-5 2xl:pt-25 '>
          {/* <div className='absolute hidden xl:block bg-orange-400 w-[38rem] h-[15vmax] blur animate1 z-0 left-[-60vw] bottom-0 '></div>
          <div className='absolute hidden md:block bg-orange-400 w-[38rem] h-[15vmax] blur animate-pulse left-[-60vw] bottom-0 '></div> */}
          <div className='font-playWrite text-[clamp(1rem,6vw,1.8rem)] 2xl:text-[5rem] z-10'>
            Text that implies Font
          </div>
          <div className='z-[999]'> A simple showcase of layouts that <span className='outlined-text '>adapts</span> <span className='outlined-text'>seamlessly</span> to any device <span className='outlined-text'>!</span>
          </div>
        </div>

        <div className=' w-full max-h-screen'>
          <img src="https://media.istockphoto.com/id/2149186896/vector/girl-working-on-laptop-vector-illustration-working-from-home-and-freelance-concept.jpg?s=612x612&w=0&k=20&c=JD3Lc9oJaBtF4loCBhfq_xitz8rQyJCN1u7xSQDyrtw=" alt=""
            className='w-full h-full object-cover' />
        </div>
      </div>

    </div>
  )
}

export default Landing