"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");
    
    console.log('Submitting form data:', formData);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      console.log('API response:', result);
      
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus(`Failed to send message: ${result.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus("Error sending message. Please try again.");
    }
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full p-3 rounded bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
        className="w-full p-3 rounded bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60"
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-3 rounded bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        rows={4}
        className="w-full p-3 rounded bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 resize-none"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full p-3 rounded bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      {status && <p className="text-center text-white/80">{status}</p>}
    </form>
  );
}