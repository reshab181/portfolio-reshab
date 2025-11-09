import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Laptop, Code, Smartphone } from "lucide-react";
import image from "../assets/reshab.png";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center py-10"
    >
      {/* HERO SECTION */}
      <motion.section
        className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full px-6 py-12 text-center md:text-left overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* ===== Left Side: Profile Image ===== */}
        <div className="relative flex justify-center items-center w-full md:w-1/2">
          {/* 🔵 Glowing Animated Circle Background */}
          <motion.div
            className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-3xl opacity-30 dark:opacity-40"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />
          <motion.img
            src={image}
            alt="Reshab Kumar Pandey"
            className="w-56 md:w-56 h-64 md:h-67 rounded-2xl border-4 border-blue-600 shadow-lg z-10 object-cover object-center bg-gray-200 dark:bg-gray-900"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />



          {/* ⚙️ Floating Icons */}
          <motion.div
            className="absolute top-10 left-10 text-blue-600 dark:text-blue-400"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <Laptop size={36} />
          </motion.div>

          <motion.div
            className="absolute bottom-12 right-16 text-green-500 dark:text-green-400"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            <Code size={34} />
          </motion.div>

          <motion.div
            className="absolute top-1/2 -right-4 text-purple-500 dark:text-purple-400"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3.5 }}
          >
            <Smartphone size={32} />
          </motion.div>
        </div>


        {/* ===== Right Side: Intro Text ===== */}
        <motion.div
          className="mt-10 md:mt-0 md:ml-12 w-full md:w-1/2"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, I’m <span className="text-blue-600 dark:text-blue-400">Reshab Kumar Pandey</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Software Developer specializing in React, React Native, and Android (Kotlin).
          </p>
          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <Link
              to="/projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </motion.section>


      {/* ABOUT SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-16" id="about">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I’m a passionate software developer who loves building modern, responsive, and efficient web
          and mobile applications. I enjoy working with technologies like <strong>React</strong>,{" "}
          <strong>React Native</strong>, and <strong>Kotlin</strong> to deliver smooth user experiences
          and clean design.
        </p>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          My focus is on writing optimized, scalable code while continuously learning new technologies
          to stay ahead in the ever-evolving tech world.
        </p>
      </section>

      {/* SKILLS SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-16" id="skills">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "HTML5",
            "CSS3",
            "JavaScript (ES6+)",
            "React.js",
            "React Native",
            "Android (Kotlin)",
            "Tailwind CSS",
            "Git & GitHub",
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-4 bg-white dark:bg-gray-800 shadow rounded-lg border dark:border-gray-700"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16" id="projects">
        <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "KTC app",
              desc: "A React Native Mobile App For Corporate Chauffeur Ride Booking and Tracking",
            },
            {
              title: "Portfolio Website",
              desc: "Personal portfolio built with React, Tailwind CSS, and Framer Motion.",
            },
            {
              title: "VahanShakti Website",
              desc: "A React Website a smart and efficient way to manage and monitor your vehicles through GPS device AIS-140",
            },
            {
              title: "Gtropy Manual",
              desc: "Developed With Plain Javascript Html/Css using firebase .",
            },
          ].map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 border dark:border-gray-700 shadow-md p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{p.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            to="/projects"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800"
          >
            See All Projects →
          </Link>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-3xl mx-auto px-6 py-16" id="contact">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Have a project in mind or want to collaborate? Let’s connect!
        </p>
        <div className="flex flex-col items-center gap-3">
          <a
            href="mailto:reshabkumapandey@gmail.com"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Send Email
          </a>
          <p className="text-gray-500">
            Or reach me directly at <strong>reshabkumapandey@gmail.com</strong>
          </p>
        </div>
      </section>
    </motion.div>
  );
}
