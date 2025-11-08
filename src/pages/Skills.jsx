import React from "react";
import { motion } from "framer-motion";

const skills = [
  "HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "React Native",
  "Android (Kotlin)", "Tailwind CSS", "Git & GitHub"
];

export default function Skills() {
  return (
    <motion.section
      className="max-w-5xl mx-auto px-6 py-16 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-4 bg-white dark:bg-gray-800 shadow rounded-lg border dark:border-gray-700"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
