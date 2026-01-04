import { motion } from "framer-motion";

const problems = [
  {
    title: "too many tools",
    description: "Scattered across apps. Nothing connects. You spend more time organizing than doing.",
  },
  {
    title: "scattered focus",
    description: "Constant context switching. Lost momentum. Deep work becomes impossible.",
  },
  {
    title: "mental overload",
    description: "Too much to track. Nothing feels clear. Your system works against you.",
  }
];

const ProblemSection = () => {
  return (
    <section className="relative py-32 bg-background overflow-hidden border-y border-white/[0.05]">
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center md:text-left group"
            >
              <div className="text-white/10 text-6xl font-serif mb-6 group-hover:text-accent/20 transition-colors pointer-events-none">
                0{index + 1}
              </div>
              <h3 className="text-3xl font-serif mb-4 lowercase tracking-tight text-foreground/90 italic">
                {problem.title}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed text-lg">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
