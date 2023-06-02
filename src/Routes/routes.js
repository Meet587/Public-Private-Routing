import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

// private routes
import Dashboard from "../Pages/Dashboard/Dashboard";
import Orders from "../Pages/Orders/Orders";
import Customers from "../Pages/Customers/Customers";
import Products from "../Pages/Products/Products";
import Analytics from "../Pages/Analytics/Analytics";
import Layout from "../Components/Layout/Layout";

export const publicRoute = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];
export const routes = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/orders",
    element: <Orders />,
  },
  {
    path: "/customers",
    element: <Customers />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/analytics",
    element: <Analytics />,
  },
];
