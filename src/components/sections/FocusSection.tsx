import { motion } from "framer-motion";
import { Target, Timer, TrendingUp, Building2, Pause, Play } from "lucide-react";

const FocusSection = () => {
  return (
    <section id="focus" className="py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Preview Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative order-2 lg:order-1"
          >
            <div className="executive-card rounded-2xl p-6 md:p-8 bg-gradient-to-br from-card to-card/80">
              {/* Window Header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-blue-400" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-muted-foreground">Focus Mode</span>
                </div>
              </div>

              {/* Timer Display */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative inline-block"
                >
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-primary/20 flex items-center justify-center relative">
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="45%"
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="4"
                        strokeDasharray="283"
                        strokeDashoffset="70"
                        strokeLinecap="round"
                        className="drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]"
                      />
                    </svg>
                    <div className="text-center">
                      <div className="text-4xl md:text-5xl font-bold tracking-tight">18:32</div>
                      <div className="text-sm text-muted-foreground mt-1">remaining</div>
                    </div>
                  </div>
                </motion.div>

                <div className="mt-4 text-sm text-muted-foreground">
                  Working on: <span className="text-foreground font-medium">Complete calculus homework</span>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-3 mt-6">
                  <button className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground/20 transition-colors">
                    <Pause className="w-5 h-5" />
                  </button>
                  <button className="w-14 h-14 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30">
                    <Play className="w-6 h-6 text-primary-foreground ml-0.5" />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground/20 transition-colors">
                    <Timer className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Visual Journey Preview */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="p-4 rounded-xl bg-muted/50 border border-border"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Your City</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Level 12</span>
                </div>
                <div className="flex gap-1">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className={`flex-1 h-8 rounded ${i < 7 ? "bg-primary/60" : "bg-muted-foreground/10"
                        }`}
                      style={{ height: `${20 + (i < 7 ? i * 4 : 0)}px` }}
                    />
                  ))}
                </div>
                <div className="text-xs text-muted-foreground mt-2 text-center">
                  3 more focus sessions to unlock new building
                </div>
              </motion.div>
            </div>

            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-full blur-3xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              <span>Focus Mode</span>
            </div>

            <h2 className="text-headline-sm md:text-headline font-bold mb-6">
              Deep work engine
            </h2>

            <p className="text-muted-foreground text-body-lg mb-8 leading-relaxed">
              A distraction-free environment designed for deep focus. Customizable Pomodoro
              sessions with a unique visual journey that makes productivity tangible.
            </p>

            <div className="space-y-4">
              {[
                { icon: Timer, title: "Customizable Pomodoro", desc: "Set your own work and break intervals" },
                { icon: Target, title: "Task Integration", desc: "Link sessions to specific tasks or work freely" },
                { icon: TrendingUp, title: "Session Tracking", desc: "Track your focus history and patterns" },
                { icon: Building2, title: "Visual Journey", desc: "Watch your digital city grow with every session" },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
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
        </div>
      </div>
    </section>
  );
};

export default FocusSection;
