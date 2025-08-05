import React, { useState, useRef, useEffect } from 'react';
import { Play, ExternalLink, Calendar, Clock, Filter } from 'lucide-react';
import './styles/Projects.css';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const categories = [
    { id: 'all', label: 'All Projects', count: 6 },
    { id: 'commercial', label: 'Commercial', count: 2 },
    { id: 'music', label: 'Music Videos', count: 1 },
    { id: 'social', label: 'Social Media', count: 1 },
    { id: 'corporate', label: 'Corporate', count: 2 },
  ];

  const projects = [
    {
      id: 1,
      title: 'Brand Launch Campaign',
      category: 'commercial',
      duration: '2:30',
      date: '2024',
      description: 'High-energy commercial showcasing product features with dynamic transitions and motion graphics.',
      thumbnail: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=500&h=300&fit=crop',
      tags: ['Motion Graphics', 'Color Grading', 'Sound Design'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: 'Artist Music Video',
      category: 'music',
      duration: '3:45',
      date: '2024',
      description: 'Cinematic music video with creative storytelling and synchronized visual effects.',
      thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop',
      tags: ['Cinematic', 'VFX', 'Color Grading'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 3,
      title: 'Instagram Reels Series',
      category: 'social',
      duration: '0:30',
      date: '2024',
      description: 'Engaging short-form content optimized for social media platforms with trending effects.',
      thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop',
      tags: ['Short Form', 'Trending', 'Mobile Optimized'],
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 4,
      title: 'Corporate Training Video',
      category: 'corporate',
      duration: '8:15',
      date: '2024',
      description: 'Professional training content with clear messaging and engaging visual elements.',
      thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      tags: ['Educational', 'Professional', 'Graphics'],
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 5,
      title: 'Product Showcase',
      category: 'commercial',
      duration: '1:45',
      date: '2024',
      description: 'Sleek product demonstration with macro shots and premium visual styling.',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      tags: ['Product', 'Macro', 'Premium'],
      color: 'from-indigo-500 to-blue-600'
    },
    {
      id: 6,
      title: 'Event Highlights Reel',
      category: 'corporate',
      duration: '4:20',
      date: '2024',
      description: 'Dynamic event coverage capturing key moments with seamless storytelling flow.',
      thumbnail: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=300&fit=crop',
      tags: ['Event', 'Highlights', 'Storytelling'],
      color: 'from-yellow-500 to-orange-600'
    },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="projects-section" id="projects">
      <div className="projects-container">
        {/* Section Header */}
        <div className={`projects-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="projects-title">Recent Projects</h2>
          <p className="projects-subtitle">
            A showcase of my latest video editing work across different industries and formats
          </p>

          {/* Category Filter */}
          <div className="filter-container">
            <div className="filter-icon">
              <Filter className="w-5 h-5" />
            </div>
            <div className="category-filters">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                >
                  <span className="category-label">{category.label}</span>
                  <span className="category-count">{category.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className={`projects-grid ${isVisible ? 'animate-in' : ''}`}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              style={{ '--delay': `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Thumbnail */}
              <div className="project-thumbnail">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <button className="play-button">
                    <Play className="play-icon" />
                  </button>
                </div>
                <div className="duration-badge">
                  <Clock className="duration-icon" />
                  {project.duration}
                </div>
                <div className={`gradient-overlay bg-gradient-to-br ${project.color}`}></div>
              </div>

              {/* Project Info */}
              <div className="project-info">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-date">
                    <Calendar className="date-icon" />
                    {project.date}
                  </div>
                </div>
                
                <p className="project-description">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <button className="project-btn">
                  <ExternalLink className="btn-icon" />
                  <span>View Project</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`projects-cta ${isVisible ? 'animate-in' : ''}`}>
          <div className="cta-card">
            <div className="cta-content">
              <h3 className="cta-title">Have a Project in Mind?</h3>
              <p className="cta-text">
                Let's discuss how we can bring your vision to life with professional video editing.
              </p>
              <button onClick={scrollToContact} className="cta-button">
                <span>Start Your Project</span>
                <ExternalLink className="cta-icon" />
              </button>
            </div>
            <div className="cta-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;