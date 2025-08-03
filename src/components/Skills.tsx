import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Code, 
  Brain, 
  Globe, 
  Database, 
  Wrench, 
  BookOpen 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 90, description: 'Primary language for AI/ML development' },
        { name: 'C++', level: 75, description: 'System programming and competitive coding' },
        { name: 'C', level: 70, description: 'Foundation programming and embedded systems' },
        { name: 'Java', level: 65, description: 'Object-oriented programming and web development' },
      ],
    },
    {
      icon: Brain,
      title: 'AI/ML & Data Science',
      skills: [
        { name: 'TensorFlow', level: 85, description: 'Deep learning model development' },
        { name: 'Scikit-learn', level: 80, description: 'Machine learning algorithms and preprocessing' },
        { name: 'NLP', level: 88, description: 'Natural Language Processing and text analysis' },
        { name: 'Computer Vision', level: 75, description: 'Image processing and CNN models' },
      ],
    },
    {
      icon: Globe,
      title: 'Web Development',
      skills: [
        { name: 'FastAPI', level: 75, description: 'Learning API development with Python' },
        { name: 'HTML/CSS', level: 70, description: 'Frontend development basics' },
        { name: 'JavaScript', level: 60, description: 'Web programming fundamentals' },
        { name: 'React', level: 55, description: 'Modern frontend framework' },
      ],
    },
    {
      icon: Database,
      title: 'Database Basics',
      skills: [
        { name: 'SQL', level: 65, description: 'Basic database queries and design' },
        { name: 'Database Concepts', level: 60, description: 'Understanding data relationships' },
        { name: 'Data Management', level: 55, description: 'Organizing and storing data' },
        { name: 'Data Analysis', level: 70, description: 'Working with datasets for ML' },
      ],
    },
    {
      icon: Wrench,
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 85, description: 'Version control and collaboration' },
        { name: 'Docker', level: 75, description: 'Containerization and deployment' },
        { name: 'VS Code', level: 85, description: 'Development environment and extensions' },
        { name: 'Jupyter', level: 90, description: 'Data analysis and prototyping' },
      ],
    },
    {
      icon: BookOpen,
      title: 'Soft Skills & Leadership',
      skills: [
        { name: 'Technical Writing', level: 85, description: 'Documentation and blog writing' },
        { name: 'Project Management', level: 80, description: 'Leading development teams' },
        { name: 'Research', level: 88, description: 'Academic research and paper analysis' },
        { name: 'Teaching', level: 75, description: 'Mentoring and knowledge sharing' },
      ],
    },
  ];

  const getSkillColor = (level: number) => {
    if (level >= 85) return 'bg-green-500';
    if (level >= 75) return 'bg-blue-500';
    if (level >= 65) return 'bg-yellow-500';
    return 'bg-gray-400';
  };

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical skills, programming languages, and tools 
              that I use to build innovative AI/ML solutions.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="card-shadow border-border/50 hover:border-primary/20 h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-foreground">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {skill.level}%
                        </Badge>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                      <p className="text-xs text-muted-foreground">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
              Additional Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'PyTorch', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'OpenCV',
                'NLTK', 'spaCy', 'Transformers', 'Hugging Face', 'Streamlit',
                'Plotly', 'Keras', 'XGBoost', 'MLflow', 'Apache Spark',
                'Redis', 'Elasticsearch', 'AWS', 'Google Cloud', 'Heroku'
              ].map((tech, index) => (
                <Badge 
                  key={index} 
                  variant="outline"
                  className="border-primary/20 text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Learning Journey */}
          <div className="mt-16 text-center">
            <div className="bg-accent/30 p-8 rounded-xl border border-border/50">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Continuous Learning Journey
              </h3>
              <p className="text-muted-foreground mb-6">
                I believe in staying updated with the latest developments in AI/ML. Currently exploring 
                advanced topics in Large Language Models, Computer Vision, and MLOps practices.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {['LLMs', 'Generative AI', 'MLOps', 'Kubernetes', 'Reinforcement Learning'].map((topic, index) => (
                  <Badge 
                    key={index} 
                    className="bg-primary/20 text-primary"
                  >
                    Currently Learning: {topic}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;