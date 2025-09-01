const About = () => {
  return (
    <section id="about" className="section-padding bg-background-secondary">
      <div className="container-custom">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="glass glass-hover p-8 md:p-12 rounded-2xl">
              <div className="text-lg md:text-xl leading-relaxed text-foreground-secondary space-y-6">
                <p>
                  I'm a <strong className="text-primary">versatile developer</strong> who blends full-stack engineering 
                  with cybersecurity expertise. I specialize in building practical, secure systems that bridge 
                  the gap between robust backends, intuitive frontends, and threat-aware design.
                </p>
                
                <p>
                  My approach is <strong className="text-accent">comprehensive and pragmatic</strong> — I'm comfortable 
                  taking projects from initial concept through prototype development to final deployment. 
                  Whether it's architecting scalable web applications, implementing security protocols, 
                  or conducting penetration testing, I focus on creating solutions that are both functional and secure.
                </p>
                
                <p>
                  Currently pursuing my <strong className="text-secondary">B.Tech in Computer Science</strong> at 
                  Gandhi Engineering College in Bhubaneswar, I combine academic knowledge with hands-on 
                  experience from multiple internships across technology analytics, cybersecurity, 
                  and software development.
                </p>
                
                <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-card-border">
                  <div className="flex items-center gap-2 text-foreground-muted">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Problem Solving</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground-muted">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    <span>Collaboration</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground-muted">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    <span>Analytical Thinking</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground-muted">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Adaptability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;