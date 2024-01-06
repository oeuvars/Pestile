"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { trpc } from "@/app/_trpc/client";
import Cookies from "js-cookie";
import { parseJwt } from "@/server/helpers/decode";

const VerificationPage: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
  const oneTimePass = Number(otp.join(""));
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState<string>("");

  const verify = trpc.verify.useMutation();
  const router = useRouter();

  const handleOtpChange = ( e: React.ChangeEvent<HTMLInputElement>, index: number ) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    if (e.target.value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`)?.focus();
    }
    setOtp(newOtp);
  };
  useEffect(() => {
    const cookie = Cookies.get("newCookie");
    const currentMail = parseJwt(cookie!).email;
    setEmail(currentMail)
  })
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await verify.mutateAsync({ email: email, oneTimePass: oneTimePass });
      console.log(result)
       if (result) {
         router.push('/welcome')
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
    <div className="flex flex-col justify-between min-h-screen w-[60%] mx-auto mt-[7vw]">
      <div className="">
        <div className="flex flex-col phone:gap-2 lg:gap-3">
          <h1 className="text-5xl font-dynalight text-[#80796B]">Hey,</h1>
          <h1 className="font-gambarino text-[#1E1B13] text-5xl">
            Please verify your email.
          </h1>
        </div>

        <div className="flex justify-center space-x-3 mt-10">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              id={`otp-input-${index}`}
              className="w-16 h-16 text-center bg-[#FFFAF1] border-2 border-[#F1E9DF] text-[#1E1B13] outline-none font-satoshi-medium lower-card-shadow rounded-lg text-xl"
              value={digit}
              maxLength={1}
              onChange={(e) => handleOtpChange(e, index)}
            />
          ))}
        </div>
        <button
          onClick={handleClick}
          className={`flex bg-[#F99052] text-white px-6 py-2 rounded-lg border-2 font-satoshi-medium text-lg border-[#F1E9DF] hover:lower-card-shadow mt-10 w-[50%] mx-auto justify-center ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          <p className="text-center">{loading ? "Verifying..." : "Verify"}</p>
        </button>
      </div>
    </div>
  );
};

export default VerificationPage;
