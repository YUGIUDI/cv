import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "almentor",
      role: "CRM and Analytics Manager",
      period: "April 2024 - Present (1 year 7 months)",
      duration: "Current Position",
      location: "Cairo, Egypt",
      description: "Leading CRM strategy and analytics initiatives to maximize customer lifetime value and drive business growth through data-driven insights.",
      responsibilities: [
        "Develop and implement comprehensive CRM strategies to enhance customer engagement, retention, and loyalty across all touchpoints",
        "Manage and optimize the entire CRM ecosystem, ensuring data accuracy, integrity, and seamless integration with business systems",
        "Conduct advanced customer data analysis to identify trends, patterns, and actionable insights that inform strategic business decisions",
        "Create and maintain sophisticated customer segmentation models to enable highly targeted and personalized marketing campaigns",
        "Collaborate cross-functionally with marketing, sales, and product teams to design and execute data-driven customer engagement initiatives",
        "Design and implement A/B testing frameworks and experimentation methodologies to continuously optimize CRM strategies and improve KPIs",
        "Monitor and report on key CRM metrics including CLV, churn rate, engagement scores, and conversion rates with actionable recommendations",
      ],
      achievements: [
        "Increased customer retention by implementing predictive churn models",
        "Improved campaign ROI through advanced segmentation and personalization",
        "Streamlined CRM workflows resulting in enhanced operational efficiency",
      ],
    },
    {
      company: "almentor",
      role: "Growth Specialist",
      period: "June 2023 - May 2024 (1 year)",
      duration: "1 Year",
      location: "Cairo, Egypt",
      description: "Drove customer acquisition and retention strategies through data analysis, campaign optimization, and cross-functional collaboration.",
      responsibilities: [
        "Developed and executed growth strategies focused on customer acquisition, activation, and retention across multiple channels",
        "Collaborated closely with marketing and sales teams to design, test, and execute personalized, multi-channel marketing campaigns",
        "Implemented comprehensive A/B testing and experimentation frameworks to optimize conversion funnels and customer journeys",
        "Monitored and analyzed key growth metrics including CAC, LTV, activation rates, and engagement scores",
        "Created detailed performance dashboards and reports providing actionable recommendations to improve campaign effectiveness",
        "Ensured full compliance with data protection regulations (GDPR, CCPA) and established best practices for data governance",
        "Conducted cohort analysis and customer behavior studies to identify growth opportunities and optimize user experience",
      ],
      achievements: [
        "Optimized conversion rates through systematic experimentation",
        "Enhanced customer engagement through targeted campaign strategies",
      ],
    },
    {
      company: "almentor",
      role: "Projects Business Applications and Reporting Supervisor",
      period: "September 2022 - June 2023 (10 months)",
      duration: "10 Months",
      location: "Egypt",
      description: "Supervised business applications, reporting infrastructure, and data management operations to support organizational decision-making.",
      responsibilities: [
        "Managed comprehensive master data lifecycle including creation, validation, updates, and deletion across multiple systems",
        "Provided rigorous quality assurance of imported data, collaborating with QA analysts to maintain data integrity standards",
        "Developed advanced reports and analytical insights to support strategic business decisions and operational improvements",
        "Designed and managed the complete reporting environment including data sources, ETL processes, and visualization dashboards",
        "Led assessment, testing, and implementation of new software solutions and system upgrades",
        "Generated complex reports from single and multiple integrated systems, ensuring data accuracy and timeliness",
        "Troubleshot and optimized the reporting database environment, resolving performance issues and implementing best practices",
        "Evaluated and documented changes to source production systems, ensuring seamless integration and minimal disruption",
        "Built and uploaded high-quality educational video content for various projects on the almentor.net platform",
      ],
      achievements: [
        "Streamlined reporting processes reducing report generation time significantly",
        "Improved data quality through enhanced validation procedures",
      ],
    },
    {
      company: "almentor",
      role: "Senior Business Applications & Reporting Specialist",
      period: "January 2022 - September 2022 (9 months)",
      duration: "9 Months",
      location: "Cairo, Egypt",
      description: "Managed educational content delivery and provided technical expertise in business applications and data analysis.",
      responsibilities: [
        "Managed end-to-end content development and delivery of high-quality educational videos for diverse projects on almentor.net platform",
        "Collaborated extensively with project managers, product teams, and technology teams to customize and configure platform components",
        "Developed deep subject matter expertise in specific platform components to provide expert consultation and support to clients",
        "Interfaced directly with clients to understand requirements and deliver tailored solutions that exceeded expectations",
        "Worked closely with technology teams to create detailed specifications and develop innovative features for business applications",
        "Provided third-level technical support to users and clients, including comprehensive training sessions and documentation",
        "Conducted in-depth user data analysis and generated detailed learner reports to drive educational outcomes and client satisfaction",
        "Ensured excellence in quality, timeliness, and delivery of all client project requirements, maintaining high satisfaction scores",
        "Identified and managed project risks, formulating recommended courses of action and communicating proactively with stakeholders",
      ],
      achievements: [
        "Maintained 95%+ client satisfaction through exceptional support and delivery",
        "Enhanced platform functionality through innovative feature development",
      ],
    },
    {
      company: "almentor",
      role: "Digital Support",
      period: "September 2020 - January 2022 (1 year 5 months)",
      duration: "1 Year 5 Months",
      location: "Cairo, Egypt",
      description: "Delivered exceptional customer support while implementing automation solutions and quality systems to enhance service excellence.",
      responsibilities: [
        "Delivered world-class customer service through effective troubleshooting, technical support, and proactive problem resolution",
        "Managed comprehensive day-to-day support operations across multiple communication channels (email, chat, phone, social media)",
        "Designed and implemented sophisticated Zendesk automation workflows to streamline operations and improve response times",
        "Created and monitored comprehensive KPIs for customer support including CSAT, NPS, response times, and resolution rates",
        "Conducted detailed customer support analysis to identify trends, pain points, and opportunities for service improvement",
        "Developed and implemented a comprehensive quality assurance system to maintain consistency and excellence in service delivery",
        "Created and continuously updated Help Center content, FAQs, and knowledge base articles to empower customer self-service",
        "Gathered, analyzed, and presented customer feedback on weekly and monthly basis to inform product and service improvements",
        "Ensured timely follow-up on all pending cases and escalated complex issues to appropriate departments for swift resolution",
      ],
      achievements: [
        "Reduced average response time by 40% through automation implementation",
        "Achieved 90%+ customer satisfaction ratings consistently",
      ],
    },
    {
      company: "Majorel",
      role: "Senior Subject Matter Expert",
      period: "October 2018 - September 2020 (2 years)",
      duration: "2 Years",
      location: "Cairo Governorate, Egypt",
      description: "Led technical expertise and training initiatives for Uber Voice Account, driving quality improvements and knowledge excellence.",
      responsibilities: [
        "Assisted team leaders with complex operational tasks, escalations, and strategic planning for the Uber Voice Account",
        "Developed and managed comprehensive action plans to address performance gaps and improve operational metrics",
        "Conducted detailed analysis of key performance metrics including FCR (First Call Resolution), AHT (Average Handle Time), and CSAT (Customer Satisfaction)",
        "Handled high-complexity escalations and challenging customer calls requiring expert knowledge and exceptional service skills",
        "Provided real-time support and coaching to both new and experienced Customer Service Representatives",
        "Created and delivered revamped training programs specifically designed to address knowledge gaps and improve floor performance",
        "Prepared and facilitated targeted briefings to address challenging topics and enhance quality assurance scores across the team",
        "Performed comprehensive knowledge base analysis in a highly dynamic environment, tracking updates and ensuring accuracy",
        "Managed omnichannel knowledge resources and reference materials across multiple platforms and touchpoints",
        "Identified and communicated resource gaps, inconsistencies, and their potential impact to client stakeholders",
      ],
      achievements: [
        "Improved team QA scores by 25% through targeted training initiatives",
        "Enhanced FCR rates through knowledge base optimization",
      ],
    },
    {
      company: "Majorel",
      role: "Subject Matter Expert",
      period: "May 2017 - October 2018 (1 year 6 months)",
      duration: "1 Year 6 Months",
      location: "Uber Backoffice Account",
      description: "Provided expert support and training for Uber Backoffice operations in a fast-paced, high-pressure environment.",
      responsibilities: [
        "Delivered expert-level support and solutions in a high-pressure back office environment with strict SLA requirements",
        "Supported both nesting (new hire training) and production CSRs during critical launch phases and ongoing operations",
        "Developed and implemented comprehensive training plans to address knowledge gaps and improve team performance",
        "Prepared and delivered targeted briefings and coaching sessions to improve quality scores and reduce error rates",
        "Conducted deep knowledge base analysis to track frequent updates and ensure CSRs had access to current information",
        "Managed and maintained omnichannel knowledge resources ensuring consistency across all customer touchpoints",
        "Identified documentation issues, resource confusions, and knowledge gaps, communicating impact to client stakeholders",
      ],
      achievements: [
        "Successfully supported multiple launch phases with minimal escalations",
        "Maintained high team performance through effective training and support",
      ],
    },
    {
      company: "Oryx leather Co.",
      role: "Manager of Sales",
      period: "August 2012 - August 2015 (3 years 1 month)",
      duration: "3 Years 1 Month",
      location: "Egypt",
      description: "Managed retail operations, staff performance, and client relationships to drive sales growth and customer satisfaction.",
      responsibilities: [
        "Managed complete branch operations including staff scheduling, performance management, and daily operational excellence",
        "Prepared and presented comprehensive daily, weekly, and monthly sales reports with analysis and actionable insights",
        "Organized and executed promotional events, product launches, and customer engagement activities",
        "Developed and maintained strong client relationships through personalized service and proactive communication",
        "Set and tracked sales targets, implementing strategies to achieve and exceed revenue goals",
        "Trained and coached sales staff on product knowledge, customer service excellence, and sales techniques",
      ],
      achievements: [
        "Consistently exceeded monthly sales targets",
        "Built loyal customer base through exceptional service and relationship management",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Professional Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              8+ years of driving business growth through data analytics, CRM optimization, and strategic customer engagement
            </p>
          </div>

          <div className="relative">
            {/* Enhanced timeline */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary/20 hidden md:block rounded-full" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="relative animate-slide-in-left"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-5 top-8 w-7 h-7 bg-primary rounded-full border-4 border-background hidden md:block shadow-lg z-10">
                    <div className="absolute inset-0 bg-primary rounded-full animate-pulse-glow" />
                  </div>
                  
                  <Card className="ml-0 md:ml-20 shadow-elegant hover:shadow-hover transition-all duration-500 hover-lift group overflow-hidden">
                    {/* Shimmer effect on hover */}
                    <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <CardHeader className="relative">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-2xl md:text-3xl mb-3 group-hover:text-primary transition-colors">
                            {exp.role}
                          </CardTitle>
                          <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                            <Briefcase className="h-5 w-5" />
                            <span className="text-lg">{exp.company}</span>
                          </div>
                          <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm mb-3">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              {exp.period}
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {exp.duration}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground italic text-sm md:text-base">
                            {exp.description}
                          </p>
                        </div>
                        <Badge className="w-fit bg-primary/10 text-primary hover:bg-primary/20">
                          {exp.location}
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="relative">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                            <TrendingUp className="h-4 w-4 text-primary" />
                            Key Responsibilities
                          </h4>
                          <ul className="space-y-2.5">
                            {exp.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-muted-foreground text-sm md:text-base">
                                <span className="text-primary mt-1.5 font-bold">•</span>
                                <span className="leading-relaxed">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {exp.achievements && exp.achievements.length > 0 && (
                          <div className="pt-4 border-t border-border">
                            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                              <div className="h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                                <div className="h-2 w-2 rounded-full bg-primary" />
                              </div>
                              Notable Achievements
                            </h4>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-muted-foreground text-sm md:text-base">
                                  <span className="text-accent mt-1">✓</span>
                                  <span className="leading-relaxed font-medium">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
