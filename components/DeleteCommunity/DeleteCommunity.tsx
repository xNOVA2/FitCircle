"use client";
import { DeleteCommunities } from "@/APIs/dashboard-API";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";

export default function DeleteCommunity({ id,token }: { id: string,token:string }) {

    const queryClient = useQueryClient();

    const {mutate} = useMutation({
        mutationKey: ["DeleteCommunity"],
        mutationFn: () => DeleteCommunities({ token: token!, id: id }),
        onSuccess: () => {
            console.log("success");
            queryClient.invalidateQueries({ queryKey: ["FetchCommunities"] });
        },
        onError: (error) => {
            console.log(error);
        }
    });
  return (
    <Image src={"/assets/Icon/Delete.png"} alt="" width={42} height={20}  onClick={()=>mutate()} className="cursor-pointer"/>
  );
}
