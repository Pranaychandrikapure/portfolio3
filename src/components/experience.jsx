import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import udmey_certificate from '../assets/images/Udmey_certificate.png';
import oasis_infobyte from '../assets/images/Oasis_infobytes.png';
import prajwalan from '../assets/images/prajwalan.png';
import itsaWinner from '../assets/images/itsa_winner12.png';
import neml from '../assets/images/NeML.png';

const experiences = [
  {
    image: neml,
    quote: "I am currently working in NCDEX e-Market Ltd. (NeML) with 8 months of internship and almost one year of total experience. I am working on a scalable eAuction platform for commodity trading (chana, pulses, scrap), handling core trading functionalities including bid management and the auction lifecycle, ensuring high availability and real-time processing.",
    title: "Software Engineer / Intern",
    subtitle: "NCDEX e-Market Ltd. | https://www.neml.in/"
  },
  {
    image: prajwalan,
    quote: "I am part of Team Nayaan, which recently published its patent. Over the past year, I have primarily worked on the OCR component of the Nayaan device and have also contributed to the frontend website using Three.js. Where Nayaan achieved lots of prize and also published the patent of Nayaan",
    title: "Nayaan",
    subtitle: "Founder Bhavesh Chaudhari (Senior) | https://nayaan.vercel.app/"
  },
  {
    image: itsaWinner,
    quote: "I am winner of ITSA (Information Technology Student Association) project expo competition with my friend Shivendoo and Team Nayaan. This competition held in Government College of Engineering, Amravati.",
    title: "Winner",
    subtitle: "ITSA Project Expo"
  },
  {
    image: udmey_certificate,
    quote: "I completed a Tkinter course on Udemy, where I gained expertise in GUI desktop application development using Python's Tkinter library. As part of the course, I developed a cross-platform calculator application that can run independently on Windows, iOS, and Linux, providing a seamless experience across different operating systems.",
    title: "Certificate",
    subtitle: "Udemy"
  },
  {
    image: oasis_infobyte,
    quote: "I successfully completed a virtual internship at Oasis Infobyte, where I was assigned tasks focused on frontend development. Upon the successful submission of these tasks, I was awarded a certificate by the company, recognizing my accomplishments and skills in this area.",
    title: "Virtual Internship",
    subtitle: "Oasis Infobyte"
  }
];

const Experience = () => {
  return (
    <section className="section-container" id="experience">
      <h2 className="section-title text-gradient">Experience & Certificates</h2>
      
      <div className="reveal" style={{ transitionDelay: '0.2s' }}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="mySwiper"
          style={{ paddingBottom: '3rem' }}
        >
          {experiences.map((exp, index) => (
            <SwiperSlide key={index}>
              <div className="experience-card glass-panel">
                <img src={exp.image} alt={exp.title} className="exp-img" />
                <div className="exp-content">
                  <p className="exp-quote">"{exp.quote}"</p>
                  <h3 className="exp-title">{exp.title}</h3>
                  <h5 className="exp-subtitle">{exp.subtitle}</h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Experience;
