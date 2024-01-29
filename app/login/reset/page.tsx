"use client";
import AuthLayout from "@/app/Layouts/AuthLayout";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useFormik } from "formik";
import { validateSchemaReset } from "@/validation/Signin-validation";
import { ResetSchemaType } from "@/types/type";
import { useMutation } from "@tanstack/react-query";
import { ResetPassword } from "@/APIs/Auth-API";
import { useRouter } from "next/navigation";

export default function Reset() {
  const router = useRouter();

  const resetPasswordFormik = useFormik<ResetSchemaType>({
    initialValues: {
      password: "",
      confirmPassword: "",
    },

    validationSchema: validateSchemaReset,
    validateOnChange: false,
    validateOnBlur: true,

    onSubmit: (values) => {
      console.log(values);
      const token = localStorage.getItem("token");
      if (token) {
        mutate({
          password: values.password,
          confirmPassword: values.confirmPassword,
          token: token,
        });
      }
    },
  });

  const { mutate, error, reset, status } = useMutation({
    mutationFn: ResetPassword,
    onError: (error) => {
      console.log(error.message);
      setTimeout(() => {
        reset();
      }, 3000);
    },

    onSuccess: (data: any) => {
      router.push("/login");
    },
  });

  return (
    <AuthLayout
      isLoading={status === "pending"}
      errorMessage={error?.message}
      title="Reset Password"
      subHeading="Create new password?"
      hasButton
      buttonText="Submit"
      onClick={resetPasswordFormik.handleSubmit}
    >
      <form action="">
        <div className="relative">
          <Input
            name="password"
            onChange={resetPasswordFormik.handleChange}
            onBlur={resetPasswordFormik.handleBlur}
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
        <br />
        <div className="relative">
          <Input
            name="confirmPassword"
            onBlur={resetPasswordFormik.handleBlur}
            onChange={resetPasswordFormik.handleChange}
            className=" bg-DarkLight  px-14  h-12  w-72 border-none  placeholder:text-TextColor text-TextColor "
            placeholder="Confrim Password"
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
      </form>
    </AuthLayout>
  );
}
