import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/pages/Home/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/Signup/SignUp";
import Blog from "../components/pages/Blog/Blog";
import Contact from "../components/pages/Contact";
import Resources from "../components/pages/Resources";
import PrivateRoute from "./PrivateRoute";

const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "blog",
        element: (
          <PrivateRoute>
            <Blog />,
          </PrivateRoute>
        ),
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "resources",
        element: <Resources />,
      },

      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default MainRoutes;
