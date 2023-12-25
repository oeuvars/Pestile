"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
   e.preventDefault();
   setIsOpen(!isOpen);
 };

  return (
    <div className="border-2 border-[#F1E9DF] bg-[#FFFAF1] upper-card-shadow rounded-3xl px-5 cursor-pointer">
      <div
        className="flex w-full justify-between"
        onClick={handleClick}
      >
        <div className={`font-gambarino text-4xl text-[#1E1B13] mx-[2vw] animation ${isOpen ? 'my-[2vw]' : 'my-[3vw]' } `}>{title}</div>
        <div className='my-auto transform transition-transform duration-500' style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          <FiChevronDown className="w-10 h-10 text-[#1E1B13] my-auto" />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden transition duration-500 ease-in-out"
          >
            <div className="font-satoshi-regular px-[2vw] text-[#80796B] text-lg mb-[2vw]">{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
   return (
     <div className="w-[60%] mx-auto mt-[7vw]">
       <h1 className="text-7xl font-dynalight text-center text-[#1E1B13]">Frequently asked questions</h1>
       <p className='font-satoshi-regular leading-tight text-[#80796B] text-center text-xl my-[2vw]'>Browse through the FAQs below for quick answers to your queries, or reach <br /> out to our support team for further assistance.</p>
       <hr className='w-[2.5%] border-[#FF878C] mx-auto mb-[4vw]' />
       <div className='flex flex-col gap-[1.5vw]'>
         <Accordion title="How does this app automatically plan my journey?" content="The app utilizes advanced algorithms and your preferences to create a tailored itinerary, including flights, accommodations, and activities. You can review and modify these plans as needed." />
         <Accordion title="Is my personal data safe with this app?" content="Yes, your data security is a priority for us. The app offers robust privacy controls, and you have the option to request an offline copy of your data when needed." />
         <Accordion title="What kind of analytics can I access?" content="The app provides a wide range of analytics, including spending and savings breakdowns, time saved on planning, and more, giving you valuable insights into your travel habits." />
         <Accordion title="can I integrate data from other apps into the platform?" content="Absolutely! The app offers seamless integrations with various travel-related apps, making it easy to centralize your travel information." />
         <Accordion title="How can I upgarde my plan or cancel it temporarily?" content="You can upgrade or downgrade your plan at any time within the app. If you need to cancel your account temporarily, you can request an offline copy of your data, which will be available when you re-open your account." />
       </div>
     </div>
   );
 };

 export default FAQ
