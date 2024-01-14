import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import OurTeam from './components/SharedPage/OurTeam/OurTeam';
import Photo from './components/SharedPage/Photo/Photo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {path: 'ourTeam', element: <OurTeam></OurTeam>},
      
      {path:'photo',element: <Photo></Photo>}
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
  
    <RouterProvider router={router} />
 
   
  </React.StrictMode>,
)
