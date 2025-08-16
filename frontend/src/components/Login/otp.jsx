import React, { useRef, useEffect } from 'react';

const Otp = ({ otp, setOtp, handleVerifyOtp, error, message, loading }) => {
  const otpInputRef = useRef(null);

  useEffect(() => {
    if (otpInputRef.current) {
      otpInputRef.current.focus();
    }
  }, []);

  return (
    <>
      <div className="mb-6 animate-fade-in">
        <label className="block mb-2 text-sm font-semibold text-gray-700">Enter OTP</label>
        <div className="flex items-center border rounded-md overflow-hidden transition focus-within:ring-2 focus-within:ring-blue-400">
          <div className="bg-green-100 px-4 py-3 text-green-700 font-semibold border-r border-green-300 text-sm">🔐</div>
          <input
            type="tel"
            aria-label="One Time Password input"
            placeholder="Enter 6-digit OTP"
            value={otp}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, '').slice(0, 6);
              setOtp(val);
              if (val.length === 6) handleVerifyOtp(); // optional auto-submit
            }}
            maxLength={7}
            ref={otpInputRef}
            className="flex-1 px-3 py-3 text-sm focus:outline-none"
          />
        </div>
      </div>

      {message && <p className="mb-4 text-green-600 text-center font-medium animate-fade-in">{message}</p>}
      {error && <p className="mb-4 text-red-600 text-center font-medium animate-shake">{error}</p>}

      <button
        onClick={handleVerifyOtp}
        disabled={loading}
        className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md transition-all disabled:opacity-50 disabled:cursor-not-allowed active:animate-input-press"
      >
        {loading ? 'Verifying OTP...' : 'Verify OTP'}
      </button>
    </>
  );
};

export default Otp;
