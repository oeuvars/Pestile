import React from 'react'

const UpperFooter: React.FC = () => {
  return (
    <div className='mt-[7vw]'>
      <h2 className="font-dynalight text-3xl text-[#FF878C] text-center mb-[2vw]">Jump into a new time</h2>
      <h1 className='font-gambarino text-7xl text-center'>Meet the new <br /> standard in travel</h1>
      <button className='flex bg-[#F99052] mx-auto px-7 py-2 gap-2 rounded-[9px] shadow-sm hover:shadow-[#FF878C]/40 hover:shadow-xl animation font-satoshi-medium mt-[3vw]'>
         <p className='font-satoshi-medium font text-white my-auto text-lg'>Start for free</p>
         <img src='icons/plane.svg' className='w-7 h-7'/>
      </button>
      <img src='images/footer/inside-train.webp' alt='train' className='w-[60%] mx-auto my-[4vw]'/>
    </div>
  )
}

export default UpperFooter
