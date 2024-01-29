"use client";
import React, { useState } from "react";
import Editor from "@/components/Editor";
import QuillToolbar from "@/components/toolBar";
import DashboardLayout from "@/app/Layouts/DashboardLayout";
import GuidelineLayout from "@/app/Layouts/GuidelineLayout";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ApiResponsePrivacyPolicy } from "@/types/type";
import { Privacy, PrivacyPolicy } from "@/APIs/dashboard-API";
import { GuidelineLoading } from "@/components/Loading";

export default function PrivacyPage() {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  // if (!token) {
  //   return redirect("/login");
  // }
  const [Value, setValue] = useState("");

  const queryClient = useQueryClient();
  const { reset, mutate } = useMutation({
    mutationKey: ["AddPrivacy"],
    mutationFn: () => PrivacyPolicy({ token: token!, content: Value }),
    onSuccess: () => {
      console.log("success");
      
      reset();
      queryClient.invalidateQueries({ queryKey: ["FetchPrivacy"] });
    },
    onError: (error) => {
      console.log(error);
    }
  });
  const {
    isLoading,
    error,
    data,
  }: { data: ApiResponsePrivacyPolicy | undefined; error: any; isLoading: boolean } =
    useQuery({
      queryKey: ["FetchPrivacy"],
      queryFn: () => Privacy({ token: token! }),
    });

  // Manually trigger data fetching when needed


    console.log(data);
    
 

  const HandleSubmit = () => {
    console.log(Value);

    mutate();
  };
  if (isLoading) {
    return <GuidelineLoading Active={2}/>;
  }
  if (error) {
    console.log(error);
  }
  return (
    <DashboardLayout Active={5}>
      <GuidelineLayout Active={2} onSaveFunction={HandleSubmit}>
        <div className="bg-backColor  ">
          <div className="px-5">
            <hr />
          </div>
          <div className="bg-DarkLight pb-3 ">
            <QuillToolbar />
          </div>

          <div className="mx-5 mt-5 min-h-screen ">
            <Editor
              value={data?.policy?.content ?? ""}
              onStateChange={(newValue: string) => setValue(newValue)}
            />
          </div>
        </div>
      </GuidelineLayout>
    </DashboardLayout>
  );
}
