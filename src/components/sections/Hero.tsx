import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  const handleDownloadResume = () => {
    // Create a simple resume download - in a real app, you'd have an actual PDF file
    const resumeContent = `
ROSHAN KUMAR
Full-Stack Developer & Cybersecurity Professional
📧 roshan.gec2114@gmail.com | 📱 +91 90403 02735
📍 Bhubaneswar, India

SKILLS
• Programming: C, C++, Java, Python, JavaScript, HTML, CSS
• Frontend: React.js, Tailwind, Bootstrap, Figma, Wix Studio
• Backend: Node.js/Express, REST, Spring Boot
• Security: Pentesting, Threat Analysis, OWASP Top 10
• Databases: MySQL, MongoDB
• Tools: Git, GitHub, Docker, Linux, Windows

EDUCATION
B.Tech, Computer Science & Engineering
Gandhi Engineering College, Bhubaneswar (2022–Present)

EXPERIENCE
• Technology Analytics Intern - Debadrasan Consulting Pvt. Ltd.
• Cybersecurity Intern - Uptoskill
• Intern - APSCIP (Amroha Police)
• Multiple certifications in AI, Frontend Development, and Cybersecurity

PROJECTS
• ESG Dashboard - Sustainability dashboard with data visualization
• OTP Carbon Credit - Authentication for carbon-credit workflows
• Steganography Tool - Secure communication via image hiding
• College Management System - Platform for students & faculty
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Roshan_Kumar_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container-custom text-center">
        {/* Main Content */}
        <div className="animate-fade-in">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">
              Roshan Kumar
            </h1>
            <div className="text-xl md:text-2xl text-foreground-secondary mb-2">
              Full-Stack Developer & Cybersecurity Professional
            </div>
            <div className="text-lg text-foreground-muted font-mono">
              Building secure, scalable systems from concept to deployment
            </div>
          </div>

          {/* Quick Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-slide-up stagger-1">
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground-secondary">roshan.gec2114@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
              <Phone className="w-4 h-4 text-accent" />
              <span className="text-sm text-foreground-secondary">+91 90403 02735</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up stagger-2">
            <Button 
              onClick={handleDownloadResume}
              className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 glow-primary"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-card-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                asChild
              >
                <a href="https://github.com/rose01-hacker" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-card-border hover:border-accent hover:bg-accent/10 transition-all duration-300"
                asChild
              >
                <a href="https://www.linkedin.com/in/roshan-kumar-080622247" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-foreground-muted" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;