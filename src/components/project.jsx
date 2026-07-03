import React from 'react';
import neml from "../assets/images/NeML.png";
import cricketAuction from "../assets/images/cricket-auction.png";
import nest from "../assets/images/Nest Django backend.png";
import docwise from "../assets/images/expense-tracker.png";
import recipe_site from "../assets/images/django recipe.jpg";
import calculator from "../assets/images/crossplatfrom calculator.png";
import nayaan from "../assets/images/nayaan.png";

const projects = [
  {
    title: "NCDEX e-Market Ltd.",
    subtitle: "(Internship & Software Engineer)",
    description: "Working on a scalable eAuction platform for commodity trading (chana, pulses, scrap), including the NCDFI platform for managing NCDFI auctions. Handling core trading functionalities including bid management and auction lifecycle. Ensuring high availability and real-time processing for large-scale auction operations.",
    tags: ["Angular", "Spring Boot", "Redis", "Kafka", "Akka", "PostgreSQL"],
    image: neml,
    link: "https://www.neml.in/",
    accent: "--accent-cyan"
  },
  {
    title: "Cricket Auction Platform",
    subtitle: "(Web-based Auction System)",
    description: "Developed a web-based cricket auction platform for corporate leagues, college tournaments, and local competitions, featuring player registration, live bidding, team management, auction scheduling, budget tracking, and real-time auction monitoring.",
    tags: ["Spring Boot", "Next.js", "Neon Database"],
    image: cricketAuction,
    link: "#",
    accent: "--accent-green"
  },
  {
    title: "Nest Ecommerce",
    subtitle: "(Django Backend Ecommerce)",
    description: "The application uses a Django backend and includes essential ecommerce features like product listings, shopping cart, and checkout. It supports secure user authentication, product management, payment processing, inventory control, and enhanced search and filtering.",
    tags: ["Django", "HTML", "CSS", "JQuery", "Ajax"],
    image: nest,
    link: "https://github.com/Pranaychandrikapure/Django-Ecommerce",
    accent: "--accent-blue"
  },
  {
    title: "DocWise Application",
    subtitle: "(Centralized application for schemes and document)",
    description: "A centralized app that helps users create documents and fill out scheme applications in their regional languages, providing detailed guidance to overcome language barriers and avoid missed deadlines.",
    tags: ["Flutter", "Firebase", "Google API", "Material UI", "Figma"],
    image: docwise,
    link: "https://github.com/Pranaychandrikapure/DocWise-Application",
    accent: "#ffe578"
  },
  {
    title: "Recipe Site",
    subtitle: "(Recipe upload and watch new recipes)",
    description: "Manages recipes using Django (backend) with HTML, CSS, and JavaScript (frontend).",
    tags: ["Django", "HTML", "CSS", "JavaScript", "Figma"],
    image: recipe_site,
    link: "https://github.com/Pranaychandrikapure/Basic_recipes_site",
    accent: "#fc815c"
  },
  {
    title: "Cross Platform Calculator",
    subtitle: "(Calculator GUI desktop application)",
    description: "It is cross platform calculator that can run on any operating system it might be Windows, Linux or MacOS.",
    tags: ["Python", "Tkinter"],
    image: calculator,
    link: "https://github.com/Pranaychandrikapure/crossplatfrom_calculator",
    accent: "#47afa1"
  },
  {
    title: "Nayaan AI Device",
    subtitle: "(Team member of team Nayaan)",
    description: "Nayaan is an AI-enabled smart assistive device designed specifically for individuals who are blind or visually impaired. With its advanced object detection and OCR capabilities, Nayaan empowers users to effortlessly read text from books, newspapers, magazines, and more using the OCR feature. Additionally, it enables users to perceive their surroundings with ease through its object detection feature.",
    tags: ["AI", "IoT", "OCR", "Next.js", "Three.js", "HTML", "CSS", "JavaScript", "Figma"],
    image: nayaan,
    link: "https://nayaan.vercel.app/",
    accent: "#fc815c"
  }
];

const Project = () => {
  return (
    <section className="section-container" id="projects">
      <h2 className="section-title text-gradient">Latest Works</h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-item reveal" style={{ transitionDelay: `${0.1 * (index % 2)}s` }}>
            <a href={project.link} target="_blank" rel="noreferrer" className="project-image-wrapper">
              <img src={project.image} alt={project.title} className="project-img" />
            </a>
            
            <div className="project-info glass-panel" style={{ padding: '2rem' }}>
              <h3 className="project-title" style={{ color: project.accent.startsWith('--') ? `var(${project.accent})` : project.accent }}>
                {project.title}
              </h3>
              <span className="project-subtitle" style={{ color: project.accent.startsWith('--') ? `var(${project.accent})` : project.accent }}>
                {project.subtitle}
              </span>
              <p className="project-desc">{project.description}</p>
              
              <ul className="skills-list" style={{ marginBottom: 0 }}>
                {project.tags.map(tag => (
                  <li key={tag} className="skill-pill">#{tag}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;