
import React, { useRef } from 'react';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Home as HomeIcon, Building2, Car, Coffee,
  CheckCircle2, ShoppingBag, BedDouble, Hammer, TrendingUp, ChevronLeft, ChevronRight,
  Briefcase, Hotel, Award, Utensils
} from 'lucide-react';


const SERVICE_HIGHLIGHTS = [
  {
    title: "Housing Business",
    desc: "Discover the Art of Exceptional Living! Your Dream Home Awaits in Our Stunning Collection of Flats, Row Houses, and Apartments.",
    icon: <HomeIcon size={24} />,
    image: "/new_images/New%20homes.png",
    link: "/new-homes"
  },
  {
    title: "Commercial Projects",
    desc: "Premium commercial spaces designed for success. From retail outlets to office complexes, we build landmarks for businesses.",
    icon: <Building2 size={24} />,
    image: "/new_images/parview.png",
    link: "/commercial"
  },
  {
    title: "Hospitality",
    desc: "Experience unmatched luxury at our hotels and resorts. Where every stay is an experience beyond expectations!",
    icon: <Coffee size={24} />,
    image: "/new_images/chouhan2.jpg",
    link: "/hospitality"
  },
  {
    title: "Automobiles",
    desc: "Proud partners of Maruti Suzuki Arena, NEXA, Hero, and Ashok Leyland. Driving excellence in mobility.",
    icon: <Car size={24} />,
    image: "/new_images/NexaCardImage.png",
    link: "/automobile"
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
    image: "/new_images/DJI_0720.JPG",
    link: "/new-homes/parkview"
  },
  {
    title: "Chouhan Green Valley",
    desc: "One of the popular residential developments in Bhilai.",
    image: "/new_images/chouhan-green-valley-6_(1).webp",
    link: "/new-homes/green-valley"
  },
  {
    title: "Singapore Life City I,II and IV",
    desc: "A well-planned modern and smart layout city inspired by Singapore, is at Bhilai.",
    image: "/new_images/singa_gate_half.webp",
    link: "/new-homes/singapore-life"
  }
];

const AUTOMOBILE_PARTNERS = [
  {
    name: "Maruti Suzuki Arena",
    brand: "ARENA",
    image: "/new_images/MarutiCardImage.png",
    link: "/automobile/maruti",
    desc: "India's most loved car destination",
    tagline: "Experience the joy of mobility",
    position: "center"
  },
  {
    name: "Nexa",
    brand: "NEXA",
    image: "/new_images/NexaCardImage.png",
    link: "/automobile/nexa",
    desc: "Create. Inspire. Premium automotive experience",
    tagline: "The premium side of driving",
    position: "center"
  },
  {
    name: "Hero MotoCorp",
    brand: "HERO",
    image: "/new_images/herofinal.webp",
    link: "/automobile/hero",
    desc: "The world's largest two-wheeler manufacturer",
    tagline: "Be a Hero",
    position: "center"
  },
  {
    name: "True Value",
    brand: "TRUE VALUE",
    image: "/new_images/trueshowroom.webp",
    link: "/automobile/true-value",
    desc: "Pre-owned cars with trust and transparency",
    tagline: "Certified pre-owned excellence",
    position: "center"
  },
  {
    name: "Ashok Leyland",
    brand: "ASHOK LEYLAND",
    image: "/new_images/ashok-leyland.webp",
    link: "/automobile/ashok",
    desc: "Leading name in commercial vehicles",
    tagline: "Aapki Jeet, Hamari Maat",
    position: "left"
  }
];

const HOSPITALITY_PARTNERS = [
  {
    name: "Empyrean Hotels Bhilai",
    brand: "HOTEL",
    image: "/new_images/chouhan2.jpg",
    link: "/hospitality/empyrean-bhilai",
    desc: "Luxury redefined in the heart of Bhilai",
    tagline: "Where comfort meets elegance"
  },
  {
    name: "Empyrean Resort Balod",
    brand: "RESORT",
    image: "/new_images/ELR_Balod_25.jpg",
    link: "/hospitality/empyrean-balod",
    desc: "A tranquil riverside escape for the soul",
    tagline: "Nature's finest retreat"
  },
  {
    name: "Empyrean Tatibandh",
    brand: "HOTEL",
    image: "/new_images/tumdibod.png",
    link: "/hospitality/empyrean-tatibandh",
    desc: "A premium transit hotel in Raipur",
    tagline: "Efficiency meets elegance"
  },
  {
    name: "Hotel Skypark",
    brand: "HOTEL",
    image: "/new_images/skypark.png",
    link: "/hospitality/skypark",
    desc: "Modern luxury for the business traveler",
    tagline: "Elevated urban living"
  }
];

