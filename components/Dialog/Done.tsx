import Image from "next/image";
import { AlertDialogCancel, AlertDialogContent } from "../ui/alert-dialog";

export default function Done({ handleConfirm,Text }: { handleConfirm: () => void,Text:string }) {
    return (
      <AlertDialogContent className="gap-3 bg-opacity-100 bg-DarkLight border-0 w-[20%] h-[19%]">
        <div className="flex flex-col items-center">
          <Image
            src={"/assets/Image/done.png"}
            alt="Done Picture"
            height={40}
            width={40}
          />
          <p className="text-TextColor3  mt-2">
            {Text}
          </p>
  
          <br />
          <AlertDialogCancel
            className="bg-ButtonBlue text-white hover:text-white border-0 mt-5 hover:bg-ButtonBlue px-20 rounded-full py-6"
            onClick={handleConfirm} // Add onClick event handler
          >
            Confirm
          </AlertDialogCancel>
        </div>
      </AlertDialogContent>
    );
  }
  