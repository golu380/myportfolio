import { motion } from "framer-motion";
import image from '../assets/proImage.jpg'
import resume from '../assets/resume.pdf'


export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <img
            src={image} // replace with your photo link
            alt="Amit Kumar Dubey"
            className="w-64 h-64 rounded-2xl object-cover shadow-lg border-4 border-blue-500"
          />

          {/* Resume Button */}
          <motion.a
            href={resume} // replace with your Resume Google Drive/PDF link
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
          >
            Check My Resume
          </motion.a>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-blue-400">About Me</h2>

          <p className="text-lg leading-relaxed">
            I'm <span className="font-semibold text-blue-300">Amit Kumar Dubey</span>, 
            a passionate <span className="text-blue-400">Full-Stack Developer</span> with hands-on 
            experience in <span className="font-semibold">React, Node.js, Django, and Embedded Systems</span>.
          </p>

          <p className="text-lg leading-relaxed">
            Skilled in <span className="font-semibold">Data Structures & Algorithms</span>, 
            databases like <span className="text-blue-300">MySQL, PostgreSQL, MongoDB</span>, 
            and backend frameworks such as <span className="text-blue-300">Express & Django</span>.  
            I enjoy creating scalable and interactive applications.
          </p>

          <p className="text-lg leading-relaxed">
            🎓 I completed my <span className="font-semibold text-blue-300">B.E. in Computer Science and Engineering</span> 
            from <span className="text-blue-400">Chandigarh University</span> with a CGPA of <span className="font-semibold">8.24</span>.
          </p>

          <p className="text-lg leading-relaxed">
            💼 I worked as a <span className="font-semibold text-blue-300">Full Stack Developer Intern</span> 
            at <span className="text-blue-400">Simmi Foundation</span>, contributing to real-world web application development.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
