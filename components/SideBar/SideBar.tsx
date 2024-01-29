import Image from "next/image";

import Link from "next/link";

export default function SideBar({
  children,
  Active,
}: {
  children?: React.ReactNode;
  Active?: number;
}) {
  const AllLinks = [
    {
      category: "Dashboard",
      id: 1,
      path: "/dashboard",
    },
    {
      category: "Users",
      id: 2,
      path: "/users",
    },
   
    {
      category: "Coaches",
      id: 3,
      path: "/coaches",
    },
    {
      category: "Sub Admin",
      id: 4,
      path: "/sub-admin",
    },
    {
      category: "Guideline",
      id: 5,
      path: "/guideline",
    },
    {
      category: "PushNotification",
      id: 6,
      path: "/notification",
    },
    {
      category: "Support",
      id: 7,
      path: "/support",
    },
  ];

  return (
    <>
      <aside className="fixed min-h-screen w-64 flex-col overflow-y-auto  py-8 z-10  bg-opacity-100 bg-DarkLight">
        

        <div className="mt-6 flex flex-1 flex-col justify-between px-5">
          <nav className="space-y-6">
            {AllLinks.map((item) => (
              <div className="space-y-3" key={item.id}>
                <Link
                  className={`flex transform items-center rounded-lg px-3 py-2   ${Active === item.id ? 'text-white bg-ButtonBlue' : null}`}
                  href={item.path}
                >
              
                  <span className={`mx-2 text-sm font-medium ${Active === item.id ? 'text-white ' : 'text-dashBoardText'}`}>
                    {item.category}
                  </span>
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Add the main content here */}
      <div className=" overflow-x-hidden overflow-y-auto ">
        {/* Your main content goes here */}
        
        <div className="flex-1 overflow-x-hidden overflow-y-auto ml-64 bg-backGroundColor ">
            {children}
        </div>
      </div>
      
     
    </>
  );
}
