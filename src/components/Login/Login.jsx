import React, { useState } from 'react';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('+91 '); // Initialize with +91 and a space

  const handleInputChange = (e) => {
    const value = e.target.value;

    

    // Check if the input contains non-numeric characters (excluding the +91 prefix and space)
    const numericPart = value.slice(4); // Get everything after +91 and space
    if (/[^0-9]/.test(numericPart)) {
      setErrorMessage('Please type a valid number');
    } else {
      setErrorMessage('');
    }

    // Allow only numeric input after +91 and space, and update the state
    const sanitizedValue = '+91 ' + numericPart.replace(/[^0-9]/g, '');
    setPhoneNumber(sanitizedValue);
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen  bg-gray-100'>
      <div className='w-full max-w-md p-8 bg-lime-500 shadow-md rounded'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Welcome to SwiftCard!</h2>
        <form className='space-y-4'>
          <div className='flex flex-col'>
            <input
              type='tel'
              id='phone'
              maxLength={14} // 4 characters for +91 and space, 10 for the number
              value={phoneNumber}
              autoComplete='off'
              placeholder='Phone Number'
              className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
              onInput={handleInputChange}
            />
            {/* Show error message if non-numeric input is entered */}
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
        <button className='m-2 px-2 py-2  bg-blue-600 rounded-full w-2/4 text-white text-center' >Continue</button></div>
      </div>
    </div>
  );
};

export default Login;
