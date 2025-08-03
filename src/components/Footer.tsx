import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background relative">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* About Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary-glow">
                Ashok Lamsal
              </h3>
              <p className="text-background/80 leading-relaxed">
                AI/ML Developer & Researcher from Nepal, passionate about building 
                innovative solutions that solve real-world problems through the power 
                of artificial intelligence and machine learning.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/ashoklamsal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-primary-glow transition-colors duration-300"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/ashoklamsal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-primary-glow transition-colors duration-300"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:ashok@example.com"
                  className="text-background/70 hover:text-primary-glow transition-colors duration-300"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-background">
                Quick Links
              </h4>
              <nav className="space-y-2">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-background/80 hover:text-primary-glow transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-background">
                Get in Touch
              </h4>
              <div className="space-y-3 text-background/80">
                <div>
                  <p className="font-medium text-background">Email</p>
                  <a 
                    href="mailto:ashok@example.com"
                    className="hover:text-primary-glow transition-colors duration-300"
                  >
                    ashok@example.com
                  </a>
                </div>
                <div>
                  <p className="font-medium text-background">Location</p>
                  <p>Chitwan, Nepal</p>
                </div>
                <div>
                  <p className="font-medium text-background">Open for</p>
                  <p>Collaborations, Freelance Projects, Full-time Opportunities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-background/20 my-12"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-background/80 text-center md:text-left">
              <p>
                © {currentYear} Ashok Lamsal. Made with{' '}
                <Heart className="inline h-4 w-4 text-red-400 mx-1" />
                and lots of coffee.
              </p>
              <p className="text-sm mt-1">
                Powered by React, TypeScript, and Tailwind CSS
              </p>
            </div>
            
            <div className="text-background/60 text-sm text-center md:text-right">
              <p>Building the future with AI/ML</p>
              <p>One project at a time</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className="fixed bottom-8 right-8 bg-primary hover:bg-primary/90 text-white shadow-lg z-40 rounded-full"
      >
        <ArrowUp size={20} />
      </Button>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
      </div>
    </footer>
  );
};

export default Footer;