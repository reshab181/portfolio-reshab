import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="max-w-4xl mx-auto px-6 py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        I’m a passionate software developer with expertise in building modern,
        responsive, and efficient web and mobile applications. I love working
        with technologies like <strong>React</strong>, <strong>React Native</strong>, and
        <strong> Kotlin</strong> to create clean, scalable, and user-friendly interfaces.
      </p>
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        My goal is to continuously improve my skills and contribute to impactful
        projects that solve real-world problems.
      </p>
    </motion.section>
  );
}
