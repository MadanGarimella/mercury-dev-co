import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alex Carter",
    role: "Startup Founder",
    quote:
      "Mercury Dev Co transformed our website completely. We saw a significant increase in conversions within weeks.",
  },
  {
    name: "Sarah Williams",
    role: "E-commerce Owner",
    quote:
      "The design, speed, and user experience exceeded our expectations. Highly recommend their team.",
  },
  {
    name: "David Lee",
    role: "Marketing Director",
    quote:
      "Professional, fast, and strategic. They don’t just build websites—they build growth engines.",
  },
];

const Testimonials = () => {
  return (
    <section className="section bg-black">
      <div className="container-custom text-center">

        {/* HEADER */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-lg"
        >
          What Our Clients{" "}
          <span className="text-primary">Say</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted mt-4 max-w-2xl mx-auto"
        >
          Real results from businesses we’ve helped grow
        </motion.p>

        {/* TESTIMONIAL CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="card text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <p className="text-muted mb-6">“{t.quote}”</p>

              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-muted">{t.role}</p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Testimonials;