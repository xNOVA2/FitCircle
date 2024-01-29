"use client";
import React, { useState } from "react";
import Editor from "@/components/Editor";
import QuillToolbar from "@/components/toolBar";
import DashboardLayout from "@/app/Layouts/DashboardLayout";
import GuidelineLayout from "@/app/Layouts/GuidelineLayout";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ApiResponseFAQ } from "@/types/type";
import { InsertFAQs, getFAQ } from "@/APIs/dashboard-API";

export default function FAQ() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const token =
    typeof window != "undefined" ? localStorage.getItem("token") : null;
  const {
    isLoading,
    error,
    data,
  }: { data: ApiResponseFAQ | undefined; error: any; isLoading: boolean } =
    useQuery({
      queryKey: ["FetchFAQs"],
      queryFn: () => getFAQ({ token: token! }),
    });

  if (isLoading) {
    <p>loading...</p>;
  }

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["AddFAQ"],
    mutationFn: () => InsertFAQs({ token: token!, content: value }),
    onSuccess: () => {
      console.log("success");

      queryClient.invalidateQueries({ queryKey: ["FetchFAQs"] });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleSubmit = () => {
    mutate();
  };

  return (
    <DashboardLayout Active={5}>
      <GuidelineLayout Active={3} onSaveFunction={handleSubmit}>
        {open ? (
          <div className="bg-backColor  ">
            <div className="px-5">
              <hr />
            </div>
            <div className="bg-DarkLight pb-3 ">
              <QuillToolbar />
            </div>
          </div>
        ) : null}
        <div className="">
          <div className="bg-backColor  min-h-screen p-6">
            <div className="bg-DarkLight p-6  flex flex-col gap-5 min-h-screen">
              {open ? (
                <Editor
                  value={""}
                  isFaq={true}
                  onStateChange={(newValue: string) => setValue(newValue)}
                />
              ) : null}
              {data?.faqs.map((item) => {
                return (
                  <div
                    className="bg-backColor  w-full  p-7   rounded-lg"
                    key={item._id}
                  >
                    <h1 className="text-white ">{item.title}</h1>
                    <p
                      className="mt-5 leading-8 text-white font-extralight"
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                  </div>
                );
              })}
              <div className="flex justify-end">
                <button
                  onClick={() => setOpen(!open)}
                  className="py-2 px-10 bg-ButtonBlue text-white rounded-3xl"
                >
                  {open === false ? "Add More" : "Cancel"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </GuidelineLayout>
    </DashboardLayout>
  );
}

{
  /* */
}
