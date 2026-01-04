import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";

import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import SpacesSection from "@/components/sections/SpacesSection";
import BlocksSection from "@/components/sections/BlocksSection";
import SuperTagsSection from "@/components/sections/SuperTagsSection";
import FocusSection from "@/components/sections/FocusSection";
import AISection from "@/components/sections/AISection";
import NotificationsWidgetsSection from "@/components/sections/NotificationsWidgetsSection";
import CollaborationSection from "@/components/sections/CollaborationSection";
import MarketplaceSecuritySection from "@/components/sections/MarketplaceSecuritySection";
import AudienceSection from "@/components/sections/AudienceSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />

      <ProblemSection />
      <SolutionSection />
      <SpacesSection />
      <BlocksSection />
      <SuperTagsSection />
      <FocusSection />
      <AISection />
      <NotificationsWidgetsSection />
      <CollaborationSection />
      <MarketplaceSecuritySection />
      <AudienceSection />
      <BenefitsSection />
      <Footer />
    </main>
  );
};

export default Index;
