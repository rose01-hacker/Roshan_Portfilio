import { Button } from "@/components/ui/button";
import { ExternalLink, Github, BarChart3, Shield, Eye, GraduationCap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "ESG Dashboard",
      description: "Comprehensive sustainability dashboard featuring advanced data visualization and seamless API integration for tracking environmental, social, and governance metrics.",
      tech: ["React.js", "Node.js", "Data Visualization", "REST APIs"],
      icon: BarChart3,
      gradient: "from-primary to-accent"
    },
    {
      title: "OTP Carbon Credit",
      description: "Secure OTP-based authentication system specifically designed for carbon credit workflows, ensuring transaction integrity in environmental finance.",
      tech: ["Authentication", "Security", "Node.js", "MySQL"],
      icon: Shield,
      gradient: "from-accent to-secondary"
    },
    {
      title: "Steganography Tool",
      description: "Advanced tool for hiding and extracting secret data within images, enabling secure communication channels through digital steganography techniques.",
      tech: ["Python", "Image Processing", "Cryptography", "Security"],
      icon: Eye,
      gradient: "from-secondary to-primary"
    },
    {
      title: "College Management System",
      description: "Comprehensive platform designed for students, faculty, and administrators to streamline academic processes and institutional management. Currently in development.",
      tech: ["React.js", "Spring Boot", "MySQL", "REST APIs"],
      icon: GraduationCap,
      gradient: "from-primary to-secondary",
      status: "WIP"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-background-secondary">
      <div className="container-custom">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div 
                  key={project.title}
                  className={`glass glass-hover p-8 rounded-xl group transition-all duration-500 hover:scale-105 animate-slide-up stagger-${(index % 2) + 1}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-20`}>
                      <IconComponent className="w-8 h-8 text-foreground" />
                    </div>
                    {project.status && (
                      <span className="px-3 py-1 text-xs bg-warning/20 text-warning rounded-full font-medium">
                        {project.status}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-foreground-secondary mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-sm bg-muted rounded-full text-foreground-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-card-border hover:border-primary hover:bg-primary/10"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-card-border hover:border-accent hover:bg-accent/10"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;