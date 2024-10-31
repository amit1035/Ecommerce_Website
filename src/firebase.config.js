// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAifMo5rTThdmbrBYFyYVYxquQBlFraLXU",
  authDomain: "otp-ecommerce-4d872.firebaseapp.com",
  projectId: "otp-ecommerce-4d872",
  storageBucket: "otp-ecommerce-4d872.appspot.com",
  messagingSenderId: "620123407238",
  appId: "1:620123407238:web:9bce0f9eb9be6e7932e207",
  measurementId: "G-4DLPLPL1D5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);