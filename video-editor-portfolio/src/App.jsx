import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('dark');


  // Apply theme to body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="min-h-screen">
      <Navbar/>
      <Hero />
      <About />
      <Stats />
      <Projects />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
