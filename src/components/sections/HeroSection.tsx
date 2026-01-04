import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-16">
      {/* Enhanced Modern Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid-large opacity-[0.15]" />
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.1]" />

        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 relative flex justify-center"
          >
            {/* The "Light" coming from the badge - more intense */}
            <div className="absolute inset-0 bg-accent/30 blur-2xl rounded-full scale-110 animate-pulse pointer-events-none" />

            <span className="relative z-10 bg-white/[0.08] backdrop-blur-2xl border border-white/20 px-5 py-2.5 rounded-full text-sm font-medium tracking-wide flex items-center gap-2.5 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
              <span className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_rgba(67,198,172,0.8)] animate-pulse" />
              Coming Soon to iOS & Android
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-serif leading-[0.9] mb-8"
          >
            Noraizen
          </motion.h1>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mb-12"
          >
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              Your stories, distant between talking and leaping.
              <br className="hidden md:block" />
              <span className="text-foreground/80 italic font-serif mt-2 block lowercase">
                One intelligent workspace for your thoughts and actions.
              </span>
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 mb-24"
          >
            <Button variant="executive" size="lg" className="h-14 px-8 text-lg rounded-full glow-border" onClick={scrollToWaitlist}>
              Get Early Access
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

          </motion.div>

          {/* Device Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative w-full max-w-5xl mx-auto perspective-1000"
          >
            <div className="executive-card-elevated overflow-hidden border-white/[0.08] bg-black/40 backdrop-blur-3xl p-2">
              {/* Window frame imitation */}
              <div className="bg-white/[0.03] rounded-[1.4rem] overflow-hidden border border-white/[0.05]">
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.05]">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                  </div>
                  <div className="text-[10px] text-white/30 tracking-[0.2em] uppercase font-medium">Dashboard Interface</div>
                  <div className="w-12" />
                </div>

                {/* Visual content - Restored functional UI mockup */}
                <div className="bg-background/40 p-6 md:p-8">
                  {/* Top bar */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
                        <img src="/logo.png" alt="Noraizen Logo" className="w-full h-full object-contain" />
                      </div>
                      <div className="h-4 w-24 bg-white/10 rounded" />
                    </div>
                    <div className="flex gap-2">
                      <div className="h-8 w-8 bg-white/5 rounded-lg border border-white/5" />
                      <div className="h-8 w-8 bg-white/5 rounded-lg border border-white/5" />
                    </div>
                  </div>

                  {/* Main content grid */}
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Sidebar */}
                    <div className="space-y-3">
                      <div className="h-3 w-16 bg-white/10 rounded mb-4" />
                      {['Today', 'This Week', 'Projects', 'Notes'].map((item, i) => (
                        <div
                          key={item}
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg ${i === 0 ? 'bg-white/10 border border-white/5' : ''}`}
                        >
                          <div className="w-4 h-4 rounded bg-white/10" />
                          <span className="text-sm text-white/50">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Main area */}
                    <div className="md:col-span-2 space-y-4">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <div className="h-5 w-32 bg-white/20 rounded mb-2" />
                          <div className="h-3 w-48 bg-white/10 rounded" />
                        </div>
                        <div className="badge badge-accent bg-accent/20 text-accent border-none">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mr-1.5" />
                          In Focus
                        </div>
                      </div>

                      {/* Task cards */}
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="flex items-center gap-4 p-4 bg-white/[0.03] rounded-xl border border-white/[0.05] hover:border-white/10 transition-colors"
                        >
                          <div className={`w-5 h-5 rounded-md border-2 ${i === 1 ? 'bg-accent border-accent' : 'border-white/20'} flex items-center justify-center`}>
                            {i === 1 && <span className="text-accent-foreground text-[10px]">✓</span>}
                          </div>
                          <div className="flex-1">
                            <div className={`h-2.5 rounded mb-1.5 ${i === 1 ? 'bg-white/40 w-40' : 'bg-white/20 w-48'}`} />
                            <div className="h-1.5 w-24 bg-white/10 rounded" />
                          </div>
                          <div className="h-6 w-16 bg-white/5 rounded-full border border-white/5" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -left-12 top-1/4 glass-card p-5 hidden lg:block border-accent/20 border"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-3">
                <ArrowRight className="w-6 h-6 text-accent -rotate-45" />
              </div>
              <div className="space-y-1">
                <div className="h-3 w-16 bg-white/20 rounded" />
                <div className="h-2 w-12 bg-white/10 rounded" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [15, -15, 15] }}
              transition={{ duration: 7, repeat: Infinity }}
              className="absolute -right-8 bottom-1/4 glass-card p-6 hidden lg:block border-primary/20"
            >
              <div className="flex gap-3 items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/20" />
                <div className="h-2 w-12 bg-white/20 rounded" />
              </div>
              <div className="w-32 h-20 bg-white/5 rounded-xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
