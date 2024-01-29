import GuidelineLayout from "@/app/Layouts/GuidelineLayout";
import { Skeleton } from "./ui/skeleton";
import DashboardLayout from "@/app/Layouts/DashboardLayout";

export const Loader = () => {
  return (
    <div className="h-screen w-full bg-black bg-opacity-85 p-14" style={{ overflow: "hidden" }}>
      <Skeleton className="w-24 h-10 bg-DarkLight" />
      <div className="flex flex-col justify-between">
        <div className="flex justify-between mt-5">
          <div className="flex gap-5">
            <Skeleton className="w-28 h-10 bg-DarkLight" />
            <Skeleton className="w-64 h-10 bg-DarkLight" />
          </div>

          <div>
            <Skeleton className="w-28 h-10 bg-DarkLight" />
          </div>
        </div>
        <div className="flex flex-col gap-6 mt-4">
          <Skeleton className="w-full h-10 bg-DarkLight" />
          <Skeleton className="w-full h-10 bg-DarkLight" />
          <Skeleton className="w-full h-10 bg-DarkLight" />
          <Skeleton className="w-full h-10 bg-DarkLight" />
          <Skeleton className="w-full h-10 bg-DarkLight" />
          <Skeleton className="w-full h-10 bg-DarkLight" />
          <Skeleton className="w-full h-10 bg-DarkLight" />

          <Skeleton className="w-full h-10 bg-DarkLight" />
          <Skeleton className="w-full h-10 bg-DarkLight" />
          <Skeleton className="w-full h-10 bg-DarkLight" />
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <div className="flex gap-5 ">
          <Skeleton className="w-28 h-10 bg-DarkLight" />
        </div>

        <div>
          <Skeleton className="w-28 h-10 bg-DarkLight" />
        </div>
      </div>
    </div>
  );
};


export const UserLoading = () =>{
  return(
      <div className="bg-backColor h-screen w-full p-10">
      <Skeleton className="h-10 w-[100px] bg-DarkLight mb-5" />

<div className="flex gap-5">
<Skeleton className="h-5 w-[20px] bg-DarkLight my-5" />
<Skeleton className="h-5 w-[100px] bg-DarkLight my-5" />
</div>

      <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full bg-DarkLight" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px] bg-DarkLight" />
        <Skeleton className="h-4 w-[200px] bg-DarkLight" />
      </div>
    </div>

    <div className="mt-10">
    <Skeleton className="h-5 w-[100px] bg-DarkLight my-5" />

    </div>

    <div className="flex justify-between">
      <div className="flex flex-col gap-9 mt-8">
        <div className="flex gap-52">
          <Skeleton className="h-4 w-24 bg-DarkLight" />
          <Skeleton className="h-4 w-[200px] bg-DarkLight" />
        </div>
        <div className="flex gap-52">
          <Skeleton className="h-4 w-24 bg-DarkLight" />
          <Skeleton className="h-4 w-[200px] bg-DarkLight" />
        </div>
        <div className="flex gap-52">
          <Skeleton className="h-4 w-24 bg-DarkLight" />
          <Skeleton className="h-4 w-[200px] bg-DarkLight" />
        </div>
        <div className="flex gap-52">
          <Skeleton className="h-4 w-24 bg-DarkLight" />
          <Skeleton className="h-4 w-[200px] bg-DarkLight" />
        </div>
      </div>

      <div className="flex flex-col gap-9 mt-8">
        <div className="flex gap-52">
          <Skeleton className="h-4 w-24 bg-DarkLight" />
          <Skeleton className="h-4 w-[200px] bg-DarkLight" />
        </div>
        <div className="flex gap-52">
          <Skeleton className="h-4 w-24 bg-DarkLight" />
          <Skeleton className="h-4 w-[200px] bg-DarkLight" />
        </div>
        <div className="flex gap-52">
          <Skeleton className="h-4 w-24 bg-DarkLight" />
          <Skeleton className="h-4 w-[200px] bg-DarkLight" />
        </div>
        <div className="flex gap-52">
          <Skeleton className="h-4 w-24 bg-DarkLight" />
          <Skeleton className="h-4 w-[200px] bg-DarkLight" />
        </div>
      </div>

      <div></div>
    </div>
    <div>
          <h1 className="text-TextColor3 font-semibold mt-12">
          <Skeleton className="w-28 h-7 bg-DarkLight"/>
          </h1>

          <div className="flex gap-24 mt-12">
              <div className="flex gap-24 items-center" >
                <div className="flex gap-10">
                  <div className="flex flex-col gap-5">
                    <Skeleton className="h-4 w-24 bg-DarkLight" />
                    <Skeleton className="h-4 w-24 bg-DarkLight" />
                  </div>
                  <div className="flex flex-col gap-5">
                    <Skeleton className="h-4 w-24 bg-DarkLight" />
                    <Skeleton className="h-4 w-24 bg-DarkLight" />
                  </div>
                  <div className="flex flex-col gap-5">
                    <Skeleton className="h-4 w-24 bg-DarkLight" />
                    <Skeleton className="h-4 w-24 bg-DarkLight" />
                  </div>
                  <div className="flex flex-col gap-5">
                    <Skeleton className="h-4 w-24 bg-DarkLight" />
                    <Skeleton className="h-4 w-24 bg-DarkLight" />
                  </div>
                </div>
              </div>
            </div>
            </div>
      </div>
      
  )
}


