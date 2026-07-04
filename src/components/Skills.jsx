import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { name: 'Java', level: 'Advanced' },
  { name: 'Spring Boot', level: 'Advanced' },
  { name: 'Angular', level: 'Intermediate' },
  { name: 'Redis', level: 'Intermediate' },
  { name: 'PostgreSQL', level: 'Advanced' },
  { name: 'Kafka', level: 'Intermediate' },
  { name: 'Django', level: 'Advanced' },
  { name: 'React.js', level: 'Expert' },
  { name: 'Redux', level: 'Advanced' },
  { name: 'HTML', level: 'Expert' },
  { name: 'CSS', level: 'Expert' },
  { name: 'JavaScript', level: 'Expert' },
  { name: 'Flutter', level: 'Intermediate' },
  { name: 'Firebase', level: 'Advanced' },
  { name: 'OCR', level: 'Intermediate' },
  { name: 'Node-RED', level: 'Intermediate' },
  { name: 'SQL', level: 'Advanced' },
  { name: 'C', level: 'Intermediate' },
  { name: 'C++', level: 'Intermediate' },
  { name: 'Python', level: 'Expert' },
  { name: 'Dart', level: 'Intermediate' }
];

const Skills = () => {
  return (
    <section id="skills" style={{ minHeight: '60vh', padding: '100px 5%' }}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}
      >
        Core <span className="text-gradient">Skills</span>
      </motion.h2>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1.5rem',
        justifyContent: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="glass"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: (index % 10) * 0.05 }}
            whileHover={{ scale: 1.1, borderColor: 'var(--accent-purple)' }}
            style={{
              padding: '1rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              minWidth: '150px'
            }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
              {skill.name}
            </h3>
            <span style={{ fontSize: '0.9rem', color: 'var(--accent-cyan)', letterSpacing: '1px', textTransform: 'uppercase' }}>
              {skill.level}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
