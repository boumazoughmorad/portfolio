"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import { useInView } from 'react-intersection-observer';

export default function Experience() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const experiences = [
    {
      id: 1,
      role: "Full-Stack Developer - Java/Angular",
      company: "CodingArt",
      period: "February 2025 - Present",
      description: [
        "Designing a web application for intelligent management of sales, finances, and marketing",
        "Tracking sales transactions and generating detailed reports",
        "Developing customer order management features",
        "Creating analytical dashboards",
      ],
      logo: "/CodingArt.png",
      skills: 'Spring Boot, Angular, Angular Material, JPA, Hibernate, JUnit, REST API, PostgreSQL, Docker, Spring Security, AWS',
    },
    {
      id: 2,
      role: "Internship - Full-Stack Developer - Java/React.js",
      company: "Lear Corporation Engineering, Salé, Morocco",
      period: "February 2024 - August 2024",
      description: [
        "Designing a web application for extracting and breaking down requirements specifications",
        "Structuring requirements into hierarchical categories",
        "Complete project management with version tracking",
        "Exporting to ReqIF, PDF, and Excel formats and integration with IBM DOORS",
        "Analytical dashboard for visualizing trends",
      ],
      logo: "/Lear.png",
      skills: "Spring Boot, JPA, ReactJS, Hibernate, JUnit, REST API, MySQL, Docker, Spring Security, JWT",
    },
    {
      id: 3,
      role: "Full-Stack Developer Intern - Java/Angular",
      company: "ITIC Solutions, Agadir",
      period: "June 2022 - August 2022",
      description: [
        "Development of the 'Open Billings' web application",
        "Billing and stock management with JWT security",
        "Analytical dashboard with statistics and graphs",
        "Chatbot for text correction and translation",
        "Exporting data to PDF and Excel",
      ],
      logo: "/IticSolution.png",
      skills: "Spring Framework, Hibernate, REST API, Angular, Spring Data, Maven, JWT, MySQL",
    }
  ];

  return (
    <section className="section relative  h-auto" id="experience" ref={ref}>
      <div className="container mx-auto ">
        <motion.h2 
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="h2 text-accent text-center mb-16"
        >
          Professional Experience
        </motion.h2>
        
        <div className="flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={fadeIn("up", 0.4 + index * 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col lg:flex-row gap-8 p-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg"
            >
              {/* Logo Section */}
              <div className="flex-shrink-0 flex items-start justify-center lg:justify-start">
                <div className="w-20 h-20 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-2">
                  <img 
                    src={exp.logo} 
                    alt={`${exp.company} logo`} 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              {/* Content Section */}
              <div className="flex-1 space-y-4">
                {/* Role & Company */}
                <div>
                  <h3 className="text-xl font-bold text-accent mb-1">{exp.role}</h3>
                  <div className="flex flex-col md:flex-row md:items-center gap-2">
                    <span className="font-semibold text-white">{exp.company}</span>
                    <span className="hidden md:block text-white/50">•</span>
                    <span className="text-white/70">{exp.period}</span>
                  </div>
                </div>
                
                {/* Description */}
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent mt-1">▹</span>
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Skills */}
                <div className="pt-2">
                  <h4 className="text-sm font-medium text-accent mb-2">TECHNOLOGIES USED:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.split(', ').map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 text-xs rounded-full bg-accent/10 text-white hover:bg-accent border border-accent/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}