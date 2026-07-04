import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ExperienceCard = ({ role, company, date, descriptions }) => {
  return (
    <motion.div 
      className="experience-card glass"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      style={{ padding: '2rem', marginBottom: '2rem' }}
    >
      <div className="experience-dot" />
      <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{role}</h3>
      <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '1rem' }}>{company} <span style={{ color: '#666', fontSize: '0.9rem', marginLeft: '10px' }}>{date}</span></h4>
      <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '20px', margin: 0 }}>
        {descriptions.map((desc, i) => (
          <li key={i} style={{ marginBottom: '8px' }}>{desc}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" ref={ref}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ fontSize: '3rem', marginBottom: '4rem' }}
      >
        Work <span className="text-gradient">Experience</span>
      </motion.h2>

      <div className="experience-container">
        <div className="timeline-line" />
        <motion.div className="timeline-progress" style={{ scaleY, transformOrigin: "top" }} />
        
        <ExperienceCard 
          role="Management Trainee"
          company="NeML (NCDEX e-Markets Ltd.)"
          date="Aug 2025 - Present"
          descriptions={[
            "Working on a scalable eAuction platform for commodity trading (chana, pulses, scrap), including the NCDF platform for managing NCDF auctions.",
            "Handling core trading functionalities including bid management and auction lifecycle.",
            "Ensuring high availability and real-time processing for large-scale auction operations."
          ]}
        />
        
        <ExperienceCard 
          role="Software Developer Intern"
          company="NCDEX e-Markets Ltd., Nagpur"
          date="Jan 2025 - Aug 2025"
          descriptions={[
            "Worked on the ELV certificate trading portal using Spring MVC and AngularJS.",
            "Contributed to the eAuction for commodity trading (scrap, chana, pulses) using Angular 14, Spring Boot, and PostgreSQL.",
            "Involved in full-stack development and module integration for trading workflows."
          ]}
        />
      </div>
    </section>
  );
};

export default Experience;
