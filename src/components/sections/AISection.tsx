import { motion } from "framer-motion";
import { Sparkles, Mic, MessageSquare, Zap, FileText, Link2 } from "lucide-react";

const AISection = () => {
  return (
    <section id="ai" className="py-24 md:py-32 section-alt">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>AI Assistant</span>
            </div>

            <h2 className="text-headline-sm md:text-headline font-bold mb-6">
              The brain behind Noraizen
            </h2>

            <p className="text-muted-foreground text-body-lg mb-8 leading-relaxed">
              A fully integrated AI assistant that understands your intent and executes
              directly inside Noraizen. Voice, text, research, analysis — all seamless.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: Mic, text: "Voice & text commands" },
                { icon: Zap, text: "Direct execution" },
                { icon: FileText, text: "Report generation" },
                { icon: Link2, text: "Automatic linking" },
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Example Command */}
            <div className="p-4 rounded-xl bg-muted/50 border border-border">
              <div className="text-xs text-muted-foreground mb-2">Example command:</div>
              <div className="text-sm font-medium italic">
                "Create a report about the productivity app market in 2025 and link it to my startup project."
              </div>
              <div className="mt-3 pt-3 border-t border-border">
                <div className="text-xs text-muted-foreground">Result:</div>
                <ul className="text-xs text-muted-foreground mt-1 space-y-0.5">
                  <li>✓ Web research completed</li>
                  <li>✓ Structured report created</li>
                  <li>✓ Linked to Startup project</li>
                  <li>✓ SuperTags added</li>
                </ul>
              </div>
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
                  <div className="w-3 h-3 rounded-full bg-blue-400" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-muted-foreground">AI Assistant</span>
                </div>
              </div>

              {/* Chat Interface */}
              <div className="space-y-4">
                {/* User Message */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="flex justify-end"
                >
                  <div className="max-w-[80%] px-4 py-3 rounded-2xl rounded-tr-md bg-primary text-primary-foreground text-sm">
                    Create a study plan for my calculus exam next week
                  </div>
                </motion.div>

                {/* AI Response */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="flex justify-start"
                >
                  <div className="max-w-[85%] px-4 py-3 rounded-2xl rounded-tl-md bg-muted text-sm space-y-3">
                    <p>I'll create a comprehensive study plan for you. Here's what I'm setting up:</p>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center">
                          <Sparkles className="w-3 h-3 text-primary" />
                        </div>
                        <span>Creating "Calculus Exam Prep" project</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-5 h-5 rounded bg-accent/10 flex items-center justify-center">
                          <FileText className="w-3 h-3 text-accent" />
                        </div>
                        <span>Adding 12 study tasks across 7 days</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-5 h-5 rounded bg-purple-500/10 flex items-center justify-center">
                          <Link2 className="w-3 h-3 text-purple-500" />
                        </div>
                        <span>Linking to #Study and #Math</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Action Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                  className="flex gap-2 pl-4"
                >
                  <div className="px-3 py-2 rounded-lg bg-primary/10 border border-primary/20 text-xs font-medium text-primary">
                    View Project →
                  </div>
                  <div className="px-3 py-2 rounded-lg bg-muted border border-border text-xs font-medium">
                    Modify Plan
                  </div>
                </motion.div>
              </div>

              {/* Input Area */}
              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/50 border border-border">
                  <MessageSquare className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground flex-1">Ask anything...</span>
                  <Mic className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
            </div>

            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-accent/5 via-transparent to-purple-500/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
