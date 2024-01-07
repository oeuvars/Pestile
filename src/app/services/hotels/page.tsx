"use client"

import React from 'react'
import Navbar from '../navbar/navbar'
import BottomBar from '../bottombar/bottombar'
import { motion } from 'framer-motion'

const page: React.FC = () => {
  const variants = {
    hidden: { opacity: 0, x: 150, y: 0 },
    enter: { opacity: 1, x: 0, y: 0},
    exit: {opacity: 0, x: 150, y: 0}
  };
  return (
    <div>
      <Navbar />
      <div className='relative'>
         <img src='/images/services/background.webp' alt='' className='mt-[5vw] fixed -z-10 opacity-80'/>
         <img src='/images/services/clouds.webp' alt='' className='bottom-0 fixed opacity-70'/>
      </div>
      <motion.div variants={variants} initial="hidden" animate="enter" transition={{ type: "spring", stiffness: 100 }} className='mt-[10vw] z-10'>
        <p className='font-dynalight text-center text-3xl text-[#FF878C]'>Hey,</p>
        <h1 className='font-gambarino text-7xl text-center mt-[1.5vw] text-[#1E1B13] leading-none'>Book your hotels<br />with Pestile</h1>
        <p className='font-satoshi-regular absolute text-center text-[#80796B] phone:text-base md:text-xl my-[2vw] leading-tight phone:w-[90%] md:w-[100%]'>
          Get assured discounts and complementary breakfast
          <br />
          with adventurer and nomad plans
        </p>
      </motion.div>
      <div className='z-40 backdrop-blur-md bg-white/30'>

      </div>
      <BottomBar />
    </div>
  )
}

export default page
