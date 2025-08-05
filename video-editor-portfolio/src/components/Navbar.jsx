import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import './styles/Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Scroll detection
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#stats', label: 'Stats' },
    { href: '#projects', label: 'Projects' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className={`navbar-content ${isScrolled ? 'shadow' : ''}`}>
          <div className="navbar-header">
            <div className="logo">
              Ahmed<span className="highlight">Edits</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="desktop-nav">
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="nav-link"
                >
                  {link.label}
                </button>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="mobile-nav">
              <div className="mobile-nav-links">
                {navLinks.map(link => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="mobile-nav-link"
                  >
                    {link.label}
                  </button>
                ))}
                <button 
                  className="mobile-theme-toggle"
                  onClick={toggleTheme}
                >
                  {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
