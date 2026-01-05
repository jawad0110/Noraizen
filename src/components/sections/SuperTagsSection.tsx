import { motion } from "framer-motion";
import { Tag, Link2, Search, Network } from "lucide-react";

const SuperTagsSection = () => {
  return (
    <section id="supertags" className="py-24 md:py-32 section-alt">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-500 text-sm font-medium mb-6">
              <Tag className="w-4 h-4" />
              <span>SuperTags</span>
            </div>

            <h2 className="text-headline-sm md:text-headline font-bold mb-6">
              Intelligent knowledge linking
            </h2>

            <p className="text-muted-foreground text-body-lg mb-8 leading-relaxed">
              SuperTags are not simple labels — they're live knowledge hubs that link related
              Blocks across all Spaces. One click to see everything tied to a topic.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: Link2, title: "Cross-Space Connections", desc: "Link related Blocks across all your Spaces instantly" },
                { icon: Search, title: "Smart Shortcuts", desc: "Surface everything tied to a topic in one view" },
                { icon: Network, title: "Graph View", desc: "Visualize relationships between all your knowledge" },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-muted/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">{feature.title}</div>
                    <div className="text-sm text-muted-foreground">{feature.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Preview Mockup - Graph View */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="executive-card rounded-2xl p-6 md:p-8">
              {/* Window Header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-blue-400" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-muted-foreground">Graph View — #Study</span>
                </div>
              </div>

              {/* Graph Visualization */}
              <div className="relative h-64 md:h-80">
                {/* Central Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                >
                  <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/30">
                    #Study
                  </div>
                </motion.div>

                {/* Connected Nodes */}
                {[
                  { label: "Calculus HW", x: "20%", y: "20%", delay: 0.4 },
                  { label: "Lecture Notes", x: "75%", y: "15%", delay: 0.5 },
                  { label: "Exam Prep", x: "80%", y: "60%", delay: 0.6 },
                  { label: "Study Plan", x: "15%", y: "70%", delay: 0.7 },
                  { label: "Research", x: "60%", y: "85%", delay: 0.8 },
                ].map((node) => (
                  <motion.div
                    key={node.label}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: node.delay }}
                    className="absolute"
                    style={{ left: node.x, top: node.y }}
                  >
                    <div className="px-3 py-2 rounded-lg bg-muted border border-border text-xs font-medium whitespace-nowrap shadow-sm">
                      {node.label}
                    </div>
                  </motion.div>
                ))}

                {/* Connection Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(var(--border))" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="hsl(var(--border))" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  {[
                    { x1: "50%", y1: "50%", x2: "25%", y2: "25%" },
                    { x1: "50%", y1: "50%", x2: "78%", y2: "20%" },
                    { x1: "50%", y1: "50%", x2: "82%", y2: "62%" },
                    { x1: "50%", y1: "50%", x2: "20%", y2: "72%" },
                    { x1: "50%", y1: "50%", x2: "62%", y2: "87%" },
                  ].map((line, i) => (
                    <motion.line
                      key={i}
                      x1={line.x1}
                      y1={line.y1}
                      x2={line.x2}
                      y2={line.y2}
                      stroke="url(#lineGradient)"
                      strokeWidth="1.5"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    />
                  ))}
                </svg>
              </div>

              {/* SuperTags List */}
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {["#Study", "#Math", "#Research", "#Exams", "#Notes"].map((tag, i) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${i === 0 ? "bg-purple-500/10 text-purple-500" : "bg-muted text-muted-foreground"
                        }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-purple-500/5 via-transparent to-primary/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SuperTagsSection;
