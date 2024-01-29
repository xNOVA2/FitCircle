"use client";
import DashboardLayout from "@/app/Layouts/DashboardLayout";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { FetchSingleUser, fetchUserTrascation } from "@/APIs/dashboard-API";
import { UserProfile, trascation } from "@/types/type";
import { ChevronDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { UserLoading } from "@/components/Loading";

export default function Page({ params }: { params: { id: string } }) {
  
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: userData,
  }: {
    data: UserProfile | undefined;
    error: any;
    isLoading: boolean;
  } = useQuery({
    queryKey: ["FetchSingleUser", params.id],
    queryFn: () => FetchSingleUser({ token: token!, id: params.id }),
  });

  const {
    isLoading: isLoadingTransaction,
    data: transactionData,
  }: {
    data: trascation | undefined;
    isLoading: boolean;
  } = useQuery({
    queryKey: ["FetchSingleUserTrascation", params.id],
    queryFn: () => fetchUserTrascation({ token: token!, id: params.id }),
  });

  const imgProfileURL = `https://fitcircle-life-bucket.s3.us-west-1.amazonaws.com/${userData?.data.profileImage}`;

  if (isLoadingUser || isLoadingTransaction) {
    return (
      <DashboardLayout>
        <UserLoading />
      </DashboardLayout>
    );
  }
  return (
    <DashboardLayout Active={2}>
      <div className="h-screen w-full bg-black bg-opacity-85 p-14">
        <h1 className="text-3xl font-bold text-TextColor3">Users</h1>

        <div className="flex gap-4 mt-5 items-center">
          <Link href={"/users"}>
            <Image
              src={"/assets/icon/UserArrow.svg"}
              alt=""
              width={8}
              height={10}
            />
          </Link>
          <p className="text-TextColor3 text-xl font-semibold">User Details</p>
        </div>
        <div className="flex gap-2 mt-5">
          <Avatar>
            <AvatarImage src={imgProfileURL} />
            <AvatarFallback>
              <Image
                src={"/assets/Image/noProfile.png"}
                alt=""
                width={41}
                height={20}
              />
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-TextColor3 text-sm">{userData?.data.username}</p>
            <p className="pt-1 text-TextColor3 text-sm opacity-50">
              {userData?.data.email}
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-TextColor3 font-semibold mt-10 text-lg">
            Personal Details
          </h1>

          <div className="flex justify-between">
            <div className="flex flex-col gap-9 mt-8">
              <div className="flex gap-52">
                <p className="text-TextColor3 text-sm w-24">Email Address</p>
                <p className="text-TextColor3 opacity-50 text-sm">
                  {userData?.data.email}
                </p>
              </div>
              <div className="flex gap-52">
                <p className="text-TextColor3 text-xs w-24 inline-block">
                  Phone number
                </p>
                <p className="text-TextColor3 opacity-50 text-sm">
                  {userData?.data.completePhone}
                </p>
              </div>
              <div className="flex gap-52">
                <p className="text-TextColor3 text-sm w-24">Country</p>
                <p className="text-TextColor3 opacity-50 text-sm">
                  {userData?.data.country}
                </p>
              </div>
              <div className="flex gap-52">
                <p className="text-TextColor3 text-sm w-24">City</p>
                <p className="text-TextColor3 opacity-50 text-sm">
                  {" "}
                  {userData?.data.city}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-9 mt-8">
              <div className="flex gap-52">
                <p className="text-TextColor3 text-sm w-24">Age</p>
                <p className="text-TextColor3 opacity-50 text-sm">
                  {userData?.data.age}
                </p>
              </div>
              <div className="flex gap-52">
                <p className="text-TextColor3 text-xs w-24 inline-block">Sex</p>
                <p className="text-TextColor3 opacity-50 text-sm">
                  {userData?.data.gender}
                </p>
              </div>
              {userData?.data.interests &&
              userData.data.interests.length > 1 ? (
                <div className="flex gap-52">
                  <p className="text-TextColor3 text-sm w-24">Interests</p>
                  <p className="text-TextColor3 opacity-50 text-sm">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center border-1 border-black">
                        Interests <ChevronDown size={15} />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuSeparator />
                        {userData.data.interests.map((interest) => (
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

            <div></div>
          </div>
          <div>
            {!transactionData?.transactions ? (
              <h1 className="text-TextColor3 font-semibold mt-10 text-lg">
                No Transaction Found
              </h1>
            ) : (
              <div>
                <h1 className="text-TextColor3 font-semibold mt-10">
                  Transaction History
                </h1>

                <div className="flex gap-24 mt-8">
                  {transactionData.transactions.map((transaction) => (
                    <div
                      className="flex gap-24 items-center"
                      key={transaction.createdAt}
                    >
                      <div className="flex gap-10">
                        <div className="flex flex-col gap-2">
                          <h1 className="text-TextColor3 opacity-50 text-sm">
                            Type
                          </h1>
                          <p className="mt-1 text-TextColor3 text-sm">
                            {transaction.type}
                          </p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <h1 className="text-TextColor3 opacity-50 text-sm">
                            Date
                          </h1>
                          <p className="mt-1 text-TextColor3 text-sm">
                            {transaction.createdAt}
                          </p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <h1 className="text-TextColor3 opacity-50 text-sm">
                            Time
                          </h1>

                          <p className="mt-1 text-TextColor3 text-sm">
                            {new Date(
                              transaction.createdAt
                            ).toLocaleTimeString()}
                          </p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <h1 className="text-TextColor3 opacity-50 text-sm">
                            Amount
                          </h1>
                          <p className="mt-1 text-TextColor3 text-sm">{`${transaction.amount}$`}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
