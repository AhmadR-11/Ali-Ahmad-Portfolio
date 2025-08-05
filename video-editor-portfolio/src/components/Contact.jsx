import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock, Sparkles, Zap } from 'lucide-react';
import './styles/Contact.css';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
    errors: {},
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear field-specific error when user starts typing
    if (formState.errors[name]) {
      setFormState(prev => ({
        ...prev,
        errors: {
          ...prev.errors,
          [name]: null,
        },
      }));
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Mock validation for demo
  //   const validation = { 
  //     isValid: formData.name && formData.email && formData.message,
  //     errors: {}
  //   };
    
  //   if (!formData.name) validation.errors.name = 'Name is required';
  //   if (!formData.email) validation.errors.email = 'Email is required';
  //   if (!formData.message) validation.errors.message = 'Message is required';

  //   if (!validation.isValid) {
  //     setFormState(prev => ({
  //       ...prev,
  //       errors: validation.errors,
  //     }));
  //     return;
  //   }

  //   setFormState(prev => ({
  //     ...prev,
  //     isSubmitting: true,
  //     error: null,
  //     errors: {},
  //   }));

  //   // Mock API call
  //   setTimeout(() => {
  //     setFormState(prev => ({
  //       ...prev,
  //       isSubmitting: false,
  //       isSubmitted: true,
  //     }));
  //     setFormData({ name: '', email: '', message: '' });
  //   }, 2000);
  // };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      info: 'ahmadedits23@gmail.com',
      description: 'Send me an email anytime',
      gradient: 'from-blue-400 to-cyan-400',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      info: '+1 (555) 123-4567',
      description: 'Call for urgent projects',
      gradient: 'from-green-400 to-emerald-400',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      info: 'New York, USA',
      description: 'Available for remote work',
      gradient: 'from-orange-400 to-red-400',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Response Time',
      info: '24-48 hours',
      description: 'I respond quickly to all inquiries',
      gradient: 'from-violet-400 to-purple-400',
    },
  ];

  const services = [
    'Video Editing & Post-Production',
    'Motion Graphics & Animation',
    'Color Grading & Correction',
    'Audio Mixing & Sound Design',
    'Social Media Content Creation',
  ];

  if (formState.isSubmitted) {
    return (
      <section id="contact" className="contact-section">
        <div className="floating-particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="success-card">
              <div className="success-bg-effect"></div>
              <div className="success-icon-container">
                <CheckCircle className="w-16 h-16 text-green-400 success-icon" />
                <div className="success-glow"></div>
              </div>
              <h2 className="success-title">
                Message Sent Successfully!
              </h2>
              <p className="success-subtitle">
                Thank you for reaching out. I'll get back to you within 24-48 hours.
              </p>
              <button
                onClick={() => setFormState(prev => ({ ...prev, isSubmitted: false }))}
                className="success-button"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact-section">
      <div className="floating-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div ref={ref} className={`main-content ${inView ? 'animate-in' : ''}`}>
          {/* Section Header */}
          <div className="text-center mb-16 header-section">
            <div className="header-icon">
              <Zap className="w-8 h-8 text-cyan-400 mx-auto mb-4 animate-pulse" />
            </div>
            <h2 className="section-title">
              Let's Work Together
            </h2>
            <div className="title-glow"></div>
            <p className="section-subtitle">
              Ready to bring your vision to life? Get in touch and let's discuss your next video project.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="contact-info-section">
              <h3 className="contact-info-title">
                Get In Touch
              </h3>

              <div className="contact-info-grid">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-info-card" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="card-glow-effect"></div>
                    <div className={`contact-icon bg-gradient-to-r ${item.gradient}`}>
                      {item.icon}
                    </div>
                    <div className="contact-details">
                      <h4 className="contact-title">
                        {item.title}
                      </h4>
                      <p className="contact-info-text">
                        {item.info}
                      </p>
                      <p className="contact-description">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Services List */}
              <div className="services-card">
                <div className="services-bg-effect"></div>
                <h4 className="services-title">Services I Offer:</h4>
                <ul className="services-list">
                  {services.map((service, index) => (
                    <li key={index} className="service-item" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CheckCircle className="w-4 h-4 text-green-400 service-check" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="form-section">
              <div className="contact-form-card">
                <div className="form-bg-effect"></div>
                <h3 className="form-title">
                  Send Me a Message
                </h3>

                {formState.error && (
                  <div className="error-alert">
                    <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
                    <span className="text-red-300">{formState.error}</span>
                  </div>
                )}

                <div className="contact-form">
                  {/* Name Field */}
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Your Name *
                    </label>
                    <div className="input-container">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`form-input ${formState.errors.name ? 'input-error' : ''}`}
                        placeholder="Enter your full name"
                        disabled={formState.isSubmitting}
                      />
                      <div className="input-glow"></div>
                    </div>
                    {formState.errors.name && (
                      <p className="error-message">{formState.errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address *
                    </label>
                    <div className="input-container">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`form-input ${formState.errors.email ? 'input-error' : ''}`}
                        placeholder="your.email@example.com"
                        disabled={formState.isSubmitting}
                      />
                      <div className="input-glow"></div>
                    </div>
                    {formState.errors.email && (
                      <p className="error-message">{formState.errors.email}</p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Project Details *
                    </label>
                    <div className="input-container">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className={`form-textarea ${formState.errors.message ? 'input-error' : ''}`}
                        placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                        disabled={formState.isSubmitting}
                      />
                      <div className="input-glow"></div>
                    </div>
                    {formState.errors.message && (
                      <p className="error-message">{formState.errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formState.isSubmitting}
                    className={`submit-button ${formState.isSubmitting ? 'submitting' : ''}`}
                  >
                    <div className="button-bg-effect"></div>
                    {formState.isSubmitting ? (
                      <>
                        <div className="loading-spinner"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>

                {/* Additional Info */}
                <div className="form-footer">
                  <p className="footer-text">
                    <strong>Quick Response Guaranteed:</strong> I typically respond to all inquiries within 24-48 hours. 
                    For urgent projects, feel free to call me directly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Contact Methods */}
          <div className="mt-16 text-center">
            <div className="additional-contact-card">
              <div className="additional-bg-effect"></div>
              <h3 className="additional-title">
                Prefer Other Ways to Connect?
              </h3>
              <p className="additional-subtitle">
                I'm active on various platforms and always happy to discuss your project.
              </p>
              <div className="contact-buttons">
                <a
                  href="mailto:ahmadedits23@gmail.com"
                  className="contact-button email-button"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Direct Email
                </a>
                <a
                  href="tel:+15551234567"
                  className="contact-button phone-button"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;