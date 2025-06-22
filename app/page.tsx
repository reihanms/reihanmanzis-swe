import HeroSection from "@/components/sections/HeroSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import ProfessionalExperiences from "@/components/sections/ProfessionalExperiences";
import HallOfMyWork from "@/components/sections/HallOfMyWork";
import AboutMe from "@/components/sections/AboutMe";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  // bg-[#0b151a]
  return (
    <main className="bg-[#0b151a]">
      <HeroSection />
      <ExpertiseSection />
      <ProfessionalExperiences />
      <HallOfMyWork />
      <AboutMe />
      <Contact />
      <Footer />
    </main>
  );
}

