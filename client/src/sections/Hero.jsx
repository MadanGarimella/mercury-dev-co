import { motion } from "framer-motion";
import heroBg from "../assets/hero-bg.png";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "75% center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>

      {/* CONTENT */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 flex items-center min-h-screen">
        
        <div className="text-white max-w-2xl">
          
          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="heading-xl"
          >
            We Build{" "}

            {/* ANIMATED HIGHLIGHT WORD */}
            <span className="relative inline-block">
              
              {/* Highlight background */}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.1, duration: 1.0, ease: "easeOut" }}
                className="absolute left-0  w-full h-[90%] bg-primary origin-left"
              />

              {/* Text */}
              <span className="relative z-10 text-black px-1">
                High-Converting
              </span>
            </span>{" "}

            Websites That Turn Visitors Into Clients
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 mt-6"
          >
            Helping startups and global businesses scale with performance-driven
            design & development.
          </motion.p>

          {/* BUTTONS */}
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
            className="text-sm text-gray-400 mt-6"
          >
            Trusted by startups & growing businesses worldwide
          </motion.p>
        </div>

      </div>
    </section>
  );
};

export default Hero;