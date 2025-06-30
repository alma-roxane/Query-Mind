import React from 'react';
import { Link,useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  
  const handleGetStartedClick = (e) => {
    e.preventDefault(); 
    
    navigate('/'); 
  };
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Login</h2>
        
        <form className="space-y-4"  onSubmit={handleGetStartedClick}>
        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-6 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="your.email@example.com"
            />

            <label htmlFor="password" className="block text-sm font-medium text-gray-700"></label>
            <input
              type="password"
              id="password"
              className="mt-6 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="password"
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-lg font-semibold"
            
          >
            Submit
          </button>
        </form>
          

           <Link to="/signup" className="text-blue-600 hover:underline mt-4">
          
          Don't have an account? Sign Up
          
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

export default LoginPage;
