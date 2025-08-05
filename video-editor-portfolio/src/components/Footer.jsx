import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Youtube, 
  Linkedin, 
  Twitter,
  Heart,
  ArrowUp,
  Play,
  Film,
  Palette,
  Music
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Video Editing', icon: <Film className="w-4 h-4" /> },
    { name: 'Motion Graphics', icon: <Play className="w-4 h-4" /> },
    { name: 'Color Grading', icon: <Palette className="w-4 h-4" /> },
    { name: 'Sound Design', icon: <Music className="w-4 h-4" /> }
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      href: 'https://instagram.com/ahmadedits23',
      color: 'hover:text-pink-500'
    },
    {
      name: 'YouTube',
      icon: <Youtube className="w-5 h-5" />,
      href: 'https://youtube.com/@ahmadedits23',
      color: 'hover:text-red-500'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://linkedin.com/in/ahmadedits23',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      href: 'https://twitter.com/ahmadedits23',
      color: 'hover:text-blue-400'
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4" />,
      text: 'ahmadedits23@gmail.com',
      href: 'mailto:ahmadedits23@gmail.com'
    },
    {
      icon: <Phone className="w-4 h-4" />,
      text: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      text: 'New York, USA',
      href: null
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Ahmad Edits</h3>
                <p className="text-primary-200 text-sm leading-relaxed">
                  Professional video editor and creative storyteller, bringing your vision to life 
                  through compelling visual narratives and cutting-edge post-production techniques.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-primary-700 hover:bg-primary-600 p-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-primary-100">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-primary-200 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-primary-100">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center space-x-2 text-primary-200 text-sm">
                    <span className="text-primary-400">{service.icon}</span>
                    <span className="hover:text-white transition-colors duration-300">
                      {service.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-primary-100">Get In Touch</h4>
              <ul className="space-y-4">
                {contactInfo.map((info, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-primary-400 mt-0.5">{info.icon}</span>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-primary-200 hover:text-white transition-colors duration-300 text-sm"
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span className="text-primary-200 text-sm">{info.text}</span>
                    )}
                  </li>
                ))}
              </ul>

              {/* Call to Action */}
              <div className="mt-6 p-4 bg-primary-700 rounded-lg">
                <p className="text-sm text-primary-100 mb-2">Ready to start your project?</p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-white font-medium text-sm hover:text-primary-200 transition-colors"
                >
                  Let's work together
                  <ArrowUp className="w-4 h-4 ml-1 rotate-45" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-primary-700">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="glass-effect-dark rounded-2xl p-6 text-center">
              <h4 className="text-xl font-bold mb-2 text-primary-100">Stay Updated</h4>
              <p className="text-primary-200 mb-4 text-sm">
                Subscribe to get the latest updates on my work and video editing tips
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-primary-800 border border-primary-600 text-white placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-400 text-sm"
                />
                <button className="px-6 py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-lg font-medium transition-colors duration-300 text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-700">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center text-primary-200 text-sm">
                <span>© {currentYear} Ahmad Edits. Made with</span>
                <Heart className="w-4 h-4 mx-1 text-red-400 fill-current" />
                <span>for creative storytelling.</span>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <a
                  href="/privacy"
                  className="text-primary-200 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="text-primary-200 hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </a>
                <button
                  onClick={scrollToTop}
                  className="flex items-center space-x-1 text-primary-200 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5"
                  aria-label="Scroll to top"
                >
                  <span>Back to top</span>
                  <ArrowUp className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;