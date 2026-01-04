import { motion } from "framer-motion";
import { LayoutGrid, CheckSquare, FolderKanban, FileText, Calendar, BarChart3, Calculator, Table, Columns, List, GalleryHorizontal } from "lucide-react";

const blockTypes = [
  { icon: CheckSquare, name: "Tasks", desc: "Due dates, priorities, status" },
  { icon: FolderKanban, name: "Projects", desc: "Group related tasks" },
  { icon: FileText, name: "Notes", desc: "Markdown support" },
  { icon: Calendar, name: "Calendar", desc: "Daily/weekly views" },
  { icon: BarChart3, name: "Charts", desc: "Visual data" },
  { icon: Calculator, name: "Equations", desc: "Math formulas" },
];

const views = [
  { icon: Table, name: "Table" },
  { icon: Columns, name: "Board" },
  { icon: List, name: "List" },
  { icon: GalleryHorizontal, name: "Gallery" },
  { icon: Calendar, name: "Calendar" },
  { icon: BarChart3, name: "Timeline" },
];

const BlocksSection = () => {
  return (
    <section id="blocks" className="py-24 md:py-32">
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
            <div className="executive-card rounded-2xl p-6 md:p-8">
              {/* Window Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs text-muted-foreground ml-2">Study Space / Tasks</span>
                </div>
                <div className="flex gap-1">
                  {views.slice(0, 4).map((view) => (
                    <div
                      key={view.name}
                      className="w-7 h-7 rounded-md bg-muted flex items-center justify-center"
                    >
                      <view.icon className="w-3.5 h-3.5 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Task List */}
              <div className="space-y-2">
                {[
                  { task: "Complete calculus homework", priority: "High", status: "In Progress", progress: 60 },
                  { task: "Read chapter 5", priority: "Medium", status: "To Do", progress: 0 },
                  { task: "Review lecture notes", priority: "Low", status: "Completed", progress: 100 },
                  { task: "Prepare presentation", priority: "High", status: "To Do", progress: 0 },
                ].map((item, index) => (
                  <motion.div
                    key={item.task}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${item.status === "Completed" ? "bg-primary border-primary" : "border-muted-foreground/30"}`}>
                      {item.status === "Completed" && (
                        <CheckSquare className="w-3 h-3 text-primary-foreground" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`text-sm font-medium truncate ${item.status === "Completed" ? "line-through text-muted-foreground" : ""}`}>
                        {item.task}
                      </div>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      item.priority === "High" ? "bg-red-500/10 text-red-500" :
                      item.priority === "Medium" ? "bg-yellow-500/10 text-yellow-600" :
                      "bg-green-500/10 text-green-500"
                    }`}>
                      {item.priority}
                    </span>
                    <div className="w-16 h-1.5 rounded-full bg-muted-foreground/10 overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Properties Bar */}
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {["Status", "Priority", "Due Date", "Progress", "Assignee"].map((prop) => (
                    <span key={prop} className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">
                      + {prop}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-accent/5 via-transparent to-primary/5 rounded-full blur-3xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <LayoutGrid className="w-4 h-4" />
              <span>Blocks</span>
            </div>
            
            <h2 className="text-headline-sm md:text-headline font-bold mb-6">
              Everything is a Block
            </h2>
            
            <p className="text-muted-foreground text-body-lg mb-8 leading-relaxed">
              Tasks, projects, notes, schedules, reports — all Blocks. Each Block acts as a 
              smart database entry with customizable properties and multiple view options.
            </p>

            {/* Block Types Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {blockTypes.map((block, index) => (
                <motion.div
                  key={block.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <block.icon className="w-5 h-5 text-foreground mb-2" />
                  <div className="font-medium text-sm">{block.name}</div>
                  <div className="text-xs text-muted-foreground">{block.desc}</div>
                </motion.div>
              ))}
            </div>

            {/* Views */}
            <div className="p-4 rounded-xl bg-muted/30 border border-border">
              <div className="text-sm font-medium mb-3">One dataset, multiple views</div>
              <div className="flex flex-wrap gap-2">
                {views.map((view) => (
                  <div
                    key={view.name}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-background text-sm"
                  >
                    <view.icon className="w-3.5 h-3.5 text-muted-foreground" />
                    <span>{view.name}</span>
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

export default BlocksSection;
