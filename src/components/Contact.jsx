import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import emailjs from "@emailjs/browser"; // ✅ import emailjs
import { useRef } from "react";

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ydwe1sr", // ✅ Replace with your actual Service ID
        "template_gdnepeg", // ✅ Replace with your actual Template ID
        formRef.current,
        "VH8Sf2hUSvfPcl8BJ"  // ✅ Replace with your Public Key from EmailJS
      )
      .then(
        () => {
          alert("✅ Message Sent Successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert("❌ Failed to send message. Try again.");
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-900 text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-blue-400 mb-12"
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail} // ✅ handle submit
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg space-y-4"
          >
            <input
              type="text"
              name="name" // ✅ must match template fields in EmailJS
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email" // ✅ must match template fields in EmailJS
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message" // ✅ must match template fields in EmailJS
              placeholder="Your Message"
              rows="5"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold transition-all duration-300"
            >
              Send Message
            </button>
          </motion.form>

          {/* Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-6"
          >
            <p className="text-lg text-gray-300">
              I’m always open to discussing new opportunities, projects, or collaborations.  
              Feel free to reach out!
            </p>

            <div className="space-y-3">
              <a
                href="mailto:amitkumardubey744@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition"
              >
                <Mail /> <span>amitkumardubey744@gmail.com</span>
              </a>
              <a
                href="https://linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition"
              >
                <Linkedin /> <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition"
              >
                <Github /> <span>GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
