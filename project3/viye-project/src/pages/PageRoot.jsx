import React from 'react'
import Navbar from "../conponents/Navbar"
import {Outlet} from "react-router-dom"
const PageRoot = () => {
  return (
    <>
    
    <Navbar/>
    <Outlet/>
    
    </>
  )
}

export default PageRoot
