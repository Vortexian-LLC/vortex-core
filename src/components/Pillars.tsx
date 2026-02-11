import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Strategic Advisory",
    description:
      "C-suite counsel for organizations navigating digital transformation. We see the chessboard before the pieces move.",
  },
  {
    number: "02",
    title: "AI Integration",
    description:
      "Deploying intelligence at scale. From infrastructure to interface, we make artificial intelligence operational.",
  },
  {
    number: "03",
    title: "Talent Architecture",
    description:
      "Building the teams that build the future. We identify, attract, and position the minds that matter.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const Pillars = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-primary text-sm tracking-[0.3em] uppercase mb-16 font-body"
        >
          Convergence Points
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-px bg-border"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.number}
              variants={itemVariants}
              className="group bg-background p-8 md:p-10 cursor-pointer transition-colors duration-500 hover:bg-secondary/50"
            >
              <span className="text-primary/40 font-display text-sm tracking-widest">
                {pillar.number}
              </span>
              <h3 className="text-xl md:text-2xl font-display font-600 text-foreground mt-4 mb-4">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                {pillar.description}
              </p>
              <ArrowRight className="w-4 h-4 text-primary/30 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pillars;
