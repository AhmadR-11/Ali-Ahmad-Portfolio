import emailjs from 'emailjs-com';

const EmailService = {
  // Initialize EmailJS with environment variables
  init: () => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    } else {
      console.warn('EmailJS public key not found in environment variables');
    }
  },

  // Send email using EmailJS
  sendEmail: async (formData) => {
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      if (!serviceId || !templateId) {
        throw new Error('EmailJS service ID or template ID not configured');
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'ahmadedits23@gmail.com',
        reply_to: formData.email,
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams
      );

      console.log('Email sent successfully:', response);
      return { success: true, message: 'Email sent successfully!' };
    } catch (error) {
      console.error('Failed to send email:', error);
      return { 
        success: false, 
        message: 'Failed to send email. Please try again later.' 
      };
    }
  },

  // Validate email format
  validateEmail: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  // Validate form data
  validateForm: (formData) => {
    const errors = {};

    if (!formData.name || formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters long';
    }

    if (!formData.email || !EmailService.validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.message || formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  }
};

// Initialize EmailJS when the module is imported
EmailService.init();

export default EmailService;