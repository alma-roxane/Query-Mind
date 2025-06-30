import React from 'react';
import { Link } from 'react-router-dom';



function About() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-gradient-to-br from-emerald-100 to-sky-100 p-4">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-lg text-gray-700 space-y-4">
            <h2 className='font-serif  font-extrabold text-center text-6xl '>QUERY MIND</h2>
            <p className= 'text-center text-lg font-serif'>"UNLOCKING KNOWLEDGE AND CREATIVITY WITH QUERY MIND"</p>
            <p className='text-justify'>We envision a world where complex information is easily digestible and creative blocks are a thing of the past. AI Toolbox is built to be the bridge to that future, offering intelligent assistance for every query and creative spark.</p>
            <p className='text-justify'> Our proprietary algorithms are designed for accuracy and efficiency, allowing us to deliver intelligent insights and creative suggestions at lightning speed.</p>
            <h1 className='font-bold'>What we offer?</h1>
            <ul className='list-disc pl-5'>
                <li>AI-Powered Summaries</li>
                <li>Intelligent Q&A</li>
                <li>Creative Writing Assistance</li>
                <li>Customizable User Experience</li>
            </ul>
            <p className='text-justify'>Join us on this journey to make information and creativity accessible to everyone. Whether you're a student, professional, or just curious, Query Mind is here to help you unlock your potential.</p>

        </div>
      
    </div>
  );
}

export default About;
