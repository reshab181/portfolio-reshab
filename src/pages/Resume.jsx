import React, { useState } from "react";
import useAutoHomeOnScroll from "../utils/useAutoHomeOnScroll";

export default function Resume() {
  useAutoHomeOnScroll(3)
  const [isAdmin, setIsAdmin] = useState(false);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      alert(`File "${file.name}" uploaded locally. Connect Firebase for live updates.`);
    }
  };

  return (
    <section className="text-center py-20 px-6">
      <h2 className="text-3xl font-bold mb-6">Resume</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Download my resume or upload a new version (Admin only).
      </p>

      <a
        href="/resume.pdf"
        download
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Download Resume
      </a>

      <div className="mt-6">
        {!isAdmin ? (
          <button
            onClick={() => {
              const pass = prompt("Enter Admin Password:");
              if (pass === "reshabAdmin2025") setIsAdmin(true);
              else alert("Incorrect password.");
            }}
            className="text-blue-500 underline"
          >
            Admin Login
          </button>
        ) : (
          <input
            type="file"
            accept="application/pdf"
            onChange={handleUpload}
            className="mt-2"
          />
        )}
      </div>
    </section>
  );
}
