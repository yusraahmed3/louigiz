import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css'
import App from './App'
import Beauty from './pages/Beauty/Beauty';
import Skin from './pages/Skin/Skin';
import HomeDecor from './pages/HomeDecor/HomeDecor';
import Home from './pages/Home';




const router = createBrowserRouter([
  {
    path: '/louigiz/',
    element: <App/>,
    children: [
      {
        path: '/louigiz/',
        element: <Home/>
      },
      {
        path: '/louigiz/beauty',
        element: <Beauty/>
      },
      {
        path: '/louigiz/skin',
        element: <Skin/>
      },
      {
        path: '/louigiz/home',
        element: <HomeDecor/>
      }

    ] 
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
