import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import AllPosts from "../pages/dashboard/Posts/AllPosts";
import AddNewPost from "../pages/dashboard/Posts/AddNewPost";
import Categories from "../pages/dashboard/Posts/Categories";
import AllPage from "../pages/dashboard/Pages/AllPage/AllPage";
import AddNewPage from "../pages/dashboard/Pages/AddNewPage/AddNewPage";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Home from "../pages/homePage/Home";
import AllUsers from "../pages/dashboard/Users/AllUsers/AllUsers";
import CustomizeLogo from "../pages/dashboard/media/CustomizeLogo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "all-posts",
        element: <AllPosts />,
      },
      {
        path: "add-new-post",
        element: <AddNewPost />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "logo",
        element: <CustomizeLogo />,
      },
      {
        path: "all-page",
        element: <AllPage />,
      },
      {
        path: "add-new-page",
        element: <AddNewPage />,
      },
      {
        path: "all-users",
        element: <AllUsers />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Register />,
  },
]);

export default router;
