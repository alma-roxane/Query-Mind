import React from 'react';
import { Link } from 'react-router-dom';

function TaskSelectionPage() {
  const tasks = [
    { type: 'summary', name: 'Summarize Text', description: 'Condense long articles or documents into key points.' },
    { type: 'qna', name: 'Question & Answer', description: 'Get direct answers to your questions from provided text.' },
    { type: 'creative-writing', name: 'Creative Writing', description: 'Generate stories, poems, or other creative content.' },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-blue-100 p-4">
      <h1 className="text-5xl font-bold text-gray-800 mb-10 text-center">
        Choose Your AI Task
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {tasks.map((task) => (
          <Link
            key={task.type}
            to={`/prompt-input/${task.type}`}
            className="block p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">{task.name}</h2>
            <p className="text-gray-600 mb-5">{task.description}</p>
            <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Select {task.name}
            </button>
          </Link>
        ))}
      </div>
      <div className="mt-8">
        <Link to="/" className="text-blue-600 hover:underline">
          &larr; Back to Landing Page
        </Link>
      </div>
    </div>
  );
}

export default TaskSelectionPage;