import { motion } from "framer-motion";

const benefits = [
  {
    title: "Conversion-Focused Design",
    desc: "Every section is crafted to turn visitors into paying clients, not just look good.",
  },
  {
    title: "Lightning Fast Performance",
    desc: "Optimized for speed to reduce bounce rates and improve SEO rankings.",
  },
  {
    title: "Modern & Scalable Tech",
    desc: "Built with the latest technologies to ensure long-term scalability.",
  },
  {
    title: "Strategy-Driven Approach",
    desc: "We combine design, psychology, and data to maximize business results.",
  },
];

const Benefits = () => {
  return (
    <section className="section">
      <div className="container-custom text-center">

        {/* HEADER */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-lg"
        >
          Why Businesses Choose{" "}
          <span className="text-primary">Mercury Dev Co</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-muted mt-4 max-w-2xl mx-auto"
        >
          We don’t just build websites — we create high-performing digital assets
          that drive real business results.
        </motion.p>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

          {benefits.map((item, i) => (
            <motion.div
              key={i}
              className="card hover:border-primary transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <h3 className="heading-md mb-3">{item.title}</h3>
              <p className="text-muted">{item.desc}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Benefits;