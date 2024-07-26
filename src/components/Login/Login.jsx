import React from 'react';


const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-md p-8 bg-lime-500 shadow-md rounded'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Welcome to SwiftCard !</h2>
        <form className='space-y-4'>
          <div className='flex flex-col'>
            <input
              type='text maxlenght="10'
              id='name'
              autoComplete='off'
              placeholder='Phone Number'
              className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
        </form>
        <div>
          <p className='text-center p-2'>By continuing, I agree to the Terms of Use and Privacy Policy Continue
</p>
        </div>
        <button className='m-2 px-4 py-2 bg-blue-600 rounded-full w-2/4 text-white ' >Continue</button>
      </div>
    </div>
  );
}

export default Login;
