// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-9fd2a.firebaseapp.com",
  projectId: "mern-blog-9fd2a",
  storageBucket: "mern-blog-9fd2a.appspot.com",
  messagingSenderId: "561668431442",
  appId: "1:561668431442:web:c7964c3436c8fd992a098b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
