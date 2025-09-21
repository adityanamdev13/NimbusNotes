import React from 'react'
import{Outlet} from "react-router-dom";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Toaster } from 'react-hot-toast';


const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Toaster />
      <Outlet />
      <Footer/>
    </>
  )
}

export default MainLayout
