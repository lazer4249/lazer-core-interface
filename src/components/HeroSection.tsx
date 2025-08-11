import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const handleHireMe = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    // Create a placeholder resume download
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual resume URL
    link.download = 'Lazer_Maddala_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>
      
      {/* Floating Particles Animation */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="space-y-8">
          {/* Name with Glow Effect */}
          <h1 className="text-6xl md:text-8xl font-orbitron font-bold neon-text-blue animate-pulse">
            LAZER MADDALA
          </h1>
          
          {/* Role */}
          <h2 className="text-2xl md:text-4xl font-orbitron font-medium text-foreground">
            Full-Stack Developer & AI Engineer
          </h2>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl font-montserrat text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            "Innovating with AI, Engineering for Impact"
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-glow text-primary-foreground font-montserrat font-semibold px-8 py-4 rounded-lg glow-blue transition-all duration-300 hover:glow-blue-strong"
              onClick={handleHireMe}
            >
              <Mail className="mr-2 h-5 w-5" />
              Hire Me
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-montserrat font-semibold px-8 py-4 rounded-lg transition-all duration-300"
              onClick={handleDownloadResume}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;