import React from 'react'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import LayOut from './Components/LayOut/LayOut'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Portofolio from './Components/Portofolio/Portofolio'
import Home from './Components/Home/Home'

let routes= createHashRouter([
{path:'',element:<LayOut/>, children:[
  {index:'true' , element:<Home/>},
  {path:'About' , element:<About/>},
  {path:'Contact' , element:<Contact/>},
  {path:'Portofolio' , element:<Portofolio/>}
]}

])

function App() {
  return (
    <RouterProvider router={routes} ></RouterProvider>
  )
}

export default App