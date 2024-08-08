"use client";
import React, { useCallback, useState } from "react";
import DashboardLayout from "../Layouts/DashboardLayout";
import Image from "next/image";
import { DatePicker } from "@/components/PushNotification/DataPicker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import QuillToolbar from "@/components/toolBar";
import Editor from "@/components/Editor";
import { FetchInterest, GetCommunities } from "@/APIs/dashboard-API";
import { CommunityType, InterestsResponse } from "@/types/type";
import { MutationFunction, useMutation, useQuery } from "@tanstack/react-query";
import { BaseURL } from "@/APIs/Auth-API";
import axios from "axios";

export default function page() {
  const [community, setCommunity] = useState("");
  const [interest, setInterest] = useState("");
  const [sendToAll, setSendToAll] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [date, setDate] = React.useState<Date>();
  const [error, setError] = useState("");
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const { data }: { data?: InterestsResponse; isLoading: boolean } = useQuery({
    queryKey: ["FetchInterests"],
    queryFn: () => FetchInterest({ token: token! }),
  });

  const {
    data: communities,
  }: { data: CommunityType | undefined; isLoading: boolean } = useQuery({
    queryKey: ["FetchCommunities"],
    queryFn: () => GetCommunities({ token: token! }),
  });

  const sendNotification: MutationFunction<unknown, any> = useCallback(
    async (body: any) => {
      console.log("🚀 ~ body:", body);
      try {
        const url = `${BaseURL}/notification`;

        const response = await axios.post(url, body, {
          headers: { accessToken: token },
        });

        if (response.status >= 200 && response.status < 300) {
          alert("Notification sent successfully");
          console.log(response.data.data);
        } else if (response.status === 422 || response.status === 409) {
          console.log(response.data);

          setError(response.data.message);
        } else {
          console.log(response.status);

          setError(`Request failed with status ${response.status}`);
        }
      } catch (error: any) {
        console.error("Error in sendNotification:", error);

        setError(error.response?.data?.message);
      }
    },
    []
  );

  const handleSend = async () => {
    if (!title) {
      setError("Title is required");
      return;
    }
    if (!description) {
      setError("Description is required");
      return;
    }

    setError("");
    sendNotification({
      title,
      message: description,
      interests: interest ? [interest] : [],
      communities: community ? [community] : [],
      sendToAll,
    });
  };

  return (
    <DashboardLayout Active={6}>
      <div className="bg-backColor min-h-screen ">
        <div className="p-10 flex justify-between">
          <h1 className="text-white text-3xl ">Push Notification</h1>
          <Image
            src={"/assets/Icon/number.png"}
            alt="Ring Icon"
            width={34}
            height={25}
          />
        </div>
        <div className="flex gap-1 justify-between mx-6 ">
          <div className="flex flex-col px-4 pt-10 gap-3 w-full">
            <div className=" flex justify-between">
              <p className="text-white">Choose where to send</p>
              <DatePicker date={date} setDate={setDate} />
            </div>
            <div className=" flex gap-1 items-center justify-between w-full ">
              <div>
                <input
                  onChange={() => setSendToAll((prev) => !prev)}
                  type="checkbox"
                  id="Notification"
                  className="checked:bg-textColor2 border-blue border-1 mr-3 p-3 rounded-lg  bg-DarkLight border-textColor2"
                />
                <label
                  htmlFor="Notification"
                  className="text-TextColor3 opacity-45"
                >
                  Send to all users
                </label>
              </div>

              <div className="flex gap-4">
                <Select onValueChange={setInterest}>
                  <SelectTrigger className="w-[180px] bg-DarkLight border-0 text-TextColor3 rounded-lg">
                    <SelectValue placeholder="Select Interest" />
                  </SelectTrigger>
                  <SelectContent>
                    {data?.interests?.map((e) => (
                      <SelectItem value={e?._id}>{e.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select onValueChange={setCommunity}>
                  <SelectTrigger className="w-[180px] bg-DarkLight border-0 text-TextColor3 rounded-lg">
                    <SelectValue placeholder="Community" />
                  </SelectTrigger>
                  <SelectContent>
                    {communities?.communities.map((e) => (
                      <SelectItem value={e?._id}>{e?.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className={`w-full  py-8 border-0 rounded-full text-TextColor3 placeholder:text-TextColor3  bg-DarkLight`}
              placeholder="Push Notification Title"
              type="text"
            />

            <div className=" bg-DarkLight mt-20 bg-opacity-45  ">
              <QuillToolbar isNotification />

              <div className=" ">
                <Editor
                  isFaq={false}
                  isNotification
                  value={description}
                  onStateChange={setDesc}
                />
              </div>
            </div>

            <div className="flex flex-col justify-center items-center mt-10 gap-3 mb-4">
              <p className="text-red-500  text-sm font-semibold mt-2 ">
                {error ?? ""}
              </p>

              <button
                onClick={handleSend}
                className="py-2 px-10 bg-ButtonBlue text-white rounded-3xl"
              >
                Send Now
              </button>
            </div>
          </div>
          <div className="w-[450px]  rounded-3xl h-[700px]   bg-DarkLight  p-10 mt-10">
            <p className="mb-5 text-lg font-semibold text-white">History</p>
            <div className="flex flex-col space-y-4 border-l border-dashed  border-black">
              <div className="flex items-center gap-4 px-3 ">
                <p className="text-xs text-TextColor3  ">10/19/2022</p>
                <p className="text-xs text-TextColor3">Notification was sent</p>
              </div>
              <div className="flex items-center gap-4 px-3 ">
                <p className="text-xs text-TextColor3">10/19/2022</p>
                <p className="text-xs text-TextColor3">Notification was sent</p>
              </div>
              <div className="flex items-center gap-4 px-3 ">
                <p className="text-xs text-TextColor3">10/19/2022</p>
                <p className="text-xs text-TextColor3">Notification was sent</p>
              </div>
              <div className="flex items-center gap-4 px-3 ">
                <p className="text-xs text-TextColor3">10/19/2022</p>
                <p className="text-xs text-TextColor3">Notification was sent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
