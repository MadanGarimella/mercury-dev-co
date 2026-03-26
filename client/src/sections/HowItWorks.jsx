import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    desc: "We understand your business, goals, and target audience.",
  },
  {
    number: "02",
    title: "Strategy & Design",
    desc: "We craft a conversion-focused structure and modern UI design.",
  },
  {
    number: "03",
    title: "Development",
    desc: "We build a fast, scalable, and responsive website.",
  },
  {
    number: "04",
    title: "Launch & Growth",
    desc: "We deploy your site and help you optimize for performance.",
  },
];

const HowItWorks = () => {
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
          Simple Process.{" "}
          <span className="text-primary">Powerful Results.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-muted mt-4 max-w-2xl mx-auto"
        >
          From idea to launch — we handle everything so you can focus on growing
          your business.
        </motion.p>

        {/* STEPS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="card relative text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              {/* STEP NUMBER */}
              <div className="text-primary text-3xl font-bold mb-4">
                {step.number}
              </div>

              <h3 className="heading-md mb-2">{step.title}</h3>

              <p className="text-muted">{step.desc}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;