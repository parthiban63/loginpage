import React from 'react';

const LoginSuccessfully = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-pink-100 shadow-lg rounded-lg p-6 max-w-sm w-full">
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4M7 12l-2-2m0 0a9 9 0 1118 0 9 9 0 01-18 0z"
            />
          </svg>
        </div>
        <h2 className="text-center text-2xl font-bold text-gray-700 mt-4">Login Successfully</h2>
        <p className="text-center text-gray-600 mt-2">
          You have successfully logged in to your account.
        </p>
        
      </div>
    </div>
  );
};

export default LoginSuccessfully;
