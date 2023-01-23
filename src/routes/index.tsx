import React from "react";
import { Route, RouterProvider, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "../Context/Context";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Services from "../pages/Services";
import PrivateRoute from "../PrivetRoute/PrivetRoute";
import router from "../pages/route.js";

const Index = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
  // return (
  //   <AuthProvider>
  //     <BrowserRouter>
  //       <Navbar></Navbar>
  //       <Routes>
  //         <Route path="/" element={<Home></Home>}></Route>
  //         <Route path="/home" element={<Home></Home>}></Route>
  //         <Route path="/login" element={<Login></Login>}></Route>
  //         <Route
  //           path="/services"
  //           element={
  //             <PrivateRoute>
  //               <Services></Services>
  //             </PrivateRoute>
  //           }
  //         ></Route>

  //         <Route path="*" element={<Error></Error>}></Route>
  //       </Routes>
  //       <Footer></Footer>
  //     </BrowserRouter>
  //   </AuthProvider>
  // );
};

export default Index;
