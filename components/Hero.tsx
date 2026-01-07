
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const SLIDES = [
  {
    id: 1,
    image: '/new images/chouhan_town_2.webp',
  },
  {
    id: 2,
    image: '/new images/ai_nexa_showroom.png',
  },
  {
    id: 3,
    image: '/new images/pro.png',
  },
  {
    id: 3,
    image: '/new images/hero1.webp',
  },
  {
    id: 4,
    image: '/new images/hero2.webp',
  },
  {
    id: 5,
    image: '/new images/ELR_Balod 104.jpg',
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
    <div className="relative w-full h-[300px] sm:h-[500px] lg:h-[90vh] 2xl:h-[100vh] bg-slate-900 overflow-hidden group touch-pan-y">
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
            />
          </div>

          {/* Gradient Overlay - Extremely minimal for maximum image clarity */}
          <div className="absolute inset-0 bg-black/20 md:bg-gradient-to-r md:from-black/40 md:via-transparent md:to-transparent"></div>


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
