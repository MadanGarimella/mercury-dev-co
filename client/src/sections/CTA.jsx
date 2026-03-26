import { motion } from "framer-motion";
import { useState } from "react";
import { sendContact } from "../services/api";

const CTA = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await sendContact(form);
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  } catch (err) {
    alert("Something went wrong");
  }
};

  return (
    <section className="section">
      <div className="container-custom max-w-4xl mx-auto text-center">

        {/* HEADER */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="heading-lg"
        >
          Ready to Build a Website That{" "}
          <span className="text-primary">Actually Converts?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted mt-4"
        >
          Let’s create a high-performing website tailored to your business goals.
        </motion.p>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 grid gap-4 text-left"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Tell us about your project"
            rows="4"
            className="input"
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit" className="btn-primary w-full">
            Get a Free Consultation
          </button>
        </motion.form>

        {/* TRUST LINE */}
        <p className="text-sm text-muted mt-4">
          No spam. We’ll get back to you within 24 hours.
        </p>
      </div>
    </section>
  );
};

export default CTA;