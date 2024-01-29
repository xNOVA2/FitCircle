import Image from "next/image";
import Picture from "@/public/assets/Image/BackgroundAuth.png";
import Logo from "@/public/assets/Image/Logo.png";
import { AuthModule } from "@/types/type";
import Link from "next/link";
import AuthButton from "@/components/AuthButton/AuthButton";

const AuthLayout: React.FC<AuthModule> = ({
  title,
  children,
  additionalText,
  buttonText,
  additionalLink,
  forgetPassword,
  hasButton,
  subHeading,
  errorMessage,
  isLoading,
  onClick,
}) => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Image Section */}
      <section className="w-1/2 h-full relative">
        <Image alt="" className="object-cover w-full h-full" src={Picture} />
        <span className="absolute top-0 left-0 w-full h-full bg-BackGroundImageColor opacity-30 shadow"></span>
        <span className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></span>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image width={100} height={100} src={Logo} alt="Logo" />
        </div>
      </section>

      {/* Content Section */}
      <section className="w-1/2 bg-opacity-100 bg-DarkLight">
        <div className="h-full flex flex-col items-center justify-center">
          <div className="p-6 text-white">
            <h1 className="text-3xl font-bold mb-4 text-textColor2">{title}</h1>
          </div>

          <div className="bg-backColor p-12 w-[55%] flex flex-col items-center justify-center rounded-2xl ">
            {subHeading && (
              <p className="mb-10 text-TextColor3 text-sm text-center">
                {subHeading}
              </p>
            )}

            {children}
            {forgetPassword && (
              <p className="text-TextColor3 mt-10  text-sm">
                <Link href={"/login/forget"} className="no-underline">
                  Forget Password?
                </Link>
              </p>
            )}
            {hasButton && <AuthButton onClick={onClick} text={buttonText} isLoading={isLoading} />}
             {errorMessage &&  <p className=" mt-4 text-sm text-red-500 font-semibold">{errorMessage}</p>}
            <p className="mt-10 text-TextColor3 text-sm">
              {additionalText}{" "}
              <span className="text-TextColor3 font-semibold text-sm underline">
                {additionalLink}
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthLayout;
