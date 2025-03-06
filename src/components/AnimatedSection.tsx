
import React, { useEffect, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  animation?: "fade-in" | "slide-up" | "scale-in" | "slide-in-right";
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const AnimatedSection = ({
  children,
  className,
  id,
  delay = 0,
  animation = "fade-in",
  onMouseEnter,
  onMouseLeave,
}: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              section.classList.add(`animate-${animation}`);
              section.style.opacity = "1";
            }, delay);
            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [animation, delay]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={cn("opacity-0", className)}
      style={{ animationFillMode: "forwards" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
