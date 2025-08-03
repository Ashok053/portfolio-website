import { Brain, Code, Database, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: 'AI/ML Expertise',
      description: 'Specialized in NLP, Transformers, and Deep Learning with hands-on experience in real-world applications.',
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Proficient in building end-to-end AI solutions using FastAPI, microservices, and modern web technologies.',
    },
    {
      icon: Database,
      title: 'Data Science',
      description: 'Strong foundation in data analysis, feature engineering, and machine learning model development.',
    },
    {
      icon: Globe,
      title: 'Problem Solver',
      description: 'Passionate about leveraging technology to solve real human problems and create meaningful impact.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A dedicated AI/ML developer from Nepal, currently pursuing BSc CSIT with a deep passion for 
              natural language processing, transformers, and deep learning technologies.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Passionate AI Researcher & Developer
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    As a final year BSc CSIT student from Nepal, I have developed a deep fascination 
                    with artificial intelligence and its potential to transform how we solve complex problems. 
                    My journey in AI/ML began with a curiosity about how machines can understand and 
                    process human language.
                  </p>
                  <p>
                    I specialize in <span className="text-primary font-medium">Natural Language Processing (NLP)</span>, 
                    <span className="text-primary font-medium"> Transformer architectures</span>, and 
                    <span className="text-primary font-medium"> Deep Learning</span>. My focus is on building 
                    practical AI applications that address real-world challenges, from career guidance systems 
                    to agricultural disease detection.
                  </p>
                  <p>
                    What drives me is the opportunity to create technology that genuinely helps people. 
                    Whether it's helping students find the right career path or assisting farmers in 
                    detecting crop diseases, I believe AI should be accessible and beneficial to everyone.
                  </p>
                </div>
              </div>

              {/* Personal Touch */}
              <div className="bg-accent/50 p-6 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Beyond Code</h4>
                <p className="text-muted-foreground">
                  When I'm not coding, I enjoy exploring the latest research papers, contributing to 
                  open-source projects, and sharing my knowledge through blog posts and community 
                  discussions. I'm always excited to collaborate on innovative AI projects.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="card-shadow border-border/50 hover:border-primary/20">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                      <highlight.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-muted-foreground">Years Coding</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">AI Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1</div>
              <div className="text-muted-foreground">Community Lead</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;