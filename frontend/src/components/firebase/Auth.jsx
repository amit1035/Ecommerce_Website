// Auth.js
import React, { useState, useRef } from "react";
import firebase from "../../firebase/firebaseconfig"; // ✅ adjust this path as per your structure

const Auth = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [error, setError] = useState("");
  const confirmationResultRef = useRef(null);

  const handleSendOtp = () => {
    setError(""); // reset error

    // ✅ Sanitize and validate number
    const formattedPhone = phoneNumber.replace(/\s/g, "");
    if (!formattedPhone.startsWith("+")) {
      setError("Please include country code (e.g., +91).");
      return;
    }

    // ✅ Create & render reCAPTCHA
    const appVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container", {
      size: "invisible",
    });

    appVerifier.render().then(() => {
      firebase
        .auth()
        .signInWithPhoneNumber(formattedPhone, appVerifier)
        .then((confirmationResult) => {
          confirmationResultRef.current = confirmationResult;
          setIsOtpSent(true);
        })
        .catch((error) => {
          console.error("OTP Error:", error);
          setError("Error sending OTP. Please check the number and try again.");
        });
    });
  };

  const handleVerifyOtp = () => {
    setError(""); // reset error

    const confirmationResult = confirmationResultRef.current;
    if (confirmationResult) {
      confirmationResult
        .confirm(otp)
        .then((result) => {
          alert("Phone number verified successfully!");
        })
        .catch((error) => {
          console.error("OTP verification error:", error);
          setError("Invalid OTP. Please try again.");
        });
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h1 className="text-lg font-bold mb-4">Phone OTP Authentication</h1>
      <div>
        {!isOtpSent ? (
          <>
            <input
              type="tel"
              placeholder="Enter phone number (+91...)"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="border p-2 w-full mb-4"
            />
            <button onClick={handleSendOtp} className="bg-green-600 text-white px-4 py-2 rounded">
              Send OTP
            </button>
            <div id="recaptcha-container"></div>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="border p-2 w-full mb-4"
            />
            <button onClick={handleVerifyOtp} className="bg-blue-600 text-white px-4 py-2 rounded">
              Verify OTP
            </button>
          </>
        )}
        {error && <p className="text-red-600 mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default Auth;
