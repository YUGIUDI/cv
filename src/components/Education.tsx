import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Education
          </h2>

          <Card className="shadow-elegant hover:shadow-hover transition-all duration-300">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    Tanta University
                  </h3>
                  <p className="text-lg text-primary mb-2">
                    Licentiate degree, English Language and Literature/Letters
                  </p>
                  <p className="text-muted-foreground">
                    2011 - 2015
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
