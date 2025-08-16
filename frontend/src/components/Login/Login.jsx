import React, { useState } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../Fire_Base/firebaseconfig';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Otp from './otp';
import CompleteLogin from './CompleteLogin';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [user, setUser] = useState(null);

  const setupRecaptcha = () => {
    if (window.recaptchaVerifier) {
      window.recaptchaVerifier.clear();
      window.recaptchaVerifier = null;
    }
    window.recaptchaVerifier = new RecaptchaVerifier(
      'recaptcha-container',   // **ID of the container div**
      {
        size: 'invisible',
        callback: () => {
          console.log('reCAPTCHA solved');
        },
        'expired-callback': () => {
          setError('reCAPTCHA expired. Please try again.');
        },
      },
      auth                      // **Pass auth here as the third parameter**
    );
  };

  const handleSendOtp = async () => {
    if (!phoneNumber || !phoneNumber.startsWith('+') || phoneNumber.length < 10) {
      setError('Please enter a valid phone number with country code (e.g., +91XXXXXXXXXX)');
      return;
    }

    setLoading(true);
    setError('');
    setMessage('');

    try {
      setupRecaptcha();
      const appVerifier = window.recaptchaVerifier;

      const confirmation = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      setConfirmationResult(confirmation);
      setOtpSent(true);
      setMessage(`OTP sent to ${phoneNumber}`);
    } catch (err) {
      console.error('Error sending OTP:', err);
      let errorMsg = 'Failed to send OTP. Try again later.';
      if (err.code === 'auth/invalid-phone-number') errorMsg = 'Invalid phone number format.';
      if (err.code === 'auth/too-many-requests') errorMsg = 'Too many requests. Try again later.';
      if (err.code === 'auth/app-not-authorized') errorMsg = 'App not authorized. Check Firebase settings.';
      setError(errorMsg);

      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
        window.recaptchaVerifier = null;
      }
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }

    if (!confirmationResult) {
      setError('Please request OTP first.');
      return;
    }

    setLoading(true);
    setError('');
    setMessage('');

    try {
      const result = await confirmationResult.confirm(otp);
      setUser(result.user);
      setMessage('Phone number verified successfully!');
    } catch (err) {
      console.error('OTP Verification Error:', err);
      setError('Invalid OTP. Please try again.');

      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
        window.recaptchaVerifier = null;
      }
    } finally {
      setLoading(false);
    }
  };

  if (user) return <CompleteLogin user={user} />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-white to-blue-100 px-4">
      <div className="bg-white/90 backdrop-blur-md border-2 border-blue-400 shadow-xl rounded-3xl w-full max-w-xl p-12 animate-fade-in">
        <h2 className="text-4xl font-extrabold text-blue-800 mb-8 text-center">Login via Mobile</h2>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-semibold text-gray-700">Phone Number</label>
          <PhoneInput
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(value) => {
              setPhoneNumber(value);
              setError('');
              setMessage('');
            }}
            defaultCountry="IN"
            international
            countryCallingCodeEditable
            disabled={otpSent}
            className="w-full custom-phone-input"
          />
        </div>

        {otpSent ? (
          <Otp
            otp={otp}
            setOtp={setOtp}
            handleVerifyOtp={handleVerifyOtp}
            error={error}
            message={message}
            loading={loading}
          />
        ) : (
          <>
            {message && <p className="mb-4 text-green-600 text-center font-medium">{message}</p>}
            {error && <p className="mb-4 text-red-600 text-center font-medium">{error}</p>}
            <button
              onClick={handleSendOtp}
              disabled={loading || !phoneNumber}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-all disabled:opacity-50"
            >
              {loading ? 'Sending OTP...' : 'Send OTP'}
            </button>
          </>
        )}

        {/* Recaptcha container required for Firebase */}
        <div id="recaptcha-container"></div>
      </div>
    </div>
  );
};

export default Login;
