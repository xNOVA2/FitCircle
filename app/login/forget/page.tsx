"use client";
import { ForgetEmail } from "@/APIs/Auth-API";
import AuthLayout from "@/app/Layouts/AuthLayout";
import { Input } from "@/components/ui/input";
import { ForgetSchemaType } from "@/types/type";
import { forgetValidation } from "@/validation/Signin-validation";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Forget() {
  const router = useRouter();
  const forgetFormik = useFormik<ForgetSchemaType>({
    initialValues: {
      email: "",
    },

    validationSchema: forgetValidation,
    validateOnChange: false,
    validateOnBlur: true,

    onSubmit: (values) => {
      console.log(values);
      mutate({ email: values.email });
    },
  });

  const { mutate, error, reset,status } = useMutation({
    mutationFn: ForgetEmail,

    onError: (error) => {
      console.log(error.message);
      setTimeout(() => {
        reset();
      }, 3000);
    },

    onSuccess: (data: any) => {
      console.log(data);

      router.push("/login/varify");
    },
  });

  return (
    <AuthLayout
    isLoading={status === 'pending'}
      buttonText="Submit"
      subHeading="Enter your email address so we can send you a verification code"
      title="Forget your password?"
      errorMessage={error?.message}
      hasButton
      onClick={forgetFormik.handleSubmit}
    >
      <form action="">
        <div className="relative">
          <Input
            onChange={forgetFormik.handleChange}
            onBlur={forgetFormik.handleBlur}
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
        <span className="text-sm  text-red-500  mt-5">
          {forgetFormik.touched.email && forgetFormik.errors.email
            ? forgetFormik.errors.email
            : ""}
        </span>
      </form>
    </AuthLayout>
  );
}
