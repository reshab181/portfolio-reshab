import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

import "./App.css";
import NotFound from "./pages/NotFound";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();

  return (
    <div
      className={`${
        darkMode ? "dark bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"
      } min-h-screen w-full overflow-x-hidden`}
    >
      <Navbar darkMode={darkMode} toggleDark={() => setDarkMode(!darkMode)} />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="min-h-screen w-full flex flex-col justify-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
        >
          <div className="flex-1 w-full px-0 m-0">
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;
