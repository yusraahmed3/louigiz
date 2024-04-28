import React from "react"
import PageTitles from "../../components/PageTitles"
import homeList from "./index"
import ImageBox from "../../components/ImageBox"
import PageCss from "../../components/PagesCss"

function HomeDecor() {
  return (
    <div className="h-screen overflow-scroll">
    <PageTitles/>
    <div className={PageCss}>
      {homeList.map((image) => (<ImageBox image={image.src} alt={image.alt} key={image.id} title={image.title} link={image.link}/>))}
      
    </div>
    </div>
  )
}

export default HomeDecor