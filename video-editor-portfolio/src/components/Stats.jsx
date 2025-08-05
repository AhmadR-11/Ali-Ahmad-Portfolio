import React, { useEffect, useRef, useState } from 'react';
import { FolderCheck, Clock, Users, Film } from 'lucide-react';
import './styles/Stats.css';

// Custom hook for count up animation
const useCountUp = (target, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    const startTime = Date.now();
    const startValue = 0;
    
    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(startValue + (target - startValue) * easeOutQuart);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(target);
        setIsAnimating(false);
      }
    };
    
    requestAnimationFrame(updateCount);
  };

  return { count, startAnimation, isAnimating };
};

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const completedProjects = useCountUp(150, 2000);
  const ongoingProjects = useCountUp(8, 2000);
  const happyClients = useCountUp(95, 2000);
  const hoursOfFootage = useCountUp(2500, 2000);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start all animations
          setTimeout(() => {
            completedProjects.startAnimation();
          }, 200);
          setTimeout(() => {
            ongoingProjects.startAnimation();
          }, 400);
          setTimeout(() => {
            happyClients.startAnimation();
          }, 600);
          setTimeout(() => {
            hoursOfFootage.startAnimation();
          }, 800);
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

  const stats = [
    {
      icon: <FolderCheck className="stat-icon" />,
      count: completedProjects.count,
      label: 'Completed Projects',
      suffix: '+',
      bgColor: 'stat-green',
      delay: 0.2
    },
    {
      icon: <Clock className="stat-icon" />,
      count: ongoingProjects.count,
      label: 'Ongoing Projects',
      suffix: '',
      bgColor: 'stat-blue',
      delay: 0.4
    },
    {
      icon: <Users className="stat-icon" />,
      count: happyClients.count,
      label: 'Happy Clients',
      suffix: '%',
      bgColor: 'stat-purple',
      delay: 0.6
    },
    {
      icon: <Film className="stat-icon" />,
      count: hoursOfFootage.count,
      label: 'Hours of Footage',
      suffix: '+',
      bgColor: 'stat-orange',
      delay: 0.8
    },
  ];

  return (
    <section ref={sectionRef} className="stats-section" id="stats">
      <div className="stats-container">
        {/* Section Header */}
        <div className={`stats-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="stats-title">My Journey in Numbers</h2>
          <p className="stats-subtitle">
            Building trust through consistent delivery and exceptional results
          </p>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`stat-card ${isVisible ? 'animate-in' : ''}`}
              style={{ '--delay': `${stat.delay}s` }}
            >
              <div className={`stat-icon-wrapper ${stat.bgColor}`}>
                {stat.icon}
              </div>
              <div className="stat-number">
                {stat.count}{stat.suffix}
              </div>
              <div className="stat-label">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`stats-info ${isVisible ? 'animate-in' : ''}`}>
          <div className="info-card">
            <h3 className="info-title">
              Why Choose Professional Video Editing?
            </h3>
            <div className="info-grid">
              <div className="info-item">
                <h4 className="info-item-title">Quality Assurance</h4>
                <p className="info-item-text">
                  Every project undergoes rigorous quality checks to ensure professional standards.
                </p>
              </div>
              <div className="info-item">
                <h4 className="info-item-title">Timely Delivery</h4>
                <p className="info-item-text">
                  Consistent on-time delivery with transparent communication throughout the process.
                </p>
              </div>
              <div className="info-item">
                <h4 className="info-item-title">Creative Excellence</h4>
                <p className="info-item-text">
                  Innovative editing solutions that make your content stand out from the competition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;