import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Languages, Wrench, ExternalLink } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Wrench,
      title: "Technical Skills",
      skills: [
        "Power BI",
        "Tableau",
        "SQL",
        "Python",
        "Data Visualization",
        "CRM Systems",
        "Business Intelligence",
        "Automation",
        "Data Analysis",
        "ETL Processes",
        "Zendesk",
        "Excel Advanced",
      ],
    },
    {
      icon: Languages,
      title: "Languages",
      skills: ["English (Professional)", "Arabic (Native)"],
    },
  ];

  const certifications = [
    "Applications of Data Science",
    "Data Science Libraries in Python",
    "Data Visualization With Power BI",
    "Business English",
    "Programming Foundations: Fundamentals",
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Skills & Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={index} 
                  className="shadow-elegant hover:shadow-hover transition-all duration-300"
                >
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {category.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary"
                          className="text-sm py-1.5 px-3"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="shadow-elegant">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Certifications
                  </h3>
                </div>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="gap-2"
                >
                  <a 
                    href="https://www.linkedin.com/in/yehia-ali-ab534316b/details/certifications/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View All
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {certifications.map((cert, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                  >
                    <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
