"use client"
import Navbar from '../navbar/navbar'
import BottomBar from '../bottombar/bottombar'
import { motion } from 'framer-motion'
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import React, { useEffect, useState } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import data from "./airports.json"
import { Skeleton } from "@/components/ui/skeleton"

const page: React.FC = () => {
  const variants = {
    hidden: { opacity: 0, x: -150, y: 0 },
    enter: { opacity: 1, x: 0, y: 0},
    exit: {opacity: 0, x: -150, y: 0}
  };
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [closestAirport, setClosestAirport] = useState<string | null>(null);
  const [closestAirportCode, setClosestAirportCode] = useState<string | null>(null);
  const [destinationAirport, setDestinationAirport] = useState<string | null>(null);
  const [destinationAirportCode, setDestinationAirportCode] = useState<string | null>(null);

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };

  const deg2rad = (deg: number): number => {
    return deg * (Math.PI / 180);
  };

  useEffect(() => {
    const findClosestAirport = async (latitude: number, longitude: number) => {
      let closestDistance = Infinity;
      let closestAirportCode = '';
      let closestAirportCity = '';

      data.Airports.forEach((airport) => {
        const distance = calculateDistance(latitude, longitude, airport.Latitude, airport.Longitude);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestAirportCity = airport.City;
          closestAirportCode = airport.Code;
        }
      });

      setClosestAirport(closestAirportCity);
      setClosestAirportCode(closestAirportCode)
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          findClosestAirport(position.coords.latitude, position.coords.longitude);
        },
      );
    } else {
      return
    }
  }, []);

  const handleSourceAirportSelection = (selectedAirport: string, selectedAirportCode: string) => {
    setClosestAirport(selectedAirport);
    setClosestAirportCode(selectedAirportCode);
  };
  const handleDestinationAirportSelection = (selectedAirport: string, selectedAirportCode: string) => {
    setDestinationAirport(selectedAirport);
    setDestinationAirportCode(selectedAirportCode);
  };

  return (
    <div>
      <Navbar />
      <div className='relative'>
         <img src='/images/services/background.webp' alt='' className='mt-[5vw] fixed -z-10 opacity-80'/>
         <img src='/images/services/clouds.webp' alt='' className='bottom-0 fixed opacity-70'/>
      </div>
      <motion.div variants={variants} initial="hidden" animate="enter" exit="exit" transition={{ type: "spring", stiffness: 100 }} className='mt-[10vw] z-10'>
        <p className='font-dynalight text-center text-3xl text-[#FF878C]'>Hey,</p>
        <h1 className='font-gambarino text-7xl text-center mt-[1.5vw] text-[#1E1B13] leading-none'>Book your flights<br />with Pestile</h1>
        <p className='font-satoshi-regular absolute text-center text-[#80796B] phone:text-base md:text-xl my-[2vw] leading-tight phone:w-[90%] md:w-[100%]'>
          Get assured discounts and seat locking for upto two days
          <br />
          with adventurer and nomad plans
        </p>
      </motion.div>
      <div className='z-40 backdrop-blur-md bg-[#FFFAF1]/30 w-[90%] mx-auto grid grid-cols-4 my-[15vw] gap-5 p-5 rounded-2xl'>
        <div className='border border-dashed border-[#80796B] rounded-2xl p-4'>
          <p className='text-[#80796B] font-satoshi-medium text-lg'>From</p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className='w-full rounded-xl flex text-[#2b2824] font-satoshi-medium outline-none'>
                {closestAirport ? (
                  <div className='flex justify-between w-full'>
                    <div className='flex flex-col'>
                      <p className='text-[#2b2824] text-4xl font-gambarino mr-auto'>{closestAirport}</p>
                      <div className='flex'>
                        <p className='font-satoshi-medium text-[#80796B]'>{closestAirportCode},&nbsp;</p>
                        <p className='font-satoshi-medium text-[#80796B]'>{closestAirport},&nbsp;</p>
                        <p className='font-satoshi-medium text-[#80796B]'>India</p>
                      </div>
                    </div>
                    <img src='/icons/magnifying-glass.svg' alt='glass' className='w-8 h-8 my-auto'/>
                  </div>
                ) : (
                  <div className='flex flex-col gap-2'>
                    <Skeleton className="h-10 w-[7vw]" />
                    <Skeleton className='h-4 w-[10vw]'/>
                  </div>
                )}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[17vw] h-[15vw] overflow-scroll bg-white/20 backdrop-blur-md">
              <div>
                {data.Airports.map((airport, index) => (
                  <DropdownMenuItem key={index} className="font-satoshi-medium text-[#2b2824] flex" onClick={() => handleSourceAirportSelection(airport.City, airport.Code)}>
                    <p>{airport.Code},&nbsp;</p>
                    <p>{airport.City}</p>
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className='border border-dashed border-[#80796B] rounded-2xl p-4'>
          <p className='text-[#80796B] font-satoshi-medium text-lg'>To</p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className='w-full rounded-xl flex text-[#2b2824] font-gambarino outline-none'>
                {destinationAirport ? (
                  <div className='flex justify-between w-full'>
                    <div className='flex flex-col'>
                      <p className='text-[#2b2824] text-4xl font-gambarino mr-auto'>{destinationAirport}</p>
                      <div className='flex'>
                        <p className='font-satoshi-medium text-[#80796B]'>{destinationAirportCode},&nbsp;</p>
                        <p className='font-satoshi-medium text-[#80796B]'>{destinationAirport},&nbsp;</p>
                        <p className='font-satoshi-medium text-[#80796B]'>India</p>
                      </div>
                    </div>
                    <img src='/icons/magnifying-glass.svg' alt='glass' className='w-8 h-8 my-auto'/>
                  </div>
                ) : (
                  <div className='flex justify-between w-full'>
                    <div className='flex flex-col'>
                      <p className='text-[#2b2824] text-4xl font-gambarino mr-auto'>Delhi</p>
                      <div className='flex'>
                        <p className='font-satoshi-medium text-[#80796B]'>DEL,&nbsp;</p>
                        <p className='font-satoshi-medium text-[#80796B]'>Delhi,&nbsp;</p>
                        <p className='font-satoshi-medium text-[#80796B]'>India</p>
                      </div>
                    </div>
                    <img src='/icons/magnifying-glass.svg' alt='glass' className='w-8 h-8 my-auto'/>
                  </div>
                )}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[17vw] h-[15vw] overflow-scroll bg-white/20 backdrop-blur-md">
              <div>
                {data.Airports.map((airport, index) => (
                  airport.Code.toLowerCase() !== closestAirportCode?.toLowerCase() ? (
                    <DropdownMenuItem key={index} className="font-satoshi-medium text-[#2b2824] flex" onClick={() => handleDestinationAirportSelection(airport.City, airport.Code)}>
                      <p>{airport.Code},&nbsp;</p>
                      <p>{airport.City}</p>
                    </DropdownMenuItem>
                  ) : null
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className='border border-dashed border-[#80796B] rounded-2xl p-4 flex flex-col justify-between'>
          <p className='text-[#80796B] font-satoshi-medium text-lg'>Departure</p>
          <Popover>
            <PopoverTrigger asChild>
              <button className='bg-white/40 w-full rounded-xl flex px-5 py-3 text-[#2b2824] font-satoshi-medium outline-none'>
                <CalendarIcon className="mr-2 my-auto h-6 w-6 text-[#80796B]" />
                {startDate ? format(startDate, "PPP") : <span className='text-[#80796B] font-satoshi-medium'>Pick a date</span>}
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white/10 backdrop-blur-md rounded-2xl z-50" align="center">
              <Calendar
                mode="single"
                selected={startDate}
                onSelect={setStartDate}
                initialFocus
                className="w-auto backdrop-blur-md rounded-2xl z-10 p-5"
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className='border border-dashed border-[#80796B] rounded-2xl p-4 flex flex-col justify-between'>
          <p className='text-[#80796B] font-satoshi-medium text-lg'>Return</p>
          <Popover>
            <PopoverTrigger asChild>
              <button className='bg-white/40 w-full rounded-xl flex px-5 py-3 text-[#2b2824] font-satoshi-medium'>
                <CalendarIcon className="mr-2 my-auto h-6 w-6 text-[#80796B]" />
                {endDate ? format(endDate, "PPP") : <span className='text-[#80796B] font-satoshi-medium'>Pick a date</span>}
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white/10 backdrop-blur-md rounded-2xl z-50" align="center">
              <Calendar
                mode="single"
                selected={endDate}
                onSelect={setEndDate}
                initialFocus
                className="w-auto backdrop-blur-md rounded-2xl z-10 p-5"
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <BottomBar />
    </div>
  )
}

export default page
