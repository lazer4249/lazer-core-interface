import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dr. AI Research Supervisor",
      role: "AI Research Lead",
      company: "ALIET",
      content: "Exceptional dedication to AI research and development. Demonstrated strong analytical skills and innovative problem-solving approaches.",
      rating: 5,
      placeholder: true
    },
    {
      name: "ML Training Instructor",
      role: "Senior Data Scientist",
      company: "SkillDzire",
      content: "Outstanding performance in machine learning concepts and practical implementation. Shows great potential for advanced AI development.",
      rating: 5,
      placeholder: true
    },
    {
      name: "Technical Mentor",
      role: "Full-Stack Developer",
      company: "GeeksforGeeks",
      content: "Impressive grasp of generative AI technologies and modern development practices. Highly recommended for AI-focused roles.",
      rating: 5,
      placeholder: true
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold neon-text-blue mb-4">
            Testimonials
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6" />
          <p className="text-xl font-montserrat text-muted-foreground">
            What mentors and colleagues say about my work
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="tech-card hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <Quote className="w-8 h-8 text-primary opacity-50" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                
                <p className="font-montserrat text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-card-border pt-4">
                  <h4 className="font-orbitron font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="font-montserrat text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <p className="font-montserrat text-xs text-primary">
                    {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Note about placeholder testimonials */}
        <div className="text-center mt-12">
          <p className="font-montserrat text-sm text-muted-foreground italic">
            * Testimonials will be updated with actual feedback from mentors and collaborators
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;