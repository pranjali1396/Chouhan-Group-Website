
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  CheckCircle2, ArrowRight, MapPin, Phone, Mail, 
  Home, Wifi, Car, Coffee, Dumbbell, Shield, Sun, 
  Play, Maximize2, X, ChevronRight, Layout, Download,
  Layers, Zap, Droplet, Monitor, ZoomIn, Ban, BellRing, Send, Facebook, Twitter, Instagram, Linkedin
} from 'lucide-react';

const PROPERTY_DATA = {
  amenities: [
    { icon: <Dumbbell size={24} />, label: "World-class Gym", desc: "State of the art equipment" },
    { icon: <Wifi size={24} />, label: "Smart Connectivity", desc: "Fiber-optic enabled" },
    { icon: <Car size={24} />, label: "Valet Parking", desc: "Ample covered space" },
    { icon: <Shield size={24} />, label: "24/7 Security", desc: "CCTV & Manned patrols" },
    { icon: <Coffee size={24} />, label: "Clubhouse & Cafe", desc: "Socializing spaces" },
    { icon: <Sun size={24} />, label: "Infinity Pool", desc: "Temperature controlled" },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1600596542815-e32cb718d202?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=1200"
  ],
  specs: [
    { category: "Structure", details: "RCC framed structure designed for seismic resistance." },
    { category: "Flooring", details: "Italian marble in living/dining, wooden flooring in master bedroom." },
    { category: "Kitchen", details: "Modular kitchen with granite platform and SS sink." },
    { category: "Electrical", details: "Concealed copper wiring with modular switches." },
    { category: "Sanitary", details: "Premium sanitary ware and CP fittings (Kohler/Jaguar)." },
  ],
  floorPlans: [
    { type: "2 BHK Luxury", area: "1,250 sq.ft", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?auto=format&fit=crop&q=80&w=1000" },
    { type: "3 BHK Premium", area: "1,800 sq.ft", image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1000" },
  ]
};

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'amenities', label: 'Amenities' },
  { id: 'specs', label: 'Specifications' },
  { id: 'floor-plans', label: 'Floor Plans' },
  { id: 'location', label: 'Location' },
];

