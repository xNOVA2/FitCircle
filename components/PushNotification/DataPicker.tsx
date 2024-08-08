"use client";

import * as React from "react";
import { format } from "date-fns";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";

export function DatePicker({
  date,
  setDate,
}: {
  date?: Date;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}) {
  // const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Image
          className="cursor-pointer mr-2 h-4 w-4"
          src={"/assets/Icon/calendar.png"}
          alt=""
          width={55}
          height={15}
        />
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
