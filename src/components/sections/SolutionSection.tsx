import { motion } from "framer-motion";
import { Layers, Sparkles, Eye } from "lucide-react";

const solutions = [
  {
    icon: Layers,
    title: "One unified system",
    description: "Everything lives together. Tasks, notes, projects, ideas—all connected in one intelligent workspace.",
  },
  {
    icon: Sparkles,
    title: "Flexible by design",
    description: "Build your way. Modular blocks adapt to how you think. Your system, your rules.",
  },
  {
    icon: Eye,
    title: "Visual clarity",
    description: "See how everything relates. Graph views reveal patterns and connections you'd miss.",
  },
];

const SolutionSection = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-background">
      {/* Enhanced Modern Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid-large opacity-[0.1]" />

        {/* Glow Effects */}
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-24"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-[0.2em] mb-4">
            The Solution
          </p>
          <h2 className="text-5xl md:text-7xl font-serif mb-6 lowercase italic">
            Think. Organize. Focus. Create.
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-light">
            One intelligent workspace that adapts to the way you think,
            bridging the gap between raw ideas and finished work.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">
          {/* Main Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 glass-card p-10 flex flex-col justify-between min-h-[400px] glow-border group"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent/20 transition-colors">
                <Layers className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-3xl font-serif mb-4 lowercase">One unified system</h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                Everything lives together. Tasks, notes, projects, ideas—all connected in one intelligent workspace that feels like a natural extension of your mind.
              </p>
            </div>
            <div className="mt-12 flex gap-4">
              {[1, 2, 3].map(i => <div key={i} className="h-1 w-20 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "0%" }}
                  transition={{ duration: 1.5, delay: i * 0.2 }}
                  className="h-full w-full bg-accent/40"
                />
              </div>)}
            </div>
          </motion.div>

          {/* Small Feature Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 glass-card p-8 flex flex-col justify-center border-white/5"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-white/40" />
            </div>
            <h3 className="text-2xl font-serif mb-3 lowercase">Flexible by design</h3>
            <p className="text-muted-foreground font-light">
              Build your way. Modular blocks adapt to how you think. Your system, your rules.
            </p>
          </motion.div>

          {/* Small Feature Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 glass-card p-8 flex flex-col justify-center border-white/5"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-white/40" />
            </div>
            <h3 className="text-2xl font-serif mb-3 lowercase">Visual clarity</h3>
            <p className="text-muted-foreground font-light">
              See how everything relates. Graph views reveal patterns and connections you'd miss.
            </p>
          </motion.div>

          {/* New Bento Item showing 'integrations' feel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-8 glass-card p-10 flex flex-col md:flex-row items-center gap-10 border-white/5 overflow-hidden"
          >
            <div className="flex-1">
              <h3 className="text-3xl font-serif mb-4 lowercase">Speaks your language</h3>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                Seamlessly sync across all your devices, keeping you in flow wherever you are.
              </p>
            </div>
            <div className="relative flex-1 w-full h-40">
              <div className="absolute inset-0 grid grid-cols-3 gap-2 translate-x-4 translate-y-4 rotate-3 opacity-40">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="aspect-square bg-white/5 rounded-xl border border-white/10" />
                ))}
              </div>
              <div className="absolute inset-0 grid grid-cols-3 gap-2 -translate-x-2 -translate-y-2 -rotate-2">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="aspect-square bg-accent/10 rounded-xl border border-accent/20 flex items-center justify-center p-4">
                    <div className="w-full h-1 bg-accent/30 rounded-full" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
