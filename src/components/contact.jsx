import React, { useState } from 'react';
import { Mail, MessageCircle, Phone, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
    <path d="M12 22v-4"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [notification, setNotification] = useState({ show: false, message: '', type: 'success' });

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: '', type });
    }, 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      // NOTE: Replace YOUR_FORM_ID with your actual Formspree form ID
      const response = await fetch("https://formspree.io/f/xjkblopp", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        showNotification("Message sent successfully!", "success");
        setFormData({ name: '', email: '', message: '' });
      } else {
        showNotification("Oops! There was a problem submitting your form", "error");
      }
    } catch (error) {
      showNotification("Oops! There was a problem submitting your form", "error");
    }
  };

  return (
    <section id="contact" className="footer" style={{ padding: '100px 5% 50px' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: '800px', margin: '0 auto' }}
      >
        <h2 className="text-gradient" style={{ marginBottom: '1rem' }}>Connect With Me</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem' }}>
          Have a question or want to work together? Leave a message!
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', gap: '1.5rem', width: '100%' }}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="glass contact-input"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              style={{ flex: 1, padding: '1rem', color: '#fff', fontSize: '1.1rem', outline: 'none' }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="glass contact-input"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              style={{ flex: 1, padding: '1rem', color: '#fff', fontSize: '1.1rem', outline: 'none' }}
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message..."
            className="glass contact-input"
            rows="5"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            style={{ width: '100%', padding: '1rem', color: '#fff', fontSize: '1.1rem', outline: 'none', resize: 'vertical' }}
          />
          <motion.button
            type="submit"
            className="glass"
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(122, 0, 255, 0.2)', borderColor: 'var(--accent-purple)' }}
            whileTap={{ scale: 0.98 }}
            style={{
              padding: '1rem',
              fontSize: '1.2rem',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              fontFamily: 'Orbitron, sans-serif',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}
          >
            Send Message
          </motion.button>
        </form>

        <div className="social-links">
          <a href="https://github.com/pranaychandrikapure" target="_blank" rel="noreferrer" className="social-link glass" aria-label="GitHub" title="GitHub">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/pranay-chandrikapure-ba4861252/" target="_blank" rel="noreferrer" className="social-link glass" aria-label="LinkedIn" title="LinkedIn">
            <LinkedinIcon />
          </a>
          <a href="mailto:pranaychandrikapure@gmail.com" className="social-link glass" aria-label="Email" title="Email">
            <Mail size={24} />
          </a>
          <a href="https://wa.me/919356744015" target="_blank" rel="noreferrer" className="social-link glass" aria-label="WhatsApp" title="WhatsApp">
            <MessageCircle size={24} />
          </a>
          <a href="tel:+919356744015" className="social-link glass" aria-label="Phone" title="Phone">
            <Phone size={24} />
          </a>
        </div>
      </motion.div>

      {/* Custom Toast Notification */}
      <AnimatePresence>
        {notification.show && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            style={{
              position: 'fixed',
              bottom: '40px',
              left: '0',
              right: '0',
              margin: '0 auto',
              width: 'max-content',
              background: notification.type === 'success' ? 'rgba(20, 20, 25, 0.8)' : 'rgba(20, 20, 25, 0.8)',
              border: `1px solid ${notification.type === 'success' ? 'var(--accent-cyan)' : 'var(--accent-purple)'}`,
              color: '#fff',
              padding: '16px 24px',
              borderRadius: '50px',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '1.1rem',
              fontWeight: '500',
              boxShadow: `0 10px 30px -10px ${notification.type === 'success' ? 'rgba(0, 255, 255, 0.3)' : 'rgba(122, 0, 255, 0.3)'}`
            }}
          >
            {notification.type === 'success' ? (
              <CheckCircle2 size={24} color="var(--accent-cyan)" />
            ) : (
              <AlertCircle size={24} color="var(--accent-purple)" />
            )}
            {notification.message}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;