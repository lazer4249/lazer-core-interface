import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Github, Mic, FileText } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "AI Voice Assistant",
      description: "Real-time conversational AI using Python, SpeechRecognition, PyTorch, NLP.",
      detailedDescription: "A sophisticated AI voice assistant that combines speech-to-text and text-to-speech technologies with advanced natural language processing. The system features real-time conversation capabilities, intent recognition, and intelligent dialogue management. Built with Python and PyTorch, it demonstrates practical applications of machine learning in conversational AI.",
      technologies: ["Python", "SpeechRecognition", "PyTorch", "NLP", "Speech-to-Text", "Text-to-Speech"],
      features: [
        "Real-time speech recognition and processing",
        "Intent recognition and context understanding",
        "Intelligent dialogue management system",
        "Text-to-speech synthesis with natural voice",
        "Modular architecture for easy extension"
      ],
      icon: <Mic className="w-8 h-8" />,
      gradient: "from-neon-blue to-neon-purple"
    },
    {
      id: 2,
      title: "Friendly Resume Generator",
      description: "Web app using Python, Flask, OpenAI API, HTML/CSS for ATS-friendly resume generation.",
      detailedDescription: "An intelligent resume generation platform that leverages OpenAI's API to create ATS-friendly resumes with AI-powered content suggestions. The web application analyzes job descriptions and user input to generate optimized resumes that pass through Applicant Tracking Systems effectively.",
      technologies: ["Python", "Flask", "OpenAI API", "HTML/CSS", "JavaScript", "ATS Optimization"],
      features: [
        "AI-powered content generation and suggestions",
        "ATS-friendly formatting and keyword optimization",
        "Dynamic resume templates and customization",
        "Job description analysis and matching",
        "Export to multiple formats (PDF, Word)"
      ],
      icon: <FileText className="w-8 h-8" />,
      gradient: "from-neon-purple to-neon-cyan"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold neon-text-blue mb-4">
            Projects Portfolio
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="tech-card group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-20`}>
                    {project.icon}
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-xl font-orbitron font-semibold text-foreground">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground font-montserrat mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <Badge 
                      key={index}
                      variant="outline"
                      className="border-primary text-primary bg-primary/10 font-montserrat text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="border-muted text-muted-foreground bg-muted/10 font-montserrat text-xs">
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-montserrat"
                    >
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl bg-card border-card-border">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-orbitron neon-text-blue">
                        {project.title}
                      </DialogTitle>
                    </DialogHeader>
                    
                    <div className="space-y-6">
                      <p className="text-muted-foreground font-montserrat leading-relaxed">
                        {project.detailedDescription}
                      </p>
                      
                      <div>
                        <h4 className="text-lg font-orbitron font-semibold mb-3 neon-text-purple">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                              <span className="text-muted-foreground font-montserrat">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-orbitron font-semibold mb-3 neon-text-cyan">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <Badge 
                              key={index}
                              variant="outline"
                              className="border-primary text-primary bg-primary/10 font-montserrat"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex space-x-4 pt-4">
                        <Button className="bg-primary hover:bg-primary-glow text-primary-foreground">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Button>
                        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;