import React from 'react'

const Para = () => {
    return (
        // <div className="text-black  px-8 font text-[clamp(1rem,2.4vw,2.5rem)] bg-red-900 break-words">
        //     This paragraph can resize its text size based on the screen size. I have used very little code to do
        //     this by using <code>clamp()</code>, which is a CSS property. <code>auto-fit</code> and <code>auto-fill</code> in CSS are also very helpful in developing responsive websites.
        // </div>


        <div className=' overflow-hidden leading-[clamp(2rem,calc(1rem+3.5vw),1.5rem)]  text-black text-[clamp(1rem,6vw,1.5rem)] 2xl:text-[clamp(1rem,6vw,4rem)] 2xl:leading-[5rem] px-10 py-8 font-BebasNeue '>
            Lorem ipsum, dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum repudiandae commodi aut molestias fugit, blanditiis explicabo sunt necessitatibus? Sunt aperiam atque sed est, officia vitae dolorum temporibus cupiditate cumque in? consectetur adipisicing elit. Error, magnam possimus. Excepturi, quasi ipsum nisi sint saepe eum similique reprehenderit sit? Voluptatem assumenda at in cumque dignissimos incidunt earum sapiente.
        </div>


    )
}

export default Para