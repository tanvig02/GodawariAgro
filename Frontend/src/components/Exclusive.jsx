import React from 'react'
import exclu1 from "../../public/images/exclu1.webp"
import exclu2 from "../../public/images/exclu2.webp"
import exclu3 from "../../public/images/exclu3.webp"
import exclu4 from "../../public/images/exclu4.webp"

const Exclusive = () => {
  return (
    <div className=' h-fit mx-20 my-10 hidden lg:block'>
        <div className='text-4xl font-extrabold text-green-500 font-mono'>
            <h1>Exclusive</h1>
        </div>
        <div className='flex justify-center m-[20px] space-x-4'>
            <img src={exclu1} className='' alt="" />
            <img src={exclu2} className='' alt="" />
            <img src={exclu3} className='' alt="" />
            <img src={exclu4} className='' alt="" />
        </div>
    </div>
  )
}

export default Exclusive