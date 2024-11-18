import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../../layout/Mainlayout/Mainlayout";
import Home from "../../Pages/HomePages/Home/Home";

export const Mainrouter = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
