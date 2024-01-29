"use client";
import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import Search from "@/components/Search/Search";
import DashboardLayout from "../Layouts/DashboardLayout";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { redirect, useSearchParams } from "next/navigation";

import PaginationComponent from "@/components/Pagination/Pagination";
import {  FetchSubAdmins } from "@/APIs/dashboard-API";
import { ApiResponse, User as UserType } from "@/types/type";
import AddSubAdmin from "@/components/AddSubAdmin/AddSubAdmin";
import { Loader, SearchBarPlaceHolder } from "@/components/Loading";
import TableComponent from "@/components/DataTable/TableComponent";
import { TableHeadingSubAdmin } from "@/types/data";
import { Suspense, useEffect } from "react";

export default function SubAdminPage() {
  // const router = useRouter();

  const params = useSearchParams();

  const searchData = params.get("search");
  const Page = params.get("page");

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
    useEffect(() => {
      if (!token) {
        redirect('login');
      }
    }, [token]);

  const {
    isLoading,
    error,
    data,
  }: { data: ApiResponse | undefined; error: any; isLoading: boolean } =
    useQuery({
      queryKey: ["FetchSubAdmin", searchData, Number(Page)],
      queryFn: () =>
      FetchSubAdmins({ token: token!, search: searchData, page: Number(Page) }),
    });

  if (isLoading) {
    return (
      <DashboardLayout Active={4}>
        <Loader/>
      </DashboardLayout>
    );
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <DashboardLayout Active={4}>
      <section className="h-screen w-full bg-black bg-opacity-85 p-14 ">
        <h1 className="text-3xl font-bold text-TextColor3">Sub Admin </h1>
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex justify-between items-center ">
              <div className="flex items-center mb-5">
                {" "}
                {/* Add this wrapper */}
                <Suspense fallback={<SearchBarPlaceHolder />}>
                  <Search initialValue={searchData || ""} />
                </Suspense>
              </div>
              <div className="flex items-center gap-5">
                <AlertDialog >
                  <AlertDialogTrigger asChild>
                    <Button className="text-sm flex items-center px-5 bg-DarkLight gap-2 rounded-lg text-TextColor3">
                      <Image
                        src={"/assets/Icon/Add.svg"}
                        alt="Filter Icon"
                        width={17}
                        height={10}
                      />
                      Add
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className=" bg-backColor border-0 ">
                <AddSubAdmin/>
                  </AlertDialogContent>
                </AlertDialog>

                <Button className="text-sm flex items-center px-5 bg-DarkLight gap-2 rounded-lg text-TextColor3">
                  <Image
                    src={"/assets/Icon/Csv.png"}
                    alt="Filter Icon"
                    width={10}
                    height={10}
                  />
                  Download CSV
                </Button>
              </div>
            </div>

            {data && data.data && data.data.users ? (
              <TableComponent users={data.data.users} isCoachesPage={false} isUsersPage={false} HeaderData={TableHeadingSubAdmin} />
            ) : (
              <div className="">
                {" "}
                <p className="font-bold text-white text-4xl mt-10">
                  No User Found
                </p>
                <p className="text-sm text-TextColor3 ">
                  Oops! We Couldn&apos;t Find Any Matches. Check Your Spelling or Try
                  a Different Search
                </p>
              </div>
            )}
          </div>
          <div className="flex justify-between items-center mt-10 w-full">
            <div>
              {data && data.data && data.data.pagination ? (
                <p className="text-TextColor3 text-xs">
                  Showing{" "}
                  {Math.min(
                    (Number(Page) - 1) * 10 + 1,
                    data.data.pagination.totalItems
                  )}{" "}
                  to{" "}
                  {Math.min(Number(Page) * 10, data.data.pagination.totalItems)}{" "}
                  of {data.data.pagination.totalItems} entries
                </p>
              ) : null}
            </div>

            <div className=" ">
              {data && data.data && data.data.pagination ? (
                <PaginationComponent PaginationData={data?.data.pagination!} />
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}
