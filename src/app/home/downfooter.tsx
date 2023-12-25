import Link from 'next/link'
import React from 'react'

const DownFooter = () => {
  return (
    <div>
      <div className='flex gap-[1vw] justify-center'>
         <img src='icons/twitter.svg' alt='twitter' className='w-6 h-6 my-auto'/>
         <img src='icons/instagram.svg' alt='instagram' className='w-6 h-6 my-auto'/>
         <img src='icons/linkedin.svg' alt='linkedin' className='w-6 h-6 my-auto'/>
      </div>
      <div className='font-satoshi-medium text-lg text-[#80796B] flex justify-center mt-[1vw] gap-[2vw]'>
         <Link href="/">Terms & Condition</Link>
         <Link href="/">Privacy Policy</Link>
         <Link href="/">Contact</Link>
         <Link href="/">About Us</Link>
      </div>
      <div className='flex w-full justify-between px-[5vw] my-[2vw]'>
         <p className='font-satoshi-regular text-lg text-[#80796B]'>© 2023 PastelStartup all rights reserved</p>
         <p className='font-satoshi-regular text-lg text-[#80796B]'>Designed by oeuavrs</p>
      </div>
    </div>
  )
}

export default DownFooter
