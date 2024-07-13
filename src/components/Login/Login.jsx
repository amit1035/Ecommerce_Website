import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simulate login logic (replace with your actual logic)
    console.log('Login clicked!'); // Check if this gets logged
    setIsLoggedIn(true);
  };

  console.log('isLoggedIn:', isLoggedIn); // Check current value of isLoggedIn

  return (
    <div>
      <button onClick={handleLogin}>Login</button>

      {isLoggedIn ? (
        <p>Welcome! You are logged in.</p>
      ) : (
        <p>Please log in to continue.</p>
      )}
    </div>
  );
}

export default Login;
