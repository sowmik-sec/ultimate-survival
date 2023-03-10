import { createBrowserRouter } from "react-router-dom";
import Login from "../../components/login/Login/Login";
import SignUp from "../../components/login/SignUp/SignUp";
import Buy from "../../components/pages/Buy/Buy";
import CourseDetails from "../../components/pages/CourseDetails.js/CourseDetails";
import Courses from "../../components/pages/Courses/Courses";
import CoursesAndKits from "../../components/pages/CoursesAndKits/CoursesAndKits";
import Enroll from "../../components/pages/Enroll/Enroll";
import Error from "../../components/pages/Error/Error";
import Home from "../../components/pages/Home/Home";
import KitDetails from "../../components/pages/KitDetails/KitDetails";
import Kits from "../../components/pages/Kits/Kits";
import UserProfile from "../../components/pages/UserProfile/UserProfile";
import Main from "../../layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/user-profile",
        element: <UserProfile />,
      },
    ],
  },
  {
    path: "/courses-kits",
    element: <CoursesAndKits />,
    children: [
      {
        path: "/courses-kits",
        element: <Courses />,
        // https://ultimate-survival.onrender.com/courses
        loader: () => fetch(`https://ultimate-survival.onrender.com/courses`),
      },
      {
        path: "courses",
        element: <Courses />,
        // https://ultimate-survival.onrender.com/courses
        loader: () => fetch(`https://ultimate-survival.onrender.com/courses`),
      },
      {
        path: "courses/:id",
        element: <CourseDetails />,
        loader: ({ params }) =>
          fetch(`https://ultimate-survival.onrender.com/courses/${params.id}`),
      },
      {
        path: "enroll",
        element: (
          <PrivateRoute>
            <Enroll />
          </PrivateRoute>
        ),
      },
      {
        path: "kits",
        element: <Kits />,
        // https://ultimate-survival.onrender.com/courses
        loader: () => fetch(`https://ultimate-survival.onrender.com/kits`),
      },
      {
        path: "kits/:id",
        element: <KitDetails />,
        loader: ({ params }) =>
          fetch(`https://ultimate-survival.onrender.com/kits/${params.id}`),
      },
      {
        path: "buy",
        element: (
          <PrivateRoute>
            <Buy />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "*", element: <Error /> },
]);
