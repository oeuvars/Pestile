import React from 'react'

const Feature: React.FC = () => {
  return (
    <div className='phone:mt-[7vh] md:mt-0'>
      <h1 className='font-dynalight phone:text-3xl md:text-7xl text-center text-[#1E1B13]'>Privacy, analytics and integrations</h1>
      <p className='font-satoshi-regular text-center text-[#80796B] phone:text-base md:text-xl my-[2vw] leading-tight phone:w-[90%] md:w-[40%] mx-auto'>
         Embrace seamless journeys, authentic encounters, and unforgettable
         <br />
         experiences, all at your fingertips.
      </p>
      <hr className='phone:w-[10%] md:w-[2.5%] border-[#FF878C] mx-auto phone:mb-[3.5vh] md:mb-[2.5vw] phone:mt-[2.5vh] md:mt-0' />
      <div className='grid lg:grid-cols-[2fr_4fr] phone:w-[90%] tablet:w-[78%] mx-auto phone:gap-[2vh] md:gap-[2vw]'>
         <div className='grid border-4 border-[#F1E9DF] bg-[#FFFAF1] upper-card-shadow rounded-3xl phone:gap-[3vh] md:gap-0 px-[1vw] phone:pt-[2.5vh] md:pt-[2.5vw] phone:pb-[5vh] md:pb-[3vw]'>
            <img src='/images/feature/card-1.webp' alt='camera' className='py-[1.5vw] px-[2vw] mx-auto'/>
            <div className='w-[90%] mx-auto'>
               <h1 className='font-gambarino phone:text-2xl md:text-4xl text-center text-[#1E1B13]'>Privacy centric</h1>
               <p className='font-satoshi-regular text-center phone:text-base md:text-lg text-[#80796B] phone:my-[1vh] md:my-[1vw] phone:leading-5 md:leading-tight'>
                  Stringent privacy controls and encryption measures safeguard your information, so you can travel with peace of mind.
               </p>
            </div>
            <button className='py-2 px-7 bg-[#FFFAF1] rounded-[9px] shadow-sm border-2 border-[#F1E9DF] hover:shadow-[#FF878C]/40 hover:shadow-md animation font-satoshi-medium text-[#1E1B13] text-lg w-[90%] mx-auto'>
               Start for free
            </button>
         </div>
         <div className='grid border-4 border-[#F1E9DF] bg-[#FFFAF1] upper-card-shadow rounded-3xl phone:gap-[3vh] md:gap-0 px-[1vw] phone:pt-[2.5vh] md:pt-[2.5vw] phone:pb-[5vh] md:pb-[3vw]'>
            <img src='/images/feature/card-2.webp' alt='camera' className='py-[1.5vw] px-[2vw] mx-auto'/>
            <div className='w-[90%] mx-auto'>
               <h1 className='font-gambarino phone:text-2xl md:text-4xl text-center text-[#1E1B13]'>Analytics at your fingertips</h1>
               <p className='font-satoshi-regular text-center phone:text-base md:text-lg text-[#80796B] phone:my-[1vh] md:my-[1vw] phone:leading-5 md:leading-tight'>
                  Your travel history is now a valuable resource. Get a comprehensive overview of your travel adventures. Monitor your spending, track your savings, and keep an eye on the time you've saved by automating your travel plans. Gain insights into your journey patterns and preferences, empowering you to make more informed decisions for future trips.
               </p>
            </div>
            <hr className='w-[5%] border-[#000] mx-auto' />
         </div>
      </div>
      <div className='grid lg:grid-cols-[4fr_2fr] phone:w-[90%] md:w-[78%] mx-auto phone:gap-[2vh] md:gap-[2vw] phone:my-[2vh] md:my-[2vw]'>
         <div className='grid border-4 border-[#F1E9DF] bg-[#FFFAF1] lower-card-shadow rounded-3xl phone:gap-[3vh] md:gap-0 px-[1vw] phone:pt-[2.5vh] md:pt-[2.5vw] phone:pb-[5vh] md:pb-[3vw]'>
            <img src='/images/feature/card-3.webp' alt='camera' className='py-[1.5vw] px-[2vw] mx-auto'/>
            <div className='w-[90%] mx-auto'>
               <h1 className='font-gambarino phone:text-2xl md:text-4xl text-center text-[#1E1B13]'>Integrate all your data</h1>
               <p className='font-satoshi-regular text-center phone:text-base md:text-lg text-[#80796B] phone:my-[1vh] md:my-[1vw] phone:leading-5 md:leading-tight'>
                  Simplify your travel experience by seamlessly integrating all your data. The app automatically pulls information from your favorite apps, from flight and hotel bookings to restaurant reservations and local guides, so you can access all your travel details in one place, eliminating the need to juggle multiple apps and accounts.
               </p>
            </div>
            <hr className='w-[5%] border-[#000] mx-auto' />
         </div>
         <div className='grid border-4 border-[#F1E9DF] bg-[#FFFAF1] lower-card-shadow rounded-3xl phone:gap-[3vh] md:gap-0 px-[1vw] phone:pt-[2.5vh] md:pt-[2.5vw] phone:pb-[5vh] md:pb-[3vw]'>
            <img src='/images/feature/card-4.webp' alt='camera' className='py-[1.5vw] px-[2vw] mx-auto'/>
            <div className='w-[90%] mx-auto'>
               <h1 className='font-gambarino phone:text-2xl md:text-4xl text-center text-[#1E1B13]'>Pause anytime</h1>
               <p className='font-satoshi-regular text-center phone:text-base md:text-lg text-[#80796B] phone:my-[1vh] md:my-[1vw] phone:leading-5 md:leading-tight'>
                  If you do decide to pause your travels, you get an offline copy of your app data so you have it ready for next time!
               </p>
            </div>
            <button className='py-2 px-7 bg-[#FFFAF1] rounded-[9px] shadow-sm border-2 border-[#F1E9DF] hover:shadow-[#FF878C]/40 hover:shadow-md animation font-satoshi-medium text-neutral-800 text-lg w-[90%] mx-auto'>
               Get Started
            </button>
         </div>
      </div>
    </div>
  )
}

export default Feature
