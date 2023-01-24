import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Route, Redirect, Navigate, useLocation } from "react-router-dom";
import useAuth from "../Firebase/useAuth";
import useFirebase from "../Firebase/useFirebase";
// import useAuth from "../Firebase/useAuth";
// import useAuth from "../../Hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, isLoading } = useAuth();
  const adminInfo = admin;

  const userInfo = user;
  console.log(user);
  console.log(admin);
  const location = useLocation();
  if (isLoading) {
    return <CircularProgress />;
  }
  // if (user?.email && admin) {
  //   return children;
  // }
  // if (!isLoading && admin) {
  //   return <Navigate to="/" state={{ from: location }} />;
  // }
  if (userInfo?.email && adminInfo) {
    return children;
  }

  if (!adminInfo) return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoute;
