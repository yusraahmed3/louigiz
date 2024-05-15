import React from "react"
import { Link } from "react-router-dom"
export default function Links() {
  return (
    <div className='flex w-full items-center'>
      <div className='grid w-full grid-flow-row justify-center gap-5 text-center md:grid-flow-col'>

        <Link to="/beauty"><div className='w-36 transform rounded-lg border border-[#855A3E] p-3 font-custom2 text-xl duration-200 hover:cursor-pointer hover:border-[#855A3E] hover:bg-[#855A3E] hover:text-[#FAF9F8] xl:w-48 3xl:w-52 3xl:text-2xl'>Beauty</div></Link>
        <Link to="/skin"> <div className='w-36 transform rounded-lg border border-[#855A3E] p-3 font-custom2 text-xl duration-200 hover:cursor-pointer hover:border-[#855A3E] hover:bg-[#855A3E] hover:text-[#FAF9F8] xl:w-48 3xl:w-52 3xl:text-2xl'>Skin Care</div></Link>
        <Link to="/home"><div className='w-36 transform rounded-lg border border-[#855A3E] p-3 font-custom2 text-xl duration-200 hover:cursor-pointer hover:border-[#855A3E] hover:bg-[#855A3E] hover:text-[#FAF9F8] xl:w-48 3xl:w-52 3xl:text-2xl'> Home Decor</div></Link>
      </div>

    </div>
  )
}
