import React from 'react';
import svg1 from "../assets/images/contact-me.svg";

const Contact = () => {
  return (
    <section className="section-container" id="contact">
      <h2 className="section-title text-gradient">Let's Connect</h2>
      
      <div className="contact-wrapper reveal" style={{ transitionDelay: '0.2s' }}>
        <div className="contact-img-container">
          <img src={svg1} alt="Contact Me" className="contact-img" />
        </div>
        
        <form action="https://formspree.io/f/xjkblopp" method="POST" className="contact-form glass-panel" style={{ padding: '2.5rem' }} name="contactUS">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" name="name" className="form-input" placeholder="Enter your name" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">Your Email</label>
            <input type="email" id="email" name="email" className="form-input" placeholder="name@example.com" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea id="message" name="message" rows="5" className="form-textarea" placeholder="Write your message here..." required></textarea>
          </div>
          
          <button type="submit" className="bg-gradient-btn" style={{ marginTop: '1rem' }}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;