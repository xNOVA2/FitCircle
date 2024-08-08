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

const UploadIcon = () => (
  <svg
    width="55"
    height="59"
    viewBox="0 0 55 59"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.3">
      <g opacity="0.3">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M33.8587 3.93335H21.5428C17.2553 3.93335 14.5664 6.97103 14.5664 11.2699V22.8655C14.5664 27.1644 17.244 30.2021 21.5428 30.2021H33.8516C38.1576 30.2021 40.8337 27.1644 40.8337 22.8655V11.2699C40.8394 6.97103 38.1618 3.93335 33.8587 3.93335Z"
          stroke="white"
          stroke-width="1.89796"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M25.8883 12.5242C25.8883 13.9761 24.7125 15.1519 23.2605 15.1519C21.81 15.1519 20.6328 13.9761 20.6328 12.5242C20.6328 11.0723 21.81 9.89648 23.2605 9.89648C24.7111 9.89791 25.8868 11.0737 25.8883 12.5242Z"
          stroke="white"
          stroke-width="1.89796"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M40.8397 21.3015C39.5259 19.9492 36.9992 17.2175 34.2519 17.2175C31.5032 17.2175 29.9189 23.2431 27.2755 23.2431C24.6321 23.2431 22.2307 20.5186 20.1126 22.2652C17.9945 24.0103 15.9902 27.579 15.9902 27.579"
          stroke="white"
          stroke-width="1.89796"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <path
        opacity="0.3"
        d="M5.28 54.4378C2.832 54.4378 1.12 52.8858 1.12 50.4378V43.0458H2.24V50.4378C2.24 52.2138 3.344 53.3498 5.28 53.3498C7.216 53.3498 8.32 52.2138 8.32 50.4378V43.0458H9.44V50.4378C9.44 52.8858 7.728 54.4378 5.28 54.4378ZM15.9705 46.0538C18.2265 46.0538 20.0985 47.8778 20.0985 50.2458C20.0985 52.6138 18.2265 54.4378 15.9705 54.4378C14.5465 54.4378 13.4105 53.7498 12.7385 52.6778V57.4458H11.6825V46.2458H12.7385V47.8138C13.4105 46.7418 14.5465 46.0538 15.9705 46.0538ZM15.8905 53.4138C17.6665 53.4138 19.0425 52.0218 19.0425 50.2458C19.0425 48.4698 17.6665 47.0778 15.8905 47.0778C14.1145 47.0778 12.7385 48.4698 12.7385 50.2458C12.7385 52.0218 14.1145 53.4138 15.8905 53.4138ZM21.8544 54.2458V42.5658H22.9104V54.2458H21.8544ZM28.8793 54.4378C26.5433 54.4378 24.6713 52.6138 24.6713 50.2458C24.6713 47.8778 26.5433 46.0538 28.8793 46.0538C31.2153 46.0538 33.0873 47.8778 33.0873 50.2458C33.0873 52.6138 31.2153 54.4378 28.8793 54.4378ZM28.8793 53.4138C30.6553 53.4138 32.0312 52.0218 32.0312 50.2458C32.0312 48.4698 30.6553 47.0778 28.8793 47.0778C27.1033 47.0778 25.7273 48.4698 25.7273 50.2458C25.7273 52.0218 27.1033 53.4138 28.8793 53.4138ZM41.7344 46.2458H42.7904V54.2458H41.7344V52.6778C41.0624 53.7498 39.9264 54.4378 38.5024 54.4378C36.2464 54.4378 34.3744 52.6138 34.3744 50.2458C34.3744 47.8778 36.2464 46.0538 38.5024 46.0538C39.9264 46.0538 41.0624 46.7418 41.7344 47.8138V46.2458ZM38.5824 53.4138C40.3584 53.4138 41.7344 52.0218 41.7344 50.2458C41.7344 48.4698 40.3584 47.0778 38.5824 47.0778C36.8064 47.0778 35.4304 48.4698 35.4304 50.2458C35.4304 52.0218 36.8064 53.4138 38.5824 53.4138ZM51.9062 43.0458H52.9623V54.2458H51.9062V52.6778C51.2343 53.7498 50.0983 54.4378 48.6743 54.4378C46.4183 54.4378 44.5463 52.6138 44.5463 50.2458C44.5463 47.8778 46.4183 46.0538 48.6743 46.0538C50.0983 46.0538 51.2343 46.7418 51.9062 47.8138V43.0458ZM48.7543 53.4138C50.5303 53.4138 51.9062 52.0218 51.9062 50.2458C51.9062 48.4698 50.5303 47.0778 48.7543 47.0778C46.9783 47.0778 45.6023 48.4698 45.6023 50.2458C45.6023 52.0218 46.9783 53.4138 48.7543 53.4138Z"
        fill="white"
      />
    </g>
  </svg>
);

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
      if (values.topic.length < 5) {
        errors.topic = "Topic Should have 5 Charactors ";
      }
      // if (imagePreview === null) {
      //   errors.topic = "Picture Required";
      // }
      return errors;
    },
    validateOnMount: true,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values: any, { resetForm }) => {
      const token =
        typeof window !== "undefined" ? localStorage.getItem("token") : null;

      if (values.topic.length < 1) {
        setError("Please Enter Topic");
        return;
      }
      mutate({ token: token!, title: values.topic, photo: image! });
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

      console.log("🚀 ~ handleImageChange ~ AddPostIk.values.topic:", AddPostIk.values.topic)
      // AddPostIk.validateForm({topic: AddPostIk.values.topic})
    } else {
      setImagePreview(null);
    }
  };

  const handleImageDelete = () => {
    setImagePreview(null);
  };

  const { mutate } = useMutation({
    mutationKey: ["AddCommunity"],
    mutationFn: isCommunityPage ? PostinCommunity : AddingCommunity,
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
        <GuidelineLayout
          Active={5}
          isCommunitySaveButton
          onSaveFunction={AddPostIk.handleSubmit}
          buttonDisable={AddPostIk.errors.topic || !imagePreview ? true : false}
        >
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
                      {/* <Image
                        className="text-gray-500"
                        src="/assets/icons/upload.svg"
                        alt=""
                        width={100}
                        height={100}
                      /> */}

                      <UploadIcon />

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
                        width={"100"}
                        height={"100"}
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
                {AddPostIk.errors.topic ? AddPostIk.errors.topic :!imagePreview?"Picture Required": null}
              </p>
            </div>
          </div>
        </GuidelineLayout>
      </DashboardLayout>
    </>
  );
}
