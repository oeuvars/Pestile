"use client"

import React, { useState } from 'react';
import Navbar from '../../home/navbar/navbar';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Cookies from 'js-cookie';
import { trpc } from '@/app/_trpc/client';

const page = () => {
   const router = useRouter();
   const users = trpc.signUp.useMutation()
   const [user, setUser] = useState({
      email : "",
      username: "",
      password : ""
    })
    const [loading, setLoading] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    }

    const handleAddUser = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (user.email && user.username && user.password && !loading) {
        try {
          setLoading(true);
          await users.mutate({ email: user.email, username: user.username, password: user.password });
          const response = await axios.post('/api/trpc/signUp', user)
          console.log(response)
         //  const result = response.data.result.data;
         //  console.log(result.emailToken)
         //  Cookies.set('signUpCookie', result.emailToken , { expires: 7 })
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
            <video autoPlay loop className="object-cover w-full h-full">
               <source src='/videos/signup.mp4'/>
            </video>
            <div className='m-auto w-[50%] flex flex-col gap-4'>
               <div className='flex flex-col gap-1 mt-[4vw]'>
                  <div>
                     <p className='text-[#80796B] font-dynalight text-3xl'>Login</p>
                     <h1 className='font-gambarino text-[2.75rem] text-[#1E1B13]'>Welcome Pestile!</h1>
                  </div>
                  <div className='flex gap-3 justify-center bg-[#FFFAF1] border border-[#F1E9DF] py-3 px-5 rounded-2xl'>
                     <img src='/icons/google.svg' alt="" className='w-6 h-6 my-auto'/>
                     <p className='font-satoshi-medium text-[#1E1B13] text-lg'>Continue with Google</p>
                  </div>
               </div>
               <hr className="hr-text gradient" data-content="OR" />
               <div className='mx-auto flex flex-col gap-5 w-full'>
                  <input
                     type="email"
                     id="email"
                     name="email"
                     className="w-full px-3 py-3 rounded-xl bg-[#FFFAF1] border-2 border-[#F1E9DF] text-[#1E1B13] outline-none font-satoshi-medium lower-card-shadow"
                     placeholder='Email'
                     value={user.email}
                     required
                     onChange={(e)=>{setUser({...user,email:e.target.value})}}
                  />
                  <input
                     type="name"
                     id="name"
                     name="name"
                     placeholder='Name'
                     value={user.username}
                     className="w-full px-3 py-3 rounded-xl bg-[#FFFAF1] border-2 border-[#F1E9DF] text-[#1E1B13] outline-none font-satoshi-medium lower-card-shadow"
                     required
                     onChange={(e)=>{setUser({...user,username:e.target.value})}}
                  />
                  <div className='flex'>
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
                        {showPassword ? (<img src='/icons/eye.svg' className='w-6 h-6'/>) : (<img src='/icons/eye-slash.svg' className='w-6 h-6'/>)}
                     </button>
                  </div>
               </div>
               <button
                  onClick={handleAddUser}
                  className={`bg-[#F99052] text-white px-6 py-2 rounded-lg border-2 font-satoshi-medium text-lg border-[#F1E9DF] hover:lower-card-shadow mt-3 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={loading}
               >
                  {loading ? 'Signing Up...' : 'Sign Up'}
               </button>
               <Link href="/forgot-password" className='text-[#80796B] font-satoshi-medium text-sm -mt-3 hover:underline animation'>Forgot Password?</Link>
               <Link href="/auth/login" className='py-2 px-7 bg-[#FFFAF1] rounded-[9px] text-sm text-[#1E1B13] shadow-sm border border-gray-100 hover:shadow-[#FF878C]/10 hover:shadow-xl animation font-satoshi-medium text-center'>
                  Don't have an account? <span>Register</span>
               </Link>
            </div>
         </div>
      </>
  )
}

export default page
