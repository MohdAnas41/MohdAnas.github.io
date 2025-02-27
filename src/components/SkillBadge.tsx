
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  children: ReactNode;
  className?: string;
  level?: "beginner" | "intermediate" | "advanced" | "expert";
}

const SkillBadge = ({ children, className, level }: SkillBadgeProps) => {
  const levelColors = {
    beginner: "bg-secondary/80 text-secondary-foreground",
    intermediate: "bg-primary/20 text-primary-foreground",
    advanced: "bg-primary/40 text-primary-foreground",
    expert: "bg-primary text-primary-foreground",
  };

  const levelColor = level ? levelColors[level] : "bg-secondary text-secondary-foreground";

  return (
    <div
      className={cn(
        "skill-badge flex items-center justify-center hover:scale-105",
        levelColor,
        className
      )}
    >
      {children}
    </div>
  );
};

export default SkillBadge;
