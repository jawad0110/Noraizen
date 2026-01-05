import { motion } from "framer-motion";
import { Users, Shield, Edit3, MessageSquare, Eye, Crown, UserCheck } from "lucide-react";

const CollaborationSection = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Real-Time Collaboration</span>
          </div>
          <h2 className="text-headline-sm md:text-headline font-bold mb-4">
            Work together, seamlessly
          </h2>
          <p className="text-muted-foreground text-body-lg max-w-2xl mx-auto">
            Real-time collaboration inside shared Spaces. Designed for small teams and focused work,
            not enterprise bloat.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {[
              {
                icon: Users,
                title: "Shared Spaces",
                desc: "Invite users, work on the same data live. Perfect for teams, study groups, creators.",
              },
              {
                icon: Shield,
                title: "Role-Based Permissions",
                desc: "Owner, Editor, or Viewer. Fine-grained control per Space.",
              },
              {
                icon: Edit3,
                title: "Real-Time Editing",
                desc: "Multiple users edit simultaneously. Changes appear instantly.",
              },
              {
                icon: MessageSquare,
                title: "Comments & Mentions",
                desc: "Comment on any Block. @mention users with instant notifications.",
              },
            ].map((feature, i) => (
              <div
                key={feature.title}
                className="p-5 rounded-2xl bg-card border border-border hover:border-primary/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* Collaboration Preview */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl blur-2xl" />
            <div className="relative bg-card border border-border rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="px-5 py-4 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-xs font-bold text-white">S</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Startup Roadmap</p>
                    <p className="text-xs text-muted-foreground">Shared Space</p>
                  </div>
                </div>
                <div className="flex -space-x-2">
                  {["A", "M", "K"].map((initial, i) => (
                    <div
                      key={i}
                      className={`w-7 h-7 rounded-full border-2 border-card flex items-center justify-center text-[10px] font-medium ${i === 0 ? 'bg-primary text-primary-foreground' :
                          i === 1 ? 'bg-accent text-accent-foreground' :
                            'bg-muted text-muted-foreground'
                        }`}
                    >
                      {initial}
                    </div>
                  ))}
                  <div className="w-7 h-7 rounded-full border-2 border-card bg-muted flex items-center justify-center text-[10px] text-muted-foreground">
                    +2
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                {/* Live Editing Indicator */}
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span>Alex is editing...</span>
                </div>

                {/* Task being edited */}
                <div className="p-4 rounded-xl bg-muted/50 border-2 border-primary/30">
                  <div className="flex items-start justify-between mb-2">
                    <p className="font-medium text-sm">Launch MVP by Q2</p>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary">In Progress</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">Complete core features and prepare for beta users...</p>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary text-[10px] text-primary-foreground flex items-center justify-center">A</div>
                    <span className="text-[10px] text-primary">Editing now</span>
                  </div>
                </div>

                {/* Comment Thread */}
                <div className="p-4 rounded-xl bg-card border border-border">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-[10px] font-medium text-accent-foreground">M</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium">Maria</span>
                        <span className="text-[10px] text-muted-foreground">2 min ago</span>
                      </div>
                      <p className="text-xs text-muted-foreground">@Alex should we prioritize the onboarding flow first?</p>
                    </div>
                  </div>
                </div>

                {/* Permissions */}
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <div className="flex items-center gap-4">
                    {[
                      { icon: Crown, label: "Owner", count: 1 },
                      { icon: Edit3, label: "Editors", count: 3 },
                      { icon: Eye, label: "Viewers", count: 2 },
                    ].map((role) => (
                      <div key={role.label} className="flex items-center gap-1 text-[10px] text-muted-foreground">
                        <role.icon className="w-3 h-3" />
                        <span>{role.count} {role.label}</span>
                      </div>
                    ))}
                  </div>
                  <button className="text-[10px] text-primary font-medium">Manage</button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
