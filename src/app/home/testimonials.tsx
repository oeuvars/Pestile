"use client"

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import { Variants } from "framer-motion";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  position: string;
  avatarSrc: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 0,
    text: "This app transformed the way I travel. It's like having a personal travel assistant in my pocket. It's made my trips stress-free and memorable!",
    author: "Togepi",
    position: "Nomad Member",
    avatarSrc: "images/pokemon/togepi.svg",
  },
  {
    id: 1,
    text: "I'm a seasoned traveler, but this app took my experiences to a whole new level. The analytics are eye-opening, and the personalized planning is a game-changer.",
    author: "Bulbasaur",
    position: "Adventurer Member",
    avatarSrc: "images/pokemon/bulbasaur.svg",
  },
  {
   id: 2,
   text: "As a frequent business traveler, the Nomad plan was a game-changer. It made my trips more productive, and the exclusive perks saved me money.",
   author: "Chikorita",
   position: "Explorer Member",
   avatarSrc: "images/pokemon/chikorita.svg",
 },
];

const sliderVariants: Variants = {
  incoming: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 0.2,
    opacity: 0,
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 0.2,
    opacity: 0,
  }),
};

const sliderTransition = {
   duration: 2,
   ease: [0.6, 0.05, 0.28, 0.91],
 };

const Testimonials: React.FC = () => {
  const [[testimonialIndex, direction], setTestimonialIndex] = useState([0, 0]);

  const activeTestimonialIndex = wrap(0, TESTIMONIALS.length, testimonialIndex);

  const swipeToTestimonial = (swipeDirection: number) => {
    setTestimonialIndex([testimonialIndex + swipeDirection, swipeDirection]);
  };

  const dragEndHandler = (dragInfo: any) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;
    if (draggedDistance > swipeThreshold) {
      swipeToTestimonial(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToTestimonial(1);
    }
  };

  useEffect(() => {
   const interval = setInterval(() => {
     swipeToTestimonial(1);
   }, 7500);

   return () => clearInterval(interval);
 }, [testimonialIndex]);

  return (
   <div className="mt-[7vw]">
      <h2 className="font-dynalight text-3xl text-[#FF878C] text-center mb-[2vw]">What the travellers say</h2>
      <div className="">
         <AnimatePresence initial={false} custom={direction}>
            <motion.div
               key={testimonialIndex}
               custom={direction}
               variants={sliderVariants}
               initial="incoming"
               animate="active"
               exit="exit"
               transition={sliderTransition}
               drag="x"
               dragConstraints={{ left: 0, right: 0 }}
               dragElastic={1}
               onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
               className="text-center w-full flex flex-col items-center overflow-hidden absolute"
            >
               <p className="font-gambarino text-4xl text-center text-[#1E1B13] w-[40%]">{TESTIMONIALS[activeTestimonialIndex].text}</p>
               <div className="flex justify-center mt-[2vw] gap-[1vw]">
                  <img src={TESTIMONIALS[activeTestimonialIndex].avatarSrc} alt="Avatar" className="w-16 h-16 rounded-full" />
                  <div>
                     <p className="font-satoshi-medium text-lg my-auto text-left">{TESTIMONIALS[activeTestimonialIndex].author}</p>
                     <p className="font-satoshi-regular text-lg my-auto">{TESTIMONIALS[activeTestimonialIndex].position}</p>
                  </div>
               </div>
            </motion.div>
         </AnimatePresence>
      </div>
      <img src="images/testimonials/scooter.webp" alt="" className="w-[70%] mx-auto mt-[24vw]"/>
   </div>
  );
};

export default Testimonials;
