'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  // Shorter machine text to limit width
  const machineText = "01001000  01101100 01101100 01010111 01101111 00101100 01101100 01100011 01101111 01101101 01100101 00100001";; // "Hello"
  const humanText = "code, learn and explore";

  const [displayText, setDisplayText] = useState("");
  const [compiled, setCompiled] = useState(false);

  const generateRandomMachineText = (length) => {
    const chars = "01 ";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  };

  useEffect(() => {
    if (!compiled) {
      const interval = setInterval(() => {
        setDisplayText(generateRandomMachineText(machineText.length));
      }, 200); // slower flicker
      return () => clearInterval(interval);
    } else {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayText(humanText.slice(0, i));
        i++;
        if (i > humanText.length) clearInterval(interval);
      }, 120); // slower typing
      return () => clearInterval(interval);
    }
  }, [compiled]);

  return (
    <header className="flex flex-col items-center justify-center py-4 bg-black text-green-400">
      {/* Container with limited width */}
      <div className="text-center px-4">
        <h1 className="inline-block text-base md:text-lg font-mono select-none drop-shadow-[0_0_5px_rgba(0,255,0,0.8)] tracking-wide">
          {displayText}
        </h1>
        {!compiled && (
          <div className="mt-2 flex justify-center">
            <button
              onClick={() => setCompiled(true)}
              className="px-3 py-1 text-xs bg-green-700 text-green-200 font-mono rounded hover:bg-green-500 transition-colors shadow-md"
            >
              Compile 
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
