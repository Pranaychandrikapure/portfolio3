import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import cricketAuctionImg from '../assets/images/cricket-auction.png';
import nestImg from '../assets/images/Nest Django backend.png';
import nayaanImg from '../assets/images/nayaan.png';

const projectsData = [
  {
    id: 1,
    title: "Cricket Auction App",
    description: "A real-time bidding application for cricket players. Features live websocket connections for instant bid updates, a secure admin panel, and high-performance React UI.",
    tech: ["React", "Node.js", "WebSockets", "MongoDB"],
    img: cricketAuctionImg,
    link: "#",
    color: "#e63946"
  },
  {
    id: 2,
    title: "Nest E-commerce",
    description: "A fully functional e-commerce backend powered by Django. Handles complex relational models for products, carts, and user authentication with high security standards.",
    tech: ["Django", "Python", "PostgreSQL", "REST API"],
    img: nestImg,
    link: "#",
    color: "#2a9d8f"
  },
  {
    id: 3,
    title: "Nayaan Portfolio",
    description: "An elegant, interactive portfolio website showcasing team projects. Built with modern web technologies focusing on extreme performance and accessibility.",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    img: nayaanImg,
    link: "#",
    color: "#e9c46a"
  }
];

const ProjectCard = ({ project, index, targetScale }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={containerRef} className="project-card-container">
      <motion.div 
        className="project-card glass"
        style={{ 
          scale, 
          top: `calc(10vh + ${index * 30}px)` 
        }}
      >
        <div className="project-info">
          <h3 className="text-gradient">{project.title}</h3>
          <div className="tech-stack">
            {project.tech.map((t, i) => (
              <span key={i} className="tech-pill">{t}</span>
            ))}
          </div>
          <p>{project.description}</p>
          <a href={project.link} className="project-link">
            View Project <ArrowUpRight size={18} />
          </a>
        </div>
        
        <div className="project-img-wrapper" style={{ backgroundColor: project.color }}>
          <motion.img 
            style={{ scale: imageScale }}
            src={project.img} 
            alt={project.title} 
          />
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="projects-wrapper">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center' }}
      >
        Featured <span className="text-gradient">Projects</span>
      </motion.h2>
      
      {projectsData.map((project, i) => {
        const targetScale = 1 - ((projectsData.length - i) * 0.05);
        return (
          <ProjectCard 
            key={project.id} 
            index={i} 
            project={project} 
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
};

export default Projects;
