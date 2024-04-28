import {HashRouter as Router , Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Nail from "./pages/Nail";
import Beauty from "./pages/Beauty/Beauty";
import HomeDecor from "./pages/HomeDecor/HomeDecor";
import Skin from "./pages/Skin/Skin";

function App() {
  return (
    <div className="h-screen w-full bg-[#FAF9F8]">
      <Home/>
      {/* <Router basename="/louigiz/">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/nail" element={<Nail/>}/>
        <Route path="/beauty" element={<Beauty/>}/>
        <Route path="/home" element={<HomeDecor/>}/>
        <Route path="/skin" element={<Skin/>}/>
      </Routes>
      </Router> */}
      </div>

  )
}

export default App

