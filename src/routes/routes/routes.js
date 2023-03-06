import { createBrowserRouter } from "react-router-dom";
import Courses from "../../components/pages/Courses/Courses";
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
    ],
  },
]);
