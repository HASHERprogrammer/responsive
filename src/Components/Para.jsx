import React from 'react'

const Para = () => {
    return (
        // <div className="text-black  px-8 font text-[clamp(1rem,2.4vw,2.5rem)] bg-red-900 break-words">
        //     This paragraph can resize its text size based on the screen size. I have used very little code to do
        //     this by using <code>clamp()</code>, which is a CSS property. <code>auto-fit</code> and <code>auto-fill</code> in CSS are also very helpful in developing responsive websites.
        // </div>


        <div className=' overflow-hidden leading-[clamp(2rem,calc(1rem+3.5vw),1.5rem)]  text-black text-[clamp(1rem,6vw,1.5rem)] 2xl:text-[clamp(1rem,6vw,4rem)] 2xl:leading-[5rem] px-10 py-8 font-BebasNeue '>
            Modern responsive web pages leverage the latest CSS features such as CSS Grid and Flexbox for dynamic layouts, <code>clamp()</code> for fluid typography, and <code>min(), max(),</code> and aspect-ratio for precise sizing control. Tools like CSS custom properties enhance maintainability, while media queries and container queries enable component-level responsiveness. Visual enhancements such as <code>backdrop-filter, mix-blend-mode, </code>and <code>conic-gradient()</code> create smooth, immersive effects without heavy images, ensuring the design adapts seamlessly from mobile to ultra-wide displays.
        </div>


    )
}

export default Para