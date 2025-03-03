
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Blog = () => {
  const blogPosts = [
    {
      title: "How I Built My First Machine Learning Model",
      excerpt: "A step-by-step walkthrough of my journey building a predictive model for house prices, including data preprocessing, feature engineering, and model selection.",
      date: "May 15, 2023",
      category: "Machine Learning",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      url: "#"
    },
    {
      title: "5 Common Mistakes in Data Analysis",
      excerpt: "Learn about the pitfalls that many beginners encounter when analyzing data, and how to avoid them to ensure accurate and meaningful results.",
      date: "June 22, 2023",
      category: "Data Analysis",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      url: "#"
    },
    {
      title: "Visualizing COVID-19 Data: Insights and Techniques",
      excerpt: "An exploration of various visualization techniques to effectively communicate trends and patterns in COVID-19 data.",
      date: "July 10, 2023",
      category: "Data Visualization",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      url: "#"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-secondary/30">
      <div className="section-container">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Blog & Insights</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Sharing my data science journey, insights, and learnings through articles and case studies.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <AnimatedSection
              key={post.title}
              delay={index * 100}
              className="bg-background rounded-xl overflow-hidden border border-border hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-xs text-foreground/60 mb-2">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">{post.category}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-foreground/70 mb-4 line-clamp-3">{post.excerpt}</p>
                <a
                  href={post.url}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  Read More <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-secondary rounded-lg font-medium hover:bg-secondary/80 transition-colors"
          >
            View All Posts <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
