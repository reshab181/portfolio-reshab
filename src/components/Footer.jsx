import React from "react";

export default function Footer() {
  return (
    <footer className="text-center py-4 border-t dark:border-gray-700">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Reshab Kumar Pandey. All Rights Reserved.
      </p>
    </footer>
  );
}
