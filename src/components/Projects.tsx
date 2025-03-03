
import AnimatedSection from "./AnimatedSection";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "COVID-19 Data Analysis",
      description:
        "Conducted exploratory data analysis on COVID-19 datasets to identify trends and patterns across different regions. Created interactive visualizations to effectively communicate findings and insights.",
      image: "https://images.unsplash.com/photo-1584118624012-df056829fbd0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Plotly"],
      demoLink: "#",
      githubLink: "#",
      isLarge: true,
    },
    {
      title: "House Price Prediction",
      description:
        "Developed a machine learning model to predict housing prices based on various features such as location, size, amenities, and market conditions, achieving 92% accuracy.",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "Scikit-learn", "Pandas", "Feature Engineering", "Regression Analysis"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Netflix Data SQL Analysis",
      description:
        "Analyzed Netflix content data using SQL to extract insights about content distribution, popular genres, and viewing patterns. Created Tableau dashboards for visualization of findings.",
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["SQL", "PostgreSQL", "Tableau", "Data Analysis"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Stock Market Prediction",
      description:
        "Implemented time series analysis and machine learning models to predict stock market movements. Built a dashboard for visualizing predictions and historical performance.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "LSTM", "Time Series", "Pandas", "Matplotlib"],
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
