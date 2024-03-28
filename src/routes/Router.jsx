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
import SinglePage from "../pages/homePage/SinglePage";
import CustomizeLogo from "../pages/dashboard/media/CustomizeLogo";
import Advertisment from "../pages/dashboard/media/Advertisement";
import SocialProfiles from "../pages/dashboard/themeSettings/socialProfiles/SocialProfiles";
import SubCategoryNews from "../pages/homePage/SubCategoryNews";
import UpdatePost from "../pages/dashboard/Posts/UpdatePost";
import PrivateRoute from "./PrivateRoute";
import CategoryNewsPage from "../pages/homePage/CategoryNewsPage";
import CustomizeFooter from "../pages/dashboard/themeSettings/footer/CustomizeFooter";
import TermsAndCondition from "../pages/termsAndCondition/TermsAndCondition";
import PhotoGallery from "../pages/dashboard/media/PhotoGallery";
import VideoGallery from "../pages/dashboard/media/VideoGallery";
import BodyStyles from "../pages/dashboard/themeSettings/bodyStyles/BodyStyles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posts/:id",
        element: <SinglePage />,
      },
      {
        path: "/sub-category/:subCategory",
        element: <SubCategoryNews />,
      },
      {
        path: "/category/:category",
        element: <CategoryNewsPage />,
      },
      {
        path: "/terms-and-condition",
        element: <TermsAndCondition />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
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
        path: "edit-post/:id",
        element: <UpdatePost />,
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
        path: "advertisement",
        element: <Advertisment />,
      },
      {
        path: "photo-gallery",
        element: <PhotoGallery />,
      },
      {
        path: "video-gallery",
        element: <VideoGallery />,
      },
      {
        path: "social-profiles",
        element: <SocialProfiles />,
      },
      {
        path: "footer-customize",
        element: <CustomizeFooter />,
      },
      {
        path: "body-styles",
        element: <BodyStyles />,
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
    element: (
      <PrivateRoute>
        <Register />
      </PrivateRoute>
    ),
  },
]);

export default router;
