import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Otp = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleVerify = () => {
    const confirmationResult = window.confirmationResult;
    if (confirmationResult) {
      confirmationResult.confirm(otp)
        .then((result) => {
          alert("Phone verified successfully!");
          // You can store user token or redirect
          navigate('/dashboard'); // or home
        })
        .catch(() => {
          setError("Invalid OTP. Please try again.");
        });
    } else {
      setError("OTP session expired. Please try again.");
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-md p-8 bg-white shadow-md rounded'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Enter OTP</h2>
        <input
          type='text'
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder='Enter OTP'
          className='px-4 py-2 border border-gray-300 rounded w-full mb-4'
        />
        {error && <p className='text-red-500 text-sm'>{error}</p>}
        <button
          onClick={handleVerify}
          className='w-full py-2 bg-blue-600 text-white rounded'
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default Otp;