export const GuidelineLoading = ({Active}:{Active:number}) =>{
  return(
    <DashboardLayout>
    <GuidelineLayout Active={Active}>
        <div className='bg-backColor h-screen w-full'>
            <div className='pt-8 px-5 flex justify-between'>
        <Skeleton className=' bg-DarkLight w-64 h-12 '/>
        <Skeleton className=' bg-DarkLight w-24 h-12 '/>
            </div>

<div className='pt-10 px-5'>
            <Skeleton className=' bg-DarkLight w-full h-[500px] '/>
</div>

        </div>
    </GuidelineLayout>

</DashboardLayout>
  )
}


export const InterestLoading = ({Active}:{Active:number}) =>{
  return(
    <DashboardLayout>
        <GuidelineLayout Active={Active}>
            <div className='bg-backColor h-screen w-full'>
                <div className='pt-8 px-5 flex flex-col gap-5'>
            <Skeleton className=' bg-DarkLight w-44 h-12 '/>
            <Skeleton className=' bg-DarkLight w-full h-12 '/>
                </div>
            <div className='px-5 flex justify-end'>
            <Skeleton className=' bg-DarkLight w-48 rounded-3xl mt-5  h-10 '/>
            </div>
  
            <div className='px-5 '>
            <Skeleton className=' bg-DarkLight w-24  mt-5  h-10 '/>
            </div>

            <div className='px-5 flex gap-4 flex-wrap '>
            <Skeleton className=' bg-DarkLight w-48  mt-5  h-10 '/>
            <Skeleton className=' bg-DarkLight w-32  mt-5  h-10 '/>

            <Skeleton className=' bg-DarkLight w-44  mt-5  h-10 '/>
            <Skeleton className=' bg-DarkLight w-36  mt-5  h-10 '/>
            <Skeleton className=' bg-DarkLight w-24  mt-5  h-10 '/>
            <Skeleton className=' bg-DarkLight w-44  mt-5  h-10 '/>
            <Skeleton className=' bg-DarkLight w-32  mt-5  h-10 '/>
            <Skeleton className=' bg-DarkLight w-24  mt-5  h-10 '/>
            <Skeleton className=' bg-DarkLight w-44  mt-5  h-10 '/>

            </div>
            </div>
        </GuidelineLayout>

    </DashboardLayout>
  )
}



