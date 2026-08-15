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
    >
      <div className="experience-dot" />

      <h3>{role}</h3>

      <h4>
        {company} <span>{date}</span>
      </h4>

      <ul>
        {descriptions.map((desc, i) => (
          <li key={i}>{desc}</li>
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
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Work <span className="text-gradient">Experience</span>
      </motion.h2>

      <div className="experience-container">

        <div className="timeline-line" />

        <motion.div
          className="timeline-progress"
          style={{
            scaleY,
            transformOrigin: "top"
          }}
        />

        {/* Assistant Manager */}
<ExperienceCard
  role="Assistant Manager – Development"
  company="NeML (NCDEX e-Markets Ltd.)"
  date="Aug 2026 - Present"
  descriptions={[
    "Working on frontend and backend development using Angular, Java, Spring Boot, and Spring MVC for large-scale commodity trading and eAuction platforms.",
    "Developed and maintained trading and auction workflows, including multi-day auction functionality and complex auction business logic.",
    "Debugged production issues, performed root-cause analysis, and delivered critical production fixes within tight deadlines while maintaining system stability.",
    "Developed scheduler-based automation services to automate recurring trading and auction-related processes.",
    "Analyzed and implemented complex auction functionalities, including auto-bidding logic, by understanding and extending the existing Spring MVC architecture.",
    "Identified performance bottlenecks and optimized backend services, improving throughput from approximately 5,000 to 10,000+ requests/sec.",
    "Improved system scalability and resource utilization to support higher concurrent auction volumes while maintaining low error rates."
  ]}
/>

{/* Management Trainee */}
<ExperienceCard
  role="Management Trainee"
  company="NeML (NCDEX e-Markets Ltd.)"
  date="Aug 2025 - Jul 2026"
  descriptions={[
    "Worked on frontend and backend development using Angular, Java, Spring Boot, and Spring MVC for commodity trading and eAuction platforms.",
    "Contributed to trading workflows including bid management, auction lifecycle, and real-time processing.",
    "Supported production issue analysis, debugging, and implementation of fixes across trading and auction modules."
  ]}
/>
        {/* Software Developer Intern */}
        <ExperienceCard
          role="Software Developer Intern"
          company="NCDEX e-Markets Ltd., Nagpur"
          date="Jan 2025 - Aug 2025"
          descriptions={[
            "Worked on the ELV certificate trading portal using Spring MVC and AngularJS.",
            "Contributed to the eAuction for commodity trading including scrap, chana, and pulses using Angular 14, Spring Boot, and PostgreSQL.",
            "Involved in full-stack development and module integration for trading workflows."
          ]}
        />
      </div>
    </section>
  );
};

export default Experience;