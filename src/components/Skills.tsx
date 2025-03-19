
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const skillsData = [
  {
    category: "Academic",
    skills: [
      { name: "Mathematics", level: 85 },
      { name: "Science", level: 90 },
      { name: "English", level: 80 },
      { name: "History", level: 75 },
    ]
  },
  {
    category: "Technology",
    skills: [
      { name: "Computer Basics", level: 95 },
      { name: "Block Coding", level: 85 },
      { name: "Digital Art", level: 70 },
      { name: "Online Research", level: 90 },
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Teamwork", level: 85 },
      { name: "Presentation", level: 75 },
      { name: "Problem Solving", level: 80 },
      { name: "Time Management", level: 70 },
    ]
  }
];

const SkillBar = ({ name, level, index }: { name: string; level: number; index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
          className="h-full bg-primary rounded-full"
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block mb-3 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium">
            My Abilities
          </span>
          <h2 className="section-heading">Skills & Competencies</h2>
          <p className="section-subheading mx-auto">
            Here are some of the skills I've developed during my time in middle school, both in academics and beyond.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-bold mb-6 text-center">{category.category}</h3>
              <div>
                {category.skills.map((skill, index) => (
                  <SkillBar 
                    key={skill.name} 
                    name={skill.name} 
                    level={skill.level} 
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-muted-foreground"
          >
            "The journey of a thousand miles begins with a single step." — Lao Tzu
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
