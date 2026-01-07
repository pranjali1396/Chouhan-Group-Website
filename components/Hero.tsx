import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SLIDES = [
  {
    id: 1,
    image: '/new images/hero1.webp',
    title: "Pioneering Infrastructure in Bhilai-Durg",
    subtitle: "Choose from a range of flats, row houses, apartments, and commercial complex tailored to your needs and aspirations.",
    link: "/new-homes",
    cta: "FIND YOUR PERFECT PLACE"
  },
  {
    id: 2,
    image: '/new images/pro_optimized.webp',
    title: "Spaces Designed for Success",
    subtitle: "Premium commercial properties offering the perfect environment for your business to thrive.",
    link: "/commercial",
    cta: "EXPLORE COMMERCIAL"
  },
  {
    id: 3,
    image: '/new images/ELR_Balod_104_optimized.webp',
    title: "Experience Unmatched Luxury",
    subtitle: "From serene lake resorts to premium city hotels, experience hospitality at its finest.",
    link: "/hospitality",
    cta: "BOOK YOUR STAY"
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
    <div className="relative w-full h-[500px] lg:h-[90vh] 2xl:h-[100vh] bg-slate-900 overflow-hidden group touch-pan-y">
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
        >
          {/* Image with Parallax-like scale effect */}
          <div className={`w-full h-full transition-transform duration-[8000ms] ease-out ${index === current ? 'scale-110' : 'scale-100'}`}>
            <img
              src={slide.image}
              alt="Chouhan Group Project View"
              className="w-full h-full object-cover object-center"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              {...(index === 0 ? { fetchpriority: "high" } as any : {})}
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-black/40 md:bg-gradient-to-r md:from-black/70 md:via-black/40 md:to-transparent"></div>

          {/* Text Content */}
          <div className={`absolute inset-0 flex flex-col justify-center items-center text-center p-8 md:p-16 lg:p-20 z-20 ${index === current ? 'animate-fadeIn' : ''}`}>
            <div className={`max-w-7xl space-y-6 transform transition-all duration-1000 ${index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

              {/* Orange Line */}
              <div className="w-16 h-1 bg-amber-500 mx-auto mb-6"></div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-[1.1] drop-shadow-xl">
                {slide.title}
              </h1>
              <p className="text-base md:text-xl text-slate-200 font-light max-w-4xl mx-auto drop-shadow-md leading-relaxed">
                {slide.subtitle}
              </p>
              <div className="pt-8">
                <Link
                  to={slide.link}
                  className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 font-bold tracking-widest uppercase text-xs hover:bg-amber-500 hover:text-white transition-all duration-300 shadow-lg rounded-sm"
                >
                  {slide.cta} <ArrowRight size={16} />
                </Link>
              </div>
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
            className={`h-1 transition-all duration-500 rounded-full shadow-sm ${idx === current ? 'w-10 md:w-16 bg-amber-500' : 'w-3 md:w-6 bg-white/30 hover:bg-white'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
