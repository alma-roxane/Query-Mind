import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

function PromptInputPage() {
  const { taskType } = useParams();
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [error, setError] = useState(null); 

  const taskTitles = {
    'summary': 'Summarize Text',
    'qna': 'Ask a Question',
    'creative-writing': 'Start Creative Writing',
  };

  const placeholderTexts = {
    'summary': 'Enter the text you want to summarize...',
    'qna': 'Enter your question (e.g., "What is the capital of India?")',
    'creative-writing': 'Tell me what you want to write about...',
  };

  
  const constructLlmPrompt = (type, input) => {
    switch (type) {
      case 'summary':
        return `Summarize the following text concisely:\n\n${input}`;
      case 'qna':
        return `Answer the following question directly and concisely: ${input}`;
      case 'creative-writing':
        return `Generate a creative piece (story, poem, etc.) based on the following idea:\n\n${input}`;
      default:
        return input; // Fallback
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setError(null);   // Clear previous errors

    try {
      const llmPromptContent = constructLlmPrompt(taskType, prompt);

      // >>> PASTE YOUR ACTUAL GOOGLE CLOUD API KEY HERE <<<
      const apiKey = "YOUR_GOOGLE_CLOUD_API_KEY"; 
      // >>> DO NOT LEAVE THIS AS AN EMPTY STRING OR THE PLACEHOLDER <<<

      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      // Prepare chat history payload for the Gemini API
      let chatHistory = [];
      chatHistory.push({ role: "user", parts: [{ text: llmPromptContent }] });

      const payload = {
        contents: chatHistory,
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorDetails = await response.json();
        console.error('Gemini API Error Response:', errorDetails);
        throw new Error(errorDetails.error?.message || 'Failed to get AI response from Gemini API.');
      }

      const result = await response.json();

      let aiResponse = "No response generated.";

      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        aiResponse = result.candidates[0].content.parts[0].text;
      } else {
        aiResponse = "Received an unexpected response format from the AI. Please try again.";
        console.warn("Unexpected Gemini API response structure:", result);
      }

      navigate('/response', { state: { taskType, prompt, aiResponse } });

    } catch (err) {
      console.error('Error integrating with Gemini API:', err);
      setError(`Failed to get AI response: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 p-4">
      <h1 className="text-5xl font-bold text-gray-800 mb-8 text-center">
        {taskTitles[taskType] || 'AI Task'}
      </h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl w-full max-w-2xl">
        <div className="mb-6">
          <label htmlFor="prompt-textarea" className="block text-xl font-medium text-gray-700 mb-2">
            Enter your prompt:
          </label>
          <textarea
            id="prompt-textarea"
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-lg resize-y min-h-[150px]"
            placeholder={placeholderTexts[taskType] || 'Type your request here...'}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            required
            disabled={loading}
          ></textarea>
        </div>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Error:</strong>
            <span className="block sm:inline ml-2">{error}</span>
          </div>
        )}
        <button
          type="submit"
          className={`w-full text-white py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 text-lg font-semibold
            ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-pink-600 hover:bg-pink-700 focus:ring-pink-500'}`}
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </span>
          ) : (
            'Generate Response'
          )}
        </button>
      </form>
      <div className="mt-8">
        <Link to="/select-task" className="text-blue-600 hover:underline">
          &larr; Back to Task Selection
        </Link>
      </div>
    </div>
  );
}

export default PromptInputPage;
