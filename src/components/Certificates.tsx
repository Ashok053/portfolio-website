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
      title: 'Machine learning Specialization',
      issuer: 'DeepLearning.AI (Coursera)',
      date: '2024 feb',
      description: 'Comprehensive 3-course specialization covering supervised, unsupervised, advance learning algorithms recommenders, reinforcement learning  .',
      skills: ['Ai/ML', 'Scikit learn', 'Data ethics','Regression analysis', 'anamoly detection', 'CART', 'Decision Tree'],
      credentialId: '22K5GN5PT2WZ',
      category: 'AI/ML',
    },
    {
      title: 'Associate Data Scientist Course',
      issuer: 'DataCamp',
      date: '2024',
      description: '90 hour course covering intermediate python, data visualization, manipulation, EDA, analysis,time series, regression and stat models, stastics, predictive modeling',
      skills: ['EDA', 'Visualization', 'math', 'stat', 'ML models, feature engineering'],
      credentialId: 'd534469781333ca4bc5b6eb0eb53334a1c6ba9fa',
      category: 'data science',
    }
  ];

  const blogs = [
    {
      title: 'Understanding Transformer Architecture from basics',
      platform: 'Medium',
      date: '2025',
      views: '177',
      description: 'A deep dive into the attention mechanism and how transformers revolutionized natural language processing.',
      tags: ['NLP', 'Transformers', 'Deep Learning', 'AI'],
      url: '#',
    },
    {
      title: 'Building Your First FastAPI Application',
      platform: 'GitHub Discussions',
      date: '2025',
      views: '120',
      description: 'Step-by-step guide to creating a production-ready API with FastAPI, including best practices.',
      tags: ['FastAPI', 'Python', 'API', 'Tutorial'],
      url: '#',
    },
    {
      title: "Career Path in AI/ML: A Beginner's Guide",
      platform: 'Medium',
      date: '2025',
      views: '260',
      description: 'Comprehensive guide for students starting their journey in artificial intelligence and machine learning.',
      tags: ['Career', 'AI/ML', 'Guide', 'Beginner'],
      url: '#',
    }
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
              Continuous learning through certified courses and sharing own perspective of learning and knowledge through
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
        </div>
      </div>
    </section>
  );
};

export default Certificates;
