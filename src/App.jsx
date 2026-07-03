import React, { useEffect } from 'react';
import Navbar from './components/navbr';
import Project from './components/project';
import Experience from './components/experience';
import Contact from './components/contact';
import Footer from './components/footer';
import Canvas from './components/canvas';

import './App.css';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      <Canvas />
      
      <div className="content-wrapper">
        <Navbar />
        <main>
          <Project />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
