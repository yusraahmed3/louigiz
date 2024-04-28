import React from "react"
import PageTitles from "../../components/PageTitles"
import skinList from "./index"
import ImageBox from "../../components/ImageBox"
import PagesCss from "../../components/PagesCss"

function Skin() {
  return (
    <div className="h-screen overflow-scroll">
    <PageTitles/>
    <div className={PagesCss}>
      {skinList.map((image) => (<ImageBox image={image.src} alt={image.alt} key={image.id} title={image.title} link={image.link}/>))}
      
    </div>
    </div>
  )
}

export default Skin