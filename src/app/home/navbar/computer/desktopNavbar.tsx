import Link from 'next/link'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const DesktopNavbar: React.FC = () => {
  return (
    <div className='grid grid-cols-3 justify-between px-[4vw] mx-auto py-4 backdrop-blur-md border-b-2 border-[#F1ECE0] fixed top-0 w-full'>
      <Link href="/">
         <img src='/icons/pestile.svg' alt="logo" className='w-40 hover:upper-card-shadow cursor-pointer'/>
      </Link>
      <div className='flex mx-auto gap-10 text-[#1E1B13]'>
         <AnchorLink href="#features" className='my-auto font-satoshi-medium text-lg text-neutral-800 underline-animation'>Features</AnchorLink>
         <AnchorLink href="#pricing" className='my-auto font-satoshi-medium text-lg text-neutral-800 underline-animation'>Pricing</AnchorLink>
         <AnchorLink href="#faq" className='my-auto font-satoshi-medium text-lg text-neutral-800 underline-animation'>FAQs</AnchorLink>
         <Link href="/blogs" className='my-auto font-satoshi-medium text-lg text-neutral-800 underline-animation'>Blog</Link>
      </div>
      <div className='flex ml-auto gap-4'>
         <Link href="/auth/login" className='py-2 px-7 bg-[#FFFAF1] rounded-[9px] shadow-sm border border-gray-100 hover:shadow-[#FF878C]/40 hover:shadow-xl animation font-satoshi-medium text-neutral-800 text-lg'>
            Login
         </Link>
         <Link href="/auth/register" className='flex bg-[#F99052] mx-auto px-7 py-2 gap-2 rounded-[9px] shadow-sm hover:shadow-[#FF878C]/40 hover:shadow-xl animation font-satoshi-medium'>
            <p className='font-satoshi-medium font text-white my-auto text-lg'>Get Started</p>
            <img src='/icons/plane.svg' className='w-7 h-7'/>
         </Link>
      </div>
    </div>
  )
}

export default DesktopNavbar
