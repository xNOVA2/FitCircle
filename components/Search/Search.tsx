'use client'
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";
import {useDebounce} from '@uidotdev/usehooks'


export default function Search({initialValue}:{initialValue:string}) {


  const [searchData, setSearchData] = useState<string>(initialValue);
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = useDebounce(searchData, 500);
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
 
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
        params.delete("page")
      return params.toString();
    },
    [searchParams]
  );
// Remove the existing declaration of 'handleChange'
// const handleChange = useCallback(

// Declare 'handleChange' only once
useEffect(() => {
  const currentQuery = searchParams.get('search') || '';
  
  // Reset page to 1 only when the search query changes
  if (query !== currentQuery) {
   
    router.push(`${pathname}?${createQueryString("search", query)}`);
  }
}, [query, router, pathname, searchParams, createQueryString]);


    


  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-start gap-3 mt-5">
        <button className="flex items-center px-7 bg-DarkLight py-2 gap-2 rounded-lg text-TextColor3 ">
          <Image
            src={"/assets/Icon/Filter.png"}
            alt="Filter Icon"
            width={14}
            height={10}
          />
          Filter
        </button>
        <div className="relative ">
        <Input
        autoFocus
            className="border-none bg-DarkLight px-9 placeholder:text-TextColor3 text-TextColor3"
            placeholder="Searching"
            value={searchData}
            onChange={(e)=>setSearchData(e.target.value)}
          />
          <Image
            src={"/assets/Icon/Search.svg"}
            alt="Filter Icon"
            width={14}
            height={10}
            className="absolute top-[13px] left-4"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
}
