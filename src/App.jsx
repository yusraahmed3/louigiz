import {HashRouter as Router , Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Nail from "./pages/Nail";
import Beauty from "./pages/Beauty/Beauty";
import HomeDecor from "./pages/HomeDecor/HomeDecor";
import Skin from "./pages/Skin/Skin";

function App() {
  return (
    <div className="h-screen w-full bg-[#FAF9F8]">
      
      <Router basename={import.meta.env.DEV ? '/' : '/louigiz/'}>
      <Routes>
        <Route exact path="/louigiz" element={<Home/>}/>
        <Route path="/louigiz/nail" element={<Nail/>}/>
        <Route path="/louigiz/beauty" element={<Beauty/>}/>
        <Route path="/louigiz/home" element={<HomeDecor/>}/>
        <Route path="/louigiz/skin" element={<Skin/>}/>
      </Routes>
      </Router>
      </div>

  )
}

export default App

