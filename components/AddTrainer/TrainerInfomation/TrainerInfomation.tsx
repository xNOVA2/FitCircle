import { AddTrainer } from "@/APIs/dashboard-API";
import Done from "@/components/Dialog/Done";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { validationSchemaAddTrainer } from "@/validation/AddTrainer-validation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import Image from "next/image";

import { RefObject, useRef, useState } from "react"; // Add this import statement
export default function TrainerInfomation({
  role,
  CloseRef,
}: {
  role: string;
  CloseRef: RefObject<HTMLButtonElement>;
}) {
  const token = localStorage.getItem("token");

  const queryClient  =  useQueryClient()
  const [hasError, setHasError] = useState<boolean>(false);

  interface AddTrainerType {
    fullName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
  }

  const ButtonRef = useRef<HTMLButtonElement>(null);
  const AddTrainerFormik = useFormik<AddTrainerType>({
    initialValues: {
      fullName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
    validationSchema: validationSchemaAddTrainer,
    validateOnChange: false,
    validateOnBlur: true,

    onSubmit: (values) => {
      console.log(values);
      console.log(role);

      mutate({
        token: token!,
        email: values.email,
        password: values.password,
        firstName: values.fullName,
        lastName: values.lastName,
        phone: values.phoneNumber,
        role: role,
        phoneCode: "+1",
      });

      // setIsDialogOpen(false); // Open the dialog box
    },
  });

  const handleConfirm = () => {
    // router.push('/coaches')

    ButtonRef.current?.click();
    CloseRef.current?.click();

    queryClient.invalidateQueries({queryKey: ['FetchCoaches']});

  };
  const { mutate, error, reset,status } = useMutation({
    mutationFn: AddTrainer,

    // onSuccess: Handle success if needed,
    // onError: Handle error if needed,
    onError: (error) => {
      // console.log(error);
      console.log("Error from componenet", error);
      setTimeout(() => {
        reset();
      }, 3000);
    },

    onSuccess: (data: any) => {
      setHasError(true);
      //   localStorage.setItem("token", data.data.accessToken);
      //   router.push("/dashboard");
    },
  });
  return (
    <>
      <div className="">
        <div className="flex justify-between items-center">
          <p className="text-white text-xl">Add Trainer </p>
          <AlertDialogCancel
            className="bg-inherit border-0 text-white w-0 h-0 hover:bg-inherit hover:text-white"
            ref={ButtonRef}
          >
            x
          </AlertDialogCancel>
        </div>
        <hr className="mr-4  my-4 ml-2" />
        <p className="text-xs px-3 text-TextColor3 opacity-45">
          Note: You are required to give a temporary password to your Trainer
        </p>
        <form
          action=""
          className="mt-5 px-3"
          onSubmit={AddTrainerFormik.handleSubmit}
        >
          {/* Form fields */}
          <div className=" mb-3">
            <input
              name="fullName"
              onChange={AddTrainerFormik.handleChange}
              onBlur={AddTrainerFormik.handleBlur}
              type="text"
              placeholder="First Name"
              className="mr-3 p-3 rounded-lg bg-DarkLight border-none focus:outline-none focus:ring-0 w-full text-TextColor3 placeholder:text-TextColor3 placeholder:opacity-50"
            />
            <br />
            <span className="text-xs  text-red-500 ">
              {AddTrainerFormik.touched.fullName &&
              AddTrainerFormik.errors.fullName
                ? AddTrainerFormik.errors.fullName
                : ""}
            </span>
          </div>
          <div className=" mb-3">
            <input
              name="lastName"
              onChange={AddTrainerFormik.handleChange}
              onBlur={AddTrainerFormik.handleBlur}
              placeholder="Last Name"
              type="text"
              className="mr-3 p-3 rounded-lg bg-DarkLight border-none focus:outline-none focus:ring-0 w-full text-TextColor3 placeholder:text-TextColor3 placeholder:opacity-50"
            />
            <br />
            <span className="text-xs  text-red-500 ">
              {AddTrainerFormik.touched.lastName &&
              AddTrainerFormik.errors.lastName
                ? AddTrainerFormik.errors.lastName
                : ""}
            </span>
          </div>
          <div className=" mb-3">
            <input
              name="email"
              onChange={AddTrainerFormik.handleChange}
              onBlur={AddTrainerFormik.handleBlur}
              placeholder="Email"
              type="email"
              className="mr-3 p-3 rounded-lg bg-DarkLight border-none focus:outline-none focus:ring-0 w-full text-TextColor3 placeholder:text-TextColor3 placeholder:opacity-50"
            />
            <br />
            <span className="text-xs  text-red-500 ">
              {AddTrainerFormik.touched.email && AddTrainerFormik.errors.email
                ? AddTrainerFormik.errors.email
                : ""}
            </span>
          </div>

          <div className=" mb-3">
            <input
              name="phoneNumber"
              onChange={AddTrainerFormik.handleChange}
              onBlur={AddTrainerFormik.handleBlur}
              placeholder="Phone"
              type="text"
              className="mr-3 p-3 rounded-lg bg-DarkLight border-none focus:outline-none focus:ring-0 w-full text-TextColor3 placeholder:text-TextColor3 placeholder:opacity-50"
            />
            <br />
            <span className="text-xs  text-red-500 ">
              {AddTrainerFormik.touched.phoneNumber &&
              AddTrainerFormik.errors.phoneNumber
                ? AddTrainerFormik.errors.phoneNumber
                : ""}
            </span>
          </div>

          <div className=" mb-3">
            <input
              name="password"
              onChange={AddTrainerFormik.handleChange}
              onBlur={AddTrainerFormik.handleBlur}
              placeholder="Temporary Password: ABC123"
              type="password"
              className="mr-3 p-3 rounded-lg bg-DarkLight border-none focus:outline-none focus:ring-0 w-full text-TextColor3 placeholder:text-TextColor3 placeholder:opacity-50"
            />

            <br />
            <span className="text-xs  text-red-500  mt-5">
              {AddTrainerFormik.touched.password &&
              AddTrainerFormik.errors.password
                ? AddTrainerFormik.errors.password
                : ""}
            </span>
          </div>
          {/* ... */}

          <div className="flex justify-center mt-10">
            <AlertDialog open={hasError}>
              <AlertDialogTrigger asChild>
                <Button
                  className="bg-ButtonBlue px-24 rounded-3xl"
                  type="submit"
                  disabled={
                    Object.keys(AddTrainerFormik.errors).length > 0 ||
                    Object.values(AddTrainerFormik.values).some(
                      (value) => value === ""
                    )
                  }
                >
                  {status==="pending"?'Processing...' :
                  "Next" }
                </Button>
              </AlertDialogTrigger>
              <Done
                handleConfirm={handleConfirm}
                Text="You sent an email to the trainer!"
              />
            </AlertDialog>
          </div>
          <p className="text-red-500 text-center mt-3">
            {error ? error.message : null}
          </p>
        </form>
      </div>
    </>
  );
}
