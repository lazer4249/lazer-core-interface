import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Artificial Intelligence Intern",
      company: "Andhra Loyola Institute of Engineering and Technology",
      period: "May 2025 - Jul 2025",
      location: "Vijayawada, India",
      type: "Internship",
      description: "Focused on advanced AI/ML research and development, working on cutting-edge projects in machine learning and artificial intelligence applications.",
      skills: ["AI/ML Research", "Python", "TensorFlow", "PyTorch", "Data Analysis"],
      status: "upcoming"
    },
    {
      title: "Generative AI & ChatGPT Training",
      company: "GeeksforGeeks",
      period: "Jun 2025",
      location: "Online",
      type: "Training",
      description: "Comprehensive training program covering generative AI technologies, ChatGPT implementation, and modern AI development practices.",
      skills: ["Generative AI", "ChatGPT", "NLP", "AI Ethics", "Prompt Engineering"],
      status: "upcoming"
    },
    {
      title: "Machine Learning Internship",
      company: "SkillDzire & APSCHE",
      period: "Jul 2024",
      location: "Andhra Pradesh, India",
      type: "Internship",
      description: "Hands-on experience in machine learning algorithms, data preprocessing, model training, and deployment of ML solutions.",
      skills: ["Machine Learning", "Python", "Data Science", "Model Deployment", "Analytics"],
      status: "completed"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold neon-text-purple mb-4">
            Experience & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto" />
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-primary opacity-30" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background pulse-glow z-10" />
                
                {/* Content Card */}
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8 md:ml-0' : 'md:ml-8 md:mr-0'} md:w-1/2`}>
                  <Card className="tech-card">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-orbitron font-semibold text-foreground mb-1">
                            {exp.title}
                          </h3>
                          <div className="flex items-center text-muted-foreground mb-2">
                            <Building className="w-4 h-4 mr-2" />
                            <span className="font-montserrat">{exp.company}</span>
                          </div>
                        </div>
                        <Badge 
                          variant={exp.status === 'upcoming' ? 'default' : 'outline'}
                          className={exp.status === 'upcoming' ? 'bg-primary text-primary-foreground' : 'border-accent text-accent'}
                        >
                          {exp.type}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span className="font-montserrat">{exp.period}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="font-montserrat">{exp.location}</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground font-montserrat mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex}
                            variant="outline"
                            className="border-primary text-primary bg-primary/10 font-montserrat text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-orbitron font-bold text-center neon-text-cyan mb-12">
            Key Achievements
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "7.5/10",
                label: "CGPA",
                description: "Academic Excellence in Computer Science"
              },
              {
                metric: "3+",
                label: "Internships",
                description: "Practical Industry Experience"
              },
              {
                metric: "2+",
                label: "AI Projects",
                description: "Innovative Technical Solutions"
              }
            ].map((achievement, index) => (
              <Card key={index} className="tech-card text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-orbitron font-bold neon-text-blue mb-2">
                    {achievement.metric}
                  </div>
                  <div className="text-lg font-orbitron font-semibold text-foreground mb-2">
                    {achievement.label}
                  </div>
                  <div className="text-sm font-montserrat text-muted-foreground">
                    {achievement.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;