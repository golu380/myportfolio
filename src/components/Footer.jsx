import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-8 space-y-6 md:space-y-0">
        
        {/* Copyright */}
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} Amit Kumar Dubey. All rights reserved.
        </p>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center space-x-8 text-sm md:text-base">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="mailto:amitkumardubey744@gmail.com"
            className="hover:text-blue-400 transition"
          >
            <Mail size={22} />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Github size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
