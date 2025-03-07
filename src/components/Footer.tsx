
import { ArrowUp, Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50 bg-background/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-semibold">
              <span className="hero-text-gradient">Data</span>Scientist
            </a>
            <p className="mt-2 text-sm text-foreground/60">
              Transforming data into meaningful insights.
            </p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary/80 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary/80 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary/80 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:wayanas497@gmail.com"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary/80 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60">
            &copy; {currentYear} Data Scientist Portfolio. All rights reserved.
          </p>

          <a
            href="#home"
            className="mt-4 md:mt-0 w-10 h-10 rounded-full flex items-center justify-center bg-secondary/80 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
