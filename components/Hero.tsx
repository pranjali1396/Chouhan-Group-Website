import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const SLIDES = [
  {
    id: 1,
    image: '/new_images/CAM-4_optimized.webp',
    title: "Find Your New Home",
    link: "/new-homes",
    cta: "Explore Communities"
  },
  {
    id: 2,
    image: '/new_images/Parkview_complex_card_optimized.webp',
    title: "View Our Diverse Commercial Portfolio",
    link: "/commercial",
    cta: "Browse Properties"
  },
  {
    id: 3,
    image: '/new_images/ELR_Balod_103_optimized.webp',
    title: "Discover Level Hotels & Furnished Suites",
    link: "/hospitality",
    cta: "BOOK YOUR STAY"
  },
  {
    id: 4,
    image: '/new_images/maruti-suzuki.webp',
    title: "India's Largest Automotive Network",
    link: "/automobile",
    cta: "Explore Brands"
  },
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

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  return (
    <div className="relative w-full h-[100dvh] lg:h-[100dvh] 2xl:h-[100vh] bg-slate-900 overflow-hidden group touch-pan-y">
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
              {...(index === 0 ? { fetchPriority: "high" } : {})}
            />
            {/* Preload Next Image */}
            {index === current && (
              <link rel="preload" as="image" href={SLIDES[(index + 1) % SLIDES.length].image} />
            )}
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-black/40 md:bg-gradient-to-r md:from-black/70 md:via-black/40 md:to-transparent"></div>

          {/* Text Content */}
          {/* Text Content */}
          <div className={`absolute inset-0 flex flex-col justify-center items-center text-center p-6 md:p-12 lg:p-16 xl:p-24 z-20 ${index === current ? 'animate-fadeIn' : ''}`}>
            <div className={`max-w-7xl space-y-4 md:space-y-6 mt-12 md:mt-20 transform transition-all duration-1000 ${index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

              {/* Orange Line */}
              <div className="w-12 h-1 md:w-16 md:h-1 bg-amber-500 mx-auto mb-5 md:mb-8"></div>

              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-gotham-std font-medium text-white leading-[1.05] drop-shadow-2xl">
                {slide.title}
              </h1>
              <div className="pt-6 md:pt-8">
                <Link
                  to={slide.link}
                  className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 md:px-8 md:py-4 font-bold tracking-widest uppercase text-[10px] md:text-xs hover:bg-amber-500 hover:text-white transition-all duration-300 shadow-lg rounded-sm"
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
          className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border border-white/50 hover:border-amber-500 bg-white/10 hover:bg-amber-500 text-white transition-all rounded-full backdrop-blur-md"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} className="md:w-6 md:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border border-white/50 hover:border-amber-500 bg-white/10 hover:bg-amber-500 text-white transition-all rounded-full backdrop-blur-md"
          aria-label="Next Slide"
        >
          <ChevronRight size={24} className="md:w-6 md:h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-4 md:bottom-12 md:left-12 z-20 flex gap-4 md:gap-6">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => { setCurrent(idx); setIsAutoPlaying(false); }}
            className={`h-1 transition-all duration-500 rounded-full shadow-sm ${idx === current ? 'w-10 md:w-16 bg-amber-500' : 'w-3 md:w-6 bg-white/50 hover:bg-white'
              }`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce cursor-pointer text-white/80 hover:text-white transition-colors"
      >
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default Hero;
