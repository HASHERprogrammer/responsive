import React from 'react'

const Dropdown = ({ data, top, position }) => {
    return (
        <div
            className={` h-[40vh]  absolute`}
            style={{ top: `${top + (data?.height * position )}px`, left: `${(data?.right)}px` }}
        >
            {['hey1', 'hey,2', 'hey3','hey1', 'hey,2', 'hey3'].map((item,idx) => {
                return (
                    <div
                        key={idx}
                        className='bg-emerald-600 sm:w-44 w-28 hover:bg-orange-700 hover:scale-110 hover:animate-pulse'>
                        <div className=' border-b-2 border-purple-900 w-full flex items-center justify-center font-BebasNeue sm:py-3 '>{item} </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Dropdown