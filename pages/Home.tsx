
import React, { useRef } from 'react';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Home as HomeIcon, Building2, Car, Coffee, 
  CheckCircle2, ShoppingBag, BedDouble, Hammer, TrendingUp, ChevronLeft, ChevronRight
} from 'lucide-react';

const SERVICE_HIGHLIGHTS = [
  {
    title: "Housing Business",
    desc: "Discover the Art of Exceptional Living! Your Dream Home Awaits in Our Stunning Collection of Flats, Row Houses, and Apartments.",
    icon: <HomeIcon size={24} />,
    image: "https://images.unsplash.com/photo-1600596542815-e32cb718d202?q=80&w=800&fit=crop",
    link: "/new-homes"
  },
  {
    title: "Commercial Projects",
    desc: "Premium commercial spaces designed for success. From retail outlets to office complexes, we build landmarks for businesses.",
    icon: <Building2 size={24} />,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&fit=crop",
    link: "/commercial"
  },
  {
    title: "Hospitality",
    desc: "Experience unmatched luxury at our hotels and resorts. Where every stay is an experience beyond expectations!",
    icon: <Coffee size={24} />,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&fit=crop",
    link: "/hospitality"
  },
  {
    title: "Automobiles",
    desc: "Proud partners of Maruti Suzuki Arena, NEXA, Hero, and Ashok Leyland. Driving excellence in mobility.",
    icon: <Car size={24} />,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&fit=crop",
    link: "/auto/maruti"
  },
  {
    title: "Construction Division",
    desc: "In-house construction expertise ensuring superior quality, timely delivery, and precision engineering in every project.",
    icon: <Hammer size={24} />,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&fit=crop",
    link: "/about/constructions"
  },
  {
    title: "Capital Division",
    desc: "Strategic investment partners providing growth capital to founder-led companies in technology and beyond.",
    icon: <TrendingUp size={24} />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&fit=crop",
    link: "/about/capital"
  }
];

const PROJECTS = [
  {
    title: "Chouhan Park View",
    desc: "A prestigious project by Chouhan Group, is located on Junwani Road, Bhilai",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&fit=crop",
    link: "/new-homes/parkview"
  },
  {
    title: "Chouhan Green Valley",
    desc: "One of the popular residential developments in Bhilai.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&fit=crop",
    link: "/new-homes/green-valley"
  },
  {
    title: "Singapore Life City I",
    desc: "A well-planned modern and smart layout city inspired by Singapore, is at Bhilai.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&fit=crop",
    link: "/new-homes/singapore-life"
  }
];

const STATS = [
  { count: "1500", label: "Residential", icon: <HomeIcon /> },
  { count: "500", label: "Bunglows", icon: <HomeIcon /> },
  { count: "3", label: "Commercial", icon: <Building2 /> },
  { count: "2", label: "Mall", icon: <ShoppingBag /> },
  { count: "1", label: "Hotel", icon: <BedDouble /> },
  { count: "20", label: "Years of Experience", icon: <CheckCircle2 /> }
];

