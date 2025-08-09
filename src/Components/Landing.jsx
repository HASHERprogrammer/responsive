import React from 'react'

const Landing = () => {
  return (
    <div className='mt-16 2xl:mt-28 font-BebasNeue text-black h-screen  '>

      <div className=' h-full grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] '>
        <div className=' text-[clamp(3rem,6vw,8rem)] 2xl:text-[11rem] 2xl:leading-[11rem] leading-[clamp(2rem,calc(2rem+3vw),9rem)]  px-6 py-8 2xl:py-16'>
          <div className='font-playWrite text-[clamp(1rem,6vw,1.8rem)] 2xl:text-[5rem]'>
            Text that implies Font
          </div>
          <div> A simple showcase of layouts that <span className='outlined-text '>adapts</span> <span className='outlined-text'>seamlessly</span> to any device <span className='outlined-text'>!</span>
          </div>
        </div>

        <div>
          <img src="https://media.istockphoto.com/id/2149186896/vector/girl-working-on-laptop-vector-illustration-working-from-home-and-freelance-concept.jpg?s=612x612&w=0&k=20&c=JD3Lc9oJaBtF4loCBhfq_xitz8rQyJCN1u7xSQDyrtw=" alt="" className='object-cover w-full' />
        </div>
      </div>

    </div>
  )
}

export default Landing