const IMPACT_GRID = [
  { count: "3500+", label: "Residential UNITS", icon: <Building2 className="text-amber-500" size={32} /> },
  { count: "500+", label: "BUSINESSES", icon: <Briefcase className="text-amber-500" size={32} /> },
  { count: "10+", label: "Commercial COMPLEX", icon: <Building2 className="text-amber-500" size={32} /> },
  { count: "1", label: "MALL", icon: <ShoppingBag className="text-amber-500" size={32} /> },
  { count: "5+", label: "Luxury HOTELS", icon: <Hotel className="text-amber-500" size={32} /> },
  { count: "28+", label: "Years Experience", icon: <Award className="text-amber-500" size={32} /> }
];

const Home: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.offsetWidth < 768 ? current.offsetWidth : 400;

      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-home text-slate-800">
      <Hero />

      <CategoryGrid />

      {/* About Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-24 items-center">
            <div className="lg:w-1/2">
              <span className="text-amber-600 font-bold tracking-[0.2em] text-xs uppercase mb-6 block">About Us</span>
              <h2 className="text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl font-heading font-black text-black mb-8 leading-[1.05]">
                CHOUHAN GROUP <br />
                <span className="text-slate-500 font-medium text-xl md:text-2xl xl:text-4xl block mt-4">A Legacy of Trust, A Future of Innovation</span>
              </h2>
              <div className="h-0.5 w-24 bg-amber-500 mb-10"></div>
              <p className="text-slate-800 leading-loose text-base md:text-lg font-medium mb-6">
                Chouhan Group is a leading real estate developer in Bhilai, Chhattisgarh, Founded in 1998 by Mr. Ajay Chouhan. Renowned for its impactful residential and commercial projects. The group is celebrated for its commitment to quality and timely delivery.
              </p>
              <p className="text-slate-800 leading-loose text-base md:text-lg font-medium mb-10">
                Expanding its portfolio, Chouhan Group excels in automotive sectors with Maruti Suzuki ARENA and NEXA, and hospitality with Empyrean Hotels and Empyrean Lake Resorts, showcasing its diverse expertise and excellence.
              </p>
              <Link to="/about/group" className="inline-flex items-center gap-3 text-slate-900 font-bold border-b-2 border-amber-500 pb-2 hover:text-amber-600 transition-colors uppercase tracking-widest text-xs">
                Know More <ArrowRight size={14} />
              </Link>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/new_images/sunrixecity_04.webp"
                  alt="Chouhan Group Landmark"
                  className="w-full h-[400px] md:h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights Slider */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8 text-center md:text-left">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl font-heading font-black text-black mb-6 leading-tight">Our Service Highlights</h2>
              <p className="text-slate-800 leading-relaxed text-base md:text-lg font-medium">
                Chouhan Group excels in diverse sectors, delivering innovation and excellence across real estate, hospitality, automotive, and more.
              </p>
            </div>

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

          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-8 pt-4 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {SERVICE_HIGHLIGHTS.map((service, idx) => (
              <div
                key={idx}
                className="min-w-[85vw] md:min-w-[340px] lg:min-w-[380px] snap-center bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-visible flex flex-col hover:-translate-y-2 relative border border-slate-100/50 mt-2"
              >
                <div className="h-64 w-full overflow-hidden relative rounded-t-2xl">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="absolute top-64 right-8 -translate-y-1/2 z-30">
                  <div className="bg-white p-4 rounded-full text-amber-500 shadow-xl group-hover:scale-110 transition-transform duration-300 border border-slate-50 flex items-center justify-center w-16 h-16">
                    {service.icon}
                  </div>
                </div>

                <div className="p-8 pt-12 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold font-heading text-black mb-4 group-hover:text-amber-600 transition-colors uppercase tracking-tight">{service.title}</h3>
                  <p className="text-slate-700 text-sm leading-relaxed mb-8 flex-grow font-medium">{service.desc}</p>
                  <Link to={service.link} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-amber-600 transition-colors mt-auto group-hover:gap-3">
                    Explore <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats Section - Modern Split Layout */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-24">

            {/* Left Side: Illustration */}
            <div className="lg:w-1/2 w-full max-w-xl xl:max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute -inset-10 bg-amber-50 rounded-full opacity-50 blur-3xl -z-10"></div>
                <img
                  src="/new_images/impact_house.png"
                  alt="Chouhan Group Impact Illustration"
                  className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Right Side: Stats Grid */}
            <div className="lg:w-1/2 w-full lg:pl-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 xl:gap-x-12 gap-y-10 xl:gap-y-12">
                {IMPACT_GRID.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 xl:gap-5 group"
                  >
                    <div className="shrink-0 p-3 md:p-4 bg-amber-50 rounded-2xl group-hover:bg-amber-100 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-2xl xl:text-3xl 2xl:text-4xl font-black text-black leading-none mb-1">
                        {item.count}
                      </div>
                      <div className="text-[9px] xl:text-[10px] font-black tracking-[0.2em] text-slate-600 uppercase">
                        {item.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Housing Project Feature */}
      <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-fixed" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000")' }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/80"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-24 items-center">
            <div className="lg:w-5/12">
              <span className="text-amber-500 font-bold tracking-[0.2em] text-xs uppercase mb-6 block">HOUSING PROJECT</span>
              <h2 className="text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl font-heading font-black mb-8 leading-tight">
                Your Dream Abode Awaits at Chouhan Residences
              </h2>
              <div className="space-y-6 xl:space-y-8 text-slate-100 leading-loose font-medium text-base md:text-lg">
                <p>
                  Discover the pinnacle of contemporary living at the Housing Project by Chouhan Group. Our elegantly designed homes reinvent urban life with their comfort and sophistication. Ideally positioned for ease of access, every residence is a haven that seamlessly combines modern design and practicality.
                </p>
                <p>
                  A peaceful living is provided by Chouhan Group's Housing Project, which is dedicated to providing high-quality construction and prompt delivery. Enter a world where every little detail has been carefully considered to create houses that are also safe havens for prosperous families.
                </p>
              </div>
              <Link to="/new-homes" className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 md:px-10 md:py-5 font-bold tracking-widest uppercase text-xs hover:bg-amber-500 hover:text-white transition-all duration-300 mt-10 md:mt-12 rounded-sm shadow-xl">
                Explore Your Dream Home <ArrowRight size={16} />
              </Link>
            </div>
            <div className="lg:w-7/12 grid grid-cols-2 gap-6 xl:gap-8 w-full mt-12 lg:mt-0 overflow-hidden">
              <img
                src="/new_images/sunrisecity.webp"
                className="rounded-xl shadow-2xl translate-y-6 md:translate-y-8 transition-all duration-500 object-cover h-64 md:h-80 w-full"
                alt="Interior 1"
                loading="lazy"
                decoding="async"
              />
              <img
                src="/new_images/Parkview_Hero_optimized.webp"
                className="rounded-xl shadow-2xl transition-all duration-500 object-cover h-64 md:h-80 w-full"
                alt="Interior 2"
                loading="lazy"
                decoding="async"
              />
              <img
                src="/new_images/chouhan_sunrise_city_img_3.webp"
                className="rounded-xl shadow-2xl translate-y-6 md:translate-y-8 transition-all duration-500 object-cover h-64 md:h-80 w-full"
                alt="Interior 3"
                loading="lazy"
                decoding="async"
              />
              <img
                src="/new_images/WhatsApp_Image_2025-10-02_at_05.47.15_1a2db32e.jpg"
                className="rounded-xl shadow-2xl transition-all duration-500 object-cover h-64 md:h-80 w-full"
                alt="Interior 4"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Projects */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 md:mb-20 xl:mb-24">
            <span className="text-amber-600 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">OUR PROJECTS</span>
            <h2 className="text-2xl md:text-4xl xl:text-5xl font-heading font-black text-black mb-6">Exceptional Developments</h2>
            <p className="text-slate-800 max-w-3xl mx-auto text-base md:text-lg font-medium">
              Discover our visionary projects at Chouhan Group, seamlessly blending quality, innovation, and elegance. Each development is a testament to our commitment to transforming lifestyles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-6 md:mb-8 h-64 md:h-72 shadow-lg transition-transform duration-500 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute bottom-0 left-0 p-6 md:p-8 z-20 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3 group-hover:text-amber-600 transition-colors">{project.title}</h3>
                <p className="text-slate-500 text-[13px] md:text-sm leading-relaxed mb-6">{project.desc}</p>
                <Link to={project.link} className="text-slate-900 font-bold text-[10px] md:text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all hover:text-amber-600">
                  View Project <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 md:mt-20">
            <Link to="/new-homes" className="inline-block border border-slate-900 text-slate-900 px-8 py-3 md:px-10 md:py-4 font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-slate-900 hover:text-white transition-all rounded-sm">
              Explore Our Exceptional Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Automobile Showcase Section - New & Premium */}
      <section className="py-16 md:py-24 bg-white text-slate-900 relative overflow-hidden">
        <style>
          {`
            @keyframes slideCarIn {
              from { transform: translateX(100%); opacity: 0; }
              to { transform: translateX(0); opacity: 1; }
            }
            .car-slide-animation {
              animation: slideCarIn 1.5s ease-out forwards;
            }
          `}
        </style>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-20 gap-12">
            <div className="max-w-xl">
              <span className="text-amber-600 font-bold tracking-[0.3em] text-[10px] uppercase mb-6 block">Automobile Division</span>
              <h2 className="text-3xl md:text-5xl font-heading font-black mb-8 leading-tight">
                India's <span className="text-amber-600">Largest</span> <br />
                Automotive Network
              </h2>
              <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed mb-8">
                As proud partners of the world's most iconic brands, we bring you excellence in mobility through state-of-the-art showrooms and elite service facilities across Chhattisgarh.
              </p>
              <Link to="/automobile" className="group inline-flex items-center gap-4 bg-slate-100 border border-slate-200 px-8 py-4 rounded-full hover:bg-slate-900 transition-all duration-300 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-900 group-hover:text-white">View All Showrooms</span>
                <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-slate-950 group-hover:bg-white">
                  <ArrowRight size={16} />
                </div>
              </Link>
            </div>

            {/* Sliding Car Element */}
            <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end py-10">
              <div className="relative group">
                {/* Subtle shadow glow for white bg */}
                <div className="absolute -inset-10 bg-slate-200/50 rounded-full blur-[100px] pointer-events-none"></div>
                <img
                  src="/new_images/fronx_red_black.webp"
                  alt="Fronx"
                  className="w-full max-w-2xl h-auto object-contain car-slide-animation relative z-10"
                />
              </div>
            </div>
          </div>

          {/* Brands Grid - Balanced 2+3 layout for 5 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {AUTOMOBILE_PARTNERS.map((partner, idx) => (
              <Link
                key={idx}
                to={partner.link}
                className={`group relative rounded-3xl overflow-hidden shadow-2xl block bg-slate-900 border border-white/5 ${idx < 2
                  ? 'lg:col-span-3 h-[450px] md:h-[500px]'
                  : idx === 4
                    ? 'md:col-span-2 lg:col-span-2 h-[300px] md:h-[350px]'
                    : 'lg:col-span-2 h-[300px] md:h-[350px]'
                  }`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    style={{ objectPosition: (partner as any).position || 'center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                  {/* Top: Brand Logo/Text */}
                  <div className="flex justify-between items-start">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl">
                      <span className="text-xl font-black tracking-tighter italic text-white">{partner.brand}</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0">
                      <ArrowRight size={20} className="text-white" />
                    </div>
                  </div>

                  {/* Bottom: Info */}
                  <div>
                    <span className="text-amber-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">
                      {partner.tagline}
                    </span>
                    <h3 className="text-3xl font-heading font-black mb-4 text-white group-hover:text-amber-500 transition-colors">
                      {partner.name}
                    </h3>
                    <p className="text-white/70 text-sm font-light leading-relaxed mb-6 line-clamp-2">
                      {partner.desc}
                    </p>
                    <div className="h-1 w-12 bg-amber-500 transition-all duration-500 group-hover:w-full"></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="mt-20 py-10 border-t border-white/5 flex flex-wrap justify-center md:justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-amber-500/10 rounded-xl">
                <Car className="text-amber-500" size={24} />
              </div>
              <div>
                <div className="text-2xl font-black">25+</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Showrooms</div>
              </div>
            </div>
            <div className="h-12 w-px bg-white/10 hidden md:block"></div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-amber-500/10 rounded-xl">
                <CheckCircle2 className="text-amber-500" size={24} />
              </div>
              <div>
                <div className="text-2xl font-black">100%</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Genuine Spares</div>
              </div>
            </div>
            <div className="h-12 w-px bg-white/10 hidden md:block"></div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-amber-500/10 rounded-xl">
                <Award className="text-amber-500" size={24} />
              </div>
              <div>
                <div className="text-2xl font-black">Awarded</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Best Dealership</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospitality Showcase Section - New & Premium */}
      <section className="py-16 md:py-24 bg-amber-50 relative overflow-hidden">
        {/* Subtle Decorative Elements */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] -ml-64 -mt-64"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-slate-900/5 rounded-full blur-[120px] -mr-64 -mb-64"></div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-3xl">
              <span className="text-amber-600 font-bold tracking-[0.3em] text-[10px] uppercase mb-6 block">Hospitality Division</span>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-slate-900 mb-8 leading-tight">
                Where Every Stay <br />
                Is An <span className="text-amber-600">Experience</span>
              </h2>
              <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
                From urban luxury hotels to serene lakeside resorts, we invite you to experience hospitality that goes beyond expectations. Discover comfort, elegance, and world-class service.
              </p>
            </div>
            <Link to="/hospitality" className="group flex items-center gap-4 bg-white border border-slate-200 px-8 py-4 rounded-full hover:bg-slate-900 hover:border-slate-900 transition-all duration-300 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-900 group-hover:text-white">Discover More</span>
              <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-950">
                <ArrowRight size={16} />
              </div>
            </Link>
          </div>

          {/* Hospitality Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {HOSPITALITY_PARTNERS.map((partner, idx) => (
              <Link
                key={idx}
                to={partner.link}
                className="group relative h-[500px] rounded-3xl overflow-hidden shadow-xl block bg-white"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  {/* Top: Brand Badge */}
                  <div className="flex justify-between items-start">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                      <span className="text-slate-900 text-xs font-black tracking-widest uppercase">{partner.brand}</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0 shadow-lg">
                      <ArrowRight size={20} className="text-white" />
                    </div>
                  </div>

                  {/* Bottom: Info */}
                  <div className="text-white">
                    <span className="text-amber-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">
                      {partner.tagline}
                    </span>
                    <h3 className="text-2xl font-heading font-black mb-3 group-hover:text-amber-400 transition-colors leading-tight">
                      {partner.name}
                    </h3>
                    <p className="text-slate-200 text-sm font-light leading-relaxed mb-6 line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity">
                      {partner.desc}
                    </p>
                    <div className="h-1 w-12 bg-amber-500 transition-all duration-500 group-hover:w-full"></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Stats/Feature Bar */}
          <div className="mt-20 py-10 border-t border-slate-200 flex flex-wrap justify-center md:justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white shadow-sm rounded-xl">
                <Hotel className="text-amber-600" size={24} />
              </div>
              <div>
                <div className="text-2xl font-black text-black">500+</div>
                <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Luxury Rooms</div>
              </div>
            </div>
            <div className="h-12 w-px bg-slate-200 hidden md:block"></div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white shadow-sm rounded-xl">
                <Utensils className="text-amber-600" size={24} />
              </div>
              <div>
                <div className="text-2xl font-black text-black">10+</div>
                <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Dining Venues</div>
              </div>
            </div>
            <div className="h-12 w-px bg-slate-200 hidden md:block"></div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white shadow-sm rounded-xl">
                <Coffee className="text-amber-600" size={24} />
              </div>
              <div>
                <div className="text-2xl font-black text-black">5 Star</div>
                <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Service Standard</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <span className="text-slate-600 font-bold tracking-[0.3em] text-[10px] uppercase mb-6 block">CHOUHAN GROUP</span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-black mb-8 md:mb-10">
            Reach Out, Let's Create Together.
          </h2>
          <p className="text-lg md:text-2xl text-slate-800 font-medium max-w-4xl mx-auto mb-12 md:mb-16 leading-relaxed">
            Reach out to Chouhan Group's dedicated team. Whether it's inquiries, collaborations, or your dream project, we're here to turn your vision into reality. Connect today.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 font-bold tracking-widest uppercase text-xs md:text-sm hover:bg-amber-500 hover:text-white transition-all duration-300 shadow-2xl rounded-sm">
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
