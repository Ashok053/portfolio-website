import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import careerRImage from '@/assets/careerr-project.jpg';
import potatoClassifierImage from '@/assets/potato-classifier-project.jpg';
import neuralSummarizerImage from '@/assets/neural-summarizer-project.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'CareerR – AI Career recommendation system',
      description: `CareerR is our Final Year Project — a demo MVP of an AI-powered career recommendation platform. It allows users to upload their resume or provide manual input. The system then analyzes their skills, identifies gaps, and recommends personalized career paths and relevant Coursera courses.

    The project is built using FastAPI and trained with publicly available and synthetic datasets . It integrates resume parsing, job-role matching, skill gap analysis, and course recommendations into a single modular system.`,
      image: careerRImage,
      technologies: [
        'Python', 'FastAPI', 'NLP', 'TF-IDF', 'spaCy', 'PyMuPDF',
        'scikit-learn', 'Pandas', 'Docker', 'fuzzywuzzy'
      ],
      githubUrl: 'https://github.com/Ashok053/career_Recomendation_system',
      liveUrl: 'https://career-recommendation-platform.vercel.app/',
      featured: true
    },
    {
      title: 'Potato Disease Classifier',
      description: 'A deep learning-based image classification system that identifies and classifies potato plant diseases with high accuracy. Built using Convolutional Neural Networks (CNN) and trained on the comprehensive PlantVillage dataset. This tool helps farmers quickly identify plant health issues for better crop management.',
      image: potatoClassifierImage,
      technologies: ['TensorFlow', 'CNN', 'Python', 'Computer Vision', 'PlantVillage Dataset'],
      githubUrl: 'https://github.com/Ashok053/potato-disease-classifier',
      liveUrl: '#',
      featured: false,
    },
    {
      title: 'Neural Summarizer',
      description: 'A sophisticated text summarization tool powered by Transformer architecture that generates both extractive and abstractive summaries. The system is trained on pre-trained language models and fine-tuned for optimal performance across various document types and domains.',
      image: neuralSummarizerImage,
      technologies: ['Transformers', 'NLP', 'PyTorch', 'BERT', 'Text Processing'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A showcase of my AI/ML projects that demonstrate practical applications of machine learning, 
              natural language processing, and computer vision technologies.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`card-shadow overflow-hidden ${
                  project.featured 
                    ? 'border-primary/20 bg-gradient-to-br from-accent/30 to-background' 
                    : 'border-border/50'
                }`}
              >
                <div className={`grid ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-0`}>
                  {/* Image Section */}
                  <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    {project.featured && (
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                        Featured Project
                      </Badge>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-8 flex flex-col justify-center">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl text-foreground mb-3">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="p-0 space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex} 
                              variant="secondary"
                              className="bg-primary/10 text-primary border-primary/20"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4 pt-4">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="default"
                            size="sm"
                            className="bg-primary hover:bg-primary/90"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                          </Button>
                        </a>

                        {project.liveUrl !== '#' && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-primary/20 text-primary hover:bg-primary/10"
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Live Demo
                            </Button>
                          </a>
                        )}
                      </div>

                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Want to see more of my work? Check out my GitHub for additional projects and contributions.
            </p>
            <a
              href="https://github.com/Ashok053"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="default"
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                <Github className="mr-2 h-5 w-5" />
                View All Projects on GitHub
              </Button>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;