import { MutationFunction } from "@tanstack/react-query";
import axios from "axios"


export const BaseURL = "http://fitcircle.yameenyousuf.com/api";

export const LoginAPI: MutationFunction<
  unknown,
  { email: string; password: string }
> = async ({ email, password }) => {
  try {
    const res = await axios.post(`${BaseURL}/auth/login-admin`, {
      email,
      password,
    });
    
    return res.data
  } catch (error:any) {
    
    throw new Error(error.response.data.message)
  }
};

// forget password api 

export const ForgetEmail: MutationFunction<
  unknown,
  { email: string }
> = async ({email}:{email:string}) => {
  try {
    const res = await axios.post(`${BaseURL}/auth/send-code`, {
     email:email
    });
    console.log(res);
      console.log("email from method" , email);
      
    return res.data;
  } catch (error:any) {
    console.log(error);
    
    throw new Error(error.response.data.message);
  }
};


// verify OTP API

export const VerifyOTP: MutationFunction<
  unknown,
  { otp:string }
> = async ({otp}:{otp:string}) => {
  try {
    const res = await axios.put(`${BaseURL}/auth/verify-code`, {
     code:otp
    });
    console.log(res);
    
      
    return res.data;
  } catch (error:any) {
    console.log(error);
    throw new Error(error.response.data.message);
  }
}


// reset Password API
export const ResetPassword: MutationFunction<
  unknown,
  { password: string; confirmPassword: string; token: string }
> = async ({ password, confirmPassword, token }: { password: string; confirmPassword: string; token: string }) => {
  try {
    const res = await axios.put(`${BaseURL}/auth/reset-password`, {
      newPassword:password,
      confirmPassword,
    }, {
      headers: { accessToken:token }
    });
    console.log(res);
    return res.data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.response.data.message);
  }
};


// signup API

export const SignUpAPI: MutationFunction<
  unknown,
  { fullName: string; email: string; phoneNumber: string; password: string; }
> = async ({ fullName, email, phoneNumber, password }: { fullName: string; email: string; phoneNumber: string; password: string }) => {
  try {

    const res = await axios.post(`${BaseURL}/auth/register-admin`, {
      fullName,
      email,
      phone:phoneNumber,
      password,
    });
    console.log(res);

    return res.data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.response.data.message);
  }
};
