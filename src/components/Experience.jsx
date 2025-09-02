import { motion } from "framer-motion";
import lor from '../assets/lor.jpeg'
import intershipcertificate from '../assets/intershipcertificate.jpeg'

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen bg-gray-900 text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-blue-400 mb-12"
        >
          Experience
        </motion.h2>

        {/* Internship Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800 rounded-2xl shadow-lg p-6 md:p-10 mb-12"
        >
          <h3 className="text-2xl font-semibold text-blue-300">Internship - Simmi Foundation</h3>
          <p className="mt-3 text-gray-300">
            <span className="font-semibold">Role:</span> Full Stack Developer Intern  
          </p>
          <p className="text-gray-300">
            <span className="font-semibold">Duration:</span> Jun 2023 – Sep 2023
          </p>
          <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
            <li>Contributed to development of a donation-based platform.</li>
            <li>Worked with Angular/React, Node.js, PHP, and Golang.</li>
            <li>Enhanced backend API performance and UI responsiveness.</li>
            <li>Collaborated in Agile environment, focusing on product delivery.</li>
          </ul>
        </motion.div>

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-10"
        >
          {/* Letter of Recommendation */}
          <div className="bg-gray-800 rounded-2xl shadow-lg p-6 text-center">
            <h4 className="text-xl font-semibold text-blue-300 mb-4">Letter of Recommendation</h4>
            <a
              href={lor} // place your file in /public/documents/lor.pdf
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white transition-all duration-300"
            >
              View Letter
            </a>
          </div>

          {/* Internship Certificate */}
          <div className="bg-gray-800 rounded-2xl shadow-lg p-6 text-center">
            <h4 className="text-xl font-semibold text-blue-300 mb-4">Internship Certificate</h4>
            <a
              href={intershipcertificate} // place your file in /public/documents/internship_certificate.pdf
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white transition-all duration-300"
            >
              View Certificate
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
