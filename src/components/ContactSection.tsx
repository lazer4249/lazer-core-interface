import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github, MessageCircle, Send, MapPin } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactLinks = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "lazarmaddala@email.com",
      href: "mailto:lazarmaddala@email.com",
      color: "neon-blue"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/lazer-maddala-8baa33293",
      href: "https://linkedin.com/in/lazer-maddala-8baa33293",
      color: "neon-purple"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "Coming Soon",
      href: "#",
      color: "neon-cyan"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: "WhatsApp",
      value: "Let's Connect",
      href: "https://wa.me/1234567890?text=Hi%20Lazer,%20I'd%20like%20to%20discuss%20a%20project%20opportunity",
      color: "neon-blue"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold neon-text-cyan mb-4">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6" />
          <p className="text-xl font-montserrat text-muted-foreground max-w-3xl mx-auto">
            Ready to innovate together? Let's discuss how I can help bring your AI and development projects to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="tech-card">
            <CardHeader>
              <CardTitle className="text-2xl font-orbitron neon-text-blue">
                Send Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-montserrat font-medium">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-secondary border-card-border focus:border-primary"
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-montserrat font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-secondary border-card-border focus:border-primary"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-montserrat font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="bg-secondary border-card-border focus:border-primary resize-none"
                    placeholder="Tell me about your project or how we can work together..."
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-montserrat font-semibold glow-blue"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="tech-card">
              <CardHeader>
                <CardTitle className="text-2xl font-orbitron neon-text-purple">
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-montserrat text-muted-foreground mb-6 leading-relaxed">
                  I'm always excited to discuss new opportunities, collaborate on innovative projects, 
                  or simply connect with fellow developers and AI enthusiasts.
                </p>
                
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="w-5 h-5 mr-3 text-primary" />
                  <span className="font-montserrat">Andhra Pradesh, India</span>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4">
              {contactLinks.map((link, index) => (
                <Card key={index} className="tech-card hover:scale-105 transition-all duration-300">
                  <CardContent className="p-4">
                    <a 
                      href={link.href}
                      className="flex items-center space-x-4 group"
                      target={link.href.startsWith('http') ? '_blank' : '_self'}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    >
                      <div className={`p-3 rounded-lg bg-primary/20 text-primary group-hover:scale-110 transition-transform`}>
                        {link.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-orbitron font-semibold text-foreground">
                          {link.label}
                        </h4>
                        <p className="font-montserrat text-muted-foreground text-sm">
                          {link.value}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;