import React, { useRef, useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import TrainerInfomation from "./TrainerInfomation/TrainerInfomation";
import { useSearchParams } from "next/navigation";


export default function AddTrainer() {

  const CloseButtonRef = useRef<HTMLButtonElement>(null);

  const [checkboxValues, setCheckboxValues] = useState({
    Trainer: false,

    nutritionist: false,
  });

  return (
    <>
      <AlertDialogHeader>
        <AlertDialogDescription>
          <div className="flex justify-between items-center">
            <p className="text-white text-xl">Add Trainer </p>
            <AlertDialogCancel className="bg-inherit border-0 text-white w-0 h-0 hover:bg-inherit hover:text-white" ref={CloseButtonRef}>
              x
            </AlertDialogCancel>
          </div>
          <hr className="mr-4  my-4 ml-2" />
          <form action="" className="mt-5">
            <div className="flex items-center mb-3">
              <input

                type="checkbox"
                name="trainer"
                className="checked:bg-textColor2 border-blue border-1 mr-3 p-3 rounded-lg  bg-DarkLight border-textColor2"
                onChange={(e) => {
                  setCheckboxValues({
                    Trainer: e.target.checked,
                    nutritionist: false,
                  });
                }}
                checked={checkboxValues.Trainer}
              />
              <label
                htmlFor="trainer"
                className="text-TextColor3 opacity-50 text-md"
              >
                Trainer
              </label>
            </div>

            <div className="flex items-center mb-3">
              <input
              defaultChecked
                type="checkbox"
                name="nutritionist"
                className="checked:bg-textColor2 border-blue border-1 mr-3 p-3 rounded-lg bg-DarkLight border-textColor2"
                onChange={(e) => {
                  setCheckboxValues({
                    Trainer: false,
                    nutritionist: e.target.checked,
                  });
                }}
                checked={checkboxValues.nutritionist}
              />
              <label
                htmlFor="nutritionist "
                className="text-TextColor3 opacity-50 text-md"
              >
                Nutritionist
              </label>
            </div>
            <p className="text-xs font-textColor3 mb-3">Coming soon</p>

            <div className="flex items-center mb-3">
              <input
                type="checkbox"
                name="nutritionist"
                disabled
                className="checked:bg-textColor2 border-blue border-1 mr-3 p-3 rounded-lg bg-DarkLight "
              />
              <label
                htmlFor="Professional Coach"
                className="text-TextColor3 opacity-50 text-md"
              >
                Professional Coach
              </label>
            </div>

            <div className="flex items-center mb-3">
              <input
                type="checkbox"
                name="nutritionist"
                disabled
                className="checked:bg-textColor2 border-blue border-1 mr-3 p-3 rounded-lg bg-DarkLight"
              />
              <label
                htmlFor="Yoga Instructor"
                className="text-TextColor3 opacity-50 text-md"
              >
                Yoga Instructor
              </label>
            </div>

            <div className="flex items-center mb-3">
              <input
                type="checkbox"
                name="nutritionist"
                disabled
                className="checked:bg-textColor2 border-blue border-1 mr-3 p-3 rounded-lg bg-DarkLight"
              />
              <label
                htmlFor="Influencer"
                className="text-TextColor3 opacity-50 text-md"
              >
                Influencer
              </label>
            </div>
            {/* Add more checkboxes as needed */}
          </form>

          <div className="flex justify-center">
            <AlertDialog >
              <AlertDialogTrigger  
                    asChild
                >
                <Button
                  className="bg-ButtonBlue px-24 rounded-3xl"
                  disabled={!checkboxValues.Trainer && !checkboxValues.nutritionist}
                  
                 
                >
                  Next
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-opacity-100 bg-backColor border-0 w-[50% h-auto">
                <TrainerInfomation
                  role={checkboxValues.Trainer ? "trainer" : "nutritionist" }
                  CloseRef={CloseButtonRef}
                />
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </AlertDialogDescription>
      </AlertDialogHeader>
    </>
  );
}
