import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
const Navbar = () => {
    const [toggle, settoggle] = useState(false)
    
    return (
        <nav className='fixed top-0 bg-zinc-900 w-screen h-16 2xl:h-28 flex items-center text-[clamp(2rem, .9rem+5vw , 5rem)] 2xl:text-3xl'>
            <div className='flex items-center justify-between w-[95%] mx-auto'>
                <div className="logo">
                    <span className='font-playWrite'>LOGO</span>
                </div>
                
                <div className="hidden md:flex items-center list-none gap-[clamp(2rem,calc(1rem+6vw),3rem)]">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Services</li>
                </div>
                
                <div className="md:hidden">
                    <button 
                        className='text-white focus:outline-none' 
                        onClick={() => settoggle(prev => !prev)}
                    >
                        {toggle ? <div className='font-playWrite'>X</div> : <FiMenu />}
                    </button>
                    
                    {toggle && (
                        <div className="items-center font-playWrite flex flex-col bg-transparent backdrop-blur-2xl font-[100] absolute top-16 left-0 w-full list-none gap-2.5">
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Services</li>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
