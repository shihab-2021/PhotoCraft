// import {
//   getAuth,
//   signInWithPopup,
//   GoogleAuthProvider,
//   signOut,
//   onAuthStateChanged,
// } from "firebase/auth";
// import { useState, useEffect } from "react";
// import initializeAuthentication from "./firebase.init";

// initializeAuthentication();

// const useFirebase = () => {
//   const [user, setUser] = useState({});
//   const [isLoading, setIsLoading] = useState(true);

//   const auth = getAuth();

//   const signInUsingGoogle = () => {
//     setIsLoading(true);
//     const googleProvider = new GoogleAuthProvider();

//     return signInWithPopup(auth, googleProvider);
//   };

//   // observe user state change
//   useEffect(() => {
//     const unsubscribed = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUser(user);
//       } else {
//         setUser({});
//       }
//       setIsLoading(false);
//     });
//     return () => unsubscribed;
//   }, []);

//   const logOut = () => {
//     setIsLoading(true);
//     signOut(auth)
//       .then(() => {})
//       .finally(() => setIsLoading(false));
//   };

//   return {
//     user,
//     isLoading,
//     signInUsingGoogle,
//     logOut,
//     setIsLoading,
//   };
// };

// export default useFirebase;

import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  getIdToken,
} from "firebase/auth";

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [adminInfo, setAdminInfo] = useState({});
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // function for google signIn
  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        userData(user.email, user.displayName, "PUT");
        setAuthError("");
        const destination = location?.state?.from || "/";
        // history.replace(destination);
        history(destination);
      })
      .catch((error) => {
        setAuthError(error.massage);
      })
      .finally(() => setIsLoading(false));
  };
  // Login user with Email Password
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        // history.replace(destination);
        history(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // Register user with Email Password
  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        userData(email, name, "POST");
        // sent name to firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        // history.replace("/");
        history("/");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // Save User Information
  const userData = (email, displayName, method) => {
    console.log("came here");
    const user = { email, displayName };
    fetch("https://photo-craft.vercel.app/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  // user observation
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });
      } else {
        setUser({});
        setIsLoading(false);
      }
    });
    return () => unsubscribed;
  }, [auth]);

  // For Logout
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    if (user?.email) {
      fetch(`https://photo-craft.vercel.app/users/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setAdmin(data.admin);
          setIsLoading(false);
        });
    }
  }, [user?.email, auth]);

  // useEffect(() => {
  //   fetch(`https://photo-craft.vercel.app/users/${user.email}`)
  //     .then((res) => res.json())
  //     .then((data) => setAdmin(data.admin));
  // }, [user?.email, admin]);
  console.log(admin);
  return {
    user,
    signInWithGoogle,
    isLoading,
    authError,
    registerUser,
    loginUser,
    logout,
    admin,
    token,
  };
};

export default useFirebase;
