import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, GraduationCap, User } from "lucide-react";

const AboutSection = () => {
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
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold neon-text-purple mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl border border-card-border tech-card overflow-hidden">
                <img 
                  src="/lovable-uploads/7f5dd335-daf1-4af8-a229-40ca3a605c08.png"
                  alt="Lazer Maddala - AI & ML Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl" />
              <div className="absolute -inset-1 bg-gradient-primary opacity-20 rounded-2xl blur-sm -z-10" />
            </div>
          </div>

          {/* Bio Content */}
          <div className="space-y-8">
            <Card className="tech-card p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-orbitron font-semibold neon-text-cyan mb-6">
                  Professional Summary
                </h3>
                <p className="text-lg font-montserrat text-muted-foreground leading-relaxed mb-6">
                  Motivated and future-ready Computer Science graduate with practical experience in AI/ML, 
                  Data Science, and Cloud Technologies through multiple internships and technical projects. 
                  Known for adaptability, continuous learning, and a solution-oriented mindset.
                </p>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-montserrat"
                  onClick={handleDownloadResume}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </CardContent>
            </Card>

            <Card className="tech-card p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <GraduationCap className="w-8 h-8 text-accent mr-3" />
                  <h3 className="text-2xl font-orbitron font-semibold neon-text-cyan">
                    Education
                  </h3>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-montserrat font-semibold text-foreground">
                    B.Tech in Computer Science and Engineering
                  </h4>
                  <p className="text-lg font-montserrat text-muted-foreground">
                    Andhra Loyola Institute of Engineering and Technology
                  </p>
                  <div className="flex items-center space-x-4 mt-4">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full font-montserrat font-medium">
                      CGPA: 7.5/10
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;