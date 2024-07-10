import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simulate login logic (replace with your actual logic)
    console.log('Login clicked!'); // Check if this gets logged
    setIsLoggedIn(true);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>

      {isLoggedIn && (
        <Link to="/home">Go to Home (after successful login)</Link>
      )}
    </div>
  );
}

export default Login;
