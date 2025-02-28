import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedSection from "./AnimatedSection";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
      </div>

      <div className="section-container z-10 flex flex-col items-center justify-center text-center">
        <AnimatedSection delay={100}>
          <span className="inline-block mb-4 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Aspiring Data Scientist & Analyst
          </span>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block mb-2">Mohd Anas</span>
            Turning <span className="hero-text-gradient">Data</span> into
            <br />
            Meaningful <span className="hero-text-gradient">Insights</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={500}>
          <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-8">
            I specialize in analyzing real-world datasets, creating insightful 
            visualizations, and exploring machine learning techniques to extract 
            valuable insights.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={700}>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href="#projects"
              className={cn(
                "px-6 py-3 rounded-lg font-medium transition-all duration-200",
                "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className={cn(
                "px-6 py-3 rounded-lg font-medium transition-all duration-200",
                "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              Get In Touch
            </a>
          </div>
        </AnimatedSection>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown
              size={24}
              className="text-foreground/50 hover:text-foreground/80 transition-colors duration-200"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
