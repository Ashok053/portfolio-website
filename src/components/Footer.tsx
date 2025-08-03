import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background px-4 py-6 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm">
        <p className="text-center md:text-left mb-2 md:mb-0">
          © {currentYear} Ashok Lamsal. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/ashoklamsal" target="_blank" rel="noopener noreferrer">
            <Github className="hover:text-primary-glow" size={20} />
          </a>
          <a href="https://linkedin.com/in/ashoklamsal" target="_blank" rel="noopener noreferrer">
            <Linkedin className="hover:text-primary-glow" size={20} />
          </a>
          <a href="mailto:ashoklamsal007@gmail.com">
            <Mail className="hover:text-primary-glow" size={20} />
          </a>
        </div>
      </div>

      {/* Scroll to Top */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className="fixed bottom-6 right-6 bg-primary hover:bg-primary/90 text-white rounded-full z-50 shadow"
      >
        <ArrowUp size={18} />
      </Button>
    </footer>
  );
};

export default Footer;
