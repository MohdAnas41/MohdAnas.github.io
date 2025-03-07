
import { cn } from "@/lib/utils";

type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert";

interface SkillBadgeProps {
  skillName: string;
  className?: string;
  level?: SkillLevel;
}

const SkillBadge = ({ skillName, className, level }: SkillBadgeProps) => {
  const levelColors = {
    beginner: "bg-secondary/80 text-secondary-foreground border border-border",
    intermediate: "bg-primary/20 text-primary-foreground/90 border border-primary/30",
    advanced: "bg-primary/40 text-primary-foreground/90 border border-primary/50",
    expert: "bg-primary text-primary-foreground border border-primary",
  };

  const levelColor = level ? levelColors[level] : "bg-secondary text-secondary-foreground";

  return (
    <div
      className={cn(
        "px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105",
        levelColor,
        className
      )}
    >
      {skillName}
    </div>
  );
};

export default SkillBadge;
