import { motion } from "framer-motion";

const logos = [
  "https://via.placeholder.com/120x40?text=Client+1",
  "https://via.placeholder.com/120x40?text=Client+2",
  "https://via.placeholder.com/120x40?text=Client+3",
  "https://via.placeholder.com/120x40?text=Client+4",
  "https://via.placeholder.com/120x40?text=Client+5",
];

const Partners = () => {
  return (
    <section className="section border-t border-border">
      <div className="container-custom text-center">

        {/* TITLE */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted mb-8"
        >
          Trusted by startups & businesses worldwide
        </motion.p>

        {/* LOGOS */}
        <div className="flex flex-wrap justify-center items-center gap-10 opacity-70">
          {logos.map((logo, i) => (
            <motion.img
              key={i}
              src={logo}
              alt="client logo"
              className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            />
          ))}
        </div>

        {/* OPTIONAL STATS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex justify-center gap-8 text-sm text-muted"
        >
          <p>🌍 Global Clients</p>
          <p>🚀 Fast Delivery</p>
          <p>💼 High Conversion Focus</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;