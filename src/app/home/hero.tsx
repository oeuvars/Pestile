import React from 'react'
import Marquee from "react-fast-marquee";

const Hero: React.FC = () => {
  return (
    <div>
      <p className='text-[#FF878C] font-dynalight phone:text-2xl lg:text-3xl text-center phone:mt-[15vh] tablet:mt-[10vw]'>Jump into a new time</p>
      <div className='phone:mt-[1vh] tablet:mt-[2.5vw]'>
        <p className='font-gambarino phone:text-4xl lg:text-7xl text-[#1E1B13] text-center'>Meet the new</p>
        <p className='font-gambarino phone:text-4xl lg:text-7xl text-[#1E1B13] text-center'>standard in travel</p>
      </div>
      <div className='phone:w-[90%] lg:w-full mx-auto phone:text-base tablet:text-xl text-[#80796B] text-center phone:mt-[4vh] tablet:mt-[2.5vw] font-satoshi-regular leading-tight'>
        From booking your flights and accommodations to finding local experts and

        handling the logistics, your journey is covered from start to finish.
      </div>
      <button className='flex bg-[#F99052] mx-auto px-7 py-2 gap-2 rounded-[9px] shadow-sm hover:shadow-[#FF878C]/40 hover:shadow-xl animation font-satoshi-medium mt-[2.5vw]'>
        <p className='font-satoshi-medium font text-white my-auto text-lg'>Start for free</p>
        <img src='icons/plane.svg' className='w-7 h-7'/>
      </button>
      <hr className='phone:mt-[2.5vh] md:mt-[2.5vw] phone:w-[10%] md:w-[2%] mx-auto border-neutral-300'/>
      <Marquee play={true} gradient gradientColor={[251, 246, 234]} className='phone:my-[5vh] md:my-[2.5vw] -z-10'>
        <img src='logos/grab.svg' alt='grab' className='phone:w-10 md:w-20 phone:h-10 md:h-20 phone:mx-3 md:mx-10'/>
        <img src='logos/petronas.svg' alt='grab' className='phone:w-10 md:w-20 phone:h-10 md:h-20 phone:mx-3 md:mx-10'/>
        <img src='logos/air-berlin.svg' alt='grab' className='phone:w-10 md:w-20 phone:h-10 md:h-20 phone:mx-3 md:mx-10'/>
        <img src='logos/air-canada.svg' alt='grab' className='phone:w-10 md:w-20 phone:h-10 md:h-20 phone:mx-3 md:mx-10'/>
        <img src='logos/picco.svg' alt='grab' className='phone:w-10 md:w-20 phone:h-10 md:h-20 phone:mx-3 md:mx-10'/>
        <img src='logos/italeri.svg' alt='grab' className='phone:w-10 md:w-20 phone:h-10 md:h-20 phone:mx-3 md:mx-10'/>
        <img src='logos/breguet.svg' alt='grab' className='phone:w-10 md:w-20 phone:h-10 md:h-20 phone:mx-3 md:mx-10'/>
        <img src='logos/air-jamaica.svg' alt='grab' className='phone:w-10 md:w-20 phone:h-10 md:h-20 phone:mx-3 md:mx-10'/>
        <img src='logos/shell.svg' alt='grab' className='phone:w-10 md:w-20 phone:h-10 md:h-20 phone:mx-3 md:mx-10'/>
        <img src='logos/motul.svg' alt='grab' className='phone:w-10 md:w-20 phone:h-10 md:h-20 phone:mx-3 md:mx-10'/>
        <img src='logos/verizon.svg' alt='grab' className='phone:w-10 md:w-20 phone:h-10 md:h-20 phone:mx-3 md:mx-10'/>
      </Marquee>
      <img src='images/hero/airport-terminal.webp' alt='terminal' className='phone:w-[90%] md:w-[70%] mx-auto mt-[5vw]'/>
    </div>
  )
}

export default Hero
