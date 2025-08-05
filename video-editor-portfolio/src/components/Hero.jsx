import React from 'react';
import { Play, Download, ChevronDown, Star, Award } from 'lucide-react';
import Pic from '../assets/Pic.jpg';
import './styles/Hero.css'; // Assuming you have a CSS file for styles


const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section w-full min-h-screen bg-gray-900 pt-24 md:pt-32 lg:pt-40 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content Section */}
          <div className="space-y-6 animate-slide-in-from-left">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tighter text-white">
              Transforming Your Vision into{' '}
              <span className="text-blue-400">Cinematic Reality</span>
            </h1>
            
            {/* Subheading */}
            <p className="max-w-[600px] text-gray-300 md:text-xl leading-relaxed">
              I'm Ahmad, a passionate freelance video editor dedicated to
              crafting compelling stories through the art of editing. From
              corporate videos to cinematic vlogs, I bring your footage to life.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start mb-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300 font-medium"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300 font-medium"
              >
                Get in Touch
                <ChevronDown size={16} className="rotate-[-90deg]" />
              </button>
            </div>
          </div>
          
          {/* Right Image Section */}
          <div className="animate-fade-in-right flex justify-center">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative z-10">
                <div className="w-96 h-96 bg-gray-200 rounded-full flex items-center justify-center shadow-2xl">
                  <img
                    src={Pic}  // Replace with your actual image path
                    alt="Ahmad - Professional Video Editor"
                    width={500}
                    height={500}
                    className="rounded-full object-cover aspect-square z-10 border-4 border-secondary shadow-2xl transition-transform duration-500 group-hover:scale-105 animate-float-once"
                    data-ai-hint="man portrait"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-gray-200 transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;