import { Award, Calendar, Building, CheckCircle } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "AI Agent Developer (Specialization)",
      issuer: "Coursera",
      date: "August 2025",
      status: "Current",
      description: "Comprehensive specialization in AI agent development, machine learning, and artificial intelligence applications.",
      category: "AI & Machine Learning"
    },
    {
      title: "Frontend Development",
      issuer: "AspireNEXT (Infosys Foundation)",
      date: "2024",
      status: "Completed",
      description: "Advanced frontend development skills including modern frameworks, responsive design, and user experience principles.",
      category: "Web Development"
    },
    {
      title: "Professional Edge Career Essentials",
      issuer: "NIIT Foundation",
      date: "June – July 2025",
      status: "Current",
      description: "Professional development program focusing on career skills, leadership, and workplace effectiveness.",
      category: "Professional Development"
    },
    {
      title: "Introduction to Generative AI Studio",
      issuer: "Simplilearn",
      date: "July 2025",
      status: "Current",
      description: "Hands-on experience with generative AI tools, prompt engineering, and AI-powered content creation.",
      category: "AI & Machine Learning"
    },
    {
      title: "Ethical Hacking",
      issuer: "Scholiverse",
      date: "July 2024",
      status: "Completed",
      description: "Comprehensive ethical hacking course covering penetration testing, vulnerability assessment, and security analysis.",
      category: "Cybersecurity"
    },
    {
      title: "Cyber Awareness & AI Basics",
      issuer: "NIIT Foundation",
      date: "July 2025",
      status: "Current",
      description: "Foundation course in cybersecurity awareness and artificial intelligence fundamentals.",
      category: "Cybersecurity & AI"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI & Machine Learning":
        return "primary";
      case "Cybersecurity":
        return "accent";
      case "Web Development":
        return "secondary";
      default:
        return "primary";
    }
  };

  const getStatusColor = (status: string) => {
    return status === "Completed" ? "success" : "warning";
  };

  return (
    <section id="certifications" className="section-padding">
      <div className="container-custom">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Certifications</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className={`glass glass-hover p-6 rounded-xl group hover:scale-105 transition-all duration-300 animate-slide-up stagger-${(index % 3) + 1}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 bg-${getCategoryColor(cert.category)}/10 rounded-lg`}>
                    <Award className={`w-6 h-6 text-${getCategoryColor(cert.category)}`} />
                  </div>
                  <div className="flex items-center gap-2">
                    {cert.status === "Completed" ? (
                      <CheckCircle className="w-5 h-5 text-success" />
                    ) : (
                      <div className="w-2 h-2 bg-warning rounded-full animate-pulse"></div>
                    )}
                    <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                      cert.status === "Completed" 
                        ? "bg-success/20 text-success" 
                        : "bg-warning/20 text-warning"
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-foreground-muted">
                  <div className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    <span className="font-medium">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>
                
                <p className="text-foreground-secondary mb-4 leading-relaxed text-sm">
                  {cert.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 text-xs bg-${getCategoryColor(cert.category)}/10 text-${getCategoryColor(cert.category)} rounded-full font-medium border border-${getCategoryColor(cert.category)}/20`}>
                    {cert.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Summary Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass p-6 text-center rounded-xl">
              <div className="text-3xl font-bold gradient-text mb-2">6+</div>
              <div className="text-foreground-secondary">Total Certifications</div>
            </div>
            <div className="glass p-6 text-center rounded-xl">
              <div className="text-3xl font-bold gradient-text mb-2">4</div>
              <div className="text-foreground-secondary">Specialized Areas</div>
            </div>
            <div className="glass p-6 text-center rounded-xl">
              <div className="text-3xl font-bold gradient-text mb-2">2024-2025</div>
              <div className="text-foreground-secondary">Active Learning Period</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;