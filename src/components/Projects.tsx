
import AnimatedSection from "./AnimatedSection";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Customer Segmentation Analysis",
      description:
        "Developed a machine learning model to segment customers based on purchasing behavior, demographics, and engagement metrics, enabling targeted marketing strategies.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "Scikit-learn", "K-means Clustering", "Pandas", "Tableau"],
      demoLink: "#",
      githubLink: "#",
      isLarge: true,
    },
    {
      title: "Predictive Sales Forecasting",
      description:
        "Created a time series forecasting model to predict monthly sales with 92% accuracy, helping the business optimize inventory and staffing decisions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "ARIMA", "Time Series", "Pandas", "Matplotlib"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Sentiment Analysis Dashboard",
      description:
        "Built an interactive dashboard to analyze customer sentiment from product reviews, identifying key areas for improvement and competitive advantages.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["NLP", "BERT", "Python", "Plotly", "Flask"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Fraud Detection System",
      description:
        "Implemented a real-time fraud detection system using ensemble learning techniques, reducing fraudulent transactions by 78% while minimizing false positives.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "XGBoost", "Random Forest", "SQL", "AWS"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Recommendation Engine",
      description:
        "Designed and deployed a product recommendation engine that increased average order value by 23% through personalized suggestions based on user behavior.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Collaborative Filtering", "Python", "TensorFlow", "MongoDB"],
      demoLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="section-container">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Explore my data science projects showcasing machine learning models,
            data visualizations, and analytical solutions.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 100}>
              <ProjectCard {...project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
