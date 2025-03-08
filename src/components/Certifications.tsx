
import { Award, ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Certifications = () => {
  const certifications = [
    {
      title: "Machine Learning in Python",
      issuer: "365 Data Science",
      date: "2024",
      description: "Comprehensive course covering machine learning algorithms, data preprocessing, model evaluation, and practical implementation in Python with real-world projects.",
      url: "https://365datascience.com/courses/machine-learning-in-python/"
    },
    {
      title: "BCG Data Science Job Simulation",
      issuer: "BCG",
      date: "2025",
      description: "Virtual experience program focusing on real-world data science applications in consulting, including customer segmentation, predictive modeling, and business recommendations.",
      url: "https://www.theforage.com/virtual-internships/prototype/Tcz8gTtprzAS4xSoK/Data-Science-Virtual-Experience-Program"
    },
    {
      title: "Applied Data Science Lab",
      issuer: "WorldQuant University",
      date: "Ongoing",
      description: "Hands-on program covering advanced data science concepts, statistical modeling, and real-world project implementation.",
      url: "https://www.wqu.edu/programs/applied-ds-lab/"
    },
    {
      title: "Kaggle Competitions",
      issuer: "Kaggle",
      date: "Ongoing",
      description: "Active participation in data science competitions, developing practical skills in real-world problem-solving scenarios.",
      url: "https://www.kaggle.com/"
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="section-container">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Learning</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            My commitment to continuous learning and professional development in data science.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <AnimatedSection
              key={cert.title}
              delay={index * 100}
              className="p-6 bg-background rounded-xl border border-border hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Award size={20} className="text-primary" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{cert.title}</h3>
                    {cert.url && (
                      <a 
                        href={cert.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-foreground/60 mb-2">
                    {cert.issuer} • {cert.date}
                  </p>
                  <p className="text-foreground/80">
                    {cert.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
