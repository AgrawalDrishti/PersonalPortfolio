import { useState } from 'react';
import { DoodleUnderline, StickerBadge } from '../components/Doodles';
import './Contact.css';

const CONFETTI_COLORS = ['var(--accent-orange)', 'var(--accent-blue)', 'var(--accent-green)', 'var(--accent-pink)', 'var(--accent-lime)'];

const CONFETTI_PIECES = Array.from({ length: 18 }, (_, i) => ({
  left: `${Math.random() * 100}%`,
  color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
  delay: `${Math.random() * 0.3}s`,
  rotate: `${Math.floor(Math.random() * 360)}deg`
}));

const Contact = () => {
  const [formData, setFormData] = useState({
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ subject: '', message: '' });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/AgrawalDrishti',
      color: '#ff5a36'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/drishti2904/',
      color: '#6a6ff5'
    },
    {
      name: 'Twitter',
      url: 'https://x.com/Drishti2904',
      color: '#2f7a55'
    },
    {
      name: 'Email',
      url: 'mailto:drishti29agrawal@gmail.com',
      color: '#ff6fa0'
    },
    {
      name: 'Portfolio',
      url: '#',
      color: '#8b5cf6'
    },
    {
      name: 'Resume',
      url: '#',
      color: '#d6ff4f'
    }
  ];

  const contactInfo = [
    {
      title: 'Email',
      value: 'drishti29agrawal@gmail.com',
      link: 'mailto:drishti29agrawal@gmail.com'
    },
    {
      title: 'Location',
      value: 'Noida, India',
      link: null
    },
    {
      title: 'Current Role',
      value: 'Software Engineer at Adobe',
      link: null
    },
    {
      title: 'Open To',
      value: 'Collaborations & Opportunities',
      link: null
    }
  ];

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Header */}
        <section className="contact-header">
          <StickerBadge color="var(--accent-lime)" rotate={-6} className="contact-header-sticker">
            say hi ✦
          </StickerBadge>
          <h1 className="contact-title">
            let's <span className="highlight-text">connect</span>
          </h1>
          <DoodleUnderline color="var(--ink)" className="contact-title-underline" />
          <p className="contact-subtitle">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </section>

        <div className="contact-content">
          {/* Contact Form */}
          <section className="contact-form-section">
            <div className="form-container">
              <h2 className="form-title">Send Me a Message</h2>
              
              {submitStatus === 'success' && (
                <>
                  <div className="success-message fade-in">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                  <div className="confetti-burst" aria-hidden="true">
                    {CONFETTI_PIECES.map((piece, i) => (
                      <span
                        key={i}
                        className="confetti-piece"
                        style={{
                          left: piece.left,
                          background: piece.color,
                          animationDelay: piece.delay,
                          '--start-rotate': piece.rotate
                        }}
                      />
                    ))}
                  </div>
                </>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me more..."
                    rows="10"
                    required
                    className="form-textarea"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className="button-arrow">→</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </section>

          {/* Contact Info & Social Links */}
          <section className="contact-info-section">
            {/* Contact Info Cards */}
            <div className="contact-info-cards">
              {contactInfo.map((info, index) => (
                <div key={index} className="info-card-contact" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="info-content-full">
                    <h3 className="info-title-contact">{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} className="info-value-link">{info.value}</a>
                    ) : (
                      <p className="info-value-contact">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="social-links-section">
              <h3 className="social-title">Connect With Me</h3>
              <div className="social-links-grid">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-card"
                    style={{ 
                      '--hover-color': social.color,
                      animationDelay: `${index * 0.1}s` 
                    }}
                  >
                    <span className="social-name">{social.name}</span>
                    <span className="social-arrow">→</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            {/* <div className="availability-card">
              <div className="availability-indicator">
                <span className="status-dot-large"></span>
                <span className="status-text">Available for Projects</span>
              </div>
              <p className="availability-note">
                Currently open to freelance opportunities, collaborations, and interesting projects.
              </p>
            </div> */}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;

