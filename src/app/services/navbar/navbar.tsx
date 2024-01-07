"use client"

import useMediaQuery from '@/hooks/useMediaQuery';
import DesktopNavbar from './computer/desktopNavbar';
import React from 'react'
import MobileNavbar from './mobile/mobileNavbar';

const Navbar: React.FC = () => {
   const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  return (
    <>
      {isAboveSmallScreens ? (
         <DesktopNavbar />
      ) : (
         <MobileNavbar />
      )}
    </>
  )
}

export default Navbar
