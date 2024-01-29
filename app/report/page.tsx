'use client'
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useRef } from "react";
import DashboardLayout from "../Layouts/DashboardLayout";
import Link from "next/link";

const SearchBar = () => {

  // Replace this with your actual search component
  return (
    <div>
      <div className="relative">
        <Input
          className=" bg-backColor py-6  px-9 placeholder:text-TextColor3 rounded-2xl"
          placeholder="Search History"
        />
        <Image
          src={"/assets/Icon/Search.svg"}
          alt="Filter Icon"
          width={19}
          height={10}
          className="absolute top-4 left-3 "
        />
      </div>
    </div>
  );
};

const UserList = () => {
  // Replace this with your actual user list component
  return (
    <div className="flex flex-col gap-10 ">
      <UserAvatar name="92RU29R" text="Lorem Ipsum is simply dummy text of..." />

      {/* Display list of users */}
    </div>
  );
};

const ChatScreen = () => {
  // Replace this with your actual chat screen component
  return (
    <div className="flex gap-1">
      <UserAvatar name="Mekanna Cruz" text="" />
    </div>
  );
};
const UserAvatar = ({ name, text }: { name: string; text: string }) => {
  return (
    <div className="flex items-center gap-1">
      <Image
        src={"/assets/Image/userPhoto.png"}
        alt=""
        width={45}
        height={45}
        className="rounded-full"
      />
      <div>
        <h3 className="font-bold">{name}</h3>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};

const MessageScreen = () => {
    const fileRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="flex flex-col  w-full ">
    <div className="flex-grow p-4  border-gray-300 max-h-[650px] min-h-[650px]  overflow-y-auto" >
        {/* Admin Messages on the left */}
        <p className="flex justify-center text-xs mb-5">8:00 AM</p>
    
    
       
        <div className="flex items-end mb-4 justify-end">
          <div className="w-[55%]">
            <p className="bg-DarkLight p-2  text-sm rounded-xl">
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
            </p>
          </div>
        </div>
      
   
     
        
        <div className="flex items-start mb-4 ">
          <div className="">
            <p className="bg-textColor2 rounded-xl p-2 text-white text-sm flex flex-wrap w-[70%]">
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
              qui esse pariatur duis deserunt mollit dolore cillum minim temporsadads  
            </p>
          </div>
          
        </div>
        
       
         
         
        
        {/* User Messages on the right (placeholder) */}
      </div>

      {/* Admin Input Field at the bottom */}
      <div className="flex-shrink-0 mb-5 mr-3 relative">
        <div className="flex items-center  ">
    <input type="file" id="fileInput" style={{ display: 'none' }} ref={fileRef} />
    <Image
        src={'/assets/Icon/Link.png'}
        alt="Message Icon"
        width={20}
        height={10}
        className="mr-2 absolute left-3 cursor-pointer"
        onClick={() => {
            fileRef.current?.click()
        }}
    />
    <Input
            type="text"
            placeholder="Type a message..."
            className="bg-backColor text-TextColor3 placeholder:text-TextColor3 rounded-md flex-grow mr-2 border px-10 py-[28px]   "          />
         <Image src={'/assets/Icon/send.png'} alt="Message Icon" width={35} height={10} className="cursor-pointer absolute right-5"/>
        </div>
      </div>
    </div>
  );
};


export default function Report() {
  return (
    <>
      <DashboardLayout Active={7}>
        <div className="flex-grow flex flex-col border-1 bg-backColor text-white  p-5 h-screen">
        <h1 className="font-bold text-4xl mb-2 p-5">Report</h1>

          <div className="flex-grow flex ">
            {/* Left Side: User List and Search */}

            <div className="w-[45%] p-5 border-r ">
              {/* Support Header */}
              {/* Subheading */}
              <div className="text-TextColor3 opacity-45 mb-5 flex justify-between">
              <span>
                <Link href={"/support"}>Message</Link>{" "}
                </span>
                <span>
                  <Link href={`/flagged`}>Flagged</Link>
                  </span>
                <span>
                  <Link href={"/report"} className="text-ButtonBlue font-bold">Report</Link>{" "}
                </span>
              </div>              {/* Search Bar */}
              <div className="mb-5">
                <SearchBar />
              </div>
              {/* User List */}
              <div>
                <UserList />
              </div>
            </div>

            {/* Right Side: Chat Screen */}

            <div className="w-[80%] px-5">
              <ChatScreen />
              <br />
              <hr />
              <MessageScreen />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}
