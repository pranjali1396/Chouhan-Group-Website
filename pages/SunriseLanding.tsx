import React, { useState, useEffect } from 'react';
import {
  MapPin, Phone, Mail, CheckCircle2, ArrowRight, Download,
  Menu, X, ChevronDown, Trees, Shield, Zap, Home,
  Coffee, Users, Landmark, Search, Play, ChevronLeft, ChevronRight,
  Facebook, Instagram, Twitter, Youtube
} from 'lucide-react';

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'discover', label: 'Discover' },
  { id: 'plots', label: 'Plot Collection' },
  { id: 'amenities', label: 'Amenities' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'location', label: 'Location' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

const PLOT_DATA = [
  { type: 'Type A-P', size: '2400-3200 sq.ft', count: 20, color: 'bg-emerald-50 border-emerald-100' },
  { type: 'Type B', size: '1000-1600 sq.ft', count: 60, color: 'bg-white border-stone-200' },
  { type: 'Type C', size: '1800-2400 sq.ft', count: 108, color: 'bg-emerald-50 border-emerald-100' },
  { type: 'Type D', size: '2100-4500 sq.ft', count: 18, color: 'bg-white border-stone-200' },
  { type: 'Type E', size: '1280-4200 sq.ft', count: 50, color: 'bg-emerald-50 border-emerald-100' },
  { type: 'Type F', size: '2551.04 sq.ft', count: 1, color: 'bg-white border-stone-200' },
  { type: 'Type G', size: '1000-1200 sq.ft', count: 8, color: 'bg-emerald-50 border-emerald-100' },
  { type: 'Type H', size: '1012 sq.ft', count: 5, color: 'bg-white border-stone-200' },
  { type: 'Type I', size: '800-1100 sq.ft', count: 136, color: 'bg-emerald-50 border-emerald-100' },
  { type: 'Type J', size: '1100-1500 sq.ft', count: 17, color: 'bg-white border-stone-200' },
  { type: 'Type K', size: '1250 sq.ft', count: 36, color: 'bg-emerald-50 border-emerald-100' },
  { type: 'Type M', size: '990-1800 sq.ft', count: 117, color: 'bg-white border-stone-200' },
  { type: 'Type N', size: '1250 sq.ft', count: 5, color: 'bg-emerald-50 border-emerald-100' },
  { type: 'Type P', size: '1800 sq.ft', count: 18, color: 'bg-white border-stone-200' },
  { type: 'Type L (LIG)', size: '600 sq.ft', count: 139, color: 'bg-amber-50 border-amber-100' },
];

const FAQS = [
  { q: "Is this RERA-approved?", a: "Yes, Chouhan Sunrise City is a fully RERA-approved project adhering to all government compliances." },
  { q: "What documents are needed for booking?", a: "You will need a copy of your PAN Card, Aadhar Card, and passport-sized photographs." },
  { q: "Can I invest from another city or country?", a: "Absolutely. We have a dedicated NRI and remote investor desk to facilitate smooth digital transactions." },
  { q: "Are there payment plans or EMI options?", a: "Yes, we offer flexible payment plans linked to development milestones, and we have tie-ups with major banks for loans." },
  { q: "How can brokers register?", a: "Brokers can register through our 'Join Partner Network' section on the corporate page or contact our sales office directly." },
];

const AMENITIES = [
  { icon: <Trees size={28} />, title: "Landscaped Green Spaces", desc: "Beautifully designed gardens and walkways for daily strolls." },
  { icon: <Home size={28} />, title: "Paved Internal Roads", desc: "Wide roads for smooth vehicular and pedestrian movement." },
  { icon: <Zap size={28} />, title: "Utility Infrastructure", desc: "Underground electricity, water supply, and drainage systems." },
  { icon: <Shield size={28} />, title: "24/7 Gated Security", desc: "CCTV surveillance and guarded entry/exit points." },
  { icon: <Coffee size={28} />, title: "Clubhouse & Park", desc: "Dedicated areas for socializing, fitness, and recreation." },
  { icon: <Users size={28} />, title: "Children's Play Area", desc: "Safe, fun zones for kids within a secure environment." },
  { icon: <Landmark size={28} />, title: "Temple Space", desc: "Culturally inclusive planning with space allocated for a temple." },
];

const GALLERY_IMAGES = [
  "/Sunrise City/Photos and Videos/sunrise_city.webp",
  "/Sunrise City/Photos and Videos/chouhan_sunrise_city_img_2.webp",
  "/Sunrise City/Photos and Videos/chouhan_sunrise_city_img_3.webp",
  "/Sunrise City/Photos and Videos/chouhan_sunrise_city_img_8.webp",
  "/Sunrise City/Photos and Videos/sunrise_city_p1.webp",
  "/Sunrise City/Photos and Videos/sunrise_city_p2.webp",
  "/Sunrise City/Photos and Videos/sunrisecity.webp",
  "/Sunrise City/Photos and Videos/sunrisecity_00.webp",
  "/Sunrise City/Photos and Videos/sunrixecity_03.webp",
  "/Sunrise City/Photos and Videos/sunrixecity_04.webp",
  "/Sunrise City/Photos and Videos/sunrixecity_05.webp",
  "/Sunrise City/Photos and Videos/sunrizecity_002.webp",
  "/Sunrise City/Photos and Videos/singapore_city_4_1.jpg",
  "/Sunrise City/Photos and Videos/singapore_city_4_2.jpg",
];

const HERO_IMAGES = [
  "/Sunrise City/Photos and Videos/sunrisecity_00.webp",
  "/Sunrise City/Photos and Videos/singapore_city_4_1.jpg",
  "/Sunrise City/Photos and Videos/singapore_city_4_2.jpg",
  "/Sunrise City/Photos and Videos/sunrisecity.webp"
];

const SunriseLanding: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Hero Slider Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const handleNext = () => {
    if (selectedImage) {
      const currentIndex = GALLERY_IMAGES.indexOf(selectedImage);
      const nextIndex = (currentIndex + 1) % GALLERY_IMAGES.length;
      setSelectedImage(GALLERY_IMAGES[nextIndex]);
    }
  };

  const handlePrev = () => {
    if (selectedImage) {
      const currentIndex = GALLERY_IMAGES.indexOf(selectedImage);
      const prevIndex = (currentIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
      setSelectedImage(GALLERY_IMAGES[prevIndex]);
    }
  };

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = SECTIONS.map(s => document.getElementById(s.id));
      const scrollPos = window.scrollY + 200; // Offset

      sections.forEach(sec => {
        if (sec && sec.offsetTop <= scrollPos && (sec.offsetTop + sec.offsetHeight) > scrollPos) {
          setActiveTab(sec.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white font-sans text-stone-800 pt-0">

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fadeIn select-none"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-[90] text-white/80 hover:text-white bg-black/40 hover:bg-black/60 rounded-full p-2 transition-all backdrop-blur-sm"
          >
            <X size={32} />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-[80] text-white/70 hover:text-white bg-black/40 hover:bg-black/70 rounded-full p-2 md:p-3 transition-all backdrop-blur-sm"
            aria-label="Previous Image"
          >
            <ChevronLeft size={32} className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-[80] text-white/70 hover:text-white bg-black/40 hover:bg-black/70 rounded-full p-2 md:p-3 transition-all backdrop-blur-sm"
            aria-label="Next Image"
          >
            <ChevronRight size={32} className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Gallery Preview"
              className="max-w-full max-h-full object-contain rounded shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* Brochure Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-8 relative animate-fadeIn border border-stone-100">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-heading font-bold mb-2 text-emerald-900">Download Brochure</h3>
            <p className="text-sm text-gray-500 mb-6">Please enter your details to receive the comprehensive project brochure.</p>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full border border-gray-300 rounded p-3 text-sm focus:border-emerald-500 focus:outline-none" />
              <input type="email" placeholder="Email Address" className="w-full border border-gray-300 rounded p-3 text-sm focus:border-emerald-500 focus:outline-none" />
              <input type="tel" placeholder="Phone Number" className="w-full border border-gray-300 rounded p-3 text-sm focus:border-emerald-500 focus:outline-none" />
              <button className="w-full bg-emerald-800 text-white font-bold py-3 rounded hover:bg-emerald-700 transition-colors">
                Download Now
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Internal Navigation (Sticky) */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur shadow-sm border-b border-stone-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">

            {/* Logo Section */}
            <div className="flex items-center gap-2 font-heading font-bold text-emerald-900 text-lg uppercase tracking-wider">
              <img src="/Sunrise City/chouhan_sunrise_city_logo-removebg-preview.png" alt="Sunrise City Logo" className="h-10 w-auto object-contain" />

            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 overflow-x-auto no-scrollbar">
              {SECTIONS.filter(s => s.id !== 'home').map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-xs font-bold uppercase tracking-wider whitespace-nowrap py-2 border-b-2 transition-all ${activeTab === item.id
                    ? 'border-emerald-600 text-emerald-800'
                    : 'border-transparent text-gray-400 hover:text-emerald-600'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Desktop Action Button */}
            <button onClick={() => scrollToSection('contact')} className="hidden lg:block bg-emerald-600 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-100">
              Register Interest
            </button>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden text-emerald-900 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-stone-100 shadow-xl animate-fadeIn">
            <div className="flex flex-col p-4 space-y-4">
              {SECTIONS.filter(s => s.id !== 'home').map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left text-sm font-bold uppercase tracking-wider py-3 border-b border-stone-50 ${activeTab === item.id
                    ? 'text-emerald-800'
                    : 'text-gray-500'
                    }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  scrollToSection('contact');
                  setIsMobileMenuOpen(false);
                }}
                className="bg-emerald-600 text-white w-full py-3 rounded text-sm font-bold uppercase tracking-wider hover:bg-emerald-700 transition-colors"
              >
                Register Interest
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Hero Section - Image Slider */}
      <section id="home" className="relative h-[85vh] w-full overflow-hidden">
        {HERO_IMAGES.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentHeroSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={img}
              alt={`Sunrise City Slide ${idx + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Subtle gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
          </div>
        ))}

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/80 z-10">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Discover / Intro Section */}
      <section id="discover" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Left Column: Text Content */}
            <div className="lg:w-1/2 space-y-8">
              <div>
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-widest rounded mb-4">
                  Now Selling • Pre-Launch Offers Available
                </span>
                <h1 className="text-4xl md:text-5xl font-heading font-black text-emerald-900 leading-tight mb-4">
                  A Premier Plot Investment Opportunity in Durg
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Flexible plots, prime location near <strong className="text-emerald-700">IIT Bhilai</strong>, and strong long-term value. Build your dream home in a community designed for the future.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Strategically located on <strong className="text-emerald-800">Bhilai’s Dhamdha Road</strong>, this premium development offers a unique opportunity to own land in one of Chhattisgarh’s most promising locations.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-emerald-900 text-white px-8 py-4 font-bold rounded hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  Register for Priority Access <ArrowRight size={18} />
                </button>
                <a
                  href="/Sunrise City/Layout Plan/Sunrise_City_plan.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-emerald-900 text-emerald-900 px-8 py-4 font-bold rounded hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2"
                >
                  Download Master Plan <Download size={18} />
                </a>
              </div>
            </div>

            {/* Right Column: Key Features Grid */}
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200 hover:shadow-lg transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-4">
                  <MapPin size={24} />
                </div>
                <h4 className="text-2xl font-black text-emerald-900 mb-1">Prime</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Location</p>
              </div>
              <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100 hover:shadow-lg transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-emerald-200 text-emerald-900 rounded-full flex items-center justify-center mb-4">
                  <Zap size={24} />
                </div>
                <h4 className="text-2xl font-black text-emerald-900 mb-1">Ready</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Infrastructure</p>
              </div>
              <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100 hover:shadow-lg transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-emerald-200 text-emerald-900 rounded-full flex items-center justify-center mb-4">
                  <Shield size={24} />
                </div>
                <h4 className="text-2xl font-black text-emerald-900 mb-1">Gated</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Community</p>
              </div>
              <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200 hover:shadow-lg transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-4">
                  <Trees size={24} />
                </div>
                <h4 className="text-2xl font-black text-emerald-900 mb-1">Green</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Open Spaces</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Plot Collection */}
      <section id="plots" className="py-24 bg-stone-50 border-t border-stone-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-stone-900 mb-4">Plot Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Choose from multiple plot sizes — ideal for individual homes, duplexes, or future investments.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {PLOT_DATA.map((plot, idx) => (
              <div key={idx} className={`p-6 rounded-xl border ${plot.color} transition-transform hover:-translate-y-1 hover:shadow-lg bg-opacity-60`}>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-bold text-lg text-emerald-900">{plot.type}</span>
                  <span className="bg-white px-2 py-1 rounded text-xs font-bold text-emerald-800 shadow-sm border border-emerald-100">{plot.count} Plots</span>
                </div>
                <div className="text-sm text-gray-600 mb-4">Area Range</div>
                <div className="text-2xl font-black text-stone-800 mb-4">{plot.size}</div>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-2 bg-white rounded border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-widest hover:bg-emerald-600 hover:text-white transition-colors"
                >
                  Enquire
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/Sunrise City/Layout Plan/Sunrise_City_plan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-800 font-bold border-b-2 border-emerald-800 pb-1 hover:text-emerald-600 hover:border-emerald-600 transition-colors"
            >
              <Download size={18} /> Download Layout Master Plan (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative bg */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-50/50 -skew-x-12 translate-x-1/4"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-16">
            <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase block mb-2">Designed for Lifestyle</span>
            <h2 className="text-4xl font-heading font-bold text-stone-900">On-Site Amenities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {AMENITIES.map((amenity, idx) => (
              <div key={idx} className="group p-6 bg-white border border-stone-100 rounded-xl hover:shadow-xl hover:border-emerald-200 transition-all duration-300">
                <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-700 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  {amenity.icon}
                </div>
                <h3 className="font-bold text-lg text-stone-900 mb-2">{amenity.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tour Section */}
      <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-bold tracking-widest text-xs uppercase block mb-4">Virtual Tour</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Experience Sunrise City</h2>
            <p className="text-stone-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Take a closer look at the development progress, wide roads, and lush green surroundings of your future home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Video 1 */}
            <div className="space-y-4">
              <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-stone-700 relative group">
                <video controls className="w-full h-full object-cover">
                  <source src="/Sunrise City/Photos and Videos/VID-20250825-WA0002.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="text-xl font-bold text-center">Development Progress</h3>
            </div>

            {/* Video 2 */}
            <div className="space-y-4">
              <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-stone-700 relative group">
                <video controls className="w-full h-full object-cover">
                  <source src="/Sunrise City/Photos and Videos/VID-20251002-WA0007.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="text-xl font-bold text-center">Site Walkthrough</h3>
            </div>

            {/* Video 3 */}
            <div className="space-y-4">
              <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-stone-700 relative group">
                <video controls className="w-full h-full object-cover">
                  <source src="/Sunrise City/Photos and Videos/VID-20251002-WA0008.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="text-xl font-bold text-center">Green Spaces Tour</h3>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button onClick={() => scrollToSection('contact')} className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded font-bold transition-colors shadow-lg shadow-emerald-900/50">
              Schedule Site Visit
            </button>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-stone-50 py-24 text-stone-900 border-t border-stone-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-2">Visual Showcase</h2>
              <p className="text-stone-500">Drone views and on-ground developments</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {GALLERY_IMAGES.map((img, idx) => (
              <div
                key={idx}
                className={`relative group overflow-hidden rounded-lg shadow-md aspect-[4/3] cursor-pointer ${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={`Sunrise City View ${idx + 1}`}
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Search className="text-white drop-shadow-lg" size={32} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-24 bg-emerald-50 text-emerald-900 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3 space-y-8">
              <h2 className="text-3xl font-heading font-bold text-stone-900">Nearby Landmarks</h2>
              <p className="text-emerald-800 leading-relaxed">
                Chouhan Sunrise City places you at the heart of Bhilai’s most connected neighborhood. Enjoy quick access to education, healthcare, and entertainment.
              </p>

              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-emerald-200 flex items-center justify-center flex-shrink-0">
                    <Landmark size={20} className="text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">IIT Bhilai</h4>
                    <p className="text-sm text-emerald-700">Premier institute just a short drive away.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-emerald-200 flex items-center justify-center flex-shrink-0">
                    <HeartPulse size={20} className="text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">Aarogyam Hospital</h4>
                    <p className="text-sm text-emerald-700">Top medical care within 10–15 minutes.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-emerald-200 flex items-center justify-center flex-shrink-0">
                    <ShoppingBag size={20} className="text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">Surya Treasure Island Mall</h4>
                    <p className="text-sm text-emerald-700">Shopping and leisure destination.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="lg:w-2/3 h-[400px] bg-white rounded-xl overflow-hidden relative shadow-lg border border-emerald-100">
              {/* Map Placeholder */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.549070866035!2d81.3323!3d21.2505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDE1JzAxLjgiTiA4McKwMTknNTYuMyJF!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & Contact Container */}
      <div className="bg-stone-50 py-24 border-t border-stone-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* FAQ Section */}
            <div id="faq">
              <h2 className="text-3xl font-heading font-bold mb-8 text-stone-900">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {FAQS.map((item, idx) => (
                  <details key={idx} className="group bg-white rounded-lg border border-stone-200 overflow-hidden shadow-sm">
                    <summary className="flex justify-between items-center font-bold p-6 cursor-pointer list-none text-stone-800 hover:text-emerald-700 transition-colors">
                      {item.q}
                      <ChevronDown className="group-open:rotate-180 transition-transform text-emerald-500" />
                    </summary>
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed text-sm animate-fadeIn border-t border-stone-100">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>

            {/* Lead Form Section */}
            <div id="contact" className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border-t-4 border-emerald-600">
              <div className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-stone-900 mb-2">Register Your Interest</h2>
                <p className="text-gray-500 text-sm">Fill out the form below to book a site visit or speak with a sales representative.</p>
              </div>

              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">Name *</label>
                    <input type="text" className="w-full bg-stone-50 border border-stone-200 rounded p-3 text-sm focus:border-emerald-500 focus:outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">Phone *</label>
                    <input type="tel" className="w-full bg-stone-50 border border-stone-200 rounded p-3 text-sm focus:border-emerald-500 focus:outline-none" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">Email</label>
                  <input type="email" className="w-full bg-stone-50 border border-stone-200 rounded p-3 text-sm focus:border-emerald-500 focus:outline-none" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">City *</label>
                    <input type="text" className="w-full bg-stone-50 border border-stone-200 rounded p-3 text-sm focus:border-emerald-500 focus:outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">Are you a Broker?</label>
                    <select className="w-full bg-stone-50 border border-stone-200 rounded p-3 text-sm focus:border-emerald-500 focus:outline-none">
                      <option>No</option>
                      <option>Yes</option>
                    </select>
                  </div>
                </div>

                <button type="button" className="w-full bg-emerald-900 text-white font-bold text-sm uppercase tracking-widest py-4 rounded hover:bg-emerald-800 transition-colors shadow-lg mt-4">
                  Submit Enquiry
                </button>

                <div className="flex justify-center mt-4">
                  <button className="text-emerald-700 text-sm font-bold flex items-center gap-2 hover:text-emerald-900">
                    <Phone size={16} /> or Contact via WhatsApp
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-white text-stone-600 py-16 border-t border-stone-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Column 1: Brand */}
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-bold text-emerald-900 tracking-wider">SUNRISE CITY</h3>
              <p className="text-sm leading-relaxed max-w-xs">
                A premium plotted development by Chouhan Group, designed for a sustainable and connected future.
              </p>
              <div className="flex gap-4 items-center">
                <a href="https://www.facebook.com/share/17atysTgnf/" target="_blank" rel="noopener noreferrer" className="text-stone-700 hover:text-emerald-600 transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="https://www.instagram.com/chouhan_housing_commercial?igsh=MTZuNXpibTF4N2k4bA==" target="_blank" rel="noopener noreferrer" className="text-stone-700 hover:text-emerald-600 transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="https://x.com/ChouhanHousing?t=qr_WRxVvfJ9a6q9yU_rHlA&s=09" target="_blank" rel="noopener noreferrer" className="text-stone-700 hover:text-emerald-600 transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="https://youtube.com/@chouhangroup-x7v?si=yHs8HX0SxFY9X1EB" target="_blank" rel="noopener noreferrer" className="text-stone-700 hover:text-emerald-600 transition-colors">
                  <Youtube size={18} />
                </a>
                <img
                  src="/ChouhanG.png"
                  className="h-10 w-auto ml-4 object-contain opacity-90 hover:opacity-100 transition-opacity"
                  alt="Chouhan Group"
                />
              </div>
            </div>

            {/* Column 2: Location Details */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold text-emerald-900 uppercase tracking-widest">Location</h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <MapPin size={20} className="text-emerald-600 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">
                    Chouhan Sunrise City,<br />
                    Near IIT Bhilai Campus,<br />
                    Dhamdha Road, Bhilai, CG
                  </span>
                </li>
                <li className="flex gap-4 items-center">
                  <Phone size={18} className="text-emerald-600 flex-shrink-0" />
                  <span className="text-sm">+91 91091 04005</span>
                </li>
                <li className="flex gap-4 items-center">
                  <Mail size={18} className="text-emerald-600 flex-shrink-0" />
                  <span className="text-sm underline cursor-pointer hover:text-emerald-600 transition-colors">chouhanhousing@gmail.com</span>
                </li>
              </ul>
            </div>

            {/* Column 3: Mini Map */}
            <div className="h-40 rounded-lg overflow-hidden border border-stone-100 shadow-sm relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14876.177267156942!2d81.3533!3d21.2307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEzJzUwLjUiTiA4McKwMjEnMTEuOSJF!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Location Map"
              ></iframe>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors pointer-events-none"></div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-center items-center gap-4 text-[11px] font-medium text-stone-400">
            <p>© {new Date().getFullYear()} Chouhan Group. All rights reserved.</p>
            <div className="flex gap-4">
              <span className="cursor-pointer hover:text-stone-600">| RERA Approved Project.</span>
              <span className="cursor-pointer hover:text-stone-600">| Privacy Policy</span>
              <span className="cursor-pointer hover:text-stone-600">| Disclaimer</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

// Helper icons
const HeartPulse = ({ size, className }: { size: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.15 4.33l-1.3 1.5" /><path d="M18 15v3h-3" /></svg>
);
const ShoppingBag = ({ size, className }: { size: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
);

export default SunriseLanding;