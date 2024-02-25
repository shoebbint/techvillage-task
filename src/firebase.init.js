// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKjPl9UHtCDSGlJUJUItlkH0By4OBkLt0",
  authDomain: "adminogram.firebaseapp.com",
  projectId: "adminogram",
  storageBucket: "adminogram.appspot.com",
  messagingSenderId: "652700664203",
  appId: "1:652700664203:web:af1d7966a7ec8bcb1c6f8e",
  measurementId: "G-P5EC7F0HC5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
export default auth;