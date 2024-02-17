"use client"

import React, { useState } from 'react';
import Navbar from '../../home/navbar/navbar';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { trpc } from '@/app/_trpc/client';
import { motion } from "framer-motion";

const Page = () => {
   const router = useRouter();
   const users = trpc.register.useMutation();
   const [user, setUser] = useState({
      username: "",
      email : "",
      password : ""
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    }

    const videoVariants = {
      hidden: { opacity: 0, x: -100, y: 0 },
      enter: { opacity: 1, x: 0, y: 0 },
      exit: {opacity: 0, x: -100, y: 0}
    }

    const variants = {
      hidden: { opacity: 0, x: 0, y: 200 },
      enter: { opacity: 1, x: 0, y: 0},
      exit: {opacity: 0, x: 0, y: -200}
    }

    const handleAddUser = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (user.email && user.username && user.password && !loading) {
        try {
          setLoading(true);
          const result = await users.mutateAsync(user);
          if (result.token) {
            console.log(result.message)
            Cookies.set('RegisterCookie', result.token , { expires: 7 })
          }
        } catch (error) {
          console.error('Error during user creation:', error);
        } finally {
          setLoading(false);
          router.push('/auth/verify-otp')
        }
      }
    };
  return (
      <>
         <Navbar />
         <div className='grid grid-cols-[2fr_3fr] h-screen'>
            <motion.video autoPlay loop className="object-cover w-full h-full -z-10" variants={videoVariants} initial="hidden" animate="enter" transition={{ ease: "easeOut", duration: 1.5 }}>
               <source src='/videos/signup.mp4'/>
            </motion.video>
            <div className='m-auto w-[50%] flex flex-col gap-4'>
               <motion.div className='flex flex-col gap-1 mt-[4vw]' variants={variants} initial="hidden" animate="enter" transition={{ ease: "easeOut", duration: 1 }}>
                  <div>
                     <p className='text-[#80796B] font-dynalight text-3xl'>Register</p>
                     <h1 className='font-gambarino text-[2.75rem] text-[#1E1B13]'>Welcome Pestile!</h1>
                  </div>
                  <div className='flex gap-3 justify-center bg-[#FFFAF1] border border-[#F1E9DF] py-3 px-5 rounded-2xl'>
                     <img src='/icons/google.svg' alt="" className='w-6 h-6 my-auto'/>
                     <Link href="/login/github" className='font-satoshi-medium text-[#1E1B13] text-lg'>Continue with Google</Link>
                  </div>
               </motion.div>
               <motion.hr className="hr-text gradient" data-content="OR" variants={variants} initial="hidden" animate="enter" transition={{ ease: "easeOut", duration: 1.15 }}/>
               <div className='mx-auto flex flex-col gap-5 w-full'>
                  <motion.input
                     variants={variants} initial="hidden" animate="enter" transition={{ ease: "easeOut", duration: 1.3 }}
                     type="email"
                     id="email"
                     name="email"
                     className="w-full px-3 py-3 rounded-xl bg-[#FFFAF1] border-2 border-[#F1E9DF] text-[#1E1B13] outline-none font-satoshi-medium lower-card-shadow"
                     placeholder='Email'
                     value={user.email}
                     required
                     onChange={(e)=>{setUser({...user,email:e.target.value})}}
                  />
                  <motion.input
                     variants={variants} initial="hidden" animate="enter" transition={{ ease: "easeOut", duration: 1.45 }}
                     type="name"
                     id="name"
                     name="name"
                     placeholder='Name'
                     value={user.username}
                     className="w-full px-3 py-3 rounded-xl bg-[#FFFAF1] border-2 border-[#F1E9DF] text-[#1E1B13] outline-none font-satoshi-medium lower-card-shadow"
                     required
                     onChange={(e)=>{setUser({...user,username:e.target.value})}}
                  />
                  <motion.div className='flex' variants={variants} initial="hidden" animate="enter" transition={{ ease: "easeOut", duration: 1.6 }}>
                     <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        placeholder='Password'
                        value={user.password}
                        className="w-full px-3 py-3 rounded-xl bg-[#FFFAF1] border-2 border-[#F1E9DF] text-[#1E1B13] outline-none font-satoshi-medium lower-card-shadow"
                        required
                        onChange={(e)=>{setUser({...user,password:e.target.value})}}
                     />
                     <button
                        onClick={togglePasswordVisibility}
                        className='text-gray-600 font-medium bg-transparent border-0 outline-none focus:outline-none cursor-pointer -ml-[2.5vw]'
                     >
                        {showPassword ? (<img src='/icons/eye.svg' alt="eye" className='w-6 h-6'/>) : (<img src='/icons/eye-slash.svg' alt="closed-eye" className='w-6 h-6'/>)}
                     </button>
                  </motion.div>
               </div>
               <motion.button
                  variants={variants} initial="hidden" animate="enter" transition={{ ease: "easeOut", duration: 1.75 }}
                  onClick={handleAddUser}
                  className={`bg-[#F99052] text-white px-6 py-2 rounded-lg border-2 font-satoshi-medium text-lg border-[#F1E9DF] hover:lower-card-shadow mt-3 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={loading}
               >
                  {loading ? 'Signing Up...' : 'Sign Up'}
               </motion.button>
               <motion.div variants={variants} initial="hidden" animate="enter" transition={{ ease: "easeOut", duration: 2 }} className='flex justify-center mt-2'>
                  <Link href="/auth/login" className='py-2 px-7 bg-[#FFFAF1] rounded-[9px] text-sm text-[#1E1B13] shadow-sm border border-gray-100 hover:shadow-[#FF878C]/10 hover:shadow-xl animation font-satoshi-medium text-center'>
                     Already an account? <span className="text-[#FF878C]">Login</span>
                  </Link>
               </motion.div>
            </div>
         </div>
      </>
  )
}

export default Page
