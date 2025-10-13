import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Statistics from "../pages/Statistics/Statistics";
import Dashboard from "../pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            path: "/",
            loader: () => fetch("gadgetData.json"),
            Component: Home,
        },
        {
            path: "statistics",
            Component: Statistics,
        },
        {
            path: "dashboard",
            Component: Dashboard,
        }
    ]
  },
]);