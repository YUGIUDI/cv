import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Download, ChevronDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
      
      {/* Floating circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-glow/20 rounded-full blur-3xl floating" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl floating" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary-light/20 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo with enhanced styling */}
          <div className="mb-8 flex justify-center animate-scale-in">
            <div className="relative group">
              <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse-glow" />
              <img 
                src={profilePhoto} 
                alt="Yehia Ali" 
                className="relative w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-white shadow-2xl object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 drop-shadow-lg">
              Yehia Ali
            </h1>
            <div className="mb-6 space-y-2">
              <p className="text-xl md:text-2xl text-primary-foreground/95 font-semibold">
                Data Analyst | CRM Manager | Power BI Expert
              </p>
              <div className="h-1 w-32 mx-auto bg-white/50 rounded-full" />
            </div>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto leading-relaxed px-4">
              Transforming complex data into actionable insights that drive business growth and customer engagement. 
              8+ years of expertise in analytics, CRM optimization, and strategic decision-making.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-lg hover-lift"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </Button>
            <Button
              onClick={() => scrollToSection("experience")}
              variant="outline"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-lg hover-lift"
            >
              View Experience
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-lg hover-lift"
            >
              <a href="/Yehia-Ali-CV.pdf" download="Yehia-Ali-CV.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </div>

          <div className="flex gap-6 justify-center text-primary-foreground/90 animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
            <a 
              href="tel:01021058376" 
              className="flex items-center gap-2 hover:text-primary-foreground transition-all hover:scale-110 transform"
            >
              <div className="p-2 glass-effect rounded-lg">
                <Phone className="h-5 w-5" />
              </div>
              <span className="hidden sm:inline font-medium">01021058376</span>
            </a>
            <a 
              href="mailto:yabdus94@gmail.com" 
              className="flex items-center gap-2 hover:text-primary-foreground transition-all hover:scale-110 transform"
            >
              <div className="p-2 glass-effect rounded-lg">
                <Mail className="h-5 w-5" />
              </div>
              <span className="hidden sm:inline font-medium">yabdus94@gmail.com</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/yehia-ali-ab534316b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary-foreground transition-all hover:scale-110 transform"
            >
              <div className="p-2 glass-effect rounded-lg">
                <Linkedin className="h-5 w-5" />
              </div>
              <span className="hidden sm:inline font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer group"
        aria-label="Scroll down"
      >
        <div className="w-8 h-12 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2 group-hover:border-primary-foreground transition-colors">
          <ChevronDown className="h-5 w-5 text-primary-foreground/50 group-hover:text-primary-foreground transition-colors" />
        </div>
      </button>
    </section>
  );
};

export default Hero;
