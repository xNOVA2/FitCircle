"use client";
import DashboardLayout from "@/app/Layouts/DashboardLayout";
import GuidelineLayout from "@/app/Layouts/GuidelineLayout";
import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import { X } from "lucide-react";
import { Input } from "../ui/input";
import { AddingCommunity, PostinCommunity } from "@/APIs/dashboard-API";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";

export default function Post_Community({
  isCommunityPage,
  Title,
  subTitle,
}: {
  isCommunityPage: boolean;
  Title: string;
  subTitle: string;
}) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [image, setImage] = useState<File | undefined>(undefined);
  const [error, setError] = useState<string>("");
  const AddPostIk = useFormik({
    initialValues: {
      topic: "",
    },
    validate: (values) => {
      const errors: any = {};
      if (values.topic.length<5) {
        errors.topic = "Topic Should have 5 Charactors ";
      }
      if(imagePreview === null){
        errors.topic = "Picture Required";
      }
      return errors;
    },
    validateOnMount: true,
    validateOnChange: true,
    validateOnBlur: true, 
    onSubmit: async (values: any, { resetForm }) => {

    
      const token = typeof window !== "undefined" ? localStorage.getItem("token") : null; 
       
      if(values.topic.length < 1){
        setError("Please Enter Topic")
        return
      }
      mutate({ token: token!, title: values.topic, photo: image!  });
    },
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleImageDelete = () => {
    setImagePreview(null);
  };

  const {mutate} = useMutation({
    mutationKey: ["AddCommunity"],
    mutationFn: isCommunityPage ? PostinCommunity:AddingCommunity,
    onSuccess: () => {
      console.log("success");

    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <>
      <DashboardLayout Active={5}>
        <GuidelineLayout Active={5} isCommunitySaveButton onSaveFunction={AddPostIk.handleSubmit} buttonDisable={AddPostIk.errors.topic?true:false} >
          <div className="bg-backColor h-screen">
            <div className="mx-5">
              <h2 className="text-3xl font-bold text-white pt-5">{Title}</h2>
              <form onSubmit={AddPostIk.handleSubmit}>
                <p className="mb-0 mt-5 text-lg text-white">{subTitle}</p>
                {!isCommunityPage ? (
                  <Input
                    type="text"
                    className="bg-DarkLight placeholder:text-TextColor3 mt-2 w-[50%] border-0 text-TextColor3"
                    placeholder="Nutrition Tips"
                    name="topic"
                    value={AddPostIk.values.topic}
                    onChange={AddPostIk.handleChange}
                  />
                ) : (
                  <textarea
                    name="topic"
                    value={AddPostIk.values.topic}
                    onChange={AddPostIk.handleChange}
                    className="bg-DarkLight p-3 rounded-lg border-0 text-secondary mt-2"
                    rows={9}
                    cols={50}
                    placeholder="Description here"
                  ></textarea>
                )}
                <br />
                <span className="text-lg font-semibold">
                  {/* {AddPostIk.errors.topic ? AddPostIk.errors.topic : ""} */}
                </span>

                <p className="mb-1 mt-3 text-white text-xl py-2">
                  Upload Image
                </p>

                <div
                  className={`relative w-[50%] h-[178px] rounded-lg ${
                    !imagePreview ? "border-dashed" : null
                  } border-[3px] border-spacing-32`}
                >
                  <label
                    htmlFor="fileInput"
                    className="absolute inset-0 cursor-pointer"
                  >
                    <div className="flex-col flex items-center justify-center h-full">
                      <Image
                        className="text-gray-500"
                        src="/assets/icons/upload.svg"
                        alt=""
                      />
                      <p className="text-gray-500 text-center">upload</p>
                    </div>
                  </label>
                  <input
                    id="fileInput"
                    type="file"
                    className="hidden"
                    onChange={handleImageChange} // Assuming handleImageChange is defined
                  />
                  {imagePreview && (
                    <div className="relative w-full h-full">
                      <div
                        className="bg-red-500 rounded-full p-2 absolute bottom-[89%] left-[95%] cursor-pointer"
                        onClick={handleImageDelete} // Assuming handleImageDelete is defined
                      >
                        <X />
                      </div>
                      <Image
                        src={imagePreview}
                        alt="Preview"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover", // To maintain aspect ratio
                        }}
                      />
                    </div>
                  )}
                </div>
              </form>
              <p className="text-red-500  text-sm font-semibold mt-2 ">
                {AddPostIk.errors.topic ? AddPostIk.errors.topic : null}
              </p>
            </div>
          </div>
        </GuidelineLayout>
      </DashboardLayout>
    </>
  );
}
