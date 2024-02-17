"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import { trpc } from "@/app/_trpc/client";
import Cookies from "js-cookie";
import Navbar from "@/app/home/navbar/navbar";
import { motion } from "framer-motion"
import { jwtDecode } from "jwt-decode";
import DownFooter from "@/app/home/downfooter";

interface Payload {
  email: string;
  exp: number;
  iat: number
}

const VerificationPage: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState<string>("");
  const otpBoxReference = useRef<(HTMLInputElement | null)[]>(new Array(3).fill(null));

  const verify = trpc.verify.useMutation();
  const router = useRouter();

  useEffect(() => {
    const cookie = Cookies.get("RegisterCookie");
    if (cookie) {
      const payload: Payload = jwtDecode(cookie);
      setEmail(payload.email)
    }
    else {
      router.push("/auth/register")
    }
  }, [])

  function handleBackspaceAndEnter(e: React.KeyboardEvent<HTMLInputElement>, index: number) {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      otpBoxReference.current[index - 1]!.focus();
    }
    if (e.key === "Enter" && e.currentTarget.value && index < 3) {
      otpBoxReference.current[index + 1]!.focus();
    }
  }

  function handleChange(value: string, index: number) {
    let newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);

    if (value && index < 3) {
      otpBoxReference.current[index + 1]!.focus();
    }
  }
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    const oneTimePass = otp.join("")
    try {
      const result = await verify.mutateAsync({ email: email, oneTimePass: Number(oneTimePass) });
       if (result) {
         router.push('/services')
         toast.success("You are Verified!", {
            style: {
              border: "2px solid rgba(255, 255, 255, 0.1)",
              padding: "10px",
              color: "#fff",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(10px)",
              fontSize: '1.1em',
              minWidth: "10em",
            },
            iconTheme: {
              primary: "#000",
              secondary: "#fff",
            },
          });
       } else {
         console.error('Verification failed');
         toast.error("Please put the correct OTP.", {
            style: {
              border: "2px solid rgba(255, 255, 255, 0.1)",
              padding: "10px",
              color: "#fff",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(10px)",
              fontSize: '1.1em',
              width: "50em",
            },
            iconTheme: {
              primary: "#000",
              secondary: "#fff",
            },
          });
       }
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <div className="phone:w-[90%] tablet:w-[60%] mx-auto phone:my-[7vh] tablet:my-[7vw]">
        <div className="flex flex-col mt-10">
          <h1 className="text-5xl font-dynalight text-[#80796B] text-center">Hey,</h1>
          <h1 className="gradient-text phone:text-3xl tablet:text-5xl font-medium leading-relaxed text-center tracking-tight font-gambarino text-[#1E1B13]">
            Please verify your email.
          </h1>
        </div>
        <motion.div className="flex justify-center space-x-3 mt-7">
          {otp.map((digit, index) => (
            <input
              key={index}
              value={digit}
              maxLength={1}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
              ref={(reference) => (otpBoxReference.current[index] = reference)}
              className="w-16 h-16 text-center bg-[#FFFAF1] border-2 border-[#F1E9DF] text-[#1E1B13] outline-none font-satoshi-medium lower-card-shadow rounded-lg text-xl"
            />
          ))}
        </motion.div>
        <Toaster position="bottom-center" />
        <button
          onClick={handleClick}
          className={`flex bg-[#F99052] text-white px-6 py-2 rounded-lg border-2 font-satoshi-medium text-lg border-[#F1E9DF] hover:lower-card-shadow mt-10 w-[50%] mx-auto justify-center ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          <p className="text-center text-[#FAFAFA]">{loading ? "Verifying..." : "Verify"}</p>
        </button>
      </div>
      <DownFooter />
    </div>
  );
};

export default VerificationPage;
