import { DeleteInterest } from "@/APIs/dashboard-API";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Category = ({text,id}:{text:string,id:string}) => {

    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;


    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationKey: ["AddInterest"],
        mutationFn: DeleteInterest,
        onSuccess: () => {
            console.log("success");
            queryClient.invalidateQueries({ queryKey: ["FetchInterests"] });
        },
        onError: (error) => {
            console.log(error);
        }
        });


        const handleDelete = () =>{
            mutate({token:token!,id:id});
        }
    return (
        <div
        className="relative inline-block px-4 py-3 m-2   shadow-md border-white bg-DarkLight border-1 rounded-md"
      
      >
        <span className="text-white">{text}</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-0  cursor-pointer "
          style={{ right: -10, top: -1 }}
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          onClick={handleDelete}
        >
          <circle cx="11" cy="11" r="11" fill="#FF5C5C" />
          <path
            d="M13.9972 13.9133L8.22852 8.14453"
            stroke="#363738"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.9406 8.19824L8.14453 13.9943"
            stroke="#363738"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    );
};


export default Category