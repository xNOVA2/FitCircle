"use client";
import { Input } from "@/components/ui/input";
import AuthLayout from "../Layouts/AuthLayout";
import Image from "next/image";
import { useFormik } from "formik";
import { validateSchemaSignIn } from "@/validation/Signin-validation";
import { useMutation } from "@tanstack/react-query";
import { LoginAPI } from "@/APIs/Auth-API";
import { useRouter } from "next/navigation";
import { SignInValues } from "@/types/type";

export default function Login() {
  const router = useRouter();

  const formik = useFormik<SignInValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validateSchemaSignIn,
    validateOnChange: false,
    validateOnBlur: true,

    onSubmit: (values) => {
      console.log(values);
      mutate({ email: values.email, password: values.password });
    },
  });

  const { mutate, error, reset, status } = useMutation({
    mutationFn: LoginAPI,
    // onSuccess: Handle success if needed,
    // onError: Handle error if needed,
    onError: (error) => {
      console.log(error.message);
      setTimeout(() => {
        reset();
      }, 3000);
    },

    onSuccess: (data: any) => {
      localStorage.setItem("token", data.data.accessToken);
      router.push("/dashboard");
    },
  });

  return (
    <AuthLayout
      isLoading={status === "pending"}
      title="Sign in to your account"
      buttonText="Login"
      additionalText="dont have an account"
      additionalLink="Create here"
      forgetPassword
      hasButton
      onClick={() => formik.handleSubmit()}
      errorMessage={error?.message}
    >
      <form action="">
        <div className="relative">
          <Input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className=" bg-DarkLight  px-14  h-12  w-72 border-none  placeholder:text-TextColor text-TextColor rounded-lg"
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
          {formik.touched.email && formik.errors.email
            ? formik.errors.email
            : ""}
        </span>
        <br />
        <div className="relative">
          <Input
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
          {formik.touched.password && formik.errors.password
            ? formik.errors.password
            : ""}
        </span>
      </form>
    </AuthLayout>
  );
}
