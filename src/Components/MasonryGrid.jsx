import React from 'react'

const MasonryGrid = () => {
    return (
        <div>

            <div className=' flex items-center justify-center'>
                <h1 className='leading-[clamp(2rem,calc(1rem+3.5vw),1.5rem)]  text-black text-[clamp(1rem,6vw,1.5rem)] 2xl:text-[clamp(1rem,6vw,4rem)] 2xl:leading-[5rem] px-10 py-8 font-playWrite '>MASUNRY GRID </h1>

            </div>
            <div className='flex items-center justify-center'>



                <div className="container columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-2 [&>*]:mb-1 [&>*]:rounded-md [&>*]:bg-green-600 ">
                    <img src="https://images.unsplash.com/photo-1519817650390-64a93db51149?w=500&auto=format&fit=crop&q=60" alt="" />
                    <img src="https://plus.unsplash.com/premium_photo-1676208755408-be55232d52ac?w=500&auto=format&fit=crop&q=60" alt="" />
                    <img src="https://images.unsplash.com/photo-1513072064285-240f87fa81e8?w=500&auto=format&fit=crop&q=60" alt="" />
                    <img src="https://images.unsplash.com/photo-1600814832809-579119f47045?w=500&auto=format&fit=crop&q=60" alt="" />
                    <img src="https://images.unsplash.com/photo-1551041777-ed277b8dd348?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGlzbGFtfGVufDB8fDB8fHww" alt="" />
                    <img src="https://images.unsplash.com/photo-1596163177973-aa0e47c735dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGlzbGFtfGVufDB8fDB8fHww" alt="" />
                    <img src="https://plus.unsplash.com/premium_photo-1677230986567-806de95c3d05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGlzbGFtfGVufDB8fDB8fHww" alt="" />
                    <img src="https://plus.unsplash.com/premium_photo-1677355499737-040e306c2a0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGlzbGFtfGVufDB8fDB8fHww" alt="" />
                    <img src="https://images.unsplash.com/photo-1487800940032-1cf211187aea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGlzbGFtfGVufDB8fDB8fHww" alt="" />
                </div>


            </div>
        </div>
    )
}

export default MasonryGrid