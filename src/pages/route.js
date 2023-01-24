import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import PrivateRoute from "../PrivetRoute/PrivetRoute";
import Main from "../layout/Main";
import Login from "./Login";
import Dashboard from "./Dashboard/Dashboard/Dashboard";
import AddAProduct from "./Dashboard/AddAProduct/AddAProduct";
import ManageProducts from "./Dashboard/ManageProducts/ManageProducts";
import Register from "./Register";
import AdminRoute from "../PrivetRoute/AdminRoute";
import Details from "./Details";
import AddToCart from "./AddToCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
      {
        path: "/details/:productId",
        element: <Details />,
      },
      {
        path: "/addToCart/:productId",
        element: <AddToCart></AddToCart>,
      },
      {
        path: "/services",
        element: (
          <PrivateRoute>
            <Services></Services>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/addAProduct",
        element: (
          <AdminRoute>
            <AddAProduct></AddAProduct>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageProducts",
        element: <ManageProducts></ManageProducts>,
      },
      // {
      //   path: "/dashboard/makeAdmin",
      //   element: <MakeAdmin></MakeAdmin>,
      // },
      // {
      //   path: "/dashboard/manageAllOrders",
      //   element: <ManageAllOrders></ManageAllOrders>,
      // },
      // {
      //   path: "/dashboard/manageProducts",
      //   element: <ManageProducts></ManageProducts>,
      // },
      // {
      //   path: "/services",
      //   element: (
      //     <PrivateRoute>
      //       <Services></Services>
      //     </PrivateRoute>
      //   ),
      // },

      // <Route
      //   path="/dashboard"
      //   element={
      //     <AdminRoute>
      //       <Dashboard />
      //     </AdminRoute>
      //   }
      // >
      //   <Route path="makeAdmin" element={<MakeAdmin />} />
      //   <Route path="manageAllOrders" element={<ManageAllOrders />} />
      //   <Route path="manageProducts" element={<ManageProducts />} />
      // </Route>,
    ],
  },
]);

export default router;
