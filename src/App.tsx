import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/layout";
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import BlogsPage from "./pages/blogsPage";
import BlogPage from "./pages/blogPage";
import UserDashBoardPage from "./pages/userDashBoardPage";
import CreateBlogPage from "./pages/createBlogPage";
import EditBlogPage from "./pages/editBlogPage";
import DeleteBlogPage from "./pages/deleteBlogPage";
import SignInPage from "./pages/signInPage";
import SignUpPage from "./pages/signUpPage";
import EditUserDetails from "./pages/editUserDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/blogs",
          element: <BlogsPage />,
        },
        {
          path: "/blogs/:blogId",
          element: <BlogPage />,
        },
        {
          path: "/create-blog/:userId",
          element: <CreateBlogPage />,
        },
        {
          path: "/edit-blog/:blogId",
          element: <EditBlogPage />,
        },
        {
          path: "/delete-blog/:blogId",
          element: <DeleteBlogPage />,
        },
        {
          path: "/user-dashboard/:userId",
          element: <UserDashBoardPage />,
        },
        {
          path: "/edit-user-details/:userId",
          element: <EditUserDetails />,
        },
        {
          path: "/sign-in",
          element: <SignInPage />,
        },
        {
          path: "/sign-up",
          element: <SignUpPage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
