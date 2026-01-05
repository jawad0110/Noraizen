import { motion } from "framer-motion";
import { FolderOpen, Layout, Users, Lock, Sparkles } from "lucide-react";

const features = [
  { icon: Layout, text: "Blank canvas or pre-built templates" },
  { icon: FolderOpen, text: "Contains unlimited Blocks" },
  { icon: Lock, text: "Private, shared, or monetized" },
  { icon: Users, text: "Solo and collaborative workflows" },
];

const SpacesSection = () => {
  return (
    <section id="spaces" className="py-24 md:py-32 section-alt">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <FolderOpen className="w-4 h-4" />
              <span>Spaces</span>
            </div>

            <h2 className="text-headline-sm md:text-headline font-bold mb-6">
              The top-level structure for your life
            </h2>

            <p className="text-muted-foreground text-body-lg mb-8 leading-relaxed">
              Spaces are the highest organizational layer in Noraizen. Each Space represents
              a complete area of your life or work — a self-contained digital world.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-foreground" />
                  </div>
                  <span className="text-sm text-muted-foreground">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {["Study", "Content Creation", "Startup", "Personal"].map((space) => (
                <span
                  key={space}
                  className="px-3 py-1.5 rounded-full bg-muted text-sm font-medium text-foreground"
                >
                  {space}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Preview Mockup */}
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
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-muted-foreground">My Spaces</span>
                </div>
              </div>

              {/* Spaces Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Study", icon: "📚", color: "bg-blue-500/10 border-blue-500/20" },
                  { name: "Content", icon: "🎬", color: "bg-purple-500/10 border-purple-500/20" },
                  { name: "Startup", icon: "🚀", color: "bg-orange-500/10 border-orange-500/20" },
                  { name: "Personal", icon: "🏠", color: "bg-pink-500/10 border-pink-500/20" },
                ].map((space, index) => (
                  <motion.div
                    key={space.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className={`p-4 rounded-xl border ${space.color} hover:scale-105 transition-transform cursor-pointer`}
                  >
                    <div className="text-2xl mb-2">{space.icon}</div>
                    <div className="font-medium text-sm">{space.name}</div>
                    <div className="text-xs text-muted-foreground mt-1">12 blocks</div>
                  </motion.div>
                ))}
              </div>

              {/* Add Space Button */}
              <div className="mt-4 p-3 rounded-xl border border-dashed border-border flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors cursor-pointer">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm">Create New Space</span>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpacesSection;
