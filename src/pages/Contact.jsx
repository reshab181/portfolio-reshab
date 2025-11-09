import React, { useRef } from "react";
import emailjs from 'emailjs-com';
import { motion } from "framer-motion";
import useAutoHomeOnScroll from "../utils/useAutoHomeOnScroll";

export default function Contact() {
  useAutoHomeOnScroll(3);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_eww0enw",
      "template_uza35ci",
      form.current,
      "QZZjw7suxtLl3BZyK"
    )
    .then(
      () => {
        alert("Message sent successfully!");
        e.target.reset();
      },
      (err) => alert("Error sending message: " + err.text)
    );
  };

  return (
    <motion.section
      className="max-w-3xl mx-auto px-6 py-16 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg border dark:border-gray-700 dark:bg-gray-800"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg border dark:border-gray-700 dark:bg-gray-800"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          className="w-full p-3 rounded-lg border dark:border-gray-700 dark:bg-gray-800"
          required
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
      <p className="mt-6 text-gray-500">
        Or email me at: <strong>reshabkumapandey@gmail.com</strong>
      </p>
    </motion.section>
  );
}
