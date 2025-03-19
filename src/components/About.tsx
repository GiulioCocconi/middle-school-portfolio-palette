
import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Book, Users, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: Lightbulb,
    title: "Curious Learner",
    description: "Always exploring new subjects and asking questions to understand how things work."
  },
  {
    icon: Book,
    title: "Academic Focus",
    description: "Dedicated to my studies with a particular interest in science and technology."
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Enjoy collaborating with classmates on group projects and school activities."
  },
  {
    icon: Trophy,
    title: "Achievement Oriented",
    description: "Setting goals and working hard to reach them, both in and out of the classroom."
  }
];

const About = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background element */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block mb-3 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium">
              About Me
            </span>
            <h2 className="section-heading max-w-lg">
              A middle school student with big dreams
            </h2>
            
            <p className="text-muted-foreground mb-6">
              Hi there! I'm a 7th grade student at Lincoln Middle School with a passion for learning and creating. When I'm not in class or working on school projects, you can find me exploring new hobbies and spending time with friends and family.
            </p>
            
            <p className="mb-8">
              I believe that middle school is just the beginning of my journey, and I'm excited to share some of my best work and achievements so far. My goal is to continue growing, learning, and developing new skills that will help me succeed in high school and beyond.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-2 bg-secondary rounded-full text-sm font-medium">
                Science Enthusiast
              </div>
              <div className="px-6 py-2 bg-secondary rounded-full text-sm font-medium">
                Digital Artist
              </div>
              <div className="px-6 py-2 bg-secondary rounded-full text-sm font-medium">
                Beginner Coder
              </div>
              <div className="px-6 py-2 bg-secondary rounded-full text-sm font-medium">
                Book Lover
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">
                  <feature.icon className="text-primary" size={20} />
                </div>
                <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
