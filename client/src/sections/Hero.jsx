import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="section container-custom flex flex-col md:flex-row items-center gap-12">
      
      {/* LEFT CONTENT */}
      <div className="flex-1">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="heading-xl"
        >
          We Build{" "}
          <span className="text-primary">
            High-Converting Websites
          </span>{" "}
          That Turn Visitors Into Clients
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted mt-6 max-w-xl"
        >
          Helping startups and global businesses scale with performance-driven
          design & development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex gap-4 flex-wrap"
        >
          <button className="btn-primary">
            Book a Free Call
          </button>

          <button className="btn-secondary">
            View Our Work
          </button>
        </motion.div>

        {/* SOCIAL PROOF */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-sm text-muted mt-6"
        >
          Trusted by startups & growing businesses worldwide
        </motion.p>
      </div>

      {/* RIGHT VISUAL */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex-1"
      >
        <div className="card h-[350px] flex items-center justify-center">
          <p className="text-muted">Your Website Preview</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;