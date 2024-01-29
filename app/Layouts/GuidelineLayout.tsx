import GuidelineNavbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import { ReactNode } from "react";

export default function GuidelineLayout({
  children,
  Active,
  onSaveFunction,
  isCommunitySaveButton,
  buttonDisable
}: {
  children: ReactNode;
  Active?: number;
  onSaveFunction?: () => void;
  isCommunitySaveButton?:boolean
  buttonDisable?:boolean
}) {
  return (
    <div className="flex w-full">
      <div className="w-[20%] h-screen overflow-hidden border-1 bg-backColor p-5 fixed">
        <div className="flex flex-col mr-4">
          <h1 className="font-bold text-4xl mb-2 text-white">Guidelines</h1>
          <ul className="mt-5 mx-3 flex flex-col gap-6">
            <li
              className={`${
                Active === 1
                  ? "text-white py-3 bg-DarkLight rounded-lg px-3"
                  : "text-TextColor3 opacity-45 px-3"
              }`}
            >
              <Link href={"/guideline"}>Terms & Condition</Link>
            </li>

            <li
              className={`${
                Active === 2
                  ? "text-white py-3 bg-DarkLight rounded-lg px-3"
                  : "text-TextColor3 opacity-45 px-3"
              }`}
            >
              <Link href={"/guideline/privacy"}>Privacy Policy</Link>
            </li>

            <li
              className={`${
                Active === 3
                  ? "text-white py-3 bg-DarkLight rounded-lg px-3"
                  : "text-TextColor3 opacity-45 px-3"
              }`}
            >
              <Link href={"/guideline/faq"}>FAQ</Link>
            </li>

            <li
              className={`${
                Active === 4
                  ? "text-white py-3 bg-DarkLight rounded-lg px-3"
                  : "text-TextColor3 opacity-45 px-3"
              }`}
            >
              <Link href={"/guideline/interest"}>Interests</Link>
            </li>

            <li
              className={`${
                Active === 5
                  ? "text-white py-3 bg-DarkLight rounded-lg px-3"
                  : "text-TextColor3 opacity-45 px-3"
              }`}
            >
              <Link href={"/guideline/community"}>Community</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full ml-[24%]">
        <GuidelineNavbar onSaveFunction={onSaveFunction} isCommunitySaveButton={isCommunitySaveButton} buttonDisable={buttonDisable}/>
        {children}
      </div>
    </div>
  );
}