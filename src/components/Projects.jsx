import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Streaming Platform Clone",
      description: "A Netflix-like streaming platform clone built with React, Node.js, and TMDB API. Includes user authentication and responsive design.",
      image: "YOUR_IMAGE_LINK_1", // replace with project screenshot
      link: "https://your-streaming-clone-link.com", // replace with project demo link
    },
    {
      title: "E-Commerce Web App",
      description: "A full-stack e-commerce platform with product catalog, cart, and payment gateway integration.",
      image: "YOUR_IMAGE_LINK_2",
      link: "https://your-ecommerce-link.com",
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio showcasing projects, skills, and achievements, built with React and Tailwind CSS.",
      image: "YOUR_IMAGE_LINK_3",
      link: "https://your-portfolio-link.com",
    },
    {
      title: "Chat Application",
      description: "A real-time chat application built with Socket.IO, Node.js, and MongoDB for messaging.",
      image: "YOUR_IMAGE_LINK_4",
      link: "https://your-chat-app-link.com",
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-gray-900 text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-blue-400 mb-12"
        >
          My Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-blue-500/50 transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-300">{project.title}</h3>
                <p className="mt-3 text-gray-300">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
