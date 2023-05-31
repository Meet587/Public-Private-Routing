import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";

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
    element: <Dashboard />,
  },
  {
    path: "/customers",
    element: <Dashboard />,
  },
  {
    path: "/products",
    element: <Dashboard />,
  },
  {
    path: "/analytics",
    element: <Dashboard />,
  },

];
