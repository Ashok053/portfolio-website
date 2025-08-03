import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Send, 
  MessageSquare,
  Phone,
  ExternalLink
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ashok@example.com',
      href: 'mailto:ashok@example.com',
      description: 'Send me an email'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/ashoklamsal',
      href: 'https://github.com/ashoklamsal',
      description: 'Check out my projects'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/ashoklamsal',
      href: 'https://linkedin.com/in/ashoklamsal',
      description: 'Connect professionally'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chitwan, Nepal',
      href: null,
      description: 'Based in Nepal'
    }
  ];

  const collaborationAreas = [
    {
      title: 'AI/ML Projects',
      description: 'Collaborative research and development in artificial intelligence and machine learning',
      icon: '🤖'
    },
    {
      title: 'Open Source',
      description: 'Contributing to open-source projects and building tools for the community',
      icon: '🌐'
    },
    {
      title: 'Mentoring',
      description: 'Helping students and junior developers in their AI/ML learning journey',
      icon: '📚'
    },
    {
      title: 'Speaking',
      description: 'Tech talks, workshops, and knowledge sharing sessions',
      icon: '🎤'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm always excited to discuss AI/ML projects, collaboration opportunities, or 
              simply chat about the latest developments in artificial intelligence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground mb-8">
                  Whether you're interested in collaborating on an AI project, need mentoring, 
                  or just want to discuss the future of machine learning, I'd love to hear from you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <Card key={index} className="card-shadow border-border/50 hover:border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                          <contact.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{contact.label}</h4>
                          <p className="text-sm text-muted-foreground mb-1">{contact.description}</p>
                          {contact.href ? (
                            <a 
                              href={contact.href}
                              target={contact.href.startsWith('http') ? '_blank' : undefined}
                              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="text-primary hover:underline flex items-center gap-1"
                            >
                              {contact.value}
                              {contact.href.startsWith('http') && (
                                <ExternalLink className="h-3 w-3" />
                              )}
                            </a>
                          ) : (
                            <p className="text-primary">{contact.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Collaboration Areas */}
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  Collaboration Opportunities
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {collaborationAreas.map((area, index) => (
                    <div key={index} className="bg-background p-4 rounded-lg border border-border/50">
                      <div className="text-2xl mb-2">{area.icon}</div>
                      <h5 className="font-medium text-foreground mb-1">{area.title}</h5>
                      <p className="text-xs text-muted-foreground">{area.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="card-shadow border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="border-border/50 focus:border-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          className="border-border/50 focus:border-primary"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project, idea, or just say hello!"
                        rows={6}
                        required
                        className="border-border/50 focus:border-primary resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90"
                      size="lg"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Connect */}
          <div className="mt-16 text-center">
            <div className="bg-background p-8 rounded-xl border border-border/50">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Prefer a Quick Connect?
              </h3>
              <p className="text-muted-foreground mb-6">
                Follow me on social media for regular updates on my projects, blog posts, 
                and insights into the AI/ML world.
              </p>
              <div className="flex justify-center gap-4">
                <Button 
                  variant="outline"
                  className="border-primary/20 text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href="https://github.com/ashoklamsal" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  className="border-primary/20 text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href="https://linkedin.com/in/ashoklamsal" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button 
                  variant="default"
                  className="bg-primary hover:bg-primary/90"
                  asChild
                >
                  <a href="mailto:ashok@example.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Me
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;