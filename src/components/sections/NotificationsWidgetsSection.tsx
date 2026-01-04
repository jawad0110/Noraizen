import { motion } from "framer-motion";
import { Bell, Smartphone, Clock, Zap, RefreshCw, CheckCircle2, Plus, Play, Filter, LayoutGrid } from "lucide-react";

const NotificationsWidgetsSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Mobile Widgets - Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Home Screen Power
              </p>
            </div>

            <h2 className="text-headline-sm md:text-headline font-bold mb-4">
              Mobile Widgets
            </h2>
            <p className="text-muted-foreground text-body-lg mb-8">
              Surface live Noraizen content directly on your home screen.
              Not static previews — full extensions of your system.
            </p>

            {/* Widget Features */}
            <div className="space-y-4 mb-8">
              {[
                { icon: LayoutGrid, title: "Any Block or SuperTag", desc: "Display tasks, notes, or filtered views" },
                { icon: Filter, title: "Fully Customizable", desc: "Size, sorting, visibility rules" },
                { icon: CheckCircle2, title: "Interactive", desc: "Check off tasks, add new items, start Focus" },
                { icon: RefreshCw, title: "Real-Time Sync", desc: "Updates instantly, works offline" },
              ].map((feature, i) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center shrink-0 mt-0.5">
                    <feature.icon className="w-4 h-4 text-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{feature.title}</p>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Widget Preview */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl blur-xl" />
              <div className="relative bg-card border border-border rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-muted-foreground">TODAY'S TASKS</span>
                  <Plus className="w-4 h-4 text-muted-foreground" />
                </div>
                {[
                  { text: "Review lecture notes", done: true, priority: "high" },
                  { text: "Complete assignment draft", done: false, priority: "high" },
                  { text: "Team sync at 3pm", done: false, priority: "medium" },
                ].map((task, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-muted/50">
                    <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${task.done ? 'bg-primary border-primary' : 'border-border'}`}>
                      {task.done && <CheckCircle2 className="w-3 h-3 text-primary-foreground" />}
                    </div>
                    <span className={`text-sm flex-1 ${task.done ? 'line-through text-muted-foreground' : ''}`}>{task.text}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded ${task.priority === 'high' ? 'bg-red-500/10 text-red-500' : 'bg-yellow-500/10 text-yellow-600'}`}>
                      {task.priority}
                    </span>
                  </div>
                ))}
                <button className="w-full mt-2 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium flex items-center justify-center gap-2">
                  <Play className="w-3 h-3" /> Start Focus
                </button>
              </div>
            </div>
          </motion.div>

          {/* Smart Notifications - Right */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Bell className="w-5 h-5 text-accent-foreground" />
              </div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Context-Aware
              </p>
            </div>

            <h2 className="text-headline-sm md:text-headline font-bold mb-4">
              Smart Notifications
            </h2>
            <p className="text-muted-foreground text-body-lg mb-8">
              A hybrid system combining manual control and AI-driven intelligence.
              Notifications that understand context, not noise.
            </p>

            {/* Notification Types */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-card border border-border">
                <Clock className="w-5 h-5 text-primary mb-3" />
                <h4 className="font-semibold text-sm mb-1">Manual Control</h4>
                <p className="text-xs text-muted-foreground">Exact time, recurring, date-only with smart defaults</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <Zap className="w-5 h-5 text-primary mb-3" />
                <h4 className="font-semibold text-sm mb-1">AI-Driven</h4>
                <p className="text-xs text-muted-foreground">Detects at-risk tasks, suggests optimal times</p>
              </div>
            </div>

            {/* Notification Preview */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl blur-xl" />
              <div className="relative bg-card border border-border rounded-2xl p-4 space-y-3">
                <p className="text-xs font-medium text-muted-foreground mb-3">SMART QUEUE</p>
                {[
                  { time: "8:00 AM", title: "High priority deadline today", type: "urgent", icon: "🔴" },
                  { time: "9:30 AM", title: "Study session reminder", type: "ai", icon: "🤖" },
                  { time: "2:00 PM", title: "Team meeting in 1 hour", type: "scheduled", icon: "📅" },
                ].map((notif, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                    <span className="text-base">{notif.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{notif.title}</p>
                      <p className="text-xs text-muted-foreground">{notif.time}</p>
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${notif.type === 'urgent' ? 'bg-red-500/10 text-red-500' :
                      notif.type === 'ai' ? 'bg-primary/10 text-primary' :
                        'bg-muted text-muted-foreground'
                      }`}>
                      {notif.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cross-Platform */}
            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <span>Works on</span>
              <div className="flex gap-1">
                {["iOS", "Android", "Windows", "macOS"].map((os) => (
                  <span key={os} className="px-2 py-0.5 rounded bg-muted text-xs">{os}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NotificationsWidgetsSection;
