import React from 'react'
import style from './Layout.module.css'
import Navbaro from '../Navbar/Navbaro'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <>
     <Navbaro/>
     <Outlet/>
     <Footer/>
      
    </>
  )
}
