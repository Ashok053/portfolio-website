import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Users, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Project Lead',
      organization: 'Code for Change Chitwan',
      type: 'Leadership Role',
      duration: '2024 december - Present',
      location: 'Chitwan, Nepal',
      description: 'Leading a student-driven tech community that spans across multiple colleges in Chitwan. Focused on fostering collaboration, knowledge sharing, and innovative project development among computer science students.',
      responsibilities: [
        'Organize workshops, hackathon, events and coding bootcamps for 100+ students across multiple colleges',
        'Mentor junior students in programming and project development',
        'Build partnerships with local tech companies and startups',
      ],
      achievements: [
        'Built a community of 500+ active learners across city',
        'Successfully organized 15+ technical workshops and events',
        'Established mentorship programs connecting seniors with juniors',
        'Work in collaboration with Bharatpur mahanagar and different INGOs to empower youth in technology'
      ],
      skills: ['Leadership', 'Community Building', 'Event Management','communication', 'Mentoring', 'Project Coordination'],
      icon: Users,
    }
  ];

  const additionalExperience = [
    {
      title: 'Microsoft student Ambassador: beta',
      description: 'Beta MSA, participated in multiple events, townhall call and recently organized and mentored an Azure fundamentals workshop with 50+ participants.',
      period: '2024 - Present',
      type: 'Leadership',
    },
    {
      title: 'nepal Cloud Professional volunteer',
      description: 'volunteer with Nepal Cloud Professionals, a community shaping the future of cloud computing in Nepal.',
      period: '2024 dec  - Present',
      type: 'Volunteer',
    },
    {
      title: 'School Teacher',
      description: 'work as a full time volunteer teacher for a year at school with marginalized chepang students majority: teaches math, computer and science and also look after school IT system',
      period: '2023 - 2024',
      type: 'Volunteer teacher',
    },
  ];

  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Experience & Leadership
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              My journey in leadership, community building, and technical development through 
              various roles and contributions in the tech community.
            </p>
          </div>

          {/* Main Experience */}
          <div className="mb-16">
            {experiences.map((exp, index) => (
              <Card key={index} className="card-shadow border-border/50 hover:border-primary/20">
                <CardHeader className="pb-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
                        <exp.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-foreground mb-1">
                          {exp.title}
                        </CardTitle>
                        <h3 className="text-lg font-semibold text-primary mb-2">
                          {exp.organization}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="self-start lg:self-center">
                      {exp.type}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key Responsibilities */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      Key Achievements
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="bg-accent/30 p-3 rounded-lg border border-border/30">
                          <p className="text-sm text-muted-foreground">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills Used */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Skills Applied</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="outline"
                          className="border-primary/20 text-primary hover:bg-primary/10"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Additional Experience & Contributions
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {additionalExperience.map((exp, index) => (
                <Card key={index} className="card-shadow border-border/50 hover:border-primary/20">
                  <CardContent className="p-6">
                    <div className="mb-3">
                      <h4 className="font-semibold text-foreground mb-1">{exp.title}</h4>
                      <Badge variant="secondary" className="text-xs">
                        {exp.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {exp.description}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {exp.period}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-primary/5 p-8 rounded-xl border border-primary/20">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Looking for Collaboration Opportunities
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always interested in collaborating on innovative AI/ML projects, leading technical teams, 
                or contributing to meaningful open-source initiatives. Let's build something amazing together!
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Team Leadership', 'AI/ML Projects', 'Open Source', 'Community Building', 'Mentoring'].map((area, index) => (
                  <Badge key={index} className="bg-primary/20 text-primary">
                    {area}
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

export default Experience;