'use client';
import Link from 'next/link';

export default function Navi() {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 
      bg-[#0f172a]/40 backdrop-blur-md border border-cyan-400/20 
      rounded-full px-10 py-3 shadow-[0_0_20px_rgba(0,255,255,0.15)]">
      
      <ul className="flex justify-center items-center gap-8 font-mono text-base text-gray-300">
        <li>
          <Link
            href='/projects'
            className="relative group transition duration-300"
          >
            {"<Projects />"}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
        <li>
          <Link
            href="/skills"
            className="relative group transition duration-300"
          >
            {"<Skills />"}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="relative group transition duration-300"
          >
            {"<Home />"}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
        
      </ul>
    </nav>
  );
}
