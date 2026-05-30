
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MapPin, Phone, Mail, CheckCircle2, ArrowRight, Download,
  Menu, X, ChevronDown, Trees, Shield, Zap, Home,
  Coffee, Users, Landmark, Search, Play, ChevronLeft, ChevronRight,
  Facebook, Instagram, Twitter, Youtube, HeartPulse, ShoppingBag
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

const HERO_MEDIA = [
  { type: 'video', src: "/new_images/Sunrise.mp4" }
];

const SunriseLanding: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Form States
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [brochureStatus, setBrochureStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    isBroker: 'No'
  });

  const [brochureData, setBrochureData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBrochureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBrochureData(prev => ({ ...prev, [name]: value }));
  };

  const handleMainSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // CRMIntegration will automatically capture this form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', city: '', isBroker: 'No' });
    }, 600);

  };

  const handleBrochureSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBrochureStatus('submitting');
    // CRMIntegration will automatically capture this form submission
    setTimeout(() => {
      setBrochureStatus('success');
      setBrochureData({ name: '', email: '', phone: '' });
      // Trigger download
      window.open('/Sunrise City/Layout Plan/Sunrise_City_plan.pdf', '_blank');
    }, 800);

  };

  // Hero Slider Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % HERO_MEDIA.length);
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

  // Handle initial scroll if hash is present (for Register buttons)
  useEffect(() => {
    const handleInitialHash = () => {
      if (window.location.hash.toLowerCase().includes('contact')) {
        setTimeout(() => scrollToSection('contact'), 800);
      }
    };
    handleInitialHash();
    window.addEventListener('hashchange', handleInitialHash);
    return () => window.removeEventListener('hashchange', handleInitialHash);
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
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-[90] text-white/80 hover:text-white bg-black/40 hover:bg-black/60 rounded-full p-2 transition-all backdrop-blur-sm"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-[80] text-white/70 hover:text-white bg-black/40 hover:bg-black/70 rounded-full p-2 md:p-3 transition-all backdrop-blur-sm"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-[80] text-white/70 hover:text-white bg-black/40 hover:bg-black/70 rounded-full p-2 md:p-3 transition-all backdrop-blur-sm"
          >
            <ChevronRight size={32} />
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

            {brochureStatus === 'success' ? (
              <div className="text-center py-8">
                <CheckCircle2 size={48} className="text-emerald-600 mx-auto mb-4" />
                <p className="font-bold text-emerald-900">Success! Your download should start shortly.</p>
                <button onClick={() => setShowModal(false)} className="mt-6 text-sm underline text-stone-500">Close</button>
              </div>
            ) : (
              <form onSubmit={handleBrochureSubmit} className="space-y-4">
                <input type="hidden" name="project" value="Sunrise City - Brochure" />
                <input required name="name" value={brochureData.name} onChange={handleBrochureChange} type="text" placeholder="Full Name" className="w-full border border-gray-300 rounded p-3 text-sm focus:border-emerald-500 focus:outline-none" />
                <input required name="email" value={brochureData.email} onChange={handleBrochureChange} type="email" placeholder="Email Address" className="w-full border border-gray-300 rounded p-3 text-sm focus:border-emerald-500 focus:outline-none" />
                <input required name="phone" value={brochureData.phone} onChange={handleBrochureChange} type="tel" placeholder="Phone Number" className="w-full border border-gray-300 rounded p-3 text-sm focus:border-emerald-500 focus:outline-none" />
                <button disabled={brochureStatus === 'submitting'} type="submit" className="w-full bg-emerald-800 text-white font-bold py-3 rounded hover:bg-emerald-700 transition-colors disabled:opacity-50">
                  {brochureStatus === 'submitting' ? 'Processing...' : 'Download Now'}
                </button>
                {brochureStatus === 'error' && <p className="text-red-500 text-xs text-center">Something went wrong. Try again.</p>}
              </form>
            )}
          </div>
        </div>
      )}

      {/* Internal Navigation (Sticky) */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur shadow-sm border-b border-stone-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 font-heading font-bold text-emerald-900 text-lg uppercase tracking-wider">
              <img src="/Sunrise City/chouhan_sunrise_city_logo-removebg-preview.png" alt="Sunrise City Logo" className="h-10 w-auto object-contain" />
            </div>

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
              <button
                onClick={() => navigate('/new-homes')}
                className="ml-4 text-[10px] font-bold uppercase tracking-widest text-emerald-600 hover:text-emerald-700 transition-colors flex items-center gap-1 border border-emerald-200 px-3 py-1.5 rounded-full"
              >
                <ArrowRight size={12} /> HOME
              </button>
            </div>

            <button onClick={() => scrollToSection('contact')} className="hidden lg:block bg-emerald-600 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-100">
              Register Interest
            </button>

            <button
              className="md:hidden text-emerald-900 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

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
              <div className="pt-4 mt-2 border-t border-stone-100">
                <button
                  onClick={() => navigate('/new-homes')}
                  className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-emerald-600 w-full"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                    <ArrowRight size={16} />
                  </div>
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <section id="home" className="relative h-[85vh] w-full overflow-hidden">
        {HERO_MEDIA.map((media, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentHeroSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            {media.type === 'video' ? (
              <video
                src={media.src}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />
            ) : (
              <img
                src={media.src}
                alt="Sunrise City Slide"
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/80 z-10">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Discover Section */}
      <section id="discover" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <div>
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-widest rounded mb-4">
                  New Launch • Pre-Launch Offers Available
                </span>
                <h1 className="text-4xl md:text-5xl font-heading font-black text-emerald-900 leading-tight mb-4">
                  A Premier Plot Investment Opportunity in Durg
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Flexible plots, prime location near <strong className="text-emerald-700">IIT Bhilai</strong>, and strong long-term value. Build your dream home in a community designed for the future.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-emerald-900 text-white px-8 py-4 font-bold rounded hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  Register for Priority Access <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => setShowModal(true)}
                  className="border-2 border-emerald-900 text-emerald-900 px-8 py-4 font-bold rounded hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2"
                >
                  Download Master Plan <Download size={18} />
                </button>
              </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200">
                <MapPin className="text-emerald-800 mb-4" size={24} />
                <h4 className="text-2xl font-black text-emerald-900 mb-1">Prime</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Location</p>
              </div>
              <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100">
                <Zap className="text-emerald-900 mb-4" size={24} />
                <h4 className="text-2xl font-black text-emerald-900 mb-1">Ready</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Infrastructure</p>
              </div>
              <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100">
                <Shield className="text-emerald-900 mb-4" size={24} />
                <h4 className="text-2xl font-black text-emerald-900 mb-1">Gated</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Community</p>
              </div>
              <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200">
                <Trees className="text-emerald-800 mb-4" size={24} />
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
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-16">
            <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase block mb-2">Designed for Lifestyle</span>
            <h2 className="text-4xl font-heading font-bold text-stone-900">On-Site Amenities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {AMENITIES.map((amenity, idx) => (
              <div key={idx} className="group p-6 bg-white border border-stone-100 rounded-xl hover:shadow-xl transition-all duration-300">
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

      {/* Gallery */}
      <section id="gallery" className="bg-stone-50 py-24 text-stone-900 border-t border-stone-200">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-heading font-bold mb-2">Visual Showcase</h2>
            <p className="text-stone-500">Drone views and on-ground developments</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {GALLERY_IMAGES.map((img, idx) => (
              <div
                key={idx}
                className="relative group overflow-hidden rounded-lg shadow-md aspect-square cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Sunrise City View"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-24 bg-emerald-50 text-emerald-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3 space-y-8">
              <h2 className="text-3xl font-heading font-bold text-stone-900">Nearby Landmarks</h2>
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
                    <p className="text-sm text-emerald-700">Shopping destination.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="lg:w-2/3 h-[400px] bg-white rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14876.177267156942!2d81.3533!3d21.2307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEzJzUwLjUiTiA4McKwMjEnMTEuOSJF!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin"
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

      {/* FAQ & Contact Section */}
      <section id="contact" className="py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div id="faq">
              <h2 className="text-3xl font-heading font-bold mb-8 text-stone-900">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {FAQS.map((item, idx) => (
                  <details key={idx} className="group bg-white rounded-lg border border-stone-200 overflow-hidden shadow-sm">
                    <summary className="flex justify-between items-center font-bold p-6 cursor-pointer list-none text-stone-800 hover:text-emerald-700 transition-colors">
                      {item.q}
                      <ChevronDown className="group-open:rotate-180 transition-transform text-emerald-500" />
                    </summary>
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed text-sm border-t border-stone-100">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border-t-4 border-emerald-600">
              <h2 className="text-2xl font-heading font-bold text-stone-900 mb-2">Register Your Interest</h2>

              {status === 'success' ? (
                <div className="text-center py-12">
                  <CheckCircle2 size={64} className="text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-emerald-900 mb-2">Thank You!</h3>
                  <p className="text-stone-600 mb-8">Your enquiry has been received. Our team will contact you shortly.</p>
                  <button onClick={() => setStatus('idle')} className="bg-emerald-900 text-white px-8 py-3 rounded font-bold uppercase tracking-widest text-xs">Send Another Enquiry</button>
                </div>
              ) : (
                <form onSubmit={handleMainSubmit} className="space-y-5">
                  <input type="hidden" name="project" value="Sunrise City" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-500 uppercase">Name *</label>
                      <input required name="name" value={formData.name} onChange={handleInputChange} type="text" className="w-full bg-stone-50 border border-stone-200 rounded p-3 text-sm focus:border-emerald-500 focus:outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-500 uppercase">Phone *</label>
                      <input required name="phone" value={formData.phone} onChange={handleInputChange} type="tel" className="w-full bg-stone-50 border border-stone-200 rounded p-3 text-sm focus:border-emerald-500 focus:outline-none" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">Email *</label>
                    <input required name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full bg-stone-50 border border-stone-200 rounded p-3 text-sm focus:border-emerald-500 focus:outline-none" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-500 uppercase">City *</label>
                      <input required name="city" value={formData.city} onChange={handleInputChange} type="text" className="w-full bg-stone-50 border border-stone-200 rounded p-3 text-sm focus:border-emerald-500 focus:outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-500 uppercase">Are you a Broker? *</label>
                      <select required name="isBroker" value={formData.isBroker} onChange={handleInputChange} className="w-full bg-stone-50 border border-stone-200 rounded p-3 text-sm focus:border-emerald-500 focus:outline-none">
                        <option value="">Select...</option>
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </select>
                    </div>
                  </div>

                  <button disabled={status === 'submitting'} type="submit" className="w-full bg-emerald-900 text-white font-bold text-sm uppercase tracking-widest py-4 rounded hover:bg-emerald-800 transition-colors shadow-lg mt-4 disabled:opacity-50">
                    {status === 'submitting' ? 'Submitting...' : 'Submit Enquiry'}
                  </button>
                  {status === 'error' && <p className="text-red-500 text-xs text-center">Failed to submit. Please try again.</p>}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-stone-600 py-16 border-t border-stone-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-heading font-bold text-emerald-900 tracking-wider mb-4">SUNRISE CITY</h3>
          <p className="text-sm mb-8">A premium plotted development by Chouhan Group.</p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://www.facebook.com/share/17atysTgnf/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors"><Facebook size={20} /></a>
            <a href="https://www.instagram.com/chouhan_housing_commercial?igsh=MTZuNXpibTF4N2k4bA==" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors"><Instagram size={20} /></a>
            <a href="https://x.com/ChouhanHousing?t=qr_WRxVvfJ9a6q9yU_rHlA&s=09" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors"><Twitter size={20} /></a>
            <a href="https://youtube.com/@chouhangroup-x7v?si=yHs8HX0SxFY9X1EB" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors"><Youtube size={20} /></a>
          </div>
          <p className="text-[11px] font-medium text-stone-400">© {new Date().getFullYear()} Chouhan Group. All rights reserved. | RERA Approved Project.</p>
        </div>
      </footer>
    </div>
  );
};

export default SunriseLanding;