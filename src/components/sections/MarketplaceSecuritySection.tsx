import { motion } from "framer-motion";
import { Store, Wifi, Shield, Download, DollarSign, Star, WifiOff, Lock, CheckCircle2, Key, FileCheck } from "lucide-react";

const MarketplaceSecuritySection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container px-4 md:px-6">
        {/* Spaces Marketplace */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Store className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Creator Economy
                </p>
              </div>

              <h2 className="text-headline-sm md:text-headline font-bold mb-4">
                Spaces Marketplace
              </h2>
              <p className="text-muted-foreground text-body-lg mb-8">
                A creator-driven marketplace for complete Spaces and templates.
                Not just templates — ready-made thinking systems.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Download, title: "Study Systems", desc: "Complete academic workflows" },
                  { icon: DollarSign, title: "85% Revenue", desc: "Creators keep the majority" },
                  { icon: Star, title: "Quality Discovery", desc: "Ratings, reviews, categories" },
                  { icon: Store, title: "Startup Setups", desc: "Project management templates" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Marketplace Preview */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl blur-2xl" />
              <div className="relative bg-card border border-border rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold">Popular Spaces</h4>
                  <span className="text-xs text-muted-foreground">View all</span>
                </div>
                <div className="space-y-3">
                  {[
                    { name: "Study Master Pro", creator: "by StudyPro", price: "$12", rating: "4.9", downloads: "2.4k", color: "from-blue-500 to-cyan-500" },
                    { name: "Content Creator Kit", creator: "by CreatorHub", price: "$19", rating: "4.8", downloads: "1.8k", color: "from-purple-500 to-pink-500" },
                    { name: "Startup Launch", creator: "by FounderOS", price: "Free", rating: "4.7", downloads: "3.1k", color: "from-orange-500 to-red-500" },
                  ].map((space, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors cursor-pointer">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${space.color} flex items-center justify-center shrink-0`}>
                        <span className="text-white font-bold text-lg">{space.name[0]}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{space.name}</p>
                        <p className="text-xs text-muted-foreground">{space.creator}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="font-semibold text-sm">{space.price}</p>
                        <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                          <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                          <span>{space.rating}</span>
                          <span>•</span>
                          <span>{space.downloads}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Offline-First & Security */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Offline-First */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-card border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Wifi className="w-5 h-5 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold">Offline-First</h3>
            </div>

            <p className="text-muted-foreground mb-6">
              Noraizen works fully without internet. Connectivity enhances — it's never required.
            </p>

            <div className="space-y-4">
              {[
                { icon: WifiOff, title: "Local-First Storage", desc: "All edits saved locally, instant response" },
                { icon: Wifi, title: "Seamless Sync", desc: "Auto-sync on reconnection, silent conflict resolution" },
                { icon: CheckCircle2, title: "Zero Latency", desc: "Smooth typing, no data loss, no waiting" },
              ].map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center shrink-0">
                    <feature.icon className="w-4 h-4 text-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{feature.title}</p>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-muted/50">
              <p className="text-xs text-muted-foreground">
                <span className="font-medium text-foreground">Perfect for:</span> Studying without Wi-Fi, working while traveling, unstable connections
              </p>
            </div>
          </motion.div>

          {/* Security & Privacy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-2xl bg-card border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Security & Privacy</h3>
            </div>

            <p className="text-muted-foreground mb-6">
              Your data belongs to you. Period. Private by default, secure by architecture.
            </p>

            <div className="space-y-4">
              {[
                { icon: Lock, title: "XChaCha20-Poly1305", desc: "Military-grade encryption at rest and in transit" },
                { icon: Key, title: "Argon2id Hashing", desc: "Resistant to brute-force and GPU attacks" },
                { icon: Shield, title: "Two-Factor Auth", desc: "TOTP-based 2FA for maximum security" },
                { icon: FileCheck, title: "GDPR & CCPA", desc: "Full compliance with data export & deletion rights" },
              ].map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center shrink-0">
                    <feature.icon className="w-4 h-4 text-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{feature.title}</p>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Private by default", "Secure by design", "Transparent by policy"].map((badge) => (
                <span key={badge} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Core Differentiator */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary/5 via-card to-accent/5 border border-border text-center"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            More than a productivity app
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Noraizen is a cognitive operating system for thinking, planning, and creating —
            powered by AI and structured knowledge. Not a to-do app. Not a Notion clone.
            Something entirely new.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Think", "Organize", "Focus", "Create"].map((word) => (
              <span
                key={word}
                className="px-4 py-2 rounded-full bg-background border border-border text-sm font-medium"
              >
                {word}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketplaceSecuritySection;
