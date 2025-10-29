'use client'
import Link from 'next/link';

export default function Skills() {
  const skills = [
    {
      category: 'Programming Languages',
      items: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript'],
    },
    {
      category: 'Web Development',
      items: ['HTML', 'CSS', 'Next.js', 'React', 'Node.js', 'Express.js'],
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'MongoDB', 'MySQL'],
    },
    {
      category: 'Machine Learning & AI',
      items: ['TensorFlow', 'Keras', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib'],
    },
    
    {
      category: 'Other Tools & Platforms',
      items: ['Git', 'GitHub', 'VS Code', 'Linux', 'Docker', 'Vercel Deployment'],
    },
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-white p-10">
      <h1 className="text-4xl font-bold text-center mb-12">My Skills</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {skills.map((section, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-indigo-600 hover:scale-105 transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4 border-l-4 border-indigo-500 pl-3">
              {section.category}
            </h2>
            <ul className="space-y-2">
              {section.items.map((skill, i) => (
                <li
                  key={i}
                  className="bg-gray-700 hover:bg-indigo-600 rounded-lg px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
