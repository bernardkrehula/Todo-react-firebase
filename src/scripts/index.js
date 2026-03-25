// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpqBt8mllERqUITRcj02r2Cy_mBgShNdQ",
  authDomain: "todolist-35c38.firebaseapp.com",
  databaseURL: "https://todolist-35c38-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todolist-35c38",
  storageBucket: "todolist-35c38.firebasestorage.app",
  messagingSenderId: "229061097169",
  appId: "1:229061097169:web:99a88d09cfb9f8d299b7f0",
  measurementId: "G-M7SHLCNZKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);