import AuthLayout from "@/app/Layouts/AuthLayout";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Done() {
  return (
    <AuthLayout title="" buttonText="">
      <div className="flex flex-col items-center justify-center gap-5">
        <Image src={"/assets/Image/done.png"} alt="" width={60} height={50} />
        <h1 className=" text-white text-sm font-bold">
          Account has created successful
        </h1>

        <Button className="bg-ButtonBlue py-6  rounded-xl mt-10  w-72">
          <Link href={"/login"}>Login</Link>
        </Button>
      </div>
    </AuthLayout>
  );
}
