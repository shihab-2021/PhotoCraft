import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../Firebase/useAuth";
import useFirebase from "../Firebase/useFirebase";
import "../sass/Navbar.scss";

const Navbar = () => {
  const { user, admin, logout } = useAuth();
  console.log(admin);
  const userInfo: any = user;
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-dark">
          <div className="container-fluid container">
            <h1 className="logo">
              <span className="text-danger">Photo</span>Craft
            </h1>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item me-3">
                  <Link to="/home" className="navLink">
                    Home
                  </Link>
                </li>
                <li className="nav-item me-3">
                  <Link to="/services" className="navLink">
                    Services
                  </Link>
                </li>
                <li className="nav-item me-3">
                  <Link to="/about" className="navLink">
                    About
                  </Link>
                </li>
                {userInfo?.email && (
                  <div className="btn-group">
                    <button
                      className="btn btn-outline-info dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dashboard
                    </button>
                    {admin && (
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="/addAProduct">
                            Add Product
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/makeAdmin">
                            Make Admin
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/manageAllOrders">
                            Manage Orders
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/manageProducts">
                            Manage Services
                          </Link>
                        </li>
                      </ul>
                    )}
                    {userInfo?.email && (
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="/myOrder">
                            My Order
                          </Link>
                        </li>
                      </ul>
                    )}
                  </div>
                )}

                <li className="mx-3">
                  <p className="text-warning tw-bold">
                    {userInfo?.displayName}
                  </p>
                </li>
                {userInfo?.email ? (
                  <button
                    className="btn btn-outline-primary"
                    style={{ maxHeight: "40px" }}
                    onClick={logout}
                  >
                    Sign Out
                  </button>
                ) : (
                  <Link to="/login">
                    <button className="btn btn-outline-primary mr-2 ml-2">
                      Sign In
                    </button>
                  </Link>
                )}
                {!userInfo?.email ? (
                  <Link to="/signup">
                    <button className="btn btn-outline-info">Sign Up</button>
                  </Link>
                ) : (
                  <p></p>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
