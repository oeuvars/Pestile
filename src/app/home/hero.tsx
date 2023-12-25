import React from 'react'
import Marquee from "react-fast-marquee";

const Hero: React.FC = () => {
  return (
    <div>
      <p className='text-[#FF878C] font-dynalight text-3xl text-center mt-[10vw]'>Jump into a new time</p>
      <div className='mt-[2.5vw]'>
        <p className='font-gambarino text-7xl text-black text-center'>Meet the new</p>
        <br />
        <p className='font-gambarino text-7xl text-black text-center'>standard in travel</p>
      </div>
      <div className='text-lg text-[#80796B] text-center mt-[2.5vw]'>
        From booking your flights and accommodations to finding local experts and
        <br />
        handling the logistics, your journey is covered from start to finish.
      </div>
      <button className='flex bg-[#F99052] mx-auto px-7 py-2 gap-2 rounded-[9px] shadow-sm hover:shadow-[#FF878C]/40 hover:shadow-xl animation font-satoshi-medium mt-[2.5vw]'>
        <p className='font-satoshi-medium font text-white my-auto text-lg'>Start for free</p>
        <img src='icons/plane.svg' className='w-7 h-7'/>
      </button>
      <hr className='mt-[2.5vw] w-[2%] mx-auto border-neutral-300'/>
      <Marquee play={true} gradient gradientColor={[251, 246, 234]} className='my-[2.5vw]'>
        <img src='logos/grab.svg' alt='grab' className='w-20 h-20 mx-10'/>
        <img src='logos/petronas.svg' alt='grab' className='w-20 h-20 mx-10'/>
        <img src='logos/air-berlin.svg' alt='grab' className='w-20 h-20 mx-10'/>
        <img src='logos/air-canada.svg' alt='grab' className='w-20 h-20 mx-10'/>
        <img src='logos/picco.svg' alt='grab' className='w-20 h-20 mx-10'/>
        <img src='logos/italeri.svg' alt='grab' className='w-20 h-20 mx-10'/>
        <img src='logos/breguet.svg' alt='grab' className='w-20 h-20 mx-10'/>
        <img src='logos/air-jamaica.svg' alt='grab' className='w-20 h-20 mx-10'/>
        <img src='logos/shell.svg' alt='grab' className='w-20 h-20 mx-10'/>
        <img src='logos/motul.svg' alt='grab' className='w-20 h-20 mx-10'/>
        <img src='logos/verizon.svg' alt='grab' className='w-20 h-20 mx-10'/>
      </Marquee>
      <img src='images/hero/airport-terminal.webp' alt='terminal' className='h-[32vw] mx-auto my-[5vw]'/>
    </div>
  )
}

export default Hero
