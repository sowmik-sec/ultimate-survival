import { createBrowserRouter } from "react-router-dom";
import CourseDetails from "../../components/pages/CourseDetails.js/CourseDetails";
import Courses from "../../components/pages/Courses/Courses";
import Enroll from "../../components/pages/Enroll/Enroll";
import Error from "../../components/pages/Error/Error";
import Home from "../../components/pages/Home/Home";
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
    ],
  },
  { path: "*", element: <Error /> },
]);
