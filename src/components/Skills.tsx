
import { BarChart3, Brain, Database, Globe, LineChart, Terminal } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SkillBadge from "./SkillBadge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Terminal size={20} className="text-primary" />,
      skills: [
        { name: "Python", level: "expert" },
        { name: "R", level: "advanced" },
        { name: "SQL", level: "advanced" },
        { name: "JavaScript", level: "intermediate" },
        { name: "Java", level: "beginner" },
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
        { name: "Seaborn", level: "advanced" },
        { name: "Plotly", level: "advanced" },
        { name: "Tableau", level: "intermediate" },
        { name: "D3.js", level: "beginner" },
      ],
    },
    {
      title: "Data Engineering",
      icon: <Database size={20} className="text-primary" />,
      skills: [
        { name: "Pandas", level: "expert" },
        { name: "NumPy", level: "expert" },
        { name: "PySpark", level: "intermediate" },
        { name: "PostgreSQL", level: "advanced" },
        { name: "MongoDB", level: "intermediate" },
      ],
    },
    {
      title: "Statistical Analysis",
      icon: <LineChart size={20} className="text-primary" />,
      skills: [
        { name: "Hypothesis Testing", level: "advanced" },
        { name: "Regression Analysis", level: "expert" },
        { name: "Bayesian Statistics", level: "intermediate" },
        { name: "Time Series Analysis", level: "advanced" },
        { name: "A/B Testing", level: "advanced" },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <Globe size={20} className="text-primary" />,
      skills: [
        { name: "Jupyter", level: "expert" },
        { name: "Git", level: "advanced" },
        { name: "Docker", level: "intermediate" },
        { name: "AWS", level: "intermediate" },
        { name: "Kubernetes", level: "beginner" },
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
              className="bg-background rounded-xl p-6 shadow-sm border border-border"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill.name} level={skill.level as any}>
                    {skill.name}
                  </SkillBadge>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
