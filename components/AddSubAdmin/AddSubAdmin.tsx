import React, { useEffect, useRef, useState } from "react";
import {
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogTrigger,
  AlertDialog,
} from "../ui/alert-dialog";
import { Input } from "../ui/input";
import { SubAdminType } from "@/types/type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import { validateSchemaSubAdmins } from "@/validation/AddSubAdmin-validation";
import { AddingSubAdmin } from "@/APIs/dashboard-API";
import { redirect } from "next/navigation";
import Done from "../Dialog/Done";

export default function AddSubAdmin() {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const [open, setOpen] = useState(false);
  const DialogButtonRef = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    if (!token) {
      redirect('login');
    }
  }, [token]);

  const queryClient = useQueryClient();


  const { mutate, error, reset, status } = useMutation({
    mutationFn: AddingSubAdmin,
    // onSuccess: Handle success if needed,
    // onError: Handle error if needed,
    onError: (error) => {
      console.log(error.message);
      setTimeout(() => {
        reset();
      }, 3000);
    },

    onSuccess: (data: any) => {
      setOpen(true);
      // router.push("/signup/done");
    },
  });

  const HandleConfirm = () => {
    queryClient.invalidateQueries({ queryKey: ["FetchSubAdmin"] });
    DialogButtonRef.current?.click();
  };
  const AddSubAdminFormik = useFormik<SubAdminType>({
    initialValues: {
      dob: "",
      email: "",
      firstName: "",
      lastName: "",
      location: "",
      password: "",
      phone: "",
    },
    validationSchema: validateSchemaSubAdmins,
    validateOnChange: false,
    validateOnBlur: true,

    onSubmit: (values, e: any) => {
      console.log(values);
      console.log("form submit");
      mutate({
        token: token!,
        dob: values.dob,
        email: values.email,
        firstName: values.firstName,
        lastName: values.lastName,
        location: values.location,
        password: values.password,
        phone: values.phone,
      });
    },
  });
  return (
    <AlertDialogHeader className="px-5">
      <AlertDialogTitle className="text-white text-xl">
        Add Sub Admins
      </AlertDialogTitle>
      <AlertDialogDescription>
        <form onSubmit={AddSubAdminFormik.handleSubmit}>
          <div>
            <div className="pt-4">
              <h1 className="text-lg text-white">Personal Data</h1>

              <hr className="mt-4" />

              <div className="mt-5 flex items-center justify-between ">
                <label htmlFor="firstName" className="text-TextColor3">
                  First Name
                </label>
                <Input
                  name="firstName"
                  onChange={AddSubAdminFormik.handleChange}
                  onBlur={AddSubAdminFormik.handleBlur}
                  id="firstName"
                  className="w-56 bg-fieldColor placeholder:text-TextColor3 border-0 placeholder:opacity-45 text-TextColor3 "
                  placeholder="Input here "
                />
              </div>
              <span className="text-sm  text-red-500 ">
                {AddSubAdminFormik.touched.firstName &&
                AddSubAdminFormik.errors.firstName
                  ? AddSubAdminFormik.errors.firstName
                  : ""}
              </span>
              <div className="mt-5 flex items-center justify-between ">
                <label htmlFor="lastName" className="text-TextColor3">
                  Last Name
                </label>
                <Input
                  id="lastName"
                  name="lastName"
                  onChange={AddSubAdminFormik.handleChange}
                  onBlur={AddSubAdminFormik.handleBlur}
                  className="w-56 bg-fieldColor placeholder:text-TextColor3 border-0 placeholder:opacity-45 text-TextColor3 "
                  placeholder="Input here "
                />
              </div>
              <span className="text-sm  text-red-500 ">
                {AddSubAdminFormik.touched.lastName &&
                AddSubAdminFormik.errors.lastName
                  ? AddSubAdminFormik.errors.lastName
                  : ""}
              </span>
              <div className="mt-5 flex items-center justify-between ">
                <label htmlFor="dateOfBirth" className="text-TextColor3">
                  Date of Birth
                </label>
                <Input
                  id="dateOfBirth"
                  name="dob"
                  onChange={AddSubAdminFormik.handleChange}
                  onBlur={AddSubAdminFormik.handleBlur}
                  className="w-56 bg-fieldColor placeholder:text-TextColor3 border-0 placeholder:opacity-45 text-TextColor3 "
                  placeholder="MM/DD/YY"
                />
              </div>
              <span className="text-sm  text-red-500 ">
                {AddSubAdminFormik.touched.dob && AddSubAdminFormik.errors.dob
                  ? AddSubAdminFormik.errors.dob
                  : ""}
              </span>
              <div className="mt-5 flex items-center justify-between ">
                <label htmlFor="Location" className="text-TextColor3">
                  Location
                </label>
                <Input
                  id="Location"
                  name="location"
                  onChange={AddSubAdminFormik.handleChange}
                  onBlur={AddSubAdminFormik.handleBlur}
                  className="w-56 bg-fieldColor placeholder:text-TextColor3 border-0 placeholder:opacity-45 text-TextColor3 "
                  placeholder="Input here "
                />
              </div>
              <span className="text-sm  text-red-500 ">
                {AddSubAdminFormik.touched.location &&
                AddSubAdminFormik.errors.location
                  ? AddSubAdminFormik.errors.location
                  : ""}
              </span>
            </div>

            {/* /// */}

            <div className="pt-4">
              <h1 className="text-lg text-white">Account Information</h1>

              <hr className="mt-4" />
              <div className="mt-5 flex items-center justify-between ">
                <label htmlFor="EmailAddress" className="text-TextColor3">
                  Email Address
                </label>
                <Input
                  id="EmailAddress"
                  name="email"
                  onChange={AddSubAdminFormik.handleChange}
                  onBlur={AddSubAdminFormik.handleBlur}
                  className="w-56 bg-fieldColor placeholder:text-TextColor3 border-0 placeholder:opacity-45 text-TextColor3 "
                  placeholder="@email.com"
                />
              </div>
              <span className="text-sm  text-red-500 ">
                {AddSubAdminFormik.touched.email &&
                AddSubAdminFormik.errors.email
                  ? AddSubAdminFormik.errors.email
                  : ""}
              </span>
              <div className="mt-5 flex items-center justify-between ">
                <label htmlFor="phoneNumber" className="text-TextColor3">
                  Phone Number
                </label>
                <Input
                  name="phone"
                  onChange={AddSubAdminFormik.handleChange}
                  onBlur={AddSubAdminFormik.handleBlur}
                  id="phoneNumber"
                  className="w-56 bg-fieldColor placeholder:text-TextColor3 border-0 placeholder:opacity-45 text-TextColor3 "
                  placeholder="+123 "
                />
              </div>
              <span className="text-sm  text-red-500 ">
                {AddSubAdminFormik.touched.phone &&
                AddSubAdminFormik.errors.phone
                  ? AddSubAdminFormik.errors.phone
                  : ""}
              </span>
              <div className="mt-5 flex items-center justify-between ">
                <label htmlFor="temporaryPassword" className="text-TextColor3">
                  Temporary Password
                </label>
                <Input
                  name="password"
                  onChange={AddSubAdminFormik.handleChange}
                  onBlur={AddSubAdminFormik.handleBlur}
                  id="temporaryPassword"
                  className="w-56 bg-fieldColor placeholder:text-TextColor3 border-0 placeholder:opacity-45 text-TextColor3 "
                  placeholder="Temporary Password "
                />
              </div>
              <span className="text-sm  text-red-500 ">
                {AddSubAdminFormik.touched.password &&
                AddSubAdminFormik.errors.password
                  ? AddSubAdminFormik.errors.password
                  : ""}
              </span>
            </div>
          </div>
          <div className="flex justify-end mt-5 gap-5">
            <AlertDialogCancel asChild ref={DialogButtonRef}>
              {status === 'pending' ? null : 
              <button className="text-red-600 bg-inherit  hover:bg-inherit hover:text-red-600  border-none">
                
                Cancel
              </button>
}
            </AlertDialogCancel>
            <AlertDialog open={open}>
              <AlertDialogTrigger asChild>
                <button
                disabled={status === 'pending' ? true : false}
                  className="bg-LinksColor px-10 py-2 rounded-lg text-white"
                  type="submit"
                >
                 {status === 'pending' ? 'Processing...' : " Submit"} 
                </button>
                
              </AlertDialogTrigger>
              <Done
                  Text="You added a Sub Admin"
                  handleConfirm={HandleConfirm}
                />
            </AlertDialog>
          </div>
        </form>

        <p className="text-red-600 text-center font-bold mt-2">{error ? error.message : null}</p>
      </AlertDialogDescription>
    </AlertDialogHeader>
  );
}
