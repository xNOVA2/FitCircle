import React, { useRef, useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import Done from "./Done";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  DeleteSignleSubAdmin,
  DeleteSignleTrainer,
} from "@/APIs/dashboard-API";
import { redirect } from "next/navigation";

export default function Delete({
  id,
  isSubAdmin,
}: {
  id: string;
  isSubAdmin?: boolean;
}) {
  const [hasError, setHasError] = useState<boolean>(false);
  const queryClient = useQueryClient();

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

 

  const HandleDelete = () => {
    mutate({ id, token:token! });
  };
  const { mutate, error, reset, status } = useMutation({
    mutationFn: !isSubAdmin ? DeleteSignleTrainer : DeleteSignleSubAdmin,

    onError: (error) => {
      console.log(error.message);
    },

    onSuccess: (data: any) => {
      setHasError(true);
      // queryClient.invalidateQueries({queryKey: ['FetchCoaches']});
    },
  });

  const CloseButtonRef = useRef<HTMLButtonElement>(null);
  const handleConfirm = () => {
    CloseButtonRef.current?.click();
    if (isSubAdmin) {
      queryClient.invalidateQueries({ queryKey: ["FetchSubAdmin"] });
    } else {
      queryClient.invalidateQueries({ queryKey: ["FetchCoaches"] });
    }
  };
  return (
    <>
      <AlertDialogHeader>
        <AlertDialogDescription className="text-center pt-4">
          <p className="text-TextColor3 text-md">Inform Them</p>
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogDescription className="text-center text-TextColor3">
        Are you sure you want to delete this <br />
        Trainer?
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
          <AlertDialog open={hasError}>
            <div
              className="w-5 bg-inherit border-0 cursor-pointer "
              onClick={HandleDelete}
            >
              <AlertDialogTrigger asChild>
                <p className="text-LinksColor font-bold">Yes</p>
              </AlertDialogTrigger>
              <Done
                handleConfirm={handleConfirm}
                Text="You sent an email to the trainer!"
              />
            </div>
          </AlertDialog>
        </div>

        <div className="absolute top-0 left-36 border-l-2 h-full border-TextColor3">
          {" "}
          .
        </div>
      </AlertDialogDescription>
    </>
  );
}
