"use client";
import { DeleteCommunities, GetCommunities } from "@/APIs/dashboard-API";
import DashboardLayout from "@/app/Layouts/DashboardLayout";
import GuidelineLayout from "@/app/Layouts/GuidelineLayout";
import DeleteCommunity from "@/components/DeleteCommunity/DeleteCommunity";
import { CommunityLoading } from "@/components/Loading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CommunityType } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

export default function Community() {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    if (!token) {
      redirect('login');
    }
  }, [token]);


  const {
    data,
    isLoading,
  }: { data: CommunityType | undefined; isLoading: boolean } = useQuery({
    queryKey: ["FetchCommunities"],
    queryFn: () => GetCommunities({ token: token! }),
  });

  if (isLoading) {
    return <CommunityLoading Active={5} />;
  }

  return (
    <>
      <DashboardLayout Active={5}>
        <GuidelineLayout Active={5} onSaveFunction={() => console.log("")}>
          <div className="h-screen pl-8  bg-backColor p-10">
            <h2 className="text-white text-3xl ">Community</h2>

            <div className="flex flex-row justify-between mt-7">
              <Button className="bg-ButtonBlue rounded-3xl text-white px-10">
                <Link href={"/guideline/community/Posts"}>post</Link>
              </Button>
              <Button className="bg-ButtonBlue rounded-3xl text-white px-10">
                <Link href={"/guideline/community/addCommunity"}>
                  Add Community
                </Link>
              </Button>
            </div>

            <div className="flex-col space-y-4 mt-10">
              {/* <Communities /> */}
              {data?.communities.length === 0 ? (
                <p>No Communities Found</p>
              ) : (
                data?.communities.map((item) => {
                  return (
                    <div className="flex justify-between " key={item._id}>
                      <div className="flex gap-2 ">
                        <Avatar>
                          <AvatarImage
                            src={`https://fitcircle-life-bucket.s3.us-west-1.amazonaws.com/${item.image}`}
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-TextColor3 text-xs">{item.name}</p>
                          <p className="pt-2 text-TextColor3 text-xs opacity-50">
                            {item.members.length} Members
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Image
                          src={"/assets/Icon/Pancel.png"}
                          alt=""
                          width={42}
                          height={20}
                        />
                        <DeleteCommunity id={item._id} token={token!} />
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </GuidelineLayout>
      </DashboardLayout>
    </>
  );
}
