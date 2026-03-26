import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Typically 1–3 weeks depending on the project size and requirements.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes, we work with clients globally and manage communication seamlessly.",
  },
  {
    q: "Will my website be mobile-friendly?",
    a: "Absolutely. All our websites are fully responsive across devices.",
  },
  {
    q: "Do you offer revisions?",
    a: "Yes, we include revisions based on your selected plan.",
  },
  {
    q: "Can you help with SEO and performance?",
    a: "Yes, we optimize every website for speed, SEO, and performance.",
  },
  {
    q: "What do you need from me to get started?",
    a: "We’ll need basic details about your business, goals, and content (if available).",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="section">
      <div className="container-custom max-w-3xl mx-auto text-center">

        {/* HEADER */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-lg"
        >
          Frequently Asked{" "}
          <span className="text-primary">Questions</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted mt-4"
        >
          Everything you need to know before getting started
        </motion.p>

        {/* FAQ LIST */}
        <div className="mt-10 space-y-4 text-left">

          {faqs.map((item, i) => (
            <motion.div
              key={i}
              className="card cursor-pointer"
              onClick={() => toggle(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{item.q}</h3>
                <span className="text-primary">
                  {active === i ? "-" : "+"}
                </span>
              </div>

              {active === i && (
                <p className="text-muted mt-3">{item.a}</p>
              )}
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FAQ;