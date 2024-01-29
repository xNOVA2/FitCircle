"use client";
import { VerifyOTP } from "@/APIs/Auth-API";
import AuthLayout from "@/app/Layouts/AuthLayout";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const Varify = () => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const [otp, setOtp] = useState<string[]>(new Array(5).fill(""));
  const [activeOtpIndex, setactiveOtpIndex] = useState<number>(0);

  const handleChange = (
    { target }: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const { value } = target;
    const OTP: string[] = [...otp];
    OTP[index] = value.substring(value.length - 1);
    setOtp(OTP);
    if (!value) {
      setactiveOtpIndex(index - 1);
    } else {
      setactiveOtpIndex(index + 1);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIndex]);

  const { mutate, error, reset, status } = useMutation({
    mutationFn: VerifyOTP,
    // onSuccess: Handle success if needed,
    // onError: Handle error if needed,

    onError: (error) => {
      console.log(error.message);
      setTimeout(() => {
        reset();
      }, 3000);
    },

    onSuccess: (data: any) => {
      console.log(data);

      localStorage.setItem("token", data.data.accessToken);
      router.push("/login/reset");
    },
  });
  const handleVerifyOTP = () => {
    mutate({ otp: otp.join("") });
  };
  return (
    <AuthLayout
      title="Let's Varify You"
      buttonText="Varify"
      hasButton
      isLoading={status === "pending"}
      subHeading="Enter the 5-digit code we’ve sent to your email"
      errorMessage={error?.message}
      onClick={handleVerifyOTP}
    >
      <div className=" flex justify-center items-center space-x-4">
        {otp.map((_, index) => {
          return (
            <React.Fragment key={index}>
              <input
                ref={activeOtpIndex === index ? inputRef : null}
                type="number"
                placeholder="0"
                onChange={(e) => handleChange(e, index)}
                className=" w-12 h-12 bg-DarkLight rounded-lg text-center focus:outline-none text-TextColor"
                value={otp[index]}
              />
              {index === otp.length - 1 ? null : null}
            </React.Fragment>
          );
        })}
      </div>
    </AuthLayout>
  );
};

export default Varify;
