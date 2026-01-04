import { motion } from "framer-motion";
import { GraduationCap, Palette, Rocket, Zap } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const audienceData = [
  {
    id: 1,
    title: "Students",
    date: "Education",
    content: "Organize courses, assignments, and research. Study smarter.",
    category: "Academic",
    icon: GraduationCap,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 2,
    title: "Creators",
    date: "Creative",
    content: "Manage content, track ideas, build your creative workflow.",
    category: "Design",
    icon: Palette,
    relatedIds: [1, 3],
    status: "in-progress" as const,
    energy: 95,
  },
  {
    id: 3,
    title: "Founders",
    date: "Business",
    content: "Coordinate projects, align goals, move fast together.",
    category: "Startup",
    icon: Rocket,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 4,
    title: "Enthusiasts",
    date: "Efficiency",
    content: "A system that finally matches how you actually think.",
    category: "Productivity",
    icon: Zap,
    relatedIds: [1, 3],
    status: "in-progress" as const,
    energy: 90,
  },
];

const AudienceSection = () => {
  return (
    <section className="py-24 md:py-32 overflow-hidden bg-black text-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-medium text-white/60 uppercase tracking-wider mb-4">
            Built For You
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Your work, your way
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Whether you're studying, creating, building, or optimizing—Noraizen adapts.
          </p>
        </motion.div>

        <div className="relative -mx-4 md:-mx-0">
          <RadialOrbitalTimeline timelineData={audienceData} />
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
