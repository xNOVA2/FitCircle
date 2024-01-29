import DashboardLayout from "../Layouts/DashboardLayout";

export default function DashboardPage() {
  return (
    <DashboardLayout Active={1}>
      <div className="h-screen w-full bg-black bg-opacity-85 p-14">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>

        <div className="mt-10">
          <h1 className="text-xl font-semibold text-white">Users</h1>
          <div className="flex justify-start gap-2">
            <div className="w-40 rounded-lg h-24 bg-DarkLight bg-opacity-100 flex flex-col justify-center items-start pl-5 mt-3 ">
              <h1 className="text-3xl font-bold text-textColor2">2.3k</h1>
              <p className="mt-2  text-xs text-dashBoardText">
                Total Downloads
              </p>
            </div>

            <div className="w-40 rounded-lg h-24 bg-DarkLight bg-opacity-100 flex flex-col justify-center items-start pl-5 mt-3 ">
              <h1 className="text-3xl font-bold text-textColor2">901</h1>
              <p className="mt-2  text-xs text-dashBoardText">
                Total Downloads
              </p>
            </div>

            <div className="w-40 rounded-lg h-24 bg-DarkLight bg-opacity-100 flex flex-col justify-center items-start pl-5 mt-3 ">
              <h1 className="text-3xl font-bold text-textColor2">2.3k</h1>
              <p className="mt-2  text-xs text-dashBoardText">
                Total Downloads
              </p>
            </div>
          </div>
        </div>

        {/* Placeholder content for additional sections */}
        <div className="mt-10">
          <h1 className="text-xl font-semibold text-white">Genders</h1>
          <div className="flex justify-start gap-2">
            <div className="w-40 rounded-lg h-24 bg-DarkLight bg-opacity-100 flex flex-col justify-center items-start pl-5 mt-3 ">
              <h1 className="text-3xl font-bold text-textColor2">1.2k</h1>
              <p className="mt-2  text-xs text-dashBoardText">Total males</p>
            </div>
            <div className="w-40 rounded-lg h-24 bg-DarkLight bg-opacity-100 flex flex-col justify-center items-start pl-5 mt-3 ">
              <h1 className="text-3xl font-bold text-textColor2">1.2k</h1>
              <p className="mt-2  text-xs text-dashBoardText">Total Females</p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h1 className="text-xl font-semibold text-white">Subscriptions</h1>
          <div className="flex justify-start gap-2">
            <div className="w-40 rounded-lg h-24 bg-DarkLight bg-opacity-100 flex flex-col justify-center items-start pl-5 mt-3 ">
              <h1 className="text-3xl font-bold text-textColor2">2.3k</h1>
              <p className="mt-2  text-xs text-dashBoardText">
                Total 1 Day Premium
              </p>
            </div>

            <div className="w-40 rounded-lg h-24 bg-DarkLight bg-opacity-100 flex flex-col justify-center items-start pl-5 mt-3 ">
              <h1 className="text-3xl font-bold text-textColor2">901</h1>
              <p className="mt-2  text-xs text-dashBoardText">
                Total 3 Day Premium
              </p>
            </div>

            <div className="w-40 rounded-lg h-24 bg-DarkLight bg-opacity-100 flex flex-col justify-center items-start pl-5 mt-3 ">
              <h1 className="text-3xl font-bold text-textColor2">1.2k</h1>
              <p className="mt-2  text-xs text-dashBoardText">
                Total 3 Week Premium
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
