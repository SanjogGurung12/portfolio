"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    // Optional: set current time
    const currentTime = new Date().toLocaleString();
    const timeInput = form.current.querySelector<HTMLInputElement>(
      'input[name="time"]'
    );
    if (timeInput) timeInput.value = currentTime;

    emailjs
      .sendForm(
        "service_a9vhw4q",      // Replace with your EmailJS service ID
        "template_jamoss9",     // Replace with your EmailJS template ID
        form.current,
        "3Hr2V9X4aDMqonj_e"       // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
          setSuccess("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <div className="sm:p-16 p-8">
      <h1 className="text-4xl font-bold pb-6 underline underline-offset-8 decoration-5 decoration-gray-500">
        Contact
      </h1>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 border border-gray-500 rounded-lg p-4 sm:p-8 shadow-lg shadow-gray-500"
      >
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="border p-2 rounded-md"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="border p-2 rounded-md"
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="border p-2 rounded-md h-32"
        />

        {/* Hidden input for time */}
        <input type="hidden" name="time" />

        <button
          type="submit"
          className="bg-green-500 text-white p-3 rounded-md hover:bg-green-600 transition"
        >
          Send Message
        </button>
      </form>

      {success && <p className="mt-4 text-center">{success}</p>}
    </div>
  );
}