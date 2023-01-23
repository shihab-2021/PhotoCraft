import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../Firebase/useAuth";
// import useFirebase from "../../Hook/useFirebase";
import useFirebase from "../Firebase/useFirebase";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const history = useNavigate();
  const auth = getAuth();
  const redirect_uri = location.state?.from || "/home";

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  return (
    <div>
      <form
        onSubmit={handleLoginSubmit}
        className="my-5 p-4 rounded shadow mx-auto"
        style={{ maxWidth: "25rem" }}
      >
        <div className="mb-3">
          <h2 className="text-center pb-2">Please Signin</h2>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            onChange={handleOnChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            onChange={handleOnChange}
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        <div className="row mb-3 text-danger">{error}</div>
        <div>
          <h6 className="pb-3">
            Don't have an account? <Link to="/signup">Register</Link>
          </h6>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <div className="pt-5 text-center">
          <button onClick={handleGoogleSignIn} className="btn btn-info">
            <i className="fa fa-google text-danger" aria-hidden="true"></i> Sign
            In with <span className="text-danger">google</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
