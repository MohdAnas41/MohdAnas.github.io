
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";

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
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl card-hover border border-border bg-background/50 backdrop-blur-sm",
        isLarge ? "md:col-span-2" : ""
      )}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 transition-colors duration-200 group-hover:text-primary">
          {title}
        </h3>
        <p className="text-foreground/70 mb-4 line-clamp-3">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-secondary/80 text-secondary-foreground backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink size={16} className="mr-1" /> Demo
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
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
