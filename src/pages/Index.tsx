import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <div id="hero">
          <HeroSection />
        </div>
        
        <div id="about">
          <AboutSection />
        </div>
        
        <div id="skills">
          <SkillsSection />
        </div>
        
        <div id="projects">
          <ProjectsSection />
        </div>
        
        <div id="experience">
          <ExperienceSection />
        </div>
        
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        
        <div id="blog">
          <BlogSection />
        </div>
        
        <div id="contact">
          <ContactSection />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-card-border py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="font-montserrat text-muted-foreground">
            © 2025 Lazer Maddala. Built with React, TypeScript & Tailwind CSS.
          </p>
          <p className="font-montserrat text-sm text-muted-foreground mt-2">
            Innovating with AI, Engineering for Impact
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
