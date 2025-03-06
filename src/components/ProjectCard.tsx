
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  githubLink?: string;
  isLarge?: boolean;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  demoLink,
  githubLink,
  isLarge = false,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl card-hover border border-border bg-background/50 backdrop-blur-sm transition-all duration-500",
        isLarge ? "md:col-span-2" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-all duration-700",
            isHovered ? "scale-110 brightness-110" : "scale-100"
          )}
          loading="lazy"
        />
      </div>
      
      <div className="p-6">
        <h3 
          className="text-xl font-semibold mb-2 transition-all duration-300 group-hover:text-primary"
          style={{
            transform: isHovered ? "translateY(-3px)" : "translateY(0)",
          }}
        >
          {title}
        </h3>
        <p 
          className="text-foreground/70 mb-4 line-clamp-3 transition-all duration-300"
          style={{ 
            transform: isHovered ? "translateY(-2px)" : "translateY(0)",
          }}
        >
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-secondary/80 text-secondary-foreground backdrop-blur-sm transition-all duration-300"
              style={{ 
                transitionDelay: `${index * 50}ms`,
                transform: isHovered ? "translateY(0)" : "translateY(5px)",
                opacity: isHovered ? 1 : 0.8,
                animation: isHovered ? `pulse 2s infinite ease-in-out` : "none"
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div 
          className="flex space-x-4 transition-all duration-500"
          style={{ 
            transform: isHovered ? "translateY(0)" : "translateY(5px)",
            opacity: isHovered ? 1 : 0.8,
          }}
        >
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-all duration-300 hover:translate-x-1"
            >
              <ExternalLink size={16} className="mr-1" /> Demo
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-foreground/70 hover:text-foreground transition-all duration-300 hover:translate-x-1"
            >
              <Github size={16} className="mr-1" /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
