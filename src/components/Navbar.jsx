import React, { useState } from "react";
import { Link } from "react-router-dom";
import useNetworkStatus from "../utils/useNetWorkStatus";

export default function Navbar({ darkMode, toggleDark }) {
  const [isOpen, setIsOpen] = useState(false);
  const status = useNetworkStatus(); // custom hook for online/offline

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur border-b shadow-sm w-full">
      <div className="w-full flex justify-between items-center px-6 md:px-16 py-3">
        {/* Brand / Name */}
        <Link
          to="/"
          className="text-xl font-bold text-blue-600 dark:text-blue-400"
        >
          Reshab Kumar Pandey
        </Link>

        {/* Desktop Navbar Links */}
        <nav className="hidden md:flex gap-6 text-sm font-medium items-center">
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
          <span className="text-lg">{status ? "🟢 online" : "⭕ offline"}</span>
          <button
            onClick={toggleDark}
            className="text-sm border rounded px-3 py-1 hover:bg-blue-50 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-4">
          <span className="text-lg">{status ? "🟢" : "⭕"}</span>
          <button
            onClick={toggleDark}
            className="text-sm border rounded px-3 py-1 hover:bg-blue-50 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl focus:outline-none"
          >
            {isOpen ? "✖️" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-6 py-4 flex flex-col gap-4">
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/resume" onClick={() => setIsOpen(false)}>Resume</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
