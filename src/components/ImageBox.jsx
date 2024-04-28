import React from 'react'

const ImageBox = ({image, alt, key, title, link}) => {
  return (
    <div className='flex flex-col justify-center'>
    <div className='h-32 w-32 overflow-hidden rounded-sm border border-[#855A3E] bg-white hover:cursor-pointer 2xl:h-48 2xl:w-48'>
        <a href={link}><img key={key} src={image} alt={alt} className='h-full w-full object-contain'/></a>
       
    </div>
    <p className='w-32 truncate pt-2 text-[10px] md:text-xs 2xl:w-48'>{title}</p>

    </div>
  )
}

export default ImageBox