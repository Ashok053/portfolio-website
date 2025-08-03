import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Award, 
  BookOpen, 
  ExternalLink, 
  PenTool, 
  Calendar,
  Users,
  TrendingUp
} from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: 'Deep Learning Specialization',
      issuer: 'DeepLearning.AI (Coursera)',
      date: '2023',
      description: 'Comprehensive 5-course specialization covering neural networks, CNNs, RNNs, and sequence models.',
      skills: ['Neural Networks', 'CNN', 'RNN', 'TensorFlow', 'Deep Learning'],
      credentialId: 'DL2023-ALS-001',
      category: 'AI/ML',
    },
    {
      title: 'FastAPI Complete Course',
      issuer: 'Udemy',
      date: '2023',
      description: 'Advanced FastAPI development including async programming, testing, and microservices architecture.',
      skills: ['FastAPI', 'Python', 'API Development', 'Microservices', 'Testing'],
      credentialId: 'FAPI2023-ALS-002',
      category: 'Web Development',
    },
    {
      title: 'Machine Learning A-Z',
      issuer: 'Udemy',
      date: '2022',
      description: 'Hands-on machine learning course covering regression, classification, clustering, and more.',
      skills: ['Machine Learning', 'Python', 'Scikit-learn', 'Data Analysis'],
      credentialId: 'ML2022-ALS-003',
      category: 'AI/ML',
    },
    {
      title: 'Natural Language Processing Specialization',
      issuer: 'DeepLearning.AI (Coursera)',
      date: '2023',
      description: 'Advanced NLP techniques including sentiment analysis, machine translation, and attention models.',
      skills: ['NLP', 'Transformers', 'BERT', 'Text Processing', 'Attention Mechanisms'],
      credentialId: 'NLP2023-ALS-004',
      category: 'AI/ML',
    },
    {
      title: 'Docker & Kubernetes Complete Guide',
      issuer: 'Udemy',
      date: '2023',
      description: 'Containerization and orchestration for modern application deployment.',
      skills: ['Docker', 'Kubernetes', 'DevOps', 'Container Orchestration'],
      credentialId: 'DK2023-ALS-005',
      category: 'DevOps',
    },
    {
      title: 'Git & GitHub Masterclass',
      issuer: 'Udemy',
      date: '2022',
      description: 'Advanced version control, collaboration, and open source contribution workflows.',
      skills: ['Git', 'GitHub', 'Version Control', 'Open Source'],
      credentialId: 'GIT2022-ALS-006',
      category: 'Development Tools',
    },
  ];

  const blogs = [
    {
      title: 'Understanding Transformer Architecture in NLP',
      platform: 'Medium',
      date: '2023',
      views: '1.2K',
      description: 'A deep dive into the attention mechanism and how transformers revolutionized natural language processing.',
      tags: ['NLP', 'Transformers', 'Deep Learning', 'AI'],
      url: '#',
    },
    {
      title: 'Building Your First FastAPI Application',
      platform: 'GitHub Discussions',
      date: '2023',
      views: '890',
      description: 'Step-by-step guide to creating a production-ready API with FastAPI, including best practices.',
      tags: ['FastAPI', 'Python', 'API', 'Tutorial'],
      url: '#',
    },
    {
      title: 'Career Path in AI/ML: A Beginner\'s Guide',
      platform: 'Medium',
      date: '2023',
      views: '2.1K',
      description: 'Comprehensive guide for students starting their journey in artificial intelligence and machine learning.',
      tags: ['Career', 'AI/ML', 'Guide', 'Beginner'],
      url: '#',
    },
    {
      title: 'Computer Vision for Agriculture: Disease Detection',
      platform: 'GitHub Discussions',
      date: '2023',
      views: '756',
      description: 'How deep learning can help farmers identify crop diseases using computer vision techniques.',
      tags: ['Computer Vision', 'Agriculture', 'CNN', 'Real-world AI'],
      url: '#',
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'AI/ML': 'bg-blue-100 text-blue-800 border-blue-200',
      'Web Development': 'bg-green-100 text-green-800 border-green-200',
      'DevOps': 'bg-purple-100 text-purple-800 border-purple-200',
      'Development Tools': 'bg-orange-100 text-orange-800 border-orange-200',
    };
    return colors[category] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <section id="certificates" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Certificates & Blog Posts
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Continuous learning through certified courses and sharing knowledge through 
              technical writing on various AI/ML topics.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Certificates Section */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Professional Certificates
                </h3>
              </div>

              <div className="space-y-6">
                {certificates.map((cert, index) => (
                  <Card key={index} className="card-shadow border-border/50 hover:border-primary/20">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-lg text-foreground mb-2">
                            {cert.title}
                          </CardTitle>
                          <p className="text-primary font-medium mb-1">{cert.issuer}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            {cert.date}
                          </div>
                        </div>
                        <Badge 
                          variant="outline" 
                          className={getCategoryColor(cert.category)}
                        >
                          {cert.category}
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm">
                        {cert.description}
                      </p>
                      
                      <div>
                        <h5 className="font-medium text-foreground mb-2">Skills Covered:</h5>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, skillIndex) => (
                            <Badge 
                              key={skillIndex} 
                              variant="secondary"
                              className="text-xs bg-primary/10 text-primary"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-primary/20 text-primary hover:bg-primary/10"
                        >
                          <ExternalLink className="mr-2 h-3 w-3" />
                          View Certificate
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Blog Posts Section */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                  <PenTool className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  Technical Writing
                </h3>
              </div>

              <div className="space-y-6">
                {blogs.map((blog, index) => (
                  <Card key={index} className="card-shadow border-border/50 hover:border-primary/20">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-lg text-foreground mb-2">
                            {blog.title}
                          </CardTitle>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                            <div className="flex items-center gap-1">
                              <BookOpen className="h-4 w-4" />
                              {blog.platform}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {blog.date}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <TrendingUp className="h-4 w-4" />
                          {blog.views} views
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm">
                        {blog.description}
                      </p>
                      
                      <div>
                        <div className="flex flex-wrap gap-2">
                          {blog.tags.map((tag, tagIndex) => (
                            <Badge 
                              key={tagIndex} 
                              variant="secondary"
                              className="text-xs bg-accent/50 text-accent-foreground"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-primary/20 text-primary hover:bg-primary/10"
                        >
                          <ExternalLink className="mr-2 h-3 w-3" />
                          Read Article
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Writing Stats & CTA */}
          <div className="mt-16">
            <div className="bg-accent/30 p-8 rounded-xl border border-border/50">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Actively Writing About AI/ML & Career Development
                </h3>
                <p className="text-muted-foreground">
                  I regularly publish articles on Medium and GitHub Discussions, sharing insights about 
                  machine learning, NLP, career tips, and practical AI applications.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-6">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Articles Published</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">5K+</div>
                  <div className="text-sm text-muted-foreground">Total Views</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">200+</div>
                  <div className="text-sm text-muted-foreground">Followers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Comments & Discussions</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    variant="default"
                    className="bg-primary hover:bg-primary/90"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Follow on Medium
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-primary/20 text-primary hover:bg-primary/10"
                  >
                    <Users className="mr-2 h-4 w-4" />
                    GitHub Discussions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;