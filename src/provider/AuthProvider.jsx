/* eslint-disable react/prop-types */

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
// ****
const AuthProvider = ({ children }) => {
  const [selectUser, setSelectUser] = useState({});
  // ! create User With Email And Password
  const handleCreateUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   !sign In With Email And Password
  const handleLoginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   ! on auth state change
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setSelectUser(user);
    });
  }, []);
  //   ! google
  const singwithGoogle = () => {
    signInWithPopup(auth, provider);
  };
  // *
  const authValue = {
    handleCreateUser,
    handleLoginUser,
    singwithGoogle,
    selectUser,
  };
  console.log(selectUser);
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
