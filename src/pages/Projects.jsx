import React from "react";
import { motion } from "framer-motion";

const projects = [
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
 ,
];

export default function Projects() {
  return (
    <motion.section
      className="max-w-6xl mx-auto px-6 py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
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
    </motion.section>
  );
}
