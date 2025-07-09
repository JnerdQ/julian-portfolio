import { ThemeToogle } from "@/components/ThemeToogle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillSection } from "@/components/SkillSection";
import { ProjectSection } from "@/components/ProjectSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ToastProvider } from "@/components/ToastProvider";

export const Home = () => {
  return (
    <ToastProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme toggle */}
        <ThemeToogle />
        {/* Background Effects*/}
        <StarBackground />
        {/* Navbar */}
        <Navbar />
        {/* Main content */}
        <main>
          <HeroSection />
          <AboutSection />
          <SkillSection />
          <ProjectSection />
          <ContactSection />
        </main>
        {/* Footer */}
        <Footer />
      </div>
    </ToastProvider>
  );
};
