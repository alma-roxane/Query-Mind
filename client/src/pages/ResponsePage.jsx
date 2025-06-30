import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function ResponsePage() {
  const location = useLocation();
  const { taskType, prompt, aiResponse } = location.state || {}; // Destructure with default empty object

  const taskTitles = {
    'summary': 'Summary Result',
    'qna': 'Answer to Your Question',
    'creative-writing': 'Your Creative Piece',
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 to-teal-100 p-4">
      <h1 className="text-5xl font-bold text-gray-800 mb-8 text-center">
        {taskTitles[taskType] || 'AI Response'}
      </h1>
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-3xl">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Your Prompt:</h2>
          <p className="bg-gray-50 p-4 rounded-md text-gray-800 text-lg border border-gray-200">
            {prompt || 'No prompt provided.'}
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">AI's Response:</h2>
          <p className="bg-blue-50 p-4 rounded-md text-gray-800 text-lg border border-blue-200 min-h-[100px]">
            {aiResponse || 'No response generated yet.'}
          </p>
        </div>
      </div>
      <div className="mt-8 flex space-x-4">
        <Link to="/select-task" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Do Another Task
        </Link>
        <Link to="/" className="text-blue-600 hover:underline py-2 px-4 rounded-md">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ResponsePage;