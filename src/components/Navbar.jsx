import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ darkMode, toggleDark }) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur border-b shadow-sm w-full">
      {/* ✅ Removed max-w-6xl so it stretches full width */}
      <div className="w-full flex justify-between items-center px-8 md:px-16 py-3">
        <Link
          to="/"
          className="text-xl font-bold text-blue-600 dark:text-blue-400"
        >
          Reshab Kumar Pandey
        </Link>

        <nav className="flex gap-6 text-sm font-medium">
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <button
          onClick={toggleDark}
          className="text-sm border rounded px-3 py-1"
        >
          {darkMode ? "Light" : "Dark"}
        </button>
      </div>
    </header>
  );
}
