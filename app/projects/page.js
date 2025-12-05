'use client'
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  const categories = [
    {
      title: 'Web Applications',
      projects: [
        {
          id: 1,
          title: 'Digital Sign',
          image: '/image1.png',
          description: 'An online system to for digital signature',
          tech: ['Next.js', 'Tailwind CSS', 'PostgreSQL'],
          link: 'https://esign-chi.vercel.app/',
        },
        {
          id: 2,
          title: 'Digital Menu System',
          image: '/image2.png',
          description: 'A restaurant menu app that allows users to browse, order, and pay online.',
          tech: ['Next.js', 'Node.js', 'PostgreSQL','Cloudinary'],
          link: 'https://bhutandigitalmenusystem.netlify.app/menu?user_id=1&table=1',
        },
        {
          id: 3,
          title: 'Company Website',
          image: '/image0.png',
          description: 'A responsive company profile website built',
          tech: ['Next.js', 'PostgreSQL', 'Vercel Hosting'],
          link: 'https://tsiranghospital.netlify.app/home',
        },
      ],
    },
    {
      title: 'Machine Learning Projects',
      projects: [
        {
          id: 4,
          title: 'Handwritten Digit Recognition',
          image: '/image3.png',
          description: 'A neural network that recognizes handwritten Dzongkha digits from 0–9.',
          tech: ['Python', 'TensorFlow', 'Keras', 'NumPy'],
          link: 'https://github.com/Sonamtshering21/Dzongkha-handwritten-digit-recognition',
        },
        {
          id: 5,
          title: 'Air canvas using computer vision and hand tracking',
          image: '/image4.png',
          description: 'webcam, computer vision, and hand tracking (via MediaPipe) to create an interactive air-drawing application',
          tech: ['Python', 'TensorFlow', 'Matplotlib'],
          link: 'https://github.com/Sonamtshering21/Air-canvas-using-computer-vision-and-hand-tracking-',
        },
        {
          id: 6,
          title: 'face detection and recognition',
          image: '/image5.png',
          description: 'AI-powered tool for face recognition',
          tech: ['Python', 'Transformers', 'TensorFlow', 'computer vision'],
          link: 'https://github.com/Sonamtshering21/face-detection-and-recognition',
        },
      ],
    },
    {
      title: 'IoT & Robotics',
      projects: [
        {
          id: 7,
          title: 'Shoplifting detection using CNN',
          image: '/iot1.png',
          description: 'IoT project for shoplifiting detection in real time.',
          tech: ['Arduino', 'Raspberry Pi', 'MQTT'],
          link: 'https://github.com/yourusername/smart-home',
        },
        {
          id: 8,
          title: 'Customer fit recommendation system',
          image: '/iot2.png',
          description: 'Automated fit recommendation system for customers in retail stores.',
          tech: ['Arduino', 'C++', 'Motor Driver'],
          link: 'https://github.com/yourusername/obstacle-robot',
        },
        {
          id: 9,
          title: 'Smart parking system ',
          image: '/iot3.png',
          description: 'smart parking system for efficient space management using IoT and cloud-fog computing.',
          tech: ['Python', 'IoT Core', 'Cloud-Fog Computing'],
          link: 'https://github.com/yourusername/c2f2t',
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-white p-10">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>

      {categories.map((category) => (
        <section key={category.title} className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 border-l-4 border-indigo-500 pl-3">
            {category.title}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {category.projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.link}
                    target="_blank"
                    className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white text-sm px-4 py-2 rounded-lg transition-colors"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
