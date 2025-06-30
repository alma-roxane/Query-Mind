


import React from 'react';
import { Link,useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const handleGetStartedClick = (e) => {
    e.preventDefault(); 
    
    navigate('/select-task'); 
  };

  return (
    
    
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 p-4">
      <h1 className="text-6xl font-extrabold text-gray-800 mb-8 text-center leading-tight">
        Your AI Assistant
      </h1>
      <p className="text-xl text-gray-600 mb-10 text-center max-w-2xl">
        Unlock the power of AI for summaries, Q&A, and creative writing.
        Start your free trial today!
      </p>

    
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">Start</h2>
        <form className="space-y-4"  onSubmit={handleGetStartedClick}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="your.email@example.com"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-lg font-semibold"
            
          >
            Get Started
          </button>
        </form>
        
      </div>
    </div>
  );
}

export default LandingPage;