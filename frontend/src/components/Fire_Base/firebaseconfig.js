// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEv9I24A-IXd_N6SP4WR76xHBYlSJgO08",
  authDomain: "swiftcardotp.firebaseapp.com",
  projectId: "swiftcardotp",
  storageBucket: "swiftcardotp.appspot.com",
  messagingSenderId: "194106314765",
  appId: "1:194106314765:web:9e16cb1a8dc62e4d414544",
  measurementId: "G-6VT48ZQQKX"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and export it
const auth = getAuth(app);

export { auth };
