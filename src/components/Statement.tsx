import { motion } from "framer-motion";

const Statement = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl md:text-4xl lg:text-5xl font-display font-300 text-foreground leading-tight tracking-tight"
        >
          We don't predict the future.
          <br />
          <span className="text-glow text-primary">We converge it.</span>
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 flex items-center justify-center gap-8"
        >
          <div className="h-px w-16 bg-border" />
          <span className="text-muted-foreground/40 text-xs tracking-[0.4em] uppercase font-body">
            Vortexian LLC
          </span>
          <div className="h-px w-16 bg-border" />
        </motion.div>
      </div>
    </section>
  );
};

export default Statement;
