import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import './styles/Reviews.css';

const Reviews = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentReview, setCurrentReview] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechStart Inc.',
      rating: 5,
      review: 'Exceptional work! The video editing quality exceeded our expectations. The attention to detail and creative vision transformed our raw footage into a compelling brand story.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=100&h=100&fit=crop&crop=face',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Music Producer',
      company: 'Harmony Records',
      rating: 5,
      review: 'Working with this editor was a game-changer for our music videos. The visual storytelling perfectly complemented our tracks, and the final product was delivered ahead of schedule.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Content Creator',
      company: 'Social Media Influencer',
      rating: 5,
      review: 'Amazing experience! My social media content has never looked better. The editor understood my vision perfectly and delivered exactly what I needed to engage my audience.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Event Coordinator',
      company: 'Premier Events',
      rating: 5,
      review: 'Outstanding professionalism and creativity. The wedding videos were beautifully edited with perfect timing and emotional depth. Our clients were thrilled with the results.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    },
    {
      id: 5,
      name: 'Lisa Park',
      role: 'Brand Manager',
      company: 'Fashion Forward',
      rating: 5,
      review: 'The commercial videos produced for our fashion campaign were absolutely stunning. Great communication throughout the process and the final delivery was flawless.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'CEO',
      company: 'Innovation Labs',
      rating: 5,
      review: 'Professional, reliable, and incredibly talented. Our corporate training videos were transformed into engaging content that our employees actually want to watch.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleTransition((prev) => (prev + 1) % reviews.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const handleTransition = (newIndex) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentReview(typeof newIndex === 'function' ? newIndex(currentReview) : newIndex);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 200);
  };

  const nextReview = () => {
    handleTransition((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    handleTransition((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={20}
        className={`star-animation ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
        }`}
        style={{ animationDelay: `${index * 0.1}s` }}
      />
    ));
  };

  return (
    <section id="reviews" className="reviews-section">
      <div className="floating-elements">
        <div className="floating-element floating-element-1"></div>
        <div className="floating-element floating-element-2"></div>
        <div className="floating-element floating-element-3"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div ref={ref} className={`main-content ${inView ? 'animate-in' : ''}`}>
          {/* Section Header */}
          <div className="text-center mb-16 header-section">
            <div className="sparkle-icon">
              <Sparkles className="w-8 h-8 text-purple-400 mx-auto mb-4 animate-pulse" />
            </div>
            <h2 className="section-title">
              Client Reviews
            </h2>
            <div className="title-glow"></div>
            <p className="section-subtitle">
              Don't just take my word for it - here's what my clients have to say
            </p>
          </div>

          {/* Main Review Carousel */}
          <div className="relative max-w-4xl mx-auto mb-12">
            <div className={`main-review-card ${isTransitioning ? 'transitioning' : ''}`}>
              {/* Animated Background */}
              <div className="card-bg-animation"></div>
              
              {/* Quote Icon */}
              <div className="quote-icon">
                <Quote size={40} />
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-6 stars-container">
                {renderStars(reviews[currentReview].rating)}
              </div>

              {/* Review Text */}
              <blockquote className="review-text">
                "{reviews[currentReview].review}"
              </blockquote>

              {/* Reviewer Info */}
              <div className="reviewer-info">
                <div className="avatar-container">
                  <img
                    src={reviews[currentReview].avatar}
                    alt={reviews[currentReview].name}
                    className="reviewer-avatar"
                  />
                  <div className="avatar-glow"></div>
                </div>
                <div className="reviewer-details">
                  <h4 className="reviewer-name">
                    {reviews[currentReview].name}
                  </h4>
                  <p className="reviewer-role">
                    {reviews[currentReview].role}
                  </p>
                  <p className="reviewer-company">
                    {reviews[currentReview].company}
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button onClick={prevReview} className="nav-button nav-button-left">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={nextReview} className="nav-button nav-button-right">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="dots-container">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleTransition(index)}
                  className={`dot ${index === currentReview ? 'dot-active' : ''}`}
                />
              ))}
            </div>
          </div>

          {/* Review Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {reviews.slice(0, 3).map((review, index) => (
              <div
                key={review.id}
                className="review-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-inner">
                  <div className="flex mb-3">
                    {renderStars(review.rating)}
                  </div>
                  <p className="card-review-text">
                    "{review.review.slice(0, 120)}..."
                  </p>
                  <div className="card-reviewer-info">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="card-avatar"
                    />
                    <div>
                      <h5 className="card-reviewer-name">
                        {review.name}
                      </h5>
                      <p className="card-reviewer-company">
                        {review.company}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-glow"></div>
              </div>
            ))}
          </div>

          {/* Overall Rating */}
          <div className="text-center">
            <div className="overall-rating-card">
              <div className="rating-bg-effect"></div>
              <div className="flex justify-center mb-2">
                {renderStars(5)}
              </div>
              <p className="overall-rating-number">5.0 out of 5</p>
              <p className="overall-rating-text">Based on {reviews.length} client reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;