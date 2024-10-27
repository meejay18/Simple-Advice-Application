import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Homepage from "../Pages/Homepage";
import Incanddec from "../Pages/Incanddec";
import Timecount from "../Pages/Timecount";
import About from "../Pages/About";
import Advice from "../Pages/Advice";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <Incanddec />,
        path: "/Incanddec",
      },

      {
        element: <Timecount />,
        path: "/Timecount",
      },
      {
        element: <About />,
        path: "/About",
      },
    ],
  },
  {
    index: true,
    element: <Advice />,
    path: "/Advice",
  },
]);
