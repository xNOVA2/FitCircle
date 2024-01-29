"use client";
import AddCommunityDialog from "../Dialog/AddCommunityDialog";
import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from "../ui/alert-dialog";
import { Button } from "../ui/button";

export default function GuidelineNavbar({
  onSaveFunction,
  isCommunitySaveButton,
  buttonDisable,
}: {
  onSaveFunction?: () => void;
  isCommunitySaveButton?: boolean;
  buttonDisable?:boolean
}) {
  return (
    <nav className="w-full h-20 flex justify-end gap-5 bg-DarkLight pt-5 pr-5">
      <Button className="py-1 bg-inherit text-white border">Cancel</Button>
      {isCommunitySaveButton ? (
         <AlertDialog>
         <AlertDialogTrigger asChild>
        <Button
        disabled={buttonDisable}
          className="bg-ButtonBlue py-2 px-10 rounded-xl"
          
        >
          Save
        </Button>
        
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-opacity-100 bg-DarkLight border-0 w-[20%] h-[20%] rounded-[55px] !p-0">
          <AddCommunityDialog  SaveFunction={onSaveFunction!}/>
        </AlertDialogContent>
        </AlertDialog>
      ) : (
        <Button
          className="bg-ButtonBlue py-2 px-10 rounded-xl"
          onClick={onSaveFunction}
        >
          Save
        </Button>
      )}
    </nav>
  );
}

