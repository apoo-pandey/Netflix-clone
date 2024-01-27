// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3o0gs-vppMqx3SE97hLiH5TbzV4tP0qc",
  authDomain: "netflixgpt-b5aaf.firebaseapp.com",
  projectId: "netflixgpt-b5aaf",
  storageBucket: "netflixgpt-b5aaf.appspot.com",
  messagingSenderId: "209608064222",
  appId: "1:209608064222:web:83c57a1d507bd4a235964f",
  measurementId: "G-345924NN75",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
