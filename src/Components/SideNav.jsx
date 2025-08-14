import React, { useEffect, useRef, useState } from 'react'
import Dropdown from './Dropdown'

const SideNav = () => {
    const [recth, setrecth] = useState(null)
    const [left, setleft] = useState(0)
    const [itemData, setItemData] = useState(null)
    const [show, setshow] = useState(false)
    const [listnumber, setlistnumber] = useState(null)
    const sideBarRef = useRef(null)
    const itemRef = useRef(null)
    const child = useRef(null)

    useEffect(() => {
        const updateHeight = () => {
            if (sideBarRef.current && child.current) {
                const topOffset = child.current.getBoundingClientRect().top - sideBarRef.current.getBoundingClientRect().top;
                setrecth(topOffset);
                const data = itemRef.current.getBoundingClientRect();
                setItemData(data)
            }
        };

        updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => window.removeEventListener("resize", updateHeight);
    }, []);


    const items = ['List1', 'List2', "List3", "List4", "List5", "List6", "List7", "List8", "List9", "List10"]
    return (
        <div
            ref={sideBarRef}
            onMouseLeave={() => {
                setshow(false)
            }}

            className='relative h-screen px-8 py-10 text-[clamp(1rem,6vw,1rem)] 2xl:text-[clamp(1rem,6vw,2rem)]'>
            <div
                ref={child}

                className=''
            >
                {items.map((item, idx) => {
                    return (
                        <div
                            ref={itemRef}
                            key={item}
                            className='bg-emerald-600 w-40 hover:bg-orange-700 hover:scale-110 hover:animate-pulse'>
                            <div
                                onMouseEnter={() => {
                                    setshow(true)
                                    setlistnumber(idx)
                                }}
                                onMouseLeave={() => {
                                }}
                                className=' border-b-2 border-purple-900 w-full flex items-center justify-center font-BebasNeue py-3 '>{item} </div>
                        </div>
                    )
                })}
            </div>


            {show && <Dropdown data={itemData} top={recth} position={listnumber} />}


        </div>
    )
}

export default SideNav