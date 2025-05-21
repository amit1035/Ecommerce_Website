// src/components/firebase/firebaseconfig.js
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_TTOKByHx3ipLk5CZZl9adiZ8uAqSWf4",
  authDomain: "ecommercewebsite-57724.firebaseapp.com",
  projectId: "ecommercewebsite-57724",
  storageBucket: "ecommercewebsite-57724.appspot.com", // 🔧 fixed domain typo here (you wrote .firebasestorage.app)
  messagingSenderId: "400015086218",
  appId: "1:400015086218:web:5bdc61de8ed0bb84849373",
  measurementId: "G-8KXEX89BB0"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Auth and export necessary functions
const auth = getAuth(app);

export { auth, RecaptchaVerifier, signInWithPhoneNumber };
