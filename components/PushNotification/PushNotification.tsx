'use client'

import { Input } from "../ui/input";

export default function PushInfomation() {
    return (
    <>
    <div>
            <div className="p-7">
              <div className="flex items-center space-x-10 ">
             

                <div className="flex items-center space-x-2">
                <Input id="terms" className="" />
                  <label htmlFor="terms">Selected Taskers</label>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 ">
            <div className="relative mt-3 px-6 ">
              <p className="absolute  text-xm text-PrimaryColor px-3 mt-2">
                Title
              </p>
              <div className="flex">
                <Input type="text" placeholder="Title here" className="h-16 rounded-lg bg-InputFieldColor pt-7 text-gray-400" />
                <div className="absolute"></div>
              </div>
            </div>
            <div className="relative mt-3 px-6 ">
              <p className="absolute  text-xm text-PrimaryColor px-3 mt-2">
                To
              </p>
              <div className="flex">
                <Input type="text" placeholder="user email" className="h-16 rounded-lg bg-InputFieldColor pt-7 text-gray-400" />
                <div className="absolute"></div>
              </div>
            </div>
          </div></>);
  }
