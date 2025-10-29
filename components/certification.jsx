// components/certification.jsx
'use client';

const certifications = [
  { short: "ML", full: "Machine Learning" },
  { short: "AI", full: "Artificial Intelligence" },
  { short: "IoT", full: "Internet of Things" },
  { short: "Network", full: "Networking & Security" },
  { short: "Design", full: "UI / UX Design" },
  { short: "Cloud", full: "Cloud Computing" }
];

export default function Certi() {
  return (
    <div className="flex justify-center bg-[#0f172a] text-white font-mono px-5 py-10">
      <div className="w-full max-w-3xl pl-20">
        {/* Section header */}
        <p className="text-gray-300 text-lg mb-4">{"<section>"}{" // Certifications"}</p>

        {/* Certification List */}
        <div className="ml-4 bg-[#1e293b] p-6 rounded-lg shadow-lg border border-cyan-400">
          <p className="text-gray-400">{"<ul>"}</p>
          <ul className="ml-4 list-disc space-y-2">
            {certifications.map((cert, idx) => (
              <li
                key={idx}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
              >
                {`<li>${cert.full} (${cert.short})</li>`}
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
