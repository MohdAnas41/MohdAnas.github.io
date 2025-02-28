
import { FileText, Mail, Linkedin, Github } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="section-container">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            A passionate learner in data science, exploring statistical analysis,
            machine learning, and data visualization.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slide-in-right">
            <div className="aspect-square rounded-2xl bg-foreground/5 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
              <img
                src="/lovable-uploads/22f42de6-b1df-44e2-b4f9-1f28c5a4147c.png"
                alt="Mohd Anas - Data Scientist"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection className="flex flex-col space-y-6" animation="slide-up">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Who I Am</h3>
              <p className="text-foreground/80">
                I'm Mohd Anas, a data scientist with a background in statistics and computer science.
                I specialize in transforming complex data into actionable insights that drive
                business decisions. My passion lies in developing machine learning models
                that solve real-world problems.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3">My Approach</h3>
              <p className="text-foreground/80">
                I approach data science with creativity and analytical precision.
                Every dataset tells a story, and I work diligently to uncover meaningful
                patterns and insights that can lead to innovation and improvement.
              </p>
            </div>

            <div className="pt-4">
              <div className="flex flex-wrap gap-3">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg transition-all hover:bg-primary/90"
                >
                  <Mail size={18} />
                  <span>Contact Me</span>
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg transition-all hover:bg-secondary/80"
                >
                  <FileText size={18} />
                  <span>Resume</span>
                </a>
                <a 
                  href="https://github.com/mohd-anas" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg transition-all hover:bg-secondary/80"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://linkedin.com/in/mohd-anas" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg transition-all hover:bg-secondary/80"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
