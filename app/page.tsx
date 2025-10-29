'use client';
import { useEffect, useState } from 'react';
import Navi from '../components/navigation';
import Certi from '../components/certification'
import Project from '../components/project'
import Creat from '../components/creative'
import Robot from '../components/robot'
import Head from '../components/Head'
import Skills from '../components/skills'
import Content from '../components/contents'
import Display from '../components/display'

const phrases = [
  "Sonam Tshering",
  "Web Developer",
  "AI & ML Enthusiast",
  "Creative Coder"
];

export default function Home() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = 150; // ms per character
    let timeout: NodeJS.Timeout;

    const currentPhrase = phrases[index % phrases.length];

    if (!isDeleting && text.length < currentPhrase.length) {
      timeout = setTimeout(() => setText(currentPhrase.slice(0, text.length + 1)), typingSpeed);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => setText(currentPhrase.slice(0, text.length - 1)), typingSpeed / 2);
    } else if (!isDeleting && text.length === currentPhrase.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1000); // wait before deleting
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setIndex(prev => prev + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting]);

  return (
     <div >
         <Head/>
    <main className="flex items-center justify-right min-h-screen bg-[#0f172a] text-white font-mono px-5">
      <div className="w-full  pl-20">
        <p className="text-gray-500">{"<html>"}</p>
        <p className="ml-4 text-gray-400">{"<body>"}</p>

        {/* Animated Typing */}
        <h1 className="ml-8 text-4xl md:text-6xl font-bold text-cyan-400 mt-4">
          {"< Hi, I'm />"}
        </h1>
        <h1 className="ml-8 text-2xl md:text-6xl font-bold text-cyan-400 mt-4 ">
          <span className="border-r-4 border-cyan-400 pr-1">{text}</span>
        </h1>

        <p className="ml-8 text-gray-300 mt-4">
          {"<p>My Skills & Projects</p>"}
        </p>

        <div className="ml-8 mt-6">
          <p className="text-gray-400">{"<ul>"}</p>
          <ul className="ml-4 text-gray-300 list-disc">
            <li>{"<li>React / Next.js</li>"}</li>
            <li>{"<li>TailwindCSS / Framer Motion</li>"}</li>
            <li>{"<li>AI & ML projects</li>"}</li>
          </ul>
          <p className="text-gray-400">{"</ul>"}</p>
        </div>

        <p className="ml-4 text-gray-400 mt-6">{"</body>"}</p>
        <p className="text-gray-500">{"</html>"}</p>
      </div>
    </main>
   
    < Navi />
     <div className="flex flex-col md:flex-row gap-8 px-10 py-10 bg-[#0f172a]">
        <div className="md:w-1/2">
          <Certi />
        </div>
        <div className="md:w-1/2">
          <Project />
        </div>
      </div>
      <Creat />
      <Robot />
  
     
   
    </div>
  );
}
