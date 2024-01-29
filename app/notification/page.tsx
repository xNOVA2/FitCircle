'use client'
import React from "react";
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

export default function page() {
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
              <DatePicker />
            </div>
            <div className=" flex gap-1 items-center justify-between w-full ">
              <div>
                <input
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
                <Select>
                  <SelectTrigger className="w-[180px] bg-DarkLight border-0 text-TextColor3 rounded-lg">
                    <SelectValue placeholder="Select Interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-[180px] bg-DarkLight border-0 text-TextColor3 rounded-lg">
                    <SelectValue placeholder="Community" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Input className={`w-full  py-8 border-0 rounded-full text-TextColor3 placeholder:text-TextColor3  bg-DarkLight`} placeholder="Push Notification Title" type="text" />


              <div className=" bg-DarkLight mt-20 bg-opacity-45  ">
                
                <QuillToolbar isNotification/>

                <div className=" ">
                  <Editor isFaq={false} isNotification  value=""  onStateChange={()=>console.log("hello world")}/>
                </div>
              </div>

              <div className="flex justify-center mt-10">
                <button className="py-2 px-10 bg-ButtonBlue text-white rounded-3xl">Send Now</button>
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
