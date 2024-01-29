"use client";
import DashboardLayout from "@/app/Layouts/DashboardLayout";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import { FetchSingleTrainer } from "@/APIs/dashboard-API";
import { Certificate, Interest, Trainer } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { UserLoading } from "@/components/Loading";

export default function Page({ params }: { params: { id: string } }) {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const {
    isLoading,
    error,
    data,
  }: { data: Trainer | undefined; error: any; isLoading: boolean } = useQuery({
    queryKey: ["FetchSingleTrainer", params.id],
    queryFn: () => FetchSingleTrainer({ token: token!, id: params.id }),
  });

  if (isLoading) {
    return (
      <DashboardLayout Active={3}>
        <UserLoading />
      </DashboardLayout>
    );
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  console.log(data);

  return (
    <DashboardLayout Active={3}>
      <div className="min-h-screen w-full bg-black bg-opacity-85 p-14">
        <h1 className="text-3xl font-bold text-TextColor3">Coaches</h1>

        <div className="flex gap-4 mt-5 items-center">
          <Link href={"/coaches"}>
            <Image
              src={"/assets/icon/UserArrows.png"}
              alt=""
              width={8}
              height={10}
            />
          </Link>
          <p className="text-TextColor3">User Detail</p>
        </div>
        <div className="flex gap-2 mt-5">
          <Avatar>
            <AvatarImage
              src={`https://fitcircle-life-bucket.s3.us-west-1.amazonaws.com/${data?.data[0].profileImage}`}
            />
            <AvatarFallback>
              {" "}
              <Image
                src={"/assets/Image/noProfile.png"}
                alt=""
                width={41}
                height={20}
              />
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-TextColor3 text-xs">{data?.data[0].firstName}</p>
            <p className="pt-2 text-TextColor3 text-xs opacity-50">
              {data?.data[0].email}
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-TextColor3 font-semibold mt-10">
            Personal Details
          </h1>

          <div className="flex justify-start gap-32">
            <div className="flex flex-col gap-6 mt-8">
              <div className="flex gap-32">
                <p className="text-TextColor3 text-sm w-24">Email Address</p>
                <p className="text-TextColor3 opacity-50 text-sm">
                  {data?.data[0]?.email || "-"}
                </p>
              </div>
              <div className="flex gap-32">
                <p className="text-TextColor3 text-sm w-24 inline-block">
                  Phone number
                </p>
                <p className="text-TextColor3 opacity-50 text-sm">
                  {data?.data[0]?.phone || "-"}
                </p>
              </div>
              <div className="flex gap-32">
                <p className="text-TextColor3 text-sm w-24">Location</p>
                <p className="text-TextColor3 opacity-50 text-sm">
                  {data?.data[0]?.city || "-"}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 mt-8">
              <div className="flex gap-32">
                <p className="text-TextColor3 text-sm w-24">Age</p>
                <p className="text-TextColor3 opacity-50 text-sm">
                  {data?.data[0]?.age || "-"}
                </p>
              </div>
              <div className="flex gap-32">
                <p className="text-TextColor3 text-sm w-24 inline-block">Sex</p>
                <p className="text-TextColor3 opacity-50 text-sm">
                  {data?.data[0]?.gender || "-"}
                </p>
              </div>
              <div className="flex gap-32">
                <p className="text-TextColor3 text-sm w-24">Interests</p>
                {data?.data[0]?.interests &&
                data.data[0].interests.length > 1 ? (
                  <div className="flex ">
                    <p className="text-TextColor3 text-sm w-24">Interests</p>
                    <p className="text-TextColor3 opacity-50 text-sm">
                      <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center border-1 border-black">
                          Interests <ChevronDown size={15} />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuSeparator />
                          {data.data[0].interests.map((interest: Interest) => (
                            <>
                              <DropdownMenuItem className="text-sm">
                                {interest.name}
                              </DropdownMenuItem>
                              <Separator className="my-2" />
                            </>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </p>
                  </div>
                ) : (
                  <p className="text-TextColor3">No interest found</p>
                )}
              </div>
            </div>
            <div></div>
          </div>

          <div>
            <h1 className="text-TextColor3 font-semibold mt-10">
              Experience Details
            </h1>
            <div className="flex flex-col gap-6 mt-8">
              <div className="flex gap-32">
                <p className="text-TextColor3 text-sm w-24">Rate/hour</p>
                <p className=" opacity-50 text-sm text-green-500">
                  {`$${data?.data[0]?.hourlyRate}` || "-"}
                </p>
              </div>
              <div className="flex gap-32">
                <p className="text-TextColor3 text-sm w-24 inline-block">
                  Experience
                </p>
                <p className="text-TextColor3 opacity-50 text-sm">-</p>
              </div>
              <div className="flex gap-32">
                <p className="text-TextColor3 text-sm w-24">Booked</p>
                <p className="text-TextColor3 opacity-50 text-sm">
                  {data?.data[0]?.age || "-"}
                </p>
              </div>
            </div>
          </div>
          <div className=" w-[30%]  mt-10">
            <h1 className="text-TextColor3 font-semibold text-md">Videos</h1>

            {data?.data[0]?.posts && data?.data[0]?.posts.length > 0 ? (
              <div className="flex gap-1 mt-6 flex-wrap">
                {data?.data[0]?.posts.map((post) => (
                  <video
                  key={post._id}
                    className="object-cover"
                    src={`https://fitcircle-life-bucket.s3.us-west-1.amazonaws.com/${post.media}`}
                    width={90}
                    height={80}
                  />
                ))}
              </div>
            ) : (
              <p className="text-TextColor3 mt-5 text-md">-</p>
            )}
          </div>

          <div className="w-[30%] mt-10">
            <h1 className="text-TextColor3 font-semibold">Certificate</h1>

            {data?.data[0]?.certificates &&
            data?.data[0]?.certificates.length > 0 ? (
              <div className="flex gap-1 mt-6 flex-wrap">
                {data?.data[0]?.certificates.map((certificate: Certificate,index) => (
                  <Image
                  key={index}
                    src={`https://fitcircle-life-bucket.s3.us-west-1.amazonaws.com/${certificate}`}
                    alt={"Certificate"}
                    width={90}
                    height={40}
                  />
                ))}
              </div>
            ) : (
              <p className="text-TextColor3 mt-5 text-md">-</p>
            )}
          </div>

          <div className="mt-10">
            <h1 className="text-TextColor3 font-semibold ">
              Social Media Accounts
            </h1>
            {data?.data[0].socialMediaLinks &&
            data?.data[0].socialMediaLinks.length > 0 ? (
              <div className="flex flex-col gap-5 ">
                <div className="flex  gap-4 flex-col pt-5">
                  {/* Replace 'icon' with your actual icon component or image */}
                  {data?.data[0].socialMediaLinks.map((link: any,index) => (
                    <div className="flex gap-4" key={index}>
                      <Image
                        src={`/assets/Icon/${link.name}.png`}
                        alt="Logo"
                        width={30}
                        height={30}
                      />
                      {/* User account link */}
                      <a
                        href={link.link}
                        className="text-LinksColor font-bold  hover:underline"
                      >
                        {link.link}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-TextColor3 mt-5 text-md">-</p>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
