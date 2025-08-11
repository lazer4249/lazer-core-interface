import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Brain, 
  Database, 
  Wrench, 
  Cloud, 
  GitBranch 
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "C", "SQL", "MATLAB"],
      color: "neon-blue"
    },
    {
      title: "AI/ML Frameworks",
      icon: <Brain className="w-6 h-6" />,
      skills: ["TensorFlow", "PyTorch", "Keras"],
      color: "neon-purple"
    },
    {
      title: "Data Science",
      icon: <Database className="w-6 h-6" />,
      skills: ["NumPy", "Pandas", "Scikit-learn", "OpenCV", "NLTK"],
      color: "neon-cyan"
    },
    {
      title: "Development Tools",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["VS Code", "Jupyter Notebook", "Google Colab"],
      color: "neon-blue"
    },
    {
      title: "Version Control",
      icon: <GitBranch className="w-6 h-6" />,
      skills: ["Git", "GitHub"],
      color: "neon-purple"
    },
    {
      title: "Cloud & Containers",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["Docker"],
      color: "neon-cyan"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold neon-text-cyan mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="tech-card p-6 hover:scale-105 transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-primary/20 text-primary mr-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-orbitron font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="outline"
                      className="border-primary text-primary bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-montserrat"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-orbitron font-semibold mb-8 neon-text-blue">
            Proficiency Levels
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { level: "Expert", skills: "Python, TensorFlow, PyTorch", percentage: 90 },
              { level: "Advanced", skills: "AI/ML, Data Science, Git", percentage: 85 },
              { level: "Intermediate", skills: "Cloud Technologies, Docker", percentage: 75 }
            ].map((item, index) => (
              <div key={index} className="space-y-4">
                <h4 className="text-lg font-orbitron font-medium text-foreground">
                  {item.level}
                </h4>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <p className="text-sm font-montserrat text-muted-foreground">
                  {item.skills}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;