// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4t8NJpM2IRRX3IBxTmgGcTULxSlZk2pU",
  authDomain: "personal-blog-902fd.firebaseapp.com",
  projectId: "personal-blog-902fd",
  storageBucket: "personal-blog-902fd.appspot.com",
  messagingSenderId: "16081188149",
  appId: "1:16081188149:web:0f16fe30a8a3412382487c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
