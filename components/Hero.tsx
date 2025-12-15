
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop',
    alt: 'Pioneering Infrastructure',
    title: 'Pioneering Infrastructure in Bhilai-Durg',
    subtitle: 'Choose from a range of flats, row houses, apartments, and commercial complex tailored to your needs and aspirations.',
    cta: 'Find Your Perfect Place',
    link: '/new-homes'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop',
    alt: 'Commercial Excellence',
    title: 'Spaces Designed for Success',
    subtitle: 'Premium commercial properties offering the perfect environment for your business to thrive.',
    cta: 'Explore Commercial',
    link: '/commercial'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop',
    alt: 'Luxury Hospitality',
    title: 'Experience Unmatched Luxury',
    subtitle: 'From serene lake resorts to premium city hotels, experience hospitality at its finest.',
    cta: 'Book Your Stay',
    link: '/hospitality'
  }
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  return (
    <div className="relative w-full h-[600px] md:h-[800px] bg-slate-900 overflow-hidden group touch-pan-y">
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Image with Parallax-like scale effect */}
          <div className={`w-full h-full transition-transform duration-[8000ms] ease-out ${index === current ? 'scale-110' : 'scale-100'}`}>
             <img 
              src={slide.image} 
              alt={slide.alt} 
              className="w-full h-full object-cover object-center opacity-70"
            />
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center container mx-auto px-4 md:px-12 text-center">
            <div className={`max-w-5xl transform transition-all duration-1000 delay-300 ${index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="h-0.5 w-16 md:w-24 bg-amber-500 mb-6 md:mb-8 mx-auto"></div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6 tracking-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl text-slate-100 mb-10 md:mb-12 font-light max-w-3xl mx-auto leading-relaxed tracking-wide opacity-90">
                {slide.subtitle}
              </p>
              <Link 
                to={slide.link} 
                className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 md:px-10 md:py-5 font-bold tracking-widest uppercase text-xs md:text-sm hover:bg-amber-500 hover:text-white transition-all duration-300 hover:scale-105 shadow-xl rounded-sm"
              >
                {slide.cta}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls - Smaller and repositioned on mobile */}
      <div className="absolute bottom-8 right-4 md:bottom-12 md:right-12 z-20 flex gap-2 md:gap-4">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border border-white/20 hover:border-amber-500 bg-white/5 hover:bg-amber-500 text-white transition-all rounded-full backdrop-blur-md"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} className="md:w-6 md:h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border border-white/20 hover:border-amber-500 bg-white/5 hover:bg-amber-500 text-white transition-all rounded-full backdrop-blur-md"
          aria-label="Next Slide"
        >
          <ChevronRight size={24} className="md:w-6 md:h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-4 md:bottom-12 md:left-12 z-20 flex gap-2 md:gap-3">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => { setCurrent(idx); setIsAutoPlaying(false); }}
            className={`h-1 transition-all duration-500 rounded-full shadow-sm ${
              idx === current ? 'w-10 md:w-16 bg-amber-500' : 'w-3 md:w-6 bg-white/30 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
