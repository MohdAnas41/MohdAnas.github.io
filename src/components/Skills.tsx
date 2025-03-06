
import { BarChart3, Brain, Database, Globe, LineChart, Terminal, BookOpen, Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SkillBadge from "./SkillBadge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Terminal size={20} className="text-primary" />,
      skills: [
        { name: "Python", level: "expert" },
        { name: "SQL", level: "expert" },
      ],
    },
    {
      title: "Machine Learning",
      icon: <Brain size={20} className="text-primary" />,
      skills: [
        { name: "Scikit-learn", level: "expert" },
        { name: "TensorFlow", level: "advanced" },
        { name: "PyTorch", level: "intermediate" },
        { name: "XGBoost", level: "advanced" },
        { name: "Deep Learning", level: "intermediate" },
      ],
    },
    {
      title: "Data Visualization",
      icon: <BarChart3 size={20} className="text-primary" />,
      skills: [
        { name: "Matplotlib", level: "expert" },
        { name: "Seaborn", level: "expert" },
        { name: "Plotly", level: "expert" },
        { name: "PowerBI", level: "expert" },
      ],
    },
    {
      title: "Databases",
      icon: <Database size={20} className="text-primary" />,
      skills: [
        { name: "PostgreSQL", level: "expert" },
        { name: "MySQL", level: "expert" },
        { name: "MSSQL Server", level: "expert" },
        { name: "MongoDB", level: "expert" },
      ],
    },
    {
      title: "Statistical Analysis",
      icon: <LineChart size={20} className="text-primary" />,
      skills: [
        { name: "Regression Analysis", level: "expert" },
        { name: "Hypothesis Testing", level: "expert" },
        { name: "Time Series Analysis", level: "expert" },
        { name: "A/B Testing", level: "expert" },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <Globe size={20} className="text-primary" />,
      skills: [
        { name: "Jupyter", level: "expert" },
        { name: "Git", level: "expert" },
        { name: "Docker", level: "advanced" },
        { name: "AWS", level: "intermediate" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            My technical skills and areas of expertise in data science and
            machine learning.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <AnimatedSection
              key={category.title}
              delay={index * 100}
              className="bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="flex items-center justify-between p-2 hover:bg-muted/50 rounded-lg transition-colors"
                  >
                    <span className="font-medium">{skill.name}</span>
                    <div className="flex space-x-1">
                      {renderSkillLevel(skill.level)}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

const renderSkillLevel = (level: "beginner" | "intermediate" | "advanced" | "expert") => {
  const levels = {
    beginner: 1,
    intermediate: 2,
    advanced: 3,
    expert: 4,
  };

  const stars = [];
  for (let i = 0; i < levels[level]; i++) {
    stars.push(
      <Star key={i} size={16} className="fill-primary text-primary" />
    );
  }
  
  // Add empty stars for clearer visualization
  for (let i = levels[level]; i < 4; i++) {
    stars.push(
      <Star key={i + 4} size={16} className="text-primary/30" />
    );
  }

  return stars;
};

export default Skills;