export const CommunityLoading = ({Active}:{Active:number}) =>{
  return(
    <DashboardLayout>
    <GuidelineLayout Active={Active}>
        <div className='bg-backColor h-screen w-full'>
            <div className='px-5 pt-5'>
        <Skeleton className=' bg-DarkLight w-44 h-12 '/>
            </div>

        <div className='pt-8 px-5 flex justify-between'>
        <Skeleton className=' bg-DarkLight w-24 h-12 rounded-full '/>
        <Skeleton className=' bg-DarkLight w-48 h-12 rounded-full'/>
        </div>
<div className='pt-10 px-5 flex flex-col gap-5'>

              <div className='flex justify-between items-center'>
                <div className='flex gap-2'> 

              <Skeleton className=' bg-DarkLight w-12 h-12 rounded-full'/>
              <div className='pt-3 flex flex-col gap-2'>
              <Skeleton className=' bg-DarkLight w-10 h-3 '/>
              <Skeleton className=' bg-DarkLight w-4 h-3 '/>

              </div>

                </div>
                <div className='flex gap-3'>
                <Skeleton className=' bg-DarkLight w-12 h-12 rounded-full'/>
                <Skeleton className=' bg-DarkLight w-12 h-12 rounded-full'/>

                </div>
              </div>

              <div className='flex justify-between items-center'>
                <div className='flex gap-2'> 

              <Skeleton className=' bg-DarkLight w-12 h-12 rounded-full'/>
              <div className='pt-3 flex flex-col gap-2'>
              <Skeleton className=' bg-DarkLight w-10 h-3 '/>
              <Skeleton className=' bg-DarkLight w-4 h-3 '/>

              </div>

                </div>
                <div className='flex gap-3'>
                <Skeleton className=' bg-DarkLight w-12 h-12 rounded-full'/>
                <Skeleton className=' bg-DarkLight w-12 h-12 rounded-full'/>

                </div>
              </div>


              <div className='flex justify-between items-center'>
                <div className='flex gap-2'> 

              <Skeleton className=' bg-DarkLight w-12 h-12 rounded-full'/>
              <div className='pt-3 flex flex-col gap-2'>
              <Skeleton className=' bg-DarkLight w-10 h-3 '/>
              <Skeleton className=' bg-DarkLight w-4 h-3 '/>

              </div>

                </div>
                <div className='flex gap-3'>
                <Skeleton className=' bg-DarkLight w-12 h-12 rounded-full'/>
                <Skeleton className=' bg-DarkLight w-12 h-12 rounded-full'/>

                </div>
              </div>
              <div className='flex justify-between items-center'>
                <div className='flex gap-2'> 

              <Skeleton className=' bg-DarkLight w-12 h-12 rounded-full'/>
              <div className='pt-3 flex flex-col gap-2'>
              <Skeleton className=' bg-DarkLight w-10 h-3 '/>
              <Skeleton className=' bg-DarkLight w-4 h-3 '/>

              </div>

                </div>
                <div className='flex gap-3'>
                <Skeleton className=' bg-DarkLight w-12 h-12 rounded-full'/>
                <Skeleton className=' bg-DarkLight w-12 h-12 rounded-full'/>

                </div>
              </div>
              <div className='flex justify-between items-center'>
                <div className='flex gap-2'> 

              <Skeleton className=' bg-DarkLight w-12 h-12 rounded-full'/>
              <div className='pt-3 flex flex-col gap-2'>
              <Skeleton className=' bg-DarkLight w-10 h-3 '/>
              <Skeleton className=' bg-DarkLight w-4 h-3 '/>

              </div>

                </div>
                <div className='flex gap-3'>
                <Skeleton className=' bg-DarkLight w-12 h-12 rounded-full'/>
                <Skeleton className=' bg-DarkLight w-12 h-12 rounded-full'/>

                </div>
              </div>
              
</div>

        </div>
    </GuidelineLayout>

</DashboardLayout>
  )
}


export const  SearchBarPlaceHolder = () =>{
  return  <Skeleton className="w-64 h-10 bg-DarkLight" />;
}