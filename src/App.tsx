import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/layout";
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import BlogsPage from "./pages/blogsPage";
import BlogPage from "./pages/blogPage";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import UserDashBoardPage from "./pages/userDashBoardPage";
import CreateBlogPage from "./pages/createBlogPage";
import EditBlogPage from "./pages/editBlogPage";
import DeleteBlogPage from "./pages/deleteBlogPage";

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
          path: "/sign-in",
          element: <SignIn />,
        },
        {
          path: "/sign-up",
          element: <SignUp />,
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
