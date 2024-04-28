import React from "react"
import PageTitles from "../../components/PageTitles"
import ImageBox from "../../components/ImageBox"
import beautyList from "./index"
import PagesCss from "../../components/PagesCss"

function Beauty() {
  return (
    <div className="h-screen overflow-scroll">
    <PageTitles/>
    <div className={PagesCss}>
      {beautyList.map((image) => (<ImageBox image={image.src} alt={image.alt} key={image.id} title={image.title} link={image.link}/>))}
      
    </div>
    </div>
  )
}

export default Beauty