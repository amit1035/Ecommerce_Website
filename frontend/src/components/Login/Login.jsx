// src/components/Login/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from './../firebase/firebaseconfig';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('+91 ');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    const numericPart = value.slice(4); // after +91
    if (/[^0-9]/.test(numericPart)) {
      setErrorMessage('Please type a valid number');
    } else {
      setErrorMessage('');
    }
    const sanitizedValue = '+91 ' + numericPart.replace(/[^0-9]/g, '');
    setPhoneNumber(sanitizedValue);
  };

  const handleSendOtp = () => {
    const fullPhone = phoneNumber.replace(/\s/g, ''); // Remove spaces from +91

    if (fullPhone.length < 13) {
      setErrorMessage('Please enter a valid 10-digit number');
      return;
    }

    // Setup reCAPTCHA
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        size: 'invisible',
        callback: () => handleSendOtp(), // retry OTP on solved
      }, auth);
      window.recaptchaVerifier.render();
    }

    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, fullPhone, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        navigate('/otp');
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage('Failed to send OTP. Try again.');
      });
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-md p-8 bg-lime-500 shadow-md rounded'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Welcome to SwiftCard!</h2>
        <form className='space-y-4'>
          <div className='flex flex-col'>
            <input
              type='tel'
              maxLength={14}
              value={phoneNumber}
              autoComplete='off'
              placeholder='Phone Number'
              className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
              onInput={handleInputChange}
            />
            {errorMessage && (
              <p className='text-red-500 text-sm mt-1'>{errorMessage}</p>
            )}
          </div>
        </form>
        <div>
          <p className='text-center p-2'>
            <label>
              <input type="checkbox" className="mr-2" />
              By continuing, I agree to the
              <a href="/terms" className="text-blue-500"> Terms of Use </a> and
              <a href="/privacy" className="text-blue-500"> Privacy Policy</a>
            </label>
          </p>
        </div>
        <div className='flex justify-center px-1'>
          <button
            className='m-2 px-2 py-2 bg-blue-600 rounded-full w-2/4 text-white text-center'
            type='button'
            onClick={handleSendOtp}
          >
            Continue
          </button>
        </div>
        <div id="recaptcha-container"></div>
      </div>
    </div>
  );
};

export default Login;
