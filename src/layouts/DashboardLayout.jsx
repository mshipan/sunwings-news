import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <h1 className="text-xl">Hi, Dashboard Layout</h1>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
