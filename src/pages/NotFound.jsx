import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Image from "../assets/4041.svg";

export default function NotFound() {
  return (
    <motion.section
      className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <img
        src={Image} 
        alt="Not Found"
        className="w-72 h-auto mb-6"
      />
      <h1 className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-3">
        404
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
      >
        Go Back Home
      </Link>
    </motion.section>
  );
}
