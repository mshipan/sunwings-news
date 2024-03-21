import { useState } from "react";
import { CiSettings } from "react-icons/ci";
import { FaUserTie } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { LiaCommentSolid } from "react-icons/lia";
import {
  MdCompost,
  MdOutlineCamera,
  MdOutlineKeyboardArrowRight,
  MdRestorePage,
} from "react-icons/md";
import { TiHomeOutline } from "react-icons/ti";
import { VscFileMedia } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  const [collapsed, setCollapsed] = useState({
    post: true,
    media: true,
    theme: true,
    page: true,
    user: true,
    setting: true,
  });

  const toggleCollapse = (dropdown) => {
    setCollapsed((prevState) => {
      const updatedCollapsed = {};
      // Close all collapses except the one being toggled
      Object.keys(prevState).forEach((key) => {
        updatedCollapsed[key] = key === dropdown ? !prevState[key] : true;
      });
      return updatedCollapsed;
    });
  };

  return (
    <div className={sidebarOpen ? "hidden md:block" : "block"}>
      <div className="fixed left-0 top-0 w-64 h-full bg-gray-900 p-4 z-50 transition-transform">
        <div className="flex items-center justify-between pb-4">
          <Link to="/" className="flex items-center">
            <img
              src="https://placehold.co/32x32"
              alt=""
              className="w-8 h-8 rounded object-cover"
            />
            <span className="text-lg font-bold text-white ml-3">Logo</span>
          </Link>

          <button
            onClick={toggleSidebar}
            type="button"
            className="text-lg text-gray-600 sidebar-toggle block md:hidden"
          >
            <IoIosCloseCircleOutline className="text-3xl text-white" />
          </button>
        </div>
        <ul className="mt-4">
          <li className="mb-1 group active">
            <Link
              to="#"
              className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md "
            >
              <TiHomeOutline className="mr-3 text-lg" />
              <span className="text-sm select-none">Dashboard</span>
            </Link>
          </li>
          <li className="mb-1 group">
            <div
              className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md    dropdown-toggle"
              onClick={() => toggleCollapse("post")}
            >
              <MdCompost className="mr-3 text-lg" />
              <span className="text-sm select-none ">Posts</span>
              <MdOutlineKeyboardArrowRight className=" ml-auto" />
            </div>
            <ul
              className={`pl-7 mt-2 ${
                collapsed.post
                  ? "hidden"
                  : "block transition-all ease-in duration-500"
              }`}
            >
              <li className="mb-4">
                <Link
                  to="/dashboard/all-posts"
                  className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3 select-none"
                >
                  All Posts
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/dashboard/add-new-post"
                  className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3 select-none"
                >
                  Add New Post
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/dashboard/categories"
                  className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3 select-none"
                >
                  Categories
                </Link>
              </li>
            </ul>
          </li>
          <li className="mb-1 group">
            <div
              className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md    sidebar-dropdown-toggle"
              onClick={() => toggleCollapse("media")}
            >
              <VscFileMedia className="ri-instance-line mr-3 text-lg" />
              <span className="text-sm select-none">Media</span>
              <MdOutlineKeyboardArrowRight className=" ml-auto " />
            </div>
            <ul className={`pl-7 mt-2 ${collapsed.media ? "hidden" : "block"}`}>
              <li className="mb-4">
                <Link
                  to="/dashboard/logo"
                  className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3 select-none"
                >
                  Logo
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/dashboard/advertisement"
                  className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3 select-none"
                >
                  Advertisement
                </Link>
              </li>
            </ul>
          </li>
          <li className="mb-1 group">
            <div
              className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md   "
              onClick={() => toggleCollapse("theme")}
            >
              <MdOutlineCamera className="ri-instance-line mr-3 text-lg" />
              <span className="text-sm select-none">Theme Settings</span>
              <MdOutlineKeyboardArrowRight className=" ml-auto " />
            </div>
            <ul className={`pl-7 mt-2 ${collapsed.theme ? "hidden" : "block"}`}>
              <li className="mb-4">
                <Link
                  to="/dashboard/social-profiles"
                  className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3 select-none"
                >
                  Social Profiles
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/dashboard/footer-customize"
                  className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3 select-none"
                >
                  Footer
                </Link>
              </li>
            </ul>
          </li>
          <li className="mb-1 group">
            <div
              className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md    sidebar-dropdown-toggle"
              onClick={() => toggleCollapse("page")}
            >
              <MdRestorePage className="ri-instance-line mr-3 text-lg" />
              <span className="text-sm select-none">Pages</span>
              <MdOutlineKeyboardArrowRight className=" ml-auto " />
            </div>
            <ul className={`pl-7 mt-2 ${collapsed.page ? "hidden" : "block"}`}>
              <li className="mb-4">
                <Link
                  to="#"
                  className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3 select-none"
                >
                  All Page
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="#"
                  className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3 select-none"
                >
                  Add New Page
                </Link>
              </li>
            </ul>
          </li>
          <li className="mb-1 group">
            <Link
              to=""
              className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md    sidebar-dropdown-toggle"
            >
              <LiaCommentSolid className="ri-instance-line mr-3 text-lg" />
              <span className="text-sm select-none">Comments</span>
            </Link>
          </li>
          <li className="mb-1 group">
            <div
              className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md    sidebar-dropdown-toggle"
              onClick={() => toggleCollapse("user")}
            >
              <FaUserTie className="ri-instance-line mr-3 text-lg" />
              <span className="text-sm select-none">Users</span>
              <MdOutlineKeyboardArrowRight className=" ml-auto " />
            </div>
            <ul className={`pl-7 mt-2 ${collapsed.user ? "hidden" : "block"}`}>
              <li className="mb-4">
                <Link
                  to="/dashboard/all-users"
                  className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3 select-none"
                >
                  All User
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/sign-up"
                  className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3 select-none"
                >
                  Add New User
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="#"
                  className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3 select-none"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </li>
          <li className="mb-1 group">
            <div
              className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md    sidebar-dropdown-toggle"
              onClick={() => toggleCollapse("setting")}
            >
              <CiSettings className="ri-instance-line mr-3 text-lg" />
              <span className="text-sm select-none">Settings</span>
              <MdOutlineKeyboardArrowRight className=" ml-auto " />
            </div>
            {/* <ul
              className={`pl-7 mt-2 ${collapsed.setting ? "hidden" : "block"}`}
            >
              <li className="mb-4">
                <Link
                  to="#"
                  className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3 select-none"
                >
                  All User
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="#"
                  className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3 select-none"
                >
                  Add New User
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="#"
                  className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3 select-none"
                >
                  Profile
                </Link>
              </li>
            </ul> */}
          </li>
        </ul>
      </div>
      <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden sidebar-overlay"></div>
    </div>
  );
};

export default Sidebar;
