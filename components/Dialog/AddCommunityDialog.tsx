"use client";
import React, { useRef } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Done from "./Done";
import { useQueryClient } from "@tanstack/react-query";

export default function AddCommunityDialog({
  SaveFunction,
}: {
  SaveFunction: () => void;
}) {
  const CloseButtonRef = useRef<HTMLButtonElement | null>(null);

  const queryClient = useQueryClient();

  const handleConfirm = () => {
    CloseButtonRef.current?.click();
    queryClient.invalidateQueries({ queryKey: ["FetchCommunity"] });
  };

  const handleAdd = () => {
    SaveFunction();
  };
  return (
    <>
      <AlertDialogHeader>
        <AlertDialogDescription className="text-center pt-4">
          <p className="text-TextColor3 text-md">Inform Them</p>
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogDescription className="text-center text-TextColor3">
      Are you sure you want to post <br/>
 this?
      </AlertDialogDescription>

      <AlertDialogDescription className="relative">
        <hr className="border-TextColor3" />
        <div className="flex justify-around items-center  pt-1 ">
          <AlertDialogCancel
            asChild
            className="w-5 bg-inherit border-0 text-red-600 hover:bg-inherit hover:text-red-600 cursor-pointer"
            ref={CloseButtonRef}
          >
            <p className="">No</p>
          </AlertDialogCancel>

          <div className="absolute top-0 left-36 border-l-2 h-full border-TextColor3">
            {""}
          </div>

          <AlertDialog>
            <div
              className="w-5 bg-inherit border-0 cursor-pointer "
              onClick={handleAdd}
            >
              <AlertDialogTrigger asChild>
                <p className="text-LinksColor font-bold">Yes</p>
              </AlertDialogTrigger>
              <Done
                handleConfirm={handleConfirm}
                Text="Posted Successfully!"
              />
            </div>
          </AlertDialog>
        </div>
      </AlertDialogDescription>
    </>
  );
}
