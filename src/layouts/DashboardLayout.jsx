import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import { useState } from "react";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <>
      {/* Start: Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {/* End: Sidebar */}

      {/* Star: Topbar */}
      <Topbar toggleSidebar={toggleSidebar} />
      {/* End: Topbar */}
    </>
  );
};

export default DashboardLayout;
