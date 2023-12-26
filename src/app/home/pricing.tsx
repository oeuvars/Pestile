"use client"

import React, { useState } from 'react'

const Pricing: React.FC = () => {
   const [price, setPrice] = useState('$12');
   const [duration, setDuration] = useState('month');
   const [proPrice, setProPrice] = useState('$29');

   const switchButtons = (clickedBtn: string, otherBtn: string) => {
      const clickedButton = document.getElementById(clickedBtn);
      const otherButton = document.getElementById(otherBtn);

      if (clickedButton && otherButton) {
         const tempClassName = clickedButton.className;
         clickedButton.className = otherButton.className;
         otherButton.className = tempClassName;

         if (clickedBtn === 'yearlyBtn') {
           setPrice('$124');
           setDuration('year')
           setProPrice('$287');
         } else {
           setPrice('$12');
           setDuration('month')
           setProPrice('$29');
         }
       }
    };
  return (
    <div>
      <img src='images/pricing/rail-terminal.webp' alt='train' className='h-[32vw] mx-auto my-[5vw]'/>
      <h1 className='font-dynalight phone:text-3xl md:text-7xl text-center mt-[7vw] text-[#1E1B13]'>Pricing designed with you in mind</h1>
      <p className='font-satoshi-regular text-center phone:text-base lg:text-lg text-[#80796B] my-[1vw] leading-tight'>With flexible options that cater to every type of traveler.</p>
      <hr className='phone:w-[10%] lg:w-[2.5%] border-[#FF878C] mx-auto mt-[2.5vw]'/>

      <div className='flex rounded-full bg-[#F1EBDF] text-[#1E1B13] phone:w-[50%] md:w-[16%] mx-auto phone:my-[2.5vh] md:my-[2.5vw] justify-between phone:py-[0.25vh] md:py-[0.25vw] phone:px-[0.25vh] md:px-[0.25vw] phone:text-base md:text-lg animation'>
         <button id="monthlyBtn" className='bg-[#FFF9F0] rounded-full py-2 font-satoshi-medium phone:px-[2vh] md:px-[2vw] animation' onClick={() => switchButtons('monthlyBtn', 'yearlyBtn')}>
         Monthly
         </button>
         <button id="yearlyBtn" className='mx-auto font-satoshi-medium' onClick={() => switchButtons('yearlyBtn', 'monthlyBtn')}>
         Yearly
         </button>
      </div>

      <div className='phone:w-[90%] tablet:w-[78%] mx-auto phone:gap-[2vh] md:gap-[2vw] grid tablet:grid-cols-3 phone:mt-[4vh] md:mt-[4vw]'>
         <div className='flex flex-col border-4 border-[#F1E9DF] bg-[#FFFAF1] lower-card-shadow rounded-3xl px-[2vw] phone:py-[2.5vh] md:py-[2.5vw]'>
            <h2 className='font-dynalight text-4xl text-[#80796B] text-center'>Explorer</h2>
            <h1 className='font-gambarino phone:text-6xl md:text-7xl text-center mt-[2.5vw] text-[#1E1B13]'>Free</h1>
            <hr className='border-[#F1EBDF] border phone:mt-[3vh] md:mt-[3vw] phone:mb-[3vh] md:mb-[2vw]'/>
            <div className='phone:w-[90%] md:w-full mx-auto grid phone:gap-[1vh] md:gap-[1vw]'>
               <div className='flex gap-2'>
                  <img src='/icons/tick-circle.svg' alt='tick' className='w-6 h-6 mt-1'/>
                  <p className='font-satoshi-regular phone:text-base md:text-lg text-[#80796B] bottom-0 leading-tight'>Enjoy the journey planning feature to organize your trips effortlessly.</p>
               </div>
               <div className='flex gap-2'>
                  <img src='/icons/tick-circle.svg' alt='tick' className='w-6 h-6 mt-1'/>
                  <p className='font-satoshi-regular phone:text-base md:text-lg text-[#80796B] bottom-0 leading-tight'>Maintain control over your data with our robust privacy settings.</p>
               </div>
               <div className='flex gap-2'>
                  <img src='/icons/tick-circle.svg' alt='tick' className='w-6 h-6 mt-1'/>
                  <p className='font-satoshi-regular phone:text-base md:text-lg text-[#80796B] bottom-0 leading-tight'>Get a glimpse of your travel insights, including basic spending and time-saving data.</p>
               </div>
               <div className='flex gap-2'>
                  <img src='/icons/tick-circle.svg' alt='tick' className='w-6 h-6 mt-1'/>
                  <p className='font-satoshi-regular phone:text-base md:text-lg text-[#80796B] bottom-0 leading-tight'>Integrate data from select apps to streamline your travel information.</p>
               </div>
               <div className='flex gap-2'>
                  <img src='/icons/tick-circle.svg' alt='tick' className='w-6 h-6 mt-1'/>
                  <p className='font-satoshi-regular phone:text-base md:text-lg text-[#80796B] bottom-0 leading-tight'>Access an online copy of your app with all your travel data.</p>
               </div>
            </div>
            <div className='mt-auto'>
               <p className='font-satoshi-regular phone:text-base md:text-lg text-[#80796B] text-center phone:mt-[5vh] md:mt-[5vw] phone:leading-5 md:leading-tight'>Upgrade at any time to unlock more advanced features.</p>
               <button className='phone:mt-[2.5vh] md:mt-[1vw] py-2 px-7 bg-[#FFFAF1] rounded-[9px] shadow-sm border-2 border-[#F1E9DF] hover:shadow-[#FF878C]/40 hover:shadow-md animation font-satoshi-medium text-[#1E1B13] phone:text-base md:text-lg w-full mx-auto'>
                  Start for free
               </button>
            </div>
         </div>
         <div className='flex flex-col border-4 border-[#F1E9DF] bg-[#FFFAF1] lower-card-shadow rounded-3xl px-[2vw] phone:py-[2.5vh] md:py-[2.5vw]'>
            <h2 className='font-dynalight text-4xl text-[#80796B] text-center'>Adventurer</h2>
            <h1 className='font-gambarino phone:text-6xl md:text-7xl text-center mt-[2.5vw] text-[#1E1B13]'>{price}<span className='text-4xl'>.99&nbsp;</span><span className='font-satoshi-medium text-lg'>/{duration}</span></h1>
            <hr className='border-[#F1EBDF] border phone:mt-[3vh] md:mt-[3vw] phone:mb-[3vh] md:mb-[2vw]'/>
            <div className='phone:w-[90%] md:w-full mx-auto grid phone:gap-[1vh] md:gap-[1vw]'>
               <div className='flex gap-2'>
                  <img src='/icons/tick-circle.svg' alt='tick' className='w-6 h-6 mt-1'/>
                  <p className='font-satoshi-regular phone:text-base md:text-lg text-[#80796B] bottom-0 leading-tight'>Create detailed itineraries and customize every aspect of your journey.</p>
               </div>
               <div className='flex gap-2'>
                  <img src='/icons/tick-circle.svg' alt='tick' className='w-6 h-6 mt-1'/>
                  <p className='font-satoshi-regular phone:text-base md:text-lg text-[#80796B] bottom-0 leading-tight'>Maximize your data security with enhanced privacy settings.</p>
               </div>
               <div className='flex gap-2'>
                  <img src='/icons/tick-circle.svg' alt='tick' className='w-6 h-6 mt-1'/>
                  <p className='font-satoshi-regular phone:text-base md:text-lg text-[#80796B] bottom-0 leading-tight'>Dive deep into your travel history, from detailed spending and savings breakdowns to time saved.</p>
               </div>
               <div className='flex gap-2'>
                  <img src='/icons/tick-circle.svg' alt='tick' className='w-6 h-6 mt-1'/>
                  <p className='font-satoshi-regular phone:text-base md:text-lg text-[#80796B] bottom-0 leading-tight'>Integrate data from a wide array of apps and automate your experience.</p>
               </div>
               <div className='flex gap-2'>
                  <img src='/icons/tick-circle.svg' alt='tick' className='w-6 h-6 mt-1'/>
                  <p className='font-satoshi-regular phone:text-base md:text-lg text-[#80796B] bottom-0 leading-tight'>Access an offline copy of your app with all your travel data.</p>
               </div>
               <div className='flex gap-2'>
                  <img src='/icons/tick-circle.svg' alt='tick' className='w-6 h-6 mt-1'/>
                  <p className='font-satoshi-regular phone:text-base md:text-lg text-[#80796B] bottom-0 leading-tight'>Enjoy priority assistance from our dedicated support team.</p>
               </div>
            </div>
            <button className='phone:mt-[2.5vh] md:mt-auto py-2 px-7 bg-[#FFFAF1] rounded-[9px] shadow-sm border-2 border-[#F1E9DF] hover:shadow-[#FF878C]/40 hover:shadow-md animation font-satoshi-medium text-[#1E1B13] phone:text-base md:text-lg phone:w-full md:w-[90%] mx-auto'>
               Start monthly plan
            </button>
         </div>
         <div className='flex flex-col border-4 border-[#F1E9DF] bg-[#FFFAF1] lower-card-shadow rounded-3xl px-[2vw] phone:py-[2.5vh] md:py-[2.5vw]'>
            <h2 className='font-dynalight text-4xl text-[#80796B] text-center'>Nomad</h2>
            <h1 className='font-gambarino phone:text-6xl md:text-7xl text-center mt-[2.5vw] text-[#1E1B13]'>{proPrice}<span className='text-4xl'>.99&nbsp;</span><span className='font-satoshi-medium text-lg'>/{duration}</span></h1>
            <hr className='border-[#F1EBDF] border phone:mt-[3vh] md:mt-[3vw] phone:mb-[3vh] md:mb-[2vw]'/>
            <div className='phone:w-[90%] md:w-full mx-auto grid phone:gap-[1vh] md:gap-[1vw]'>
               <div className='flex gap-2'>
                  <img src='/icons/tick-circle.svg' alt='tick' className='w-6 h-6 mt-1'/>
                  <p className='font-satoshi-regular text-lg text-[#80796B] bottom-0 leading-tight'>Highly customizable itineraries tailored to your preferences and desires.</p>
               </div>
               <div className='flex gap-2'>
                  <img src='/icons/tick-circle.svg' alt='tick' className='w-6 h-6 mt-1'/>
                  <p className='font-satoshi-regular phone:text-base md:text-lg text-[#80796B] bottom-0 leading-tight'>Ensure the utmost security for your personal data with advanced privacy settings.</p>
               </div>
               <div className='flex gap-2'>
                  <img src='/icons/tick-circle.svg' alt='tick' className='w-6 h-6 mt-1'/>
                  <p className='font-satoshi-regular phone:text-base md:text-lg text-[#80796B] bottom-0 leading-tight'>In-depth insights, from detailed spending and savings data to time-saving statistics.</p>
               </div>
               <div className='flex gap-2'>
                  <img src='/icons/tick-circle.svg' alt='tick' className='w-6 h-6 mt-1'/>
                  <p className='font-satoshi-regular phone:text-base md:text-lg text-[#80796B] bottom-0 leading-tight'>Integrate data from a wide array of apps and automate your experience.</p>
               </div>
               <div className='flex gap-2'>
                  <img src='/icons/tick-circle.svg' alt='tick' className='w-6 h-6 mt-1'/>
                  <p className='font-satoshi-regular phone:text-base md:text-lg text-[#80796B] bottom-0 leading-tight'>Access an offline copy of your app with all your travel data.</p>
               </div>
               <div className='flex gap-2'>
                  <img src='/icons/tick-circle.svg' alt='tick' className='w-6 h-6 mt-1'/>
                  <p className='font-satoshi-regular phone:text-base md:text-lg text-[#80796B] bottom-0 leading-tight'>Receive personalized assistance and recommendations from a dedicated travel expert.</p>
               </div>
               <div className='flex gap-2'>
                  <img src='/icons/tick-circle.svg' alt='tick' className='w-6 h-6 mt-1'/>
                  <p className='font-satoshi-regular phone:text-base md:text-lg text-[#80796B] bottom-0 leading-tight'>Unlock exclusive offers, perks, and discounts from our travel partners.</p>
               </div>
            </div>
            <button className='phone:mt-[2.5vh] md:mt-[2vw] flex bg-[#F99052] mx-auto px-7 py-2 gap-2 rounded-[9px] shadow-sm hover:shadow-[#FF878C]/40 hover:shadow-lg animation font-satoshi-medium w-full justify-center'>
               <p className='font-satoshi-medium font text-white my-auto text-lg'>Start yearly plan</p>
               <img src='icons/plane.svg' className='w-7 h-7'/>
            </button>
         </div>
      </div>
    </div>
  )
}

export default Pricing
