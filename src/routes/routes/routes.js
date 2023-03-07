import { createBrowserRouter } from "react-router-dom";
import Login from "../../components/login/Login/Login";
import SignUp from "../../components/login/SignUp/SignUp";
import CourseDetails from "../../components/pages/CourseDetails.js/CourseDetails";
import Courses from "../../components/pages/Courses/Courses";
import Enroll from "../../components/pages/Enroll/Enroll";
import Error from "../../components/pages/Error/Error";
import Home from "../../components/pages/Home/Home";
import UserProfile from "../../components/pages/UserProfile/UserProfile";
import Main from "../../layout/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/courses",
        element: <Courses />,
        loader: () => fetch(`https://ultimate-survival.onrender.com/courses`),
      },
      {
        path: "/courses/:id",
        element: <CourseDetails />,
        loader: ({ params }) =>
          fetch(`https://ultimate-survival.onrender.com/courses/${params.id}`),
      },
      {
        path: "/enroll",
        element: <Enroll />,
      },
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
  { path: "*", element: <Error /> },
]);
