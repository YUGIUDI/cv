import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "01021058376",
      href: "tel:01021058376",
    },
    {
      icon: Mail,
      label: "Email",
      value: "yabdus94@gmail.com",
      href: "mailto:yabdus94@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/yehia-ali-ab534316b",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Cairo, Egypt",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6 text-foreground">
            Get In Touch
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Let's work together to turn your data into a competitive advantage!
          </p>

          <Card className="shadow-elegant">
            <CardContent className="pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div 
                      className="flex items-start gap-4 p-4 rounded-lg bg-background hover:bg-muted/50 transition-colors"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {info.label}
                        </h3>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </div>
                  );

                  return info.href ? (
                    <a
                      key={index}
                      href={info.href}
                      target={info.label === "LinkedIn" ? "_blank" : undefined}
                      rel={info.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>

              <div className="mt-8 text-center">
                <Button
                  size="lg"
                  className="bg-gradient-hero hover:opacity-90 transition-opacity"
                  asChild
                >
                  <a href="mailto:yabdus94@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
