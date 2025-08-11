import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Conversational AI: Building Intelligent Voice Assistants",
      excerpt: "Exploring the latest advances in speech recognition, natural language processing, and conversational AI design patterns.",
      category: "Artificial Intelligence",
      readTime: "8 min read",
      date: "Coming Soon",
      tags: ["AI", "NLP", "Voice Recognition"],
      placeholder: true
    },
    {
      id: 2,
      title: "Machine Learning in Resume Optimization: ATS-Friendly Solutions",
      excerpt: "How AI can revolutionize resume creation by analyzing job requirements and optimizing content for Applicant Tracking Systems.",
      category: "Machine Learning",
      readTime: "6 min read",
      date: "Coming Soon",
      tags: ["ML", "NLP", "Career Tech"],
      placeholder: true
    },
    {
      id: 3,
      title: "From Student to AI Engineer: My Journey in Computer Science",
      excerpt: "Sharing insights from my academic journey, internship experiences, and practical projects in AI and machine learning.",
      category: "Career Development",
      readTime: "10 min read",
      date: "Coming Soon",
      tags: ["Career", "AI", "Personal Story"],
      placeholder: true
    }
  ];

  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold neon-text-purple mb-4">
            Blog & Articles
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6" />
          <p className="text-xl font-montserrat text-muted-foreground max-w-3xl mx-auto">
            Sharing insights on AI, machine learning, and development experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="tech-card group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-primary text-primary bg-primary/10 font-montserrat">
                    {post.category}
                  </Badge>
                  <BookOpen className="w-5 h-5 text-muted-foreground" />
                </div>
                <CardTitle className="text-xl font-orbitron font-semibold text-foreground group-hover:neon-text-blue transition-all duration-300">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground font-montserrat mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <Badge 
                      key={index}
                      variant="outline"
                      className="border-accent text-accent bg-accent/10 font-montserrat text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="font-montserrat">{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="font-montserrat">{post.readTime}</span>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-montserrat group-hover:glow-blue transition-all duration-300"
                  disabled={post.placeholder}
                >
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <div className="text-center mt-12">
          <Card className="tech-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <BookOpen className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-orbitron font-semibold neon-text-cyan mb-4">
                Content Coming Soon
              </h3>
              <p className="font-montserrat text-muted-foreground mb-6 leading-relaxed">
                I'm working on creating valuable content about AI, machine learning, and development. 
                Subscribe to get notified when new articles are published!
              </p>
              <Button className="bg-primary hover:bg-primary-glow text-primary-foreground font-montserrat glow-blue">
                Notify Me
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;