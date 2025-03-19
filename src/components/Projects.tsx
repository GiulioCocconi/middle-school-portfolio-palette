
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowRight, ExternalLink } from 'lucide-react';

// Placeholder images
const projectsData = [
  {
    id: 1,
    title: "Science Fair Project",
    description: "Solar-powered water filtration system that won 2nd place in the regional science fair.",
    image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=3087&auto=format&fit=crop",
    category: "Science",
    link: "#"
  },
  {
    id: 2,
    title: "Art Portfolio",
    description: "Collection of my best art pieces created in art class throughout the year.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=3071&auto=format&fit=crop",
    category: "Art",
    link: "#"
  },
  {
    id: 3,
    title: "Book Report Website",
    description: "Interactive website about my favorite book for English class.",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=3087&auto=format&fit=crop",
    category: "English",
    link: "#"
  },
  {
    id: 4,
    title: "Math Competition",
    description: "My preparation and participation in the Math Olympiad competition.",
    image: "https://images.unsplash.com/photo-1635372722656-389f87a941db?q=80&w=3087&auto=format&fit=crop",
    category: "Math",
    link: "#"
  },
  {
    id: 5,
    title: "History Documentary",
    description: "Short documentary video about local history for social studies class.",
    image: "https://images.unsplash.com/photo-1461360228754-6e81c478b882?q=80&w=3024&auto=format&fit=crop",
    category: "History",
    link: "#"
  },
  {
    id: 6,
    title: "Coding Club Project",
    description: "Simple game I created during after-school coding club sessions.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=3090&auto=format&fit=crop",
    category: "Coding",
    link: "#"
  }
];

const categories = ["All", "Science", "Art", "English", "Math", "History", "Coding"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-secondary/40">
      <div className="section-container">
        <span className="inline-block mb-3 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium">
          My Work
        </span>
        <h2 className="section-heading">Projects & Achievements</h2>
        <p className="section-subheading">
          Explore some of my favorite school projects and achievements from my academic journey.
        </p>
        
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: (project.id % 3) * 0.1
              }}
              className={cn(
                "glass-card overflow-hidden",
                "transition-all duration-300",
                hoveredProject === project.id ? "scale-[1.02]" : ""
              )}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                  style={{
                    transform: hoveredProject === project.id ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <a 
                  href={project.link}
                  className="inline-flex items-center text-primary font-medium"
                >
                  View Project <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          >
            Have a project idea? <ExternalLink size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
