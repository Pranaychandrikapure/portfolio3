import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="hero">
      <motion.div 
        style={{ y: y1, opacity }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2>Hello, I'm <span className="text-gradient">Pranay</span></h2>
        <h1>FULL STACK<br/>DEVELOPER</h1>
        <p>
          I build high-performance web applications, scalable backends, and beautiful user interfaces. 
          Currently specializing in React, Node.js, and Django.
        </p>
        <a 
          href="https://docs.google.com/uc?export=download&id=1DaTCzsVR_FRxKXvZ3pMNU6s4KZ7F_Be4" 
          target="_blank"
          rel="noreferrer"
          className="glass" 
          style={{ 
            display: 'inline-block', 
            padding: '12px 28px', 
            marginTop: '2rem', 
            color: 'var(--accent-cyan)', 
            textDecoration: 'none', 
            fontWeight: '600', 
            letterSpacing: '1px',
            border: '1px solid rgba(0, 255, 255, 0.2)',
            transition: 'all 0.3s'
          }}
          onMouseOver={(e) => { 
            e.target.style.background = 'rgba(0, 255, 255, 0.1)'; 
            e.target.style.borderColor = 'var(--accent-cyan)';
          }}
          onMouseOut={(e) => { 
            e.target.style.background = 'rgba(20, 20, 25, 0.4)'; 
            e.target.style.borderColor = 'rgba(0, 255, 255, 0.2)';
          }}
        >
          DOWNLOAD RESUME
        </a>
      </motion.div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{ opacity }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={24} color="var(--accent-cyan)" />
        </motion.div>
        Scroll to Explore
      </motion.div>
    </section>
  );
};

export default Hero;
