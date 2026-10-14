import HeroSection from "@/components/sections/HeroSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import ProfessionalExperiences from "@/components/sections/ProfessionalExperiences";
import HallOfMyWork from "@/components/sections/HallOfMyWork";
import AboutMe from "@/components/sections/AboutMe";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="bg-ink">
      <CustomCursor />
      <ScrollIndicator />
      <HeroSection />
      <HallOfMyWork />
      <ExpertiseSection />
      <ProfessionalExperiences />
      <AboutMe />
      <Contact />
      <Footer />
    </main>
  );
}

