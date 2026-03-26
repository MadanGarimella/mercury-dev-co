import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "$299",
    features: [
      "Landing Page Design",
      "Responsive Design",
      "Basic SEO Setup",
      "1 Revision",
    ],
  },
  {
    name: "Growth",
    price: "$599",
    popular: true,
    features: [
      "Multi-Page Website",
      "Conversion-Focused Design",
      "Speed Optimization",
      "SEO Setup",
      "3 Revisions",
    ],
  },
  {
    name: "Premium",
    price: "$999+",
    features: [
      "Custom Web Application",
      "Advanced Animations",
      "Full SEO + Performance",
      "Priority Support",
      "Unlimited Revisions",
    ],
  },
];

const Pricing = () => {
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
          Simple Pricing.{" "}
          <span className="text-primary">Powerful Results.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted mt-4 max-w-2xl mx-auto"
        >
          Choose a plan that fits your business goals. No hidden costs.
        </motion.p>

        {/* PRICING CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className={`card relative ${
                plan.popular ? "border-primary scale-105" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              {/* POPULAR BADGE */}
              {plan.popular && (
                <div className="absolute -top-3 right-4 bg-primary text-black text-xs px-3 py-1 rounded-full font-semibold">
                  Most Popular
                </div>
              )}

              <h3 className="heading-md mb-4">{plan.name}</h3>

              <p className="text-3xl font-bold mb-6">
                {plan.price}
              </p>

              <ul className="space-y-3 text-muted mb-6">
                {plan.features.map((f, idx) => (
                  <li key={idx}>✔ {f}</li>
                ))}
              </ul>

              <button
                className={`w-full ${
                  plan.popular ? "btn-primary" : "btn-secondary"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Pricing;