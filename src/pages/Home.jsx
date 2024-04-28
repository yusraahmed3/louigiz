import React from 'react'
import Links from '../components/Links'
import Logo from '../components/Logo'
import Background from '../assets/images/background.png'

function Home() {
  return (
    <div className="w-full h-full flex lg:items-center p-10">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between md:justify-evenly lg:justify-between">
      <Logo/>
      <Links/>
      </div>
    </div>
  )
}

export default Home