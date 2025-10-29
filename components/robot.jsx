'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Robot() {
  const projects = [
    "AI Chatbot - Built with Next.js & OpenAI API",
    "Portfolio Website - Modern responsive design with TailwindCSS",
    "ML Image Classifier - TensorFlow.js project for flower classification",
    "Social Media App Prototype - React + Firebase real-time app"
  ];

  const [output, setOutput] = useState([]);
  const [isRunning, setIsRunning] = useState(false);

  const randomBinary = (length) => {
    let str = '';
    for (let i = 0; i < length; i++) {
      str += Math.random() > 0.5 ? '1' : '0';
    }
    return str;
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleRun = async () => {
    setIsRunning(true);
    setOutput([]);

    for (let proj of projects) {
      let line = '';
      // Placeholder for this line
      setOutput((prev) => [...prev, '> ']);

      for (let char of proj) {
        // Flicker 4-digit binary before revealing each letter
        for (let j = 0; j < 3; j++) { // flicker count reduced for speed
          setOutput((prev) => [
            ...prev.slice(0, -1),
            `> ${line}%c${randomBinary(4)}`
          ]);
          await sleep(60); // flicker visible but fast
        }
        line += char;
        setOutput((prev) => [
          ...prev.slice(0, -1),
          `> ${line}`
        ]);
        await sleep(15); // faster typing speed for letters
      }
      await sleep(100); // short pause after each full project line
    }

    setIsRunning(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0f172a] px-10">
      <motion.div 
        className="w-full max-w-3xl rounded-xl bg-[#1e293b] shadow-2xl overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* VS Code Style Top Bar */}
        <div className="flex items-center space-x-2 px-4 py-2 bg-[#111827]">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <p className="ml-4 text-gray-300 font-mono">robot.jsx</p>
        </div>

        {/* Code Area */}
        <div className="p-6 font-mono text-white text-sm bg-[#0f172a] min-h-[300px] relative">
          <p className="text-cyan-400">const projects = [...Project done ];</p>
          <p className="text-cyan-400">console.log("Click Run to see projects");</p>

          {/* Output Console */}
          <div className="mt-4 bg-[#111827] rounded p-4 text-gray-300 min-h-[200px] overflow-y-auto font-mono">
            {output.length === 0 && <p className="text-gray-500">Console output will appear here...</p>}
            {output.map((line, idx) => (
              <p key={idx}>
                {line.split('%c').map((part, i) =>
                  i === 1 ? <span key={i} className="text-green-400">{part}</span> : part
                )}
              </p>
            ))}
          </div>

          {/* Run Button */}
          <button
            onClick={handleRun}
            disabled={isRunning}
            className="mt-4 px-6 py-2 bg-cyan-500 hover:bg-cyan-400 rounded font-bold transition-colors disabled:opacity-50"
          >
            {isRunning ? "Running..." : "Run"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
