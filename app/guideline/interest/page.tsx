'use client'
import { FetchInterest } from "@/APIs/dashboard-API";
import DashboardLayout from "@/app/Layouts/DashboardLayout";
import GuidelineLayout from "@/app/Layouts/GuidelineLayout";
import AddInterest from "@/components/AddInterest/AddInterest";
import Category from "@/components/AddInterest/InterestBox/Category";
import { InterestLoading } from "@/components/Loading";
import { Interest, InterestsResponse } from "@/types/type";
import { useQuery } from "@tanstack/react-query";

export default function InterestPage() {

  const token = 
  typeof window !== "undefined" ? localStorage.getItem("token") : null;


  const HandleSubmit = () => {
    console.log("submit");
  }


  const { data, isLoading }: { data?: InterestsResponse; isLoading: boolean } = useQuery({
    queryKey: ["FetchInterests"],
    queryFn:()=>FetchInterest({token:token!}),
  });

  if(isLoading){
    return <InterestLoading Active={4}/>
  }

 console.log(data);
  

  return (
    <>
      <DashboardLayout Active={5}>
        <GuidelineLayout Active={4} onSaveFunction={HandleSubmit}>
          <div>
            <div className="bg-backColor  h-full   p-5 ">
              <div className=" ">
                <h1 className="font-bold text-3xl text-white">Interests</h1>
              </div>
              <AddInterest/>

              <div className="min-h-screen">
                <h1 className="font-bold text-4xl mt-5 text-white ">
                    List
                </h1>
                <div className="flex flex-wrap gap-3 mt-6">
            {data?.interests.map((item:Interest)=>{
              return(
                !item.isDeleted ? <Category text={item.name}  id={item._id}/> : null
              );
            })}
               

                </div>
              </div>
            </div>
          </div>
        </GuidelineLayout>
      </DashboardLayout>
    </>
  );
}


