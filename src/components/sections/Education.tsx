import { GraduationCap, Calendar, MapPin, Book } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech, Computer Science & Engineering",
      institution: "Gandhi Engineering College",
      duration: "2022 – Present",
      location: "Bhubaneswar, India",
      description: "Pursuing Bachelor of Technology with focus on software development, algorithms, data structures, and cybersecurity fundamentals.",
      highlights: ["Software Engineering", "Data Structures & Algorithms", "Database Systems", "Computer Networks", "Cybersecurity"]
    },
    {
      degree: "Intermediate (10+2)",
      institution: "Karim City College",
      duration: "Completed",
      location: "Jamshedpur, India",
      description: "Completed higher secondary education with strong foundation in mathematics and computer science.",
      highlights: ["Mathematics", "Physics", "Computer Science", "English"]
    }
  ];

  return (
    <section id="education" className="section-padding bg-background-secondary">
      <div className="container-custom">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Education</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <div 
                key={index}
                className={`glass glass-hover p-8 rounded-xl group hover:scale-105 transition-all duration-300 animate-slide-up stagger-${index + 1}`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon and main info */}
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <GraduationCap className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {edu.degree}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-lg text-foreground-secondary mb-4">
                      <Book className="w-5 h-5" />
                      <span className="font-medium">{edu.institution}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-foreground-muted">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-foreground-secondary mb-6 leading-relaxed">
                      {edu.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                        Key Subjects & Areas
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight) => (
                          <span 
                            key={highlight}
                            className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full border border-accent/20 hover:bg-accent/20 transition-colors"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;