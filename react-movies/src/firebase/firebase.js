// credit - https://www.youtube.com/watch?v=WpIDez53SK4

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr0P9NbgL8ZYC88QYcpYVWWNU8a_07rSc",
  authDomain: "movies-c1875.firebaseapp.com",
  projectId: "movies-c1875",
  storageBucket: "movies-c1875.firebasestorage.app",
  messagingSenderId: "228851508406",
  appId: "1:228851508406:web:931d15dce078bbc14a3217"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export {firebaseApp, auth};