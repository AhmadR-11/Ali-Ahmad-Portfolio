import React, { useRef, useEffect, useState } from 'react';
import './styles/About.css';
import vid from '../assets/video.mp4';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Auto-play video when section comes into view
          if (videoRef.current) {
            videoRef.current.play().catch(console.error);
          }
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
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

  return (
    <section 
      ref={sectionRef} 
      className="about-section"
      id="about"
    >
      <div className="about-container">
        {/* Header */}
        <div className={`about-header ${isVisible ? 'animate-in' : ''}`}>
          <div className="about-badge">About Me</div>
          <h1 className="about-title">Crafting Stories, Frame by Frame</h1>
        </div>

        {/* Content Grid */}
        <div className="about-content">
          {/* Video Section */}
          <div className={`video-container ${isVisible ? 'animate-in' : ''}`}>
            <div className="video-wrapper">
              <video
                ref={videoRef}
                className="about-video"
                loop
                muted
                playsInline
                poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23374151'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='%23999' text-anchor='middle' dy='.3em'%3E600 × 400%3C/text%3E%3C/svg%3E"
              >
                <source src={vid} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Text Content */}
          <div className={`text-content ${isVisible ? 'animate-in' : ''}`}>
            <p className="description">
              With over 5 years of experience in the industry, I've honed my skills in various editing 
              software and techniques. My passion lies in understanding the core message of a 
              project and translating it into a visual narrative that captivates and engages the 
              audience.
            </p>
            
            <p className="description">
              I specialize in color grading, sound design, motion graphics, and seamless 
              transitions to deliver a polished, professional final product. I offer a range of services 
              including social media clips, YouTube content, corporate videos, event highlights, 
              and more. Let's collaborate to make your next project a masterpiece.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;