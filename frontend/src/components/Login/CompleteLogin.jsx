import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CompleteLogin = ({ user, redirectTo = "/" }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const timer = setTimeout(() => {
        navigate(redirectTo);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [user, navigate, redirectTo]);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md max-w-md w-full text-center">
        <p className="text-green-600 font-semibold text-lg">
          Welcome, {user.phoneNumber || "User"}!
        </p>
        <p className="mt-2 text-gray-600">Redirecting you shortly...</p>
      </div>
    </div>
  );
};

export default CompleteLogin;
