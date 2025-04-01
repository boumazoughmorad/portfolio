"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    image: "/image.png",
    title: 'Coffee Management System',
    description: 'Full-stack application for managing coffee shop operations including orders, inventory, and reporting',
    github: 'https://github.com/boumazoughmorad/Cafe_Management',
    tools: ['Spring Boot', 'React', 'MySQL'],
    demo: ""
  },
  {
    id: 2,
    image: "/image2.png",
    title: 'Customer Management Microservices',
    description: 'Distributed system for customer relationship management built with microservices architecture',
    github: 'https://github.com/boumazoughmorad/Microservices-Based-System-for-Customer-Management',
    tools: ['Spring Boot', 'Spring Cloud', 'Docker'],
    demo: ""
  },
  {
    id: 3,
    image: "/image3.jpeg",
    title: 'Hotel Reservation System',
    description: 'Online booking platform for hotels with real-time availability and payment processing',
    github: 'https://github.com/Booking-IIA',
    tools: ['Spring Boot', 'Angular', 'Oracle'],
    demo: ""
  },
  {
    id: 4,
    image: "/image4.png",
    title: 'Invoice Management App',
    description: 'Automated invoice generation and management system with PDF export capabilities',
    github: 'https://github.com/boumazoughmorad/Application-for-Management-and-Invoice-Creation',
    tools: ['Spring Boot', 'React', 'MySQL'],
    demo: ""
  },
  {
    id: 5,
    image: "/image5.png",
    title: 'Factory Logistics Management',
    description: 'End-to-end solution for tracking and optimizing factory supply chain operations',
    github: 'https://github.com/boumazoughmorad/Logistics-Chain-Management-Application-for-Factories',
    tools: ['Spring Boot', 'Angular', 'MySQL'],
    demo: ""
  }
];

export default function Work() {
  return (
    <section className="section h-auto" id="work">
      <div className="container mx-auto">
	
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col"
        >
          {/* Header */}
          <div className="flex flex-col lg:flex-row gap-8 mb-16">
            <div className="lg:w-1/3">
              <motion.h2
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                className="h2 text-accent mb-4"
              >
                Featured <span className="text-white">Projects</span>
              </motion.h2>
              <motion.p
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                className="mb-6"
              >
                Here are some of my most recent full-stack projects. Each one represents unique challenges and solutions.
              </motion.p>
              <motion.a
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                href="https://github.com/boumazoughmorad"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-accent"
              >
                View All Projects
              </motion.a>
            </div>

            {/* Featured Project */}
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              className="lg:w-2/3 group relative overflow-hidden rounded-xl border border-white/20 hover:border-accent/50 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black z-10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <img 
                src={projects[0].image} 
                alt={projects[0].title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 p-6 z-20 translate-y-10 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-xl font-bold text-white mb-2">{projects[0].title}</h3>
                <p className="text-white/80 mb-4">{projects[0].description}</p>
                <div className="flex gap-4">
                  <a 
                    href={projects[0].github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent hover:text-white transition-colors"
                  >
                    <FiGithub /> Code
                  </a>
                  {projects[0].demo && (
                    <a 
                      href={projects[0].demo} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-accent hover:text-white transition-colors"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Projects Grid */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.slice(1).map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeIn("up", 0.3 + index * 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.2 }}
                className="group relative overflow-hidden rounded-xl border border-white/20 hover:border-accent/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black z-10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-500"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/70 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool, i) => (
                      <span key={i} className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-accent hover:text-white transition-colors"
                    >
                      <FiGithub /> Code
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-accent hover:text-white transition-colors"
                      >
                        <FiExternalLink /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}