const Home: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.offsetWidth < 768 ? current.offsetWidth : 400; // Scroll one card width approx
      
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      <Hero />
      
      <CategoryGrid />

      {/* About Us Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="lg:w-1/2">
              <span className="text-amber-600 font-bold tracking-[0.2em] text-xs uppercase mb-6 block">About Us</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-8 leading-tight">
                CHOUHAN GROUP <br/>
                <span className="text-slate-400 font-light text-2xl md:text-4xl block mt-2">A Legacy of Trust, A Future of Innovation</span>
              </h2>
              <div className="h-0.5 w-24 bg-amber-500 mb-10"></div>
              <p className="text-slate-600 leading-loose text-lg font-light mb-6">
                Chouhan Group is a leading real estate developer in Bhilai, Chhattisgarh, Founded in 1998 by Mr. Ajay Chouhan. Renowned for its impactful residential and commercial projects. The group is celebrated for its commitment to quality and timely delivery.
              </p>
              <p className="text-slate-600 leading-loose text-lg font-light mb-10">
                Expanding its portfolio, Chouhan Group excels in automotive sectors with Maruti Suzuki ARENA and NEXA, and hospitality with Empyrean Hotels and Empyrean Lake Resorts, showcasing its diverse expertise and excellence.
              </p>
              <Link to="/about/group" className="inline-flex items-center gap-3 text-slate-900 font-bold border-b-2 border-amber-500 pb-2 hover:text-amber-600 transition-colors uppercase tracking-widest text-xs">
                Know More <ArrowRight size={14} />
              </Link>
            </div>
            <div className="lg:w-1/2 relative w-full">
               <div className="absolute -inset-4 bg-amber-50 rounded-2xl transform rotate-2"></div>
               <img 
                 src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200" 
                 alt="Chouhan Group Legacy" 
                 className="relative rounded-xl shadow-2xl w-full h-[400px] md:h-[600px] object-cover"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights Slider */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">Our Service Highlights</h2>
              <p className="text-slate-600 leading-relaxed text-lg font-light">
                Chouhan Group excels in diverse sectors, delivering innovation and excellence across real estate, hospitality, automotive, and more.
              </p>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <button 
                onClick={() => scroll('left')} 
                className="w-14 h-14 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-900 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-sm"
                aria-label="Previous service"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => scroll('right')} 
                className="w-14 h-14 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-900 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-sm"
                aria-label="Next service"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Slider Container */}
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-16 pt-4 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none' 
            }}
          >
            {SERVICE_HIGHLIGHTS.map((service, idx) => (
              <div 
                key={idx} 
                className="min-w-[85vw] md:min-w-[380px] lg:min-w-[400px] snap-center bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-visible flex flex-col hover:-translate-y-2 relative border border-slate-100/50 mt-2"
              >
                
                {/* Image Container */}
                <div className="h-64 w-full overflow-hidden relative rounded-t-2xl">
                   <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                   <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                
                {/* Floating Icon Button */}
                <div className="absolute top-64 right-8 -translate-y-1/2 z-30">
                   <div className="bg-white p-4 rounded-full text-amber-500 shadow-xl group-hover:scale-110 transition-transform duration-300 border border-slate-50 flex items-center justify-center w-16 h-16">
                     {service.icon}
                   </div>
                </div>

                <div className="p-8 pt-12 flex-grow flex flex-col">
                   <h3 className="text-2xl font-bold font-heading text-slate-900 mb-4 group-hover:text-amber-600 transition-colors">{service.title}</h3>
                   <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">{service.desc}</p>
                   <Link to={service.link} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-amber-600 transition-colors mt-auto group-hover:gap-3">
                     Explore <ArrowRight size={14} />
                   </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Progress Bar / Indicator (Optional visual cue) */}
          <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden max-w-xs mx-auto mt-4 md:hidden">
             <div className="h-full bg-slate-400 w-1/3 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Housing Project Feature */}
      <section className="py-20 md:py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000')] bg-cover bg-fixed"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="lg:w-1/2">
              <span className="text-amber-500 font-bold tracking-[0.2em] text-xs uppercase mb-6 block">HOUSING PROJECT</span>
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight">
                Your Dream Abode Awaits at Chouhan Residences
              </h2>
              <div className="space-y-8 text-slate-300 leading-loose font-light text-lg">
                <p>
                  Discover the pinnacle of contemporary living at the Housing Project by Chouhan Group. Our elegantly designed homes reinvent urban life with their comfort and sophistication. Ideally positioned for ease of access, every residence is a haven that seamlessly combines modern design and practicality.
                </p>
                <p>
                  A peaceful living is provided by Chouhan Group's Housing Project, which is dedicated to providing high-quality construction and prompt delivery. Enter a world where every little detail has been carefully considered to create houses that are also safe havens for prosperous families.
                </p>
              </div>
              <Link to="/new-homes" className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 md:px-10 md:py-5 font-bold tracking-widest uppercase text-xs hover:bg-amber-500 hover:text-white transition-all duration-300 mt-12 rounded-sm shadow-xl">
                Explore Your Dream Home <ArrowRight size={16} />
              </Link>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-6 w-full">
               <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600" className="rounded-xl shadow-2xl translate-y-8 grayscale hover:grayscale-0 transition-all duration-500" alt="Interior 1" />
               <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=600" className="rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500" alt="Interior 2" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Projects */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-amber-600 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">OUR PROJECTS</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">Exceptional Developments</h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg font-light">
              Discover our visionary projects at Chouhan Group, seamlessly blending quality, innovation, and elegance. Each development is a testament to our commitment to transforming lifestyles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-8 h-72 shadow-lg">
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                   <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                   <div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                     <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                   </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">{project.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{project.desc}</p>
                <Link to={project.link} className="text-slate-900 font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all hover:text-amber-600">
                  View Project <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <Link to="/new-homes" className="inline-block border border-slate-900 text-slate-900 px-10 py-4 font-bold uppercase tracking-widest text-xs hover:bg-slate-900 hover:text-white transition-all rounded-sm">
              Explore Our Exceptional Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-20 bg-amber-500 text-white">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center divide-x divide-white/20">
             {STATS.map((stat, idx) => (
               <div key={idx} className="p-4">
                 <div className="text-4xl md:text-6xl font-black mb-3">{stat.count}</div>
                 <div className="text-xs uppercase tracking-widest font-bold opacity-80">{stat.label}</div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-white text-center">
        <div className="container mx-auto px-4">
          <span className="text-slate-400 font-bold tracking-[0.2em] text-xs uppercase mb-6 block">CHOUHAN GROUP</span>
          <h2 className="text-4xl md:text-6xl font-heading font-black text-slate-900 mb-8 md:mb-10">
            Reach Out, Let's Create Together.
          </h2>
          <p className="text-lg md:text-2xl text-slate-500 font-light max-w-4xl mx-auto mb-12 md:mb-16">
            Reach out to Chouhan Group's dedicated team. Whether it's inquiries, collaborations, or your dream project, we're here to turn your vision into reality. Connect today.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-5 font-bold tracking-widest uppercase text-xs md:text-sm hover:bg-amber-500 hover:text-white transition-all duration-300 shadow-2xl rounded-sm">
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
