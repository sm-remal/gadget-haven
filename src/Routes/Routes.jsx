import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Statistics from "../pages/Statistics/Statistics";
import Dashboard from "../pages/Dashboard/Dashboard";
import Loader from "../components/Loader/Loader";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import CartDashboard from "../pages/CartDashboard/CartDashboard";
import WishList from "../pages/WishList/WishList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    hydrateFallbackElement: <Loader></Loader>,
    children: [
        {
            index: true,
            path: "/",
            loader: () => fetch("gadgetData.json"),
            Component: Home,
        },
        {
            path: "product-details/:id",
            Component: ProductDetails,
        },
        {
            path: "statistics",
            Component: Statistics,
        },
        {
            path: "dashboard",
            Component: Dashboard,
        },
        {
            path: "cart",
            Component: CartDashboard,
        },
        {
            path: "wishlist",
            Component: WishList,
        }
    ]
  },
]);