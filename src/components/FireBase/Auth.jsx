// Auth.js
import React, { useState, useRef } from "react";
import firebase from "../firebaseconfig"; // Path from Login.jsx to firebase.config.js


const Auth = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [error, setError] = useState("");
  const confirmationResultRef = useRef(null);

  const handleSendOtp = () => {
    const appVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container", {
      size: "invisible",
    });

    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        confirmationResultRef.current = confirmationResult;
        setIsOtpSent(true);
      })
      .catch((error) => {
        setError("Error sending OTP. Please check the number and try again.");
      });
  };

  const handleVerifyOtp = () => {
    const confirmationResult = confirmationResultRef.current;
    if (confirmationResult) {
      confirmationResult
        .confirm(otp)
        .then((result) => {
          alert("Phone number verified successfully!");
          // Optionally redirect or set authentication state here
        })
        .catch((error) => {
          setError("Invalid OTP. Please try again.");
        });
    }
  };

  return (
    <div>
      <h1>Phone OTP Authentication</h1>
      <div>
        {!isOtpSent ? (
          <>
            <input
              type="tel"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button onClick={handleSendOtp}>Send OTP</button>
            <div id="recaptcha-container"></div>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={handleVerifyOtp}>Verify OTP</button>
          </>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default Auth;
