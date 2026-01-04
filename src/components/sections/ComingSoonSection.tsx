import { motion } from "framer-motion";
import { Apple, Play } from "lucide-react";

const ComingSoonSection = () => {
  return (
    <section className="py-24 md:py-32 section-alt">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="badge badge-dark mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Coming Soon
          </span>
          
          <h2 className="text-headline-sm md:text-headline font-bold mb-6">
            Launching on iOS & Android
          </h2>
          
          <p className="text-muted-foreground text-body-lg mb-10 max-w-lg mx-auto">
            Be among the first to experience a new way to organize your life. Early access members get exclusive features.
          </p>

          {/* Platform badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="executive-card px-6 py-4 flex items-center gap-4 cursor-pointer hover:shadow-xl transition-shadow"
            >
              <Apple className="w-8 h-8" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Download on the</p>
                <p className="font-semibold">App Store</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="executive-card px-6 py-4 flex items-center gap-4 cursor-pointer hover:shadow-xl transition-shadow"
            >
              <Play className="w-8 h-8" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Get it on</p>
                <p className="font-semibold">Google Play</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
