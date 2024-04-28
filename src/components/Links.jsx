import React from "react"
import { Link } from "react-router-dom"
export default function Links() {
  return (
    <div className='flex items-center w-full'>
      <div className='w-full grid grid-flow-row md:grid-flow-col justify-center gap-5 text-center'>

        <Link to="/beauty"><div className='border border-[#855A3E] w-36 xl:w-44 rounded-lg p-3 font-custom2 hover:bg-[#855A3E] hover:border-[#855A3E] hover:text-[#FAF9F8] hover:cursor-pointer transform duration-200'>Beauty</div></Link>
        <Link to="/skin"> <div className='border border-[#855A3E] w-36 xl:w-44 rounded-lg p-3 font-custom2 hover:bg-[#855A3E] hover:border-[#855A3E] hover:text-[#FAF9F8] hover:cursor-pointer transform duration-200'>Skin Care</div></Link>
        <Link to="/home"><div className='border border-[#855A3E] w-36 xl:w-44 rounded-lg p-3 font-custom2 hover:bg-[#855A3E] hover:border-[#855A3E] hover:text-[#FAF9F8] hover:cursor-pointer transform duration-200'> Home Decor</div></Link>
      </div>

    </div>
  )
}
