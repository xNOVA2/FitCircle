import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addInterest } from "@/APIs/dashboard-API";


export default function AddInterest() {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

    const [Value, setValue] = useState("");

    const queryClient = useQueryClient();

    const { mutate ,error} = useMutation({
        mutationKey: ["AddInterest"],
        mutationFn: addInterest,
        onSuccess: () => {
            console.log("success");
            queryClient.invalidateQueries({ queryKey: ["FetchInterests"] });
        },
        onError: (error) => {
            console.log(error);
        }
        });


        const handleSubmit = () =>{
            mutate({name:Value,token:token!});
        }
    return (    
    <>
      <div className="mt-3">
        <Input
          placeholder="type here..."
          className="text-TextColor3 py-8 px-10 border-0 bg-DarkLight placeholder:text-TextColor3 "
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="mt-5 flex justify-end">
        <Button className="px-14 rounded-full bg-ButtonBlue " onClick={handleSubmit}>
          Add Sub Category
        </Button>

      </div>
      {error && error.message ? <p className="text-red-500">Duplicate Entry Not Allow</p> : null}
    </>
  );
}
