import React from 'react';
import { Link } from 'react-router-dom';

function SignupPage() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Sign Up</h2>
        <p className="text-gray-600 mb-8">
          
        </p>
        <Link to="/login" className="text-blue-600 hover:underline">
          Already have an account? Login
        </Link>
        <div className="mt-4">
            <Link to="/" className="text-gray-500 hover:underline">
                &larr; Back to Home
            </Link>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
