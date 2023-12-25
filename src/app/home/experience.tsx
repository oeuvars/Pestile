import React from 'react'

const Experience: React.FC = () => {
  return (
    <div>
      <h1 className='font-dynalight text-7xl text-center text-[#1E1B13]'>Experience a new era</h1>
      <p className='font-satoshi-regular text-[#80796B] text-xl my-[1.5vw] text-center leading-tight'>
         Embrace seamless journeys, authentic encounters, and unforgetable
         <br />
         experiences, all at your fingertips.
      </p>
      <hr className='w-[2.5%] border-[#FF878C] mx-auto'/>
      <div className='w-[78%] mx-auto grid grid-cols-3 gap-[2vw] mt-[5vw]'>
         <div className='grid border-2 border-[#F1E9DF] bg-[#FFFAF1] upper-card-shadow rounded-3xl px-[1vw] pt-[2.5vw] pb-[3vw]'>
            <img src='images/experience/card-1.webp' alt='camera' className='h-52 mx-auto'/>
            <div className='w-[90%] mx-auto'>
               <h1 className='font-gambarino text-4xl text-center text-[#1E1B13]'>Get Ready</h1>
               <p className='font-satoshi-regular text-center text-lg text-[#80796B] my-[1vw] leading-tight'>
                  Your role? To anticipate a seamless, stress-free journey, with every detail attended to, effortlessly.
               </p>
               <hr className='w-[10%] border-[#000] mx-auto'/>
            </div>
         </div>
         <div className='grid border-4 border-[#F1E9DF] bg-[#FFFAF1] upper-card-shadow rounded-3xl px-[1vw] pt-[1vw] pb-[3vw] gap-[0.5vw]'>
            <img src='images/experience/card-2.webp' alt='camera' className='py-[1.5vw] px-[2vw]'/>
            <div className='w-[90%] mx-auto'>
               <h1 className='font-gambarino text-4xl text-center text-[#1E1B13]'>Journey Plan</h1>
               <p className='font-satoshi-regular text-center text-lg text-[#80796B] my-[1vw] leading-tight'>
                  The app will craft your entire journey. It's like having a travel expert in your pocket, that can modify any detail instantly.
               </p>
               <hr className='w-[10%] border-[#000] mx-auto'/>
            </div>
         </div>
         <div className='grid border-2 border-[#F1E9DF] bg-[#FFFAF1] upper-card-shadow rounded-3xl px-[1vw] pt-[1vw] pb-[3vw] gap-[0.5vw]'>
            <img src='images/experience/card-3.webp' alt='camera' className='py-[1.5vw] px-[2vw]'/>
            <div className='mx-auto w-[90%]'>
               <h1 className='font-gambarino text-4xl text-center text-[#1E1B13]'>Tailored stays</h1>
               <p className='font-satoshi-regular text-center text-lg text-[#80796B] my-[1vw] leading-tight'>
                  Whether you prefer luxurious hotels
                  <br />
                  or unique Airbnb listings, the app
                  <br />
                  will find your perfect place at every
                  <br />
                  step.
               </p>
               <hr className='w-[10%] border-[#000] mx-auto'/>
            </div>
         </div>
      </div>
      <div className='w-[78%] mx-auto grid grid-cols-2 gap-[2vw] mt-[2vw] mb-[5vw]'>
         <div className='grid border-4 border-[#F1E9DF] bg-[#FFFAF1] lower-card-shadow rounded-3xl px-[1vw] py-[3vw] gap-[1.5vw]'>
            <img src='images/experience/card-4.webp' alt='camera' className='h-52 mx-auto'/>
            <div className='w-[90%] mx-auto'>
               <h1 className='font-gambarino text-4xl text-center text-[#1E1B13]'>Welcoming helpers</h1>
               <p className='font-satoshi-regular text-center text-lg text-[#80796B] my-[1vw] leading-tight'>
                  Say goodbye to navigating unfamiliar territory alone. The app
                  connects you with local experts and enthusiastic travel
                  companions at every destination so you can immerse yourself
                  in the local culture and make the most of your journey.
               </p>
               <hr className='w-[10%] border-[#000] mx-auto'/>
            </div>
         </div>
         <div className='grid border-4 border-[#F1E9DF] bg-[#FFFAF1] lower-card-shadow rounded-3xl px-[1vw] py-[3vw] gap-[1.5vw]'>
            <img src='images/experience/card-5.webp' alt='camera' className='h-52 mx-auto'/>
            <div className='w-[90%] mx-auto'>
               <h1 className='font-gambarino text-4xl text-center text-[#1E1B13]'>Relax and enjoy yourself</h1>
               <p className='font-satoshi-regular text-center text-lg text-[#80796B] my-[1vw] leading-tight'>
                  At last, it's time to fully savor your journey. With everything
                  expertly arranged and your destination ready to explore, you
                  can relax and enjoy every moment without a care in the world.
               </p>
            </div>
            <button className='py-2 px-7 bg-[#FFFAF1] rounded-[9px] shadow-sm border-2 border-[#F1E9DF] hover:shadow-[#FF878C]/40 hover:shadow-md animation font-satoshi-medium text-neutral-800 text-lg w-[90%] mx-auto'>
               Start for free
            </button>
         </div>
      </div>
    </div>
  )
}

export default Experience
