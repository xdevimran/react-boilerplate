/* eslint-disable react/prop-types */
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 800,
  once: true,
});

import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/FirebaseConfig";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [jsonData, setJsonData] = useState(null);

  // Fetch JSON data function
  const fetchJsonData = async () => {
    try {
      const response = await fetch("/event.json");
      const data = await response.json();
      setJsonData(data);
    } catch (error) {
      console.error("Error fetching JSON data:", error);
    }
  };

  // Create user function
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Log in user function
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // log in user with google popup function
  const provider = new GoogleAuthProvider();
  const logInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // Log out function
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Fetch JSON data when the component mounts
    fetchJsonData();

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    logIn,
    logOut,
    loading,
    jsonData,
    logInWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
