import { Brain, Code, Database, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const highlights = [
  {
    icon: Brain,
    title: 'AI/ML Expertise',
    description:
      'learning NLP, transformer architecture and deep learning domain',
  },
  {
    icon: Code,
    title: 'AI Development',
    description:
      'Building intelligent systems using Python and ML frameworks.',
  },
  {
    icon: Database,
    title: 'Data Science',
    description:
      'Strong foundation in data analysis, feature engineering, and machine learning model development.',
  },
  {
    icon: Globe,
    title: 'Problem Solver',
    description:
      'Applying tech to solve real-world problems that matter.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Final-year CSIT student from Nepal passionate about accessible AI. I love building solutions with deep learning and NLP that have a real-world impact.
          </p>
        </div>

        {/* Highlights + Description */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 self-start">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/30 transition duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Short Narrative */}
          <div className="flex flex-col justify-start space-y-6 text-muted-foreground text-base">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                Why AI?
              </h3>
              <p>
                It started with curiosity about how instagram recommend similar reels and google assitant understand language. Now I explore advance models, learn with purposes and aim to solve everyday problems using ML.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                Beyond Code
              </h3>
              <p>
                I enjoy teaching, building with others, and contributing to tech that helps people — whether it’s students, farmers, or anyone in between.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">3+</div>
            <div className="text-muted-foreground">Years Exploring Tech</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">4+</div>
            <div className="text-muted-foreground">Projects</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-muted-foreground">Certifications</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">1</div>
            <div className="text-muted-foreground">Community Led with Mission</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
