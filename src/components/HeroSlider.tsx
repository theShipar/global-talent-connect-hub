
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Plane } from 'lucide-react';

interface SlideProps {
  image: string;
  title: string;
  subtitle: string;
}

const slides: SlideProps[] = [
  {
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
    title: 'Global Recruitment Excellence',
    subtitle: 'Connecting talented professionals with international opportunities',
  },
  {
    image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3',
    title: 'Diverse Industry Solutions',
    subtitle: 'From construction to hospitality, we provide skilled workers worldwide',
  },
  {
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    title: 'Transform Your Career',
    subtitle: 'Discover new horizons with our immigration support services',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-mrto-navy/80 to-black/50"></div>
          </div>
          
          {/* Slide Content */}
          <div className="relative z-20 h-full flex items-center justify-center px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 opacity-0 animate-fade-in slide-delay-1">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in slide-delay-2">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 opacity-0 animate-fade-in slide-delay-3">
                <a href="#contact" className="btn-primary">Contact Us</a>
                <a href="#services" className="btn-secondary">Our Services</a>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Main Tagline */}
      <div className="absolute bottom-10 left-0 right-0 z-30 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-white text-lg md:text-xl italic font-poppins">
            "Connecting World-Class Talent with Global Opportunities – Empowering Industries, Enriching Lives."
          </p>
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Airplane Animation */}
      <div className="absolute top-20 z-30 w-full overflow-hidden pointer-events-none">
        <Plane className="text-white/60 animate-fly-right" size={36} />
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-mrto-gold w-6' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
