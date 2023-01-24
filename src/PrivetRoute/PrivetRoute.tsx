import React, { ReactNode } from "react";
// import { Spinner } from "react-bootstrap";
import { Navigate, Route, useLocation, useNavigate } from "react-router";
import useAuth from "../Firebase/useAuth";
import useFirebase from "../Firebase/useFirebase";
// import useAuth from "./../../Hook/useAuth";
type ButtonProps = {
  children: ReactNode;
};

const PrivateRoute = ({ children, ...rest }: ButtonProps) => {
  // const { user, isLoading } = useAuth();
  const { user, isLoading } = useFirebase();
  const navigate = useNavigate();
  const location = useLocation();
  const userInfo: any = user;
  console.log(user);
  if (isLoading) {
    return (
      <div className="my-5 py-5">
        <div className="d-flex justify-content-center my-5 py-5">
          {/* <Spinner animation="border" variant="danger" /> */}
          Loading
        </div>
      </div>
    );
  }
  const path: any = location.pathname;
  console.log(path);
  if (userInfo?.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
