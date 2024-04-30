import React from 'react'
import Links from '../components/Links'
import Logo from '../components/Logo'
import Background from '../assets/images/background.png'

function Home() {
  return (
    <div className="flex h-full w-full p-20 lg:items-center lg:p-10">
      <div className="flex w-full flex-col items-center justify-between md:justify-evenly lg:flex-row lg:justify-between">
      <Logo/>
      <Links/>
      </div>
    </div>
  )
}

export default Home