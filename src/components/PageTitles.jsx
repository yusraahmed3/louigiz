import React from 'react'
import Navbar from './Navbar'
const PageTitles = () => {
    
    function renderCondition(){
        // if(window.location.pathname === "/beauty"){
        //     return 'Beauty Tips'
        // }else if (window.location.pathname === "/skin"){
        //     return 'Skin Care Tips'
        // } else if (window.location.pathname === "/nail"){
        //     return "Nail Art"
        // }else if (window.location.pathname === "/home"){
        //     return 'Home Decor'
        // }else {
        //     return 
        // }
        switch (window.location.pathname){
            case '/beauty' : return 'Beauty';
            case '/skin' : return 'Skin Care';
            case '/nail': return 'Nail Art';
            case '/home' : return 'Home Decor';
        }
    }

  return (
    
    <div className=''>
    <Navbar/>
    <div className="w-full bg-[#FAF9F8] py-7 md:py-14">
      <h1 className="text-center font-custom2 text-2xl font-bold tracking-widest text-[#855A3E] md:text-4xl">{renderCondition()}</h1>
    </div>
    </div>
  )
}

export default PageTitles