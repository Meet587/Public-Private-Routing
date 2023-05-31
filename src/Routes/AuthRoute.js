import React, { useState } from "react";
import { Navigate, Outlet } from "react-router";

const AuthRoute = () => {
  const [isAuth, setIsAuth] = useState(true);
  return <>{isAuth ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default AuthRoute;
