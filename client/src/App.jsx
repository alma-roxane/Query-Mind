import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import TaskSelectionPage from './pages/TaskSelectionPage';
import PromptInputPage from './pages/PromptInputPage';
import ResponsePage from './pages/ResponsePage';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login';
import About from './pages/About';

import SignupPage from './pages/SignupPage';

function App() {

  const [theme, setTheme] = React.useState('light');
  return (
    <>
    <div >
    <Navbar />
    </div>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/select-task" element={<TaskSelectionPage />} />
      <Route path="/prompt-input/:taskType" element={<PromptInputPage />} />
      <Route path="/response" element={<ResponsePage />} />
      
      <Route path="/about" element={<About />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
    </>
  );
}

export default App;
