import Image from "next/image";
import Link from "next/link";
import BackgroundPicture from "@/public/assets/Image/BackgroundPicture.png";
import Logo from "@/public/assets/Image/Logo.png";
import { Button } from "@/components/ui/button";

export default function UserSkeleton() {
  return (
    <>
      <div className="w-full min-h-screen relative">
        <Image
          src={BackgroundPicture}
          alt="Background-image"
          layout="fill"
          className="shadow-2xl "
          objectFit="cover"
          objectPosition="10% 20%"
        />
        <span className="absolute top-0 left-0 w-full h-full  bg-BackGroundImageColor opacity-30 shadow"></span>
        <span className="absolute top-0 left-0 w-full h-full  bg-black opacity-30 "></span>

        <div className="z-10 flex items-center justify-center relative h-full pt-[19%] gap-2">
          <div className="text-center">
            <Image
              src={Logo}
              alt="Logo"
              width={108}
              height={108}
              className="mx-auto"
            />
            <h1 className="text-white pt-10 text-3xl font-semibold  leading-[43.57px]">
              Welcome to Find Admin Portal
            </h1>
            <div className="mt-[40%]">
              <Button className="px-[109px] py-[14px]  bg-ButtonBlue rounded-xl text-sm">
                <Link href={"/login"} className="text-white">
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
