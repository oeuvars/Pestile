"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from "@/hooks/useMediaQuery";
import Link from "next/link";

const BottomBar: React.FC = () => {

  const bottombarVarients = {
    hidden: {opacity: 0, x: 0, y: 75},
    enter: {opacity: 1, x: 0, y: 0},
    exit: {opacity: 0, x: 0, y: 75}
  };

  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  return (
    <section id="navbar" className="relative">
      <motion.div variants={bottombarVarients} initial="hidden" animate="enter" transition={{ type: "spring", stiffness: 100 }} className="w-1/2 fixed flex border bg-white/30 border-white/30 inset-x-0 bottom-0 mx-auto justify-between text-xl text-[#1E1B13] px-10 py-5 rounded-3xl mb-5 font-satoshi-medium z-40 backdrop-blur-md">
        <Link href='/services/flights' className="my-auto animation">Flights</Link>
        <Link href='/services/dashboard' className="my-auto">Dashboard</Link>
        <Link href="/services" className="flex gap-2">
          <img src="/icons/home.svg" alt="" className="w-8 h-8 my-auto"/>
        </Link>
        <Link href='/services/hotels' className="my-auto hover:text-neutral-600 animation font-roxale">Hotels</Link>
        <Link href='/services/guide' className="my-auto hover:text-neutral-600 animation font-roxale">Guide</Link>
      </motion.div>
    </section>
  );
};

export default BottomBar;
