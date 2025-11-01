import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Database, TrendingUp, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: BarChart3,
      title: "8+ Years Experience",
      description: "Expert in data analysis and CRM management",
    },
    {
      icon: Database,
      title: "Advanced Analytics",
      description: "Power BI, Tableau, SQL, and Python",
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Proven track record in driving engagement",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Enhancing satisfaction and retention",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              About Me
            </h2>
            <div className="h-1 w-20 mx-auto bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>
          
          <Card className="mb-12 shadow-elegant hover:shadow-hover transition-all duration-300 border-t-4 border-t-primary">
            <CardContent className="pt-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a skilled Data Analyst and CRM Manager with over 8 years of experience in 
                leveraging customer data to design strategies that drive engagement, retention, 
                and business growth. My expertise lies in optimizing CRM systems, conducting 
                advanced data analysis, and creating interactive dashboards using tools like 
                Power BI, Tableau, and SQL.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                In my career, I've successfully implemented CRM strategies that enhanced customer 
                satisfaction, streamlined workflows, and delivered actionable insights through 
                detailed reporting and data visualization. Whether it's developing customer 
                segmentation models or automating CRM workflows, I combine technical expertise 
                with strategic thinking to deliver tailored solutions that meet business objectives.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index} 
                  className="hover-lift border-l-4 border-l-primary/50 hover:border-l-primary group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors group-hover:scale-110 transform duration-300">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1 text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
