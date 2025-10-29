// components/project.jsx
'use client';

const projects = [
  { title: "Portfolio Website" },
  { title: "AI Chatbot" },
  { title: "Handwritten Digit Recognition" },
  { title: "E-commerce App" },
  { title: "IoT Home Automation" }
];

export default function Project() {
  return (
    <div className="flex justify-center bg-[#0f172a] text-white font-mono px-5 py-10">
      <div className="w-full max-w-3xl pl-20">
        {/* Section header */}
        <p className="text-gray-300 text-lg mb-4">{"<section>"}{" // Projects"}</p>

        {/* Projects List */}
        <div className="ml-4 bg-[#1e293b] p-6 rounded-lg shadow-lg border border-cyan-400">
          <p className="text-gray-400">{"<ul>"}</p>
          <ul className="ml-4 list-disc space-y-4">
            {projects.map((project, idx) => (
              <li key={idx} className="text-gray-300">
                <span className="text-cyan-400 font-bold">{`<output>`}</span> {project.title} <span className="text-cyan-400 font-bold">{`</output>`}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-400">{"</ul>"}</p>
        </div>

        <p className="text-gray-300 mt-4">{"</section>"}</p>
      </div>
    </div>
  );
}
