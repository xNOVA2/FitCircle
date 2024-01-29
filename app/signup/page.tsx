"use client";
import React from "react";
import AuthLayout from "../Layouts/AuthLayout";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useFormik } from "formik";
import { adminFormikType } from "@/types/type";
import { validateSchemaSignUp } from "@/validation/Signin-validation";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { SignUpAPI } from "@/APIs/Auth-API";

export default function SigninUp() {
  const router = useRouter();

  const adminFormik = useFormik<adminFormikType>({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validateSchemaSignUp,
    validateOnChange: false,
    validateOnBlur: true,

    onSubmit: (values) => {
      console.log(values);

      mutate({
        fullName: values.fullName,
        email: values.email,
        password: values.password,
        phoneNumber: values.phoneNumber,
      });
    },

  });
    // react query mutation

  const { mutate, error, reset,status  } = useMutation({
    mutationFn: SignUpAPI,
    // onSuccess: Handle success if needed,
    // onError: Handle error if needed,
    onError: (error) => {
      console.log(error.message);
      setTimeout(() => {
        reset();
      }, 3000);
    },

    onSuccess: (data: any) => {

      router.push("/signup/done");
    },
  });

  return (
    <AuthLayout
    
      title="Create Admin Account"
      hasButton
      errorMessage={error?.message}
      buttonText="Create Account "
      additionalText="Already have an account?"
      additionalLink="Login"
      isLoading={status === "pending"}
      onClick={adminFormik.handleSubmit}
    >
      <form action="">
        <div className="relative">
          <Input
            onChange={adminFormik.handleChange}
            onBlur={adminFormik.handleBlur}
            name="fullName"
            className=" bg-DarkLight  px-14  h-12  w-72 border-none  placeholder:text-TextColor text-TextColor"
            placeholder="Full name"
          />
          <Image
            src={"/assets/Icon/Line.svg"}
            alt="Filter Icon"
            width={1.7}
            height={1}
            className="absolute top-0 left-11"
          />

          <Image
            src={"/assets/Icon/User.svg"}
            alt="Filter Icon"
            width={23}
            height={14}
            className="absolute top-3 left-3  "
          />
        </div>
        <span className="text-sm  text-red-500 ">
          {adminFormik.touched.fullName && adminFormik.errors.fullName
            ? adminFormik.errors.fullName
            : ""}
        </span>
        <br />
        <div className="relative">
          <Input
            onChange={adminFormik.handleChange}
            onBlur={adminFormik.handleBlur}
            name="email"
            className=" bg-DarkLight  px-14  h-12  w-72 border-none  placeholder:text-TextColor text-TextColor"
            placeholder="Email Address"
          />
          <Image
            src={"/assets/Icon/Line.svg"}
            alt="Filter Icon"
            width={1.7}
            height={1}
            className="absolute top-0 left-11"
          />

          <Image
            src={"/assets/Icon/Email.svg"}
            alt="Filter Icon"
            width={23}
            height={14}
            className="absolute top-3 left-3  "
          />
        </div>
        <span className="text-sm  text-red-500  ">
          {adminFormik.touched.email && adminFormik.errors.email
            ? adminFormik.errors.email
            : ""}
        </span>
        <br />

        <div className="relative">
          <Input
            onChange={adminFormik.handleChange}
            onBlur={adminFormik.handleBlur}
            name="phoneNumber"
            className=" bg-DarkLight  px-14  h-12  w-72 border-none  placeholder:text-TextColor text-TextColor"
            placeholder="Phone number"
          />
          <Image
            src={"/assets/Icon/Line.svg"}
            alt="Filter Icon"
            width={1.7}
            height={1}
            className="absolute top-0 left-11"
          />

          <Image
            src={"/assets/Icon/SmartPhone.svg"}
            alt="Filter Icon"
            width={23}
            height={14}
            className="absolute top-3 left-3  "
          />
        </div>
        <span className="text-sm  text-red-500  mt-5">
          {adminFormik.touched.phoneNumber && adminFormik.errors.phoneNumber
            ? adminFormik.errors.phoneNumber
            : ""}
        </span>
        <br />

        <div className="relative">
          <Input
            onChange={adminFormik.handleChange}
            onBlur={adminFormik.handleBlur}
            name="password"
            className=" bg-DarkLight  px-14  h-12  w-72 border-none  placeholder:text-TextColor text-TextColor"
            placeholder="Password"
          />
          <Image
            src={"/assets/Icon/Line.svg"}
            alt="Filter Icon"
            width={1.7}
            height={1}
            className="absolute top-0 left-11"
          />

          <Image
            src={"/assets/Icon/lock.svg"}
            alt="Filter Icon"
            width={23}
            height={14}
            className="absolute top-3 left-3  "
          />
        </div>
        <span className="text-sm  text-red-500  mt-5">
          {adminFormik.touched.password && adminFormik.errors.password
            ? adminFormik.errors.password
            : ""}
        </span>
        <br />

        <div className="relative">
          <Input
            onChange={adminFormik.handleChange}
            onBlur={adminFormik.handleBlur}
            name="confirmPassword"
            className=" bg-DarkLight  px-14  h-12  w-72 border-none  placeholder:text-TextColor text-TextColor"
            placeholder="Confirm Password"
          />
          <Image
            src={"/assets/Icon/Line.svg"}
            alt="Filter Icon"
            width={1.7}
            height={1}
            className="absolute top-0 left-11"
          />

          <Image
            src={"/assets/Icon/lock.svg"}
            alt="Filter Icon"
            width={23}
            height={14}
            className="absolute top-3 left-3  "
          />
        </div>
        <span className="text-sm  text-red-500  mt-5">
          {adminFormik.touched.confirmPassword &&
          adminFormik.errors.confirmPassword
            ? adminFormik.errors.confirmPassword
            : ""}
        </span>
      </form>
    </AuthLayout>
  );
}
