import { Interest, TableInterface, User } from "@/types/type";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "../ui/table";
import Image from "next/image";
import Delete from "../Dialog/Delete";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Separator } from "../ui/separator";
import Link from "next/link";

export default function TableComponent({
  users,
  isUsersPage,
  HeaderData,
  isCoachesPage,
}: {
  users: User[];
  isUsersPage?: boolean;
  HeaderData: TableInterface;
  isCoachesPage?: boolean;
}) {
  const [open, setOpen] = useState<string>("");

  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-inherit">
          {HeaderData.data.map((data: string, index: number) => (
            <TableHead
              key={index}
              className="text-TextColor3 text-sm opacity-40"
            >
              {data}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((data) => (
          <TableRow key={data._id} className="hover:bg-inherit">
            <TableCell className="text-TextColor3 text-xs">
              {!isCoachesPage && !isUsersPage ? (
                data.firstName
              ) : (
                <Link
                  href={`/${isUsersPage ? "users" : "coaches"}/${data._id}`}
                >
                  {data.firstName}
                </Link>
              )}
            </TableCell>
            <TableCell className="text-TextColor3 text-xs">
              {data.email}
            </TableCell>
            <TableCell className="text-TextColor3 text-xs">
              {!isCoachesPage && !isUsersPage ? data.username : data.phone}
            </TableCell>
            <TableCell className="text-TextColor3 text-xs">
              {!isCoachesPage && !isUsersPage ? data.phone : data.city}
            </TableCell>
            <TableCell className="text-TextColor3 text-xs">
              {!isCoachesPage && !isUsersPage ? data.city : data.age}
            </TableCell>
            <TableCell className="  text-xs ">
              {!isCoachesPage && !isUsersPage ? (
                <div className=" text-center bg-bgActiveGreen rounded-md text-textActiveGreen py-2 ">
                  {data.isActive ? "Active" : "Inactive"}
                </div>
              ) : (
                <p className="text-TextColor3">{data.gender}</p>
              )}
            </TableCell>
            {isUsersPage ? (
              <TableCell className="text-TextColor3">
                {data.interests && data.interests.length > 1 ? (
                  <div className="my-[12px]">
                    <p className="text-TextColor3 opacity-50 text-xs">
                      <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center border-1 border-black">
                          Interests <ChevronDown size={15} />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuSeparator />
                          {data.interests.map((interest: Interest) => (
                            <React.Fragment key={interest.name}>
                              <DropdownMenuItem className="text-sm">
                                {interest.name}
                              </DropdownMenuItem>
                              <Separator className="my-[13px]" />
                            </React.Fragment>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </p>
                  </div>
                ) : (
                  <p className="text-TextColor3 opacity-50 my-2">
                    No interest found
                  </p>
                )}
              </TableCell>
            ) : isCoachesPage ? (
              <>
                <TableCell className="text-TextColor3">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Image
                        src={"/assets/Icon/DeleteIcon.png"}
                        alt={"Icon"}
                        width={35}
                        height={25}
                        className="my-[0.1px] cursor-pointer"
                      />
                    </AlertDialogTrigger>
                    <AlertDialogContent className="bg-opacity-100 bg-DarkLight border-0 w-[20%] h-[20%] rounded-[55px] !p-0 ">
                      <Delete id={data._id} />
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </>
            ) : (
              <TableCell className="text-TextColor3 flex gap-7 items-center justify-end relative">
                <Image
                  src={"/assets/Icon/3dot.png"}
                  alt={"Icon"}
                  width={4}
                  height={4}
                  className="cursor-pointer mt-1"
                  onClick={() =>
                    setOpen((prevOpen) =>
                      prevOpen === data._id ? "" : data._id
                    )
                  }
                />
                {open === data._id && (
                  <div className="absolute top-3 right-10 ">
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <button
                          className="inline bg-DarkLight py-3 px-10 rounded-lg"
                        >
                          Delete
                        </button>
                      </AlertDialogTrigger>
                      <AlertDialogContent className="bg-opacity-100 bg-DarkLight border-0 w-[20%] h-[20%] rounded-[55px] !p-0">
                        <Delete id={data._id} isSubAdmin />
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                )}
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
