"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

const skills = [
  {
    category: 'Backend Development',
    items: [
      { name: 'Spring Boot', level: 90 },
      { name: 'Spring MVC', level: 85 },
      { name: 'Spring Security', level: 80 },
      { name: 'JPA/Hibernate', level: 88 },
      { name: 'REST API', level: 92 },
      { name: 'JUnit', level: 75 },
    ],
    icon: '💻'
  },
  {
    category: 'Frontend Development',
    items: [
      { name: 'Angular', level: 85 },
      { name: 'TypeScript', level: 90 },
      { name: 'React', level: 80 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'RxJS', level: 75 },
      { name: 'HTML5/CSS3', level: 95 },
    ],
    icon: '🎨'
  },
  {
    category: 'Databases',
    items: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'MongoDB', level: 70 },
      { name: 'Oracle', level: 75 },
    ],
    icon: '🗄️'
  },
  {
    category: 'DevOps & Tools',
    items: [
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 70 },
      { name: 'Git', level: 95 },
      { name: 'Kubernetes', level: 65 },
      { name: 'Jenkins', level: 60 },
    ],
    icon: '🛠️'
  },
  {
    category: 'Methodologies',
    items: [
      { name: 'Agile/Scrum', level: 85 },
      { name: 'UML', level: 80 },
      { name: 'Design Patterns', level: 75 },
      { name: 'CI/CD', level: 70 },
    ],
    icon: '📊'
  }
];

export default function Skills() {
  return (
    <section className="section h-auto" id="skills">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col xl:flex-row gap-10"
        >
          {/* Title */}
          <div className="xl:max-w-[30%]">
            <motion.h2 
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="h2 text-accent mb-4"
            >
              My <span className="text-white">Skills.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="mb-6 max-w-[500px] mx-auto xl:mx-0"
            >
              Here are the technologies and methodologies I've mastered through years of development experience.
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="w-full xl:max-w-[70%]">
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("up", 0.2 + index * 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.2 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-3xl">{skillGroup.icon}</span>
                    <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {skillGroup.items.map((skill, i) => (
                      <div key={i} className="relative group">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-white/80">{skill.name}</span>
                          <span className="text-xs text-accent">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                            viewport={{ once: true }}
                            className="h-2 rounded-full bg-gradient-to-r from-accent to-pink-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}