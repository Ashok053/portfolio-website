import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/ashok-profile.jpg'; // You can replace it if needed
import { useEffect, useState } from 'react';

const roles = [
  'AI/ML Enthusiast 🧠',
  'Learner 📘',
  'AI/ML Enthusiast 🧠',
  'Seasonal Photographer 📸',
  'AI/ML Enthusiast 🧠',
  'Speaker 🎤',
  'AI/ML Enthusiast 🧠',
  '20 | Undergrad Last Year 🎓',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 min-h-screen flex items-center justify-center bg-white dark:bg-[#0f172a] text-black dark:text-white transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 text-center md:text-left">

          {/* Profile Image */}
          <div className="w-64 h-80 overflow-hidden rounded-xl shadow-lg border-4 border-indigo-400">
            <img
              src={profileImage}
              alt="Ashok Lamsal"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text & Info */}
          <div className="flex flex-col justify-between max-w-xl h-full">
            <div>
              {/* Name */}
              <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-600 dark:text-indigo-300 mb-2">
                Ashok Lamsal
              </h1>

              {/* Animated Role */}
              <p className="text-lg md:text-xl font-medium mb-6 text-gray-700 dark:text-gray-300">
                {roles[roleIndex]}
              </p>

              {/* Social Links */}
              <div className="flex justify-center md:justify-start space-x-6 mb-6 text-indigo-500 dark:text-indigo-300">
                <a
                  href="https://github.com/ashoklamsal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/ashoklamsal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:ashoklamsal007@gmail.com"
                  className="hover:scale-110 transition-transform"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            {/* Buttons – Moved Below */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mt-6">
              <a
                href="https://drive.google.com/file/d/1g5IT5bhMKi0ik2-tQkMMLNZ1Uxj0KDVX/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-indigo-600 text-indigo-600 dark:text-white hover:bg-indigo-50 dark:hover:bg-white/10"
                onClick={scrollToAbout}
              >
                Learn More About Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
