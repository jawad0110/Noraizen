import { motion } from "framer-motion";
import { Minimize2, Focus, ListChecks, Zap, ArrowRight, Check, Shield } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const benefits = [
  {
    icon: Minimize2,
    title: "Less chaos",
    description: "One workspace for everything",
  },
  {
    icon: Focus,
    title: "Better focus",
    description: "Deep work mode built-in",
  },
  {
    icon: ListChecks,
    title: "Clear priorities",
    description: "Visual clarity at a glance",
  },
  {
    icon: Zap,
    title: "Faster execution",
    description: "AI-powered assistance",
  },
];

const BenefitsSection = () => {
  const [step, setStep] = useState<'name' | 'email'>('name');
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'name' && name) {
      setStep('email');
    } else if (step === 'email' && email) {
      setIsSubmitted(true);
      toast.success("Welcome to the waitlist!", {
        description: `Thanks ${name}, we'll notify you when Noraizen launches.`,
      });
    }
  };

  return (
    <section id="waitlist" className="relative py-32 bg-background text-foreground overflow-hidden">
      {/* Enhanced Modern Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid-large opacity-[0.05]" />

        {/* Subtle Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px]" />
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
            The Outcome
          </p>
          <h2 className="text-5xl md:text-7xl font-serif mb-6 lowercase italic">
            What changes with Noraizen
          </h2>
          <p className="text-muted-foreground text-xl max-w-xl mx-auto font-light">
            Real outcomes, not just features. A system that scales with your ambition.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-32">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group">
                <div className="w-16 h-16 rounded-2xl bg-white/[0.03] flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors border border-white/[0.05]">
                  <benefit.icon className="w-8 h-8 text-foreground/60 group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-2xl font-serif mb-3 lowercase italic">{benefit.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Waitlist Form Integrated */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="mb-10 text-center">
            <h3 className="text-4xl md:text-5xl font-serif italic mb-4">Get early access</h3>
            <p className="text-muted-foreground text-lg font-light">
              Join thousands who want clarity in their productivity. No spam, just updates.
            </p>
          </div>

          {!isSubmitted ? (
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 mb-10 max-w-lg mx-auto relative items-center"
            >
              {/* Sequential Input Container */}
              <div className="relative w-full">
                <Input
                  type={step === 'name' ? "text" : "email"}
                  placeholder={step === 'name' ? "Enter your name" : "Enter your email"}
                  value={step === 'name' ? name : email}
                  onChange={(e) => step === 'name' ? setName(e.target.value) : setEmail(e.target.value)}
                  className="h-14 px-6 text-lg bg-white/[0.03] border-white/10 rounded-full focus:ring-accent/20 focus:border-accent/40 w-full transition-all duration-300"
                  required
                  autoFocus
                />

                {/* Step indicator/hint */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-muted-foreground pointer-events-none hidden sm:block">
                  {step === 'name' ? 'Step 1/2' : 'Step 2/2'}
                </div>
              </div>

              <Button
                variant="executive"
                size="lg"
                type="submit"
                className="h-14 px-10 rounded-full shrink-0 glow-border w-full sm:w-auto min-w-[140px]"
              >
                {step === 'name' ? 'Next' : 'Join'}
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-10 glow-border"
            >
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-serif italic mb-3">You're on the list!</h3>
              <p className="text-muted-foreground">
                We'll reach out when Noraizen is ready for you.
              </p>
            </motion.div>
          )}

          <div className="flex items-center justify-center gap-8 mt-4 text-sm text-muted-foreground font-light italic">
            <div className="flex items-center gap-2.5">
              <Shield className="w-4 h-4 text-accent/60" />
              <span>No spam, ever</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-accent/60" />
              <span>Free early access</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
