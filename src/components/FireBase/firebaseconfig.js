import firebase from "firebase/compat/app";
import "firebase/compat/auth";
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
firebase.initializeApp(firebaseConfig);

export default firebase;