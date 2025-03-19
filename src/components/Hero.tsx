
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center relative pt-16 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container flex flex-col items-center text-center">
        <div className="inline-block mb-4 px-3 py-1 bg-primary/10 rounded-full animate-fade-in">
          <span className="text-primary text-sm font-medium">Welcome to my portfolio</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-down">
          Hey, I'm <span className="text-primary">Alex</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 animate-slide-down" style={{ animationDelay: '100ms' }}>
          Middle school student passionate about science, technology, and creativity.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-down" style={{ animationDelay: '200ms' }}>
          <a 
            href="#projects" 
            className={cn(
              "px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium",
              "shadow-md hover-scale"
            )}
          >
            See My Projects
          </a>
          <a 
            href="#about" 
            className={cn(
              "px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium",
              "shadow-sm hover-scale"
            )}
          >
            About Me
          </a>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#projects" className="p-2 rounded-full bg-secondary/80 text-secondary-foreground">
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