const GenericPage: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Lightbox State
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  
  // Extract readable title from path
  const pathParts = location.pathname.split('/').filter(Boolean);
  const rawTitle = pathParts[pathParts.length - 1];
  const title = rawTitle?.replace(/-/g, ' ').toUpperCase() || 'LUXURY LIVING';
  const category = pathParts[0]?.replace(/-/g, ' ').toUpperCase();

  // Logic for Coming Soon / Sold
  const isRentals = category === 'RENTALS';
  const isSold = title.includes('DREAM HOME') || title.includes('SHIKHAR') || title.includes('SOLD');

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 160; 
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

  // Lightbox handlers
  const openGallery = (index: number) => {
    setLightboxImages(PROPERTY_DATA.gallery);
    setLightboxIndex(index);
  };

  const openFloorPlan = (image: string) => {
    setLightboxImages([image]);
    setLightboxIndex(0);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setLightboxImages([]);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev !== null && prev < lightboxImages.length - 1 ? prev + 1 : 0));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : lightboxImages.length - 1));
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev !== null && prev < lightboxImages.length - 1 ? prev + 1 : 0));
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : lightboxImages.length - 1));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, lightboxImages]);

  // Special Coming Soon Layout for Rentals
  if (isRentals) {
    return (
      <div className="min-h-screen bg-[#002b49] flex flex-col pt-20">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
           <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000" 
            alt="Coming Soon Background" 
            className="w-full h-full object-cover grayscale"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-[#002b49] via-transparent to-[#002b49]"></div>
        </div>

        <div className="container mx-auto px-4 flex-grow flex flex-col items-center justify-center relative z-10 py-20 text-center">
           <div className="max-w-4xl animate-fadeIn">
              <span className="inline-block bg-amber-500 text-slate-900 px-5 py-1.5 text-xs font-black uppercase tracking-[0.3em] rounded-full mb-8 shadow-2xl">
                Coming Soon
              </span>
              <h1 className="text-5xl md:text-8xl font-heading font-black text-white mb-8 leading-tight tracking-tight drop-shadow-2xl">
                {title.replace(' (COMING SOON)', '')} <br/>
                <span className="text-amber-500 font-light italic text-4xl md:text-6xl font-serif">A New Standard in Rentals</span>
              </h1>
              <p className="text-slate-300 text-lg md:text-2xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                We're currently perfecting our premium rental offerings for this project. 
                Experience unparalleled managed living and commercial lease opportunities shortly.
              </p>

              {/* Notify Form */}
              <div className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-2xl max-w-xl mx-auto">
                 <h3 className="text-white font-bold text-xl mb-6 flex items-center justify-center gap-2">
                   <BellRing className="text-amber-500 animate-pulse" /> Get Priority Notification
                 </h3>
                 <form className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full bg-white/10 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/40 focus:outline-none focus:border-amber-500 transition-all font-medium" 
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full bg-white/10 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/40 focus:outline-none focus:border-amber-500 transition-all font-medium" 
                    />
                    <button className="w-full bg-amber-500 text-slate-900 font-black uppercase tracking-widest py-4 rounded-xl hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center gap-2 group">
                       Notify Me <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                 </form>
              </div>

              {/* Back Link */}
              <div className="mt-16 flex flex-col items-center gap-6">
                 <Link to="/" className="text-white/60 hover:text-amber-500 font-bold uppercase tracking-widest text-xs flex items-center gap-2 transition-colors">
                    <ArrowRight size={14} className="rotate-180" /> Back to Home
                 </Link>
                 <div className="flex gap-4">
                    <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-all"><Facebook size={16} /></button>
                    <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-all"><Twitter size={16} /></button>
                    <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-all"><Instagram size={16} /></button>
                    <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-all"><Linkedin size={16} /></button>
                 </div>
              </div>
           </div>
        </div>
      </div>
    );
  }

  // Standard Layout for other Categories
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Lightbox Modal */}
      {lightboxIndex !== null && lightboxImages.length > 0 && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-6 right-6 text-white hover:text-amber-500 transition-colors z-50">
            <X size={40} />
          </button>
          
          {lightboxImages.length > 1 && (
            <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 transition-colors z-50">
               <ChevronRight size={60} className="rotate-180" />
            </button>
          )}
          
          <img 
            src={lightboxImages[lightboxIndex]} 
            alt={`View ${lightboxIndex + 1}`} 
            className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          
          {lightboxImages.length > 1 && (
            <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 transition-colors z-50">
               <ChevronRight size={60} />
            </button>
          )}
          
          {lightboxImages.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 font-mono text-sm">
              {lightboxIndex + 1} / {lightboxImages.length}
            </div>
          )}
        </div>
      )}

      {/* Hero Header */}
      <div className="h-[60vh] relative bg-white overflow-hidden group">
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 group-hover:scale-110" 
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-e32cb718d202?q=80&w=2000&auto=format&fit=crop')` }}>
        </div>
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

         {/* SOLD OUT Overlay for Generic Page */}
         {isSold && (
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <div className="bg-red-600/90 text-white border-4 border-white px-10 py-4 text-4xl md:text-7xl font-black uppercase tracking-[0.2em] -rotate-12 shadow-2xl">
                Sold Out
              </div>
            </div>
         )}

         <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
            <div className="container mx-auto animate-fade-in-up">
              <div className="text-amber-400 font-bold tracking-widest text-xs uppercase mb-4 flex items-center gap-2">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <span className="text-white">{category}</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-heading font-black text-white mb-6 shadow-xl leading-tight max-w-4xl drop-shadow-md">
                {title}
              </h1>
              <div className="flex flex-wrap gap-6 text-white font-light text-sm md:text-base drop-shadow">
                <span className="flex items-center gap-2"><MapPin size={18} className="text-amber-500" /> Prime Location</span>
                <span className="flex items-center gap-2"><Layout size={18} className="text-amber-500" /> 1,200 - 2,500 Sq. Ft.</span>
                <span className="flex items-center gap-2"><Home size={18} className="text-amber-500" /> {isSold ? 'Sold' : 'Ready to Move'}</span>
              </div>
            </div>
         </div>
      </div>

      {/* Sticky Sub-Navigation */}
      <div className="sticky top-[70px] md:top-[80px] z-40 bg-white/95 backdrop-blur shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-8 min-w-max">
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`py-4 text-xs font-bold uppercase tracking-widest border-b-2 transition-all ${
                  activeTab === section.id 
                    ? 'border-amber-500 text-slate-900' 
                    : 'border-transparent text-slate-500 hover:text-amber-500'
                }`}
              >
                {section.label}
              </button>
            ))}
            {!isSold && (
              <a href="#contact" className="ml-auto bg-amber-500 text-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-amber-600 transition-colors hidden md:block rounded shadow-sm">
                Enquire Now
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Content Area */}
          <div className="lg:w-2/3 space-y-20">
            
            {/* Overview Section */}
            <section id="overview" className="scroll-mt-40">
              <h2 className="text-3xl font-heading font-bold mb-8 text-slate-900 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-amber-500 block"></span>
                The Epitome of Luxury
              </h2>
              <p className="text-slate-600 leading-loose text-lg font-light mb-8">
                Welcome to <strong className="text-slate-900">{title}</strong>, a masterpiece of modern architecture tailored for the elite. 
                Situated in the heart of the city, this project blends connectivity with serenity. 
                Designed by award-winning architects, every square foot echoes a commitment to quality, offering a lifestyle that is as exclusive as it is comfortable.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                 <div className="p-6 bg-slate-50 border border-slate-100 rounded-lg text-center hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-amber-500">
                      <Layers size={24} />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-1">Modern Design</h3>
                    <p className="text-xs text-slate-500">Contemporary architecture</p>
                 </div>
                 <div className="p-6 bg-slate-50 border border-slate-100 rounded-lg text-center hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-amber-500">
                      <Zap size={24} />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-1">Smart Living</h3>
                    <p className="text-xs text-slate-500">Automated features</p>
                 </div>
                 <div className="p-6 bg-slate-50 border border-slate-100 rounded-lg text-center hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-amber-500">
                      <Droplet size={24} />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-1">Eco Friendly</h3>
                    <p className="text-xs text-slate-500">Sustainable footprint</p>
                 </div>
              </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className="scroll-mt-40">
              <div className="flex justify-between items-end mb-8">
                <h2 className="text-3xl font-heading font-bold text-slate-900">Gallery</h2>
                <button className="text-amber-600 text-sm font-bold uppercase tracking-widest hover:text-amber-500 transition-colors flex items-center gap-1">
                  View All <ArrowRight size={14} />
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
                {PROPERTY_DATA.gallery.map((img, idx) => (
                  <div 
                    key={idx} 
                    className={`group relative overflow-hidden rounded-sm cursor-pointer shadow-sm ${idx === 0 ? 'md:col-span-2 md:row-span-2 md:h-full' : ''}`}
                    onClick={() => openGallery(idx)}
                  >
                    <img 
                      src={img} 
                      alt={`Gallery ${idx}`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ZoomIn className="text-white drop-shadow-md" size={32} />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Amenities Section */}
            <section id="amenities" className="scroll-mt-40 bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-100">
              <h2 className="text-3xl font-heading font-bold mb-10 text-slate-900 text-center">World Class Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6">
                {PROPERTY_DATA.amenities.map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm text-slate-400 group-hover:text-amber-500 group-hover:shadow-md transition-all border border-slate-100">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-slate-800 mb-1">{item.label}</h4>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

             {/* Specifications Section */}
            <section id="specs" className="scroll-mt-40">
              <h2 className="text-3xl font-heading font-bold mb-8 text-slate-900">Specifications</h2>
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                {PROPERTY_DATA.specs.map((spec, i) => (
                  <div key={i} className="flex flex-col md:flex-row border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                    <div className="w-full md:w-1/4 bg-slate-50/50 p-4 font-bold text-slate-700 uppercase text-xs tracking-wider flex items-center">
                      {spec.category}
                    </div>
                    <div className="w-full md:w-3/4 p-4 text-sm text-slate-600">
                      {spec.details}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Floor Plans Section */}
            <section id="floor-plans" className="scroll-mt-48">
              <h2 className="text-3xl font-heading font-bold mb-8 text-slate-900">Floor Plans</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {PROPERTY_DATA.floorPlans.map((plan, i) => (
                  <div key={i} className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{plan.type}</h3>
                        <p className="text-sm text-slate-500 font-mono mt-1">Super Built-up Area: <span className="text-slate-800 font-bold">{plan.area}</span></p>
                      </div>
                      <a 
                        href={plan.image} 
                        download={`floorplan-${i}.jpg`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-white bg-amber-500 hover:bg-amber-600 transition-colors px-5 py-2.5 rounded shadow-sm hover:shadow whitespace-nowrap"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Download size={16} /> Download
                      </a>
                    </div>
                    
                    {/* Floor Plan Image Container */}
                    <div 
                      className="relative overflow-hidden rounded bg-slate-50 border border-slate-100 cursor-pointer h-64 w-full flex items-center justify-center" 
                      onClick={() => openFloorPlan(plan.image)}
                      style={{
                        backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                      }}
                    >
                       <img 
                         src={plan.image} 
                         alt={`${plan.type} Floor Plan`} 
                         className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105" 
                       />
                       
                       {/* Overlay on hover */}
                       <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                         <button className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all flex items-center gap-2">
                           <Maximize2 size={16} /> View Fullscreen
                         </button>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Virtual Tour & Location */}
            <section id="location" className="scroll-mt-40">
               <h2 className="text-3xl font-heading font-bold mb-8 text-slate-900">Virtual Tour</h2>
               <div className="relative w-full aspect-video bg-slate-100 rounded-xl overflow-hidden group cursor-pointer shadow-lg border border-slate-200">
                 <img 
                   src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000" 
                   className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000" 
                   alt="Virtual Tour Thumbnail"
                 />
                 <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mb-4 pl-1 shadow-lg group-hover:scale-110 transition-transform">
                       <Play fill="white" className="text-white" size={32} />
                    </div>
                    <span className="text-white font-bold tracking-widest uppercase text-sm drop-shadow-md">Start 360° Experience</span>
                 </div>
               </div>
            </section>

          </div>

          {/* Sidebar / Inquiry Form - Hidden if Sold */}
          <div className="lg:w-1/3 relative">
            {!isSold ? (
              <div className="sticky top-28 space-y-8" id="contact">
                {/* Form Card */}
                <div className="bg-white p-8 rounded-xl shadow-2xl border border-slate-100">
                  <div className="mb-6">
                    <span className="text-amber-500 font-bold tracking-widest text-xs uppercase block mb-2">Interested?</span>
                    <h3 className="text-2xl font-bold font-heading text-slate-900">Request a Callback</h3>
                  </div>
                  
                  <form className="space-y-4">
                    <div>
                      <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded p-4 text-sm focus:border-amber-500 focus:bg-white focus:outline-none transition-all placeholder:text-slate-400" placeholder="Full Name *" />
                    </div>
                    <div>
                      <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded p-4 text-sm focus:border-amber-500 focus:bg-white focus:outline-none transition-all placeholder:text-slate-400" placeholder="Email Address *" />
                    </div>
                    <div>
                      <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded p-4 text-sm focus:border-amber-500 focus:bg-white focus:outline-none transition-all placeholder:text-slate-400" placeholder="Phone Number *" />
                    </div>
                    <div>
                       <select className="w-full bg-slate-50 border border-slate-200 rounded p-4 text-sm focus:border-amber-500 focus:bg-white focus:outline-none transition-all text-slate-500">
                          <option>Interested In</option>
                          <option>Buying</option>
                          <option>Renting</option>
                          <option>Site Visit</option>
                       </select>
                    </div>
                    
                    <button type="button" className="w-full bg-gradient-to-r from-slate-900 to-slate-800 text-white font-bold uppercase tracking-widest py-4 rounded hover:from-amber-500 hover:to-amber-600 hover:text-white transition-all mt-4 flex justify-center items-center gap-2 group shadow-md">
                      Submit Enquiry
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-[10px] text-center text-slate-400 mt-4">By submitting this form, you agree to our Terms of Service.</p>
                  </form>
                </div>

                {/* Brochure Download */}
                <div className="bg-amber-50 p-6 rounded-xl text-slate-800 flex items-center justify-between cursor-pointer hover:bg-amber-100 transition-colors shadow-sm border border-amber-100 group">
                  <div>
                     <h4 className="font-bold text-lg leading-none mb-1 text-slate-900">Download Brochure</h4>
                     <p className="text-xs text-slate-500">Get detailed floor plans & pricing</p>
                  </div>
                  <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all text-amber-700">
                     <Download size={20} />
                  </div>
                </div>
              </div>
            ) : (
              <div className="sticky top-28 p-8 bg-red-50 border border-red-100 rounded-xl text-center shadow-lg">
                <div className="flex items-center justify-center gap-2 text-red-600 font-black uppercase tracking-[0.2em] text-sm mb-3">
                  <Ban size={20} /> Sold Out
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  This project has been completely sold. We are no longer accepting inquiries for this property.
                </p>
                <Link to="/new-homes" className="inline-block bg-slate-900 text-white px-6 py-2 rounded text-xs font-bold uppercase tracking-widest hover:bg-amber-500 transition-colors">
                  Explore Other Homes
                </Link>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default GenericPage;
