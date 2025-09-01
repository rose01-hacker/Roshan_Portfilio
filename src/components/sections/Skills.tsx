import { Code, Database, Shield, Wrench, Globe, Server } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C", "C++", "Java", "Python", "JavaScript", "HTML", "CSS"],
      color: "primary"
    },
    {
      title: "Frontend Development", 
      icon: Globe,
      skills: ["React.js", "Tailwind CSS", "Bootstrap", "Figma", "Wix Studio"],
      color: "accent"
    },
    {
      title: "Backend & APIs",
      icon: Server,
      skills: ["Node.js", "Express.js", "REST APIs", "Spring Boot"],
      color: "secondary"
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      skills: ["Pentesting", "Threat Analysis", "OWASP Top 10", "Incident Response"],
      color: "primary"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "MongoDB"],
      color: "accent"
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["Git", "GitHub", "Docker", "Linux", "Windows", "n8n", "Opal"],
      color: "secondary"
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div 
                  key={category.title}
                  className={`glass glass-hover p-6 rounded-xl group transition-all duration-300 hover:scale-105 animate-slide-up stagger-${(index % 3) + 1}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg bg-${category.color}/10`}>
                      <IconComponent className={`w-6 h-6 text-${category.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 text-sm bg-muted rounded-full text-foreground-secondary hover:bg-card-hover transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
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

export default Skills;