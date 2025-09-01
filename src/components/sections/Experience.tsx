import { Building2, Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Technology Analytics Intern",
      company: "Debadrasan Consulting Pvt. Ltd.",
      duration: "3 months",
      type: "On-site",
      location: "Bhubaneswar, India",
      description: "Worked on technology analytics projects, data analysis, and business intelligence solutions.",
      skills: ["Data Analysis", "Business Intelligence", "Technology Consulting"]
    },
    {
      role: "Cybersecurity Intern",
      company: "Uptoskill",
      duration: "3 months",
      type: "Virtual",
      location: "Remote",
      description: "Focused on cybersecurity practices, threat analysis, and security assessment methodologies.",
      skills: ["Threat Analysis", "Security Assessment", "Penetration Testing"]
    },
    {
      role: "Intern",
      company: "APSCIP (Amroha Police)",
      duration: "12 days",
      type: "On-site",
      location: "Amroha, India",
      description: "Gained hands-on experience in law enforcement technology and cybercrime investigation procedures.",
      skills: ["Cybercrime Investigation", "Digital Forensics", "Law Enforcement Tech"]
    },
    {
      role: "Cybersecurity Intern",
      company: "Edunet Foundation",
      duration: "1 month",
      type: "Virtual",
      location: "Remote",
      description: "Developed understanding of cybersecurity frameworks and incident response protocols.",
      skills: ["Incident Response", "Security Frameworks", "Risk Assessment"]
    },
    {
      role: "Java Programming Intern",
      company: "Valutofcode",
      duration: "1 month",
      type: "Virtual",
      location: "Remote",
      description: "Enhanced Java programming skills and worked on software development projects.",
      skills: ["Java Development", "Software Engineering", "Object-Oriented Programming"]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary transform md:-translate-x-0.5"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center animate-slide-up stagger-${(index % 3) + 1}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-2 md:-translate-x-2 z-10 shadow-lg"></div>
                  
                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="glass glass-hover p-6 rounded-xl group hover:scale-105 transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Briefcase className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                              {exp.role}
                            </h3>
                            <div className="flex items-center gap-2 text-foreground-secondary">
                              <Building2 className="w-4 h-4" />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-foreground-muted">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <span className="px-2 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium">
                          {exp.type}
                        </span>
                      </div>
                      
                      <p className="text-foreground-secondary mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span 
                            key={skill}
                            className="px-3 py-1 text-xs bg-muted rounded-full text-foreground-muted hover:bg-card-hover transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
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