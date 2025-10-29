// components/creative.jsx
'use client';
import { useState, useEffect } from 'react';

const creativeIdeas = [
  "Turning ideas into code",
  "AI enthusiast exploring new horizons",
  "Building projects that solve real problems",
  "Design + Development = Creativity",
  "Always learning, always experimenting"
];

export default function Creat() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex(prev => (prev + 1) % creativeIdeas.length);
        setFade(true);
      }, 300); // fade transition
    }, 4000); // switch every 4s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-cyan-800 via-slate-900 to-cyan-800 font-mono py-16 px-10 text-center relative overflow-hidden">
      {/* Glowing animated background circles */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>

      <h2 className={`text-3xl md:text-5xl font-bold text-white transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
        {creativeIdeas[index]}
      </h2>

      {/* Stylish underline */}
      <div className="mt-4 h-1 w-24 mx-auto bg-cyan-400 rounded-full animate-pulse"></div>

      {/* Floating icons */}
      <div className="absolute top-10 left-10 text-cyan-400 text-4xl animate-bounce-slow"></div>
      <div className="absolute bottom-20 right-20 text-pink-400 text-5xl animate-bounce-slow"></div>
      <div className="absolute top-1/2 right-1/4 text-purple-400 text-3xl animate-bounce-slow"></div>
    </div>
  );
}
