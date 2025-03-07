
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedSection from "./AnimatedSection";
import SkillBadge from "./SkillBadge";

type SkillCategory = "languages" | "libraries" | "tools" | "soft";
type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert";

interface Skill {
  name: string;
  level: SkillLevel;
  icon?: string;
}

const Skills = () => {
  const [category, setCategory] = useState<SkillCategory>("languages");
  
  const skills: Record<SkillCategory, Skill[]> = {
    languages: [
      { name: "Python", level: "advanced" },
      { name: "SQL", level: "advanced" },
      { name: "R", level: "intermediate" },
      { name: "HTML/CSS", level: "intermediate" },
      { name: "JavaScript", level: "beginner" },
    ],
    libraries: [
      { name: "NumPy", level: "advanced" },
      { name: "Pandas", level: "advanced" },
      { name: "Scikit-learn", level: "advanced" },
      { name: "TensorFlow", level: "intermediate" },
      { name: "PyTorch", level: "intermediate" },
      { name: "Matplotlib", level: "advanced" },
      { name: "Seaborn", level: "advanced" },
      { name: "Plotly", level: "intermediate" },
      { name: "NLTK", level: "intermediate" },
      { name: "Keras", level: "intermediate" },
    ],
    tools: [
      { name: "Jupyter Notebook", level: "advanced" },
      { name: "Git", level: "intermediate" },
      { name: "Docker", level: "beginner" },
      { name: "Tableau", level: "intermediate" },
      { name: "Power BI", level: "intermediate" },
      { name: "AWS", level: "beginner" },
      { name: "Azure", level: "beginner" },
      { name: "Google Cloud", level: "beginner" },
      { name: "PostgreSQL", level: "intermediate" },
      { name: "MongoDB", level: "beginner" },
    ],
    soft: [
      { name: "Problem Solving", level: "advanced" },
      { name: "Critical Thinking", level: "advanced" },
      { name: "Communication", level: "advanced" },
      { name: "Teamwork", level: "advanced" },
      { name: "Time Management", level: "advanced" },
      { name: "Adaptability", level: "advanced" },
      { name: "Leadership", level: "intermediate" },
      { name: "Creativity", level: "advanced" },
    ],
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="section-container">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            My technical and soft skills that I've developed through education, projects, and professional experiences.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="slide-up">
          <Tabs
            defaultValue="languages"
            value={category}
            onValueChange={(value) => setCategory(value as SkillCategory)}
            className="max-w-4xl mx-auto"
          >
            <TabsList className="grid grid-cols-2 sm:grid-cols-4 w-full mb-12">
              <TabsTrigger value="languages">Languages</TabsTrigger>
              <TabsTrigger value="libraries">Libraries</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
              <TabsTrigger value="soft">Soft Skills</TabsTrigger>
            </TabsList>

            {Object.keys(skills).map((cat) => (
              <TabsContent key={cat} value={cat} className="space-y-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {skills[cat as SkillCategory].map((skill) => (
                    <SkillBadge
                      key={skill.name}
                      skillName={skill.name}
                      level={skill.level}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills;
