import React from "react";
import { Link } from "react-router-dom";
import useNetworkStatus from "../utils/useNetWorkStatus";

export default function Navbar({ darkMode, toggleDark }) {
  const status = useNetworkStatus(); // ✅ Call the hook!

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur border-b shadow-sm w-full">
      <div className="w-full flex justify-between items-center px-8 md:px-16 py-3">
        
        {/* Brand / Name */}
        <Link
          to="/"
          className="text-xl font-bold text-blue-600 dark:text-blue-400"
        >
          Reshab Kumar Pandey
        </Link>

        {/* Navbar Links */}
        <nav className="flex gap-6 text-sm font-medium items-center">
     
          
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>

          <span className="text-lg">
            {status ? "🟢 online" : "⭕ offline"}
          </span>

        </nav>

        {/* Dark mode toggle */}
        <button
          onClick={toggleDark}
          className="text-sm border rounded px-3 py-1 hover:bg-blue-50 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? "Light" : "Dark"}
        </button>
      </div>
    </header>
  );
}
