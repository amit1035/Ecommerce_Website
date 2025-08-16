import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // clear localStorage/sessionStorage or logout API call here
    // localStorage.removeItem('token');

    // For now just show Coming Soon, or navigate somewhere else after logout logic
    // navigate('/login'); // for example redirect after logout
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-700">Coming Soon !</h1>
    </div>
  );
};

export default Logout;
