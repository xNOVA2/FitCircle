"use client";
import React, { useEffect, useState } from "react";
import DashboardLayout from "../Layouts/DashboardLayout";
import GuidelineLayout from "../Layouts/GuidelineLayout";
import Editor from "@/components/Editor";
import QuillToolbar from "@/components/toolBar";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AddTermsAndCondition, TermsAndCondition } from "@/APIs/dashboard-API";
import { redirect } from "next/navigation";
import { ApiResponseTerms } from "@/types/type";
import { GuidelineLoading } from "@/components/Loading";


export default function Guideline() {
  const queryClient = useQueryClient();
  const [Value, setValue] = useState("");


  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

    useEffect(() => {
      if (!token) {
        redirect('login');
      }
    }, [token]);

   const {reset,mutate} = useMutation({
    mutationKey: ["AddTerms"],
    mutationFn: () => AddTermsAndCondition({ token: token!, content: Value }),
    onSuccess: () => {
      reset();
      queryClient.invalidateQueries({ queryKey: ["FetchTerms"] });
    },
  });



  const {
    isLoading,
    error,
    data,
  }: { data: ApiResponseTerms | undefined; error: any; isLoading: boolean } =
    useQuery({
      queryKey: ["FetchTerms"],
      queryFn: () => TermsAndCondition({ token: token! }),

    });
  if (isLoading) {
    return <GuidelineLoading Active={1}/>;
  }

  console.log(data);


 
  const HandleFunction = () =>{
    console.log(Value);
    mutate();
  }
  return (
    <DashboardLayout Active={5}>
      <GuidelineLayout Active={1} onSaveFunction={HandleFunction}>
        <div className="bg-backColor  ">
          <div className="px-5">
            <hr />
          </div>
          <div className="bg-DarkLight pb-3 ">
            <QuillToolbar />
          </div>

          <div className="mx-5 mt-5 rounded-lg min-h-screen">
            <Editor value={data?.terms?.content ?? ""} onStateChange={(newValue: string) => {setValue(newValue)}} />
          </div>
        </div>
      </GuidelineLayout>
    </DashboardLayout>
  );
}
