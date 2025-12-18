import React, { useState, useEffect } from 'react';
import { 
  MapPin, Phone, Mail, CheckCircle2, ArrowRight, Download, 
  Menu, X, ChevronDown, Trees, Shield, Zap, Home, 
  Coffee, Users, Landmark, Search, Play
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

const SunriseLanding: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [showModal, setShowModal] = useState(false);

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
    <div className="bg-white font-sans text-stone-800">
      
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
      <div className="sticky top-[70px] lg:top-[80px] z-40 bg-white/95 backdrop-blur shadow-sm border-b border-stone-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="hidden md:block font-heading font-bold text-emerald-900 text-lg uppercase tracking-wider">
              Sunrise City
            </div>
            <div className="flex space-x-6 overflow-x-auto no-scrollbar w-full md:w-auto">
              {SECTIONS.filter(s => s.id !== 'home').map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-xs font-bold uppercase tracking-wider whitespace-nowrap py-2 border-b-2 transition-all ${
                    activeTab === item.id 
                      ? 'border-emerald-600 text-emerald-800' 
                      : 'border-transparent text-gray-400 hover:text-emerald-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button onClick={() => scrollToSection('contact')} className="hidden lg:block bg-emerald-600 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-100">
              Register Interest
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative h-[85vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2200&auto=format&fit=crop" 
            alt="Sunrise City Aerial View" 
            className="w-full h-full object-cover"
          />
          {/* Lighter overlay for clearer look */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/60 via-emerald-900/10 to-transparent"></div>
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-2xl text-white">
            <span className="inline-block px-3 py-1 bg-amber-400 text-black text-[10px] font-bold uppercase tracking-widest rounded mb-6 shadow-sm">
              Now Selling • Pre-Launch Offers Available
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-black mb-6 leading-tight drop-shadow-md">
              A Premier Plot Investment Opportunity in Durg
            </h1>
            <p className="text-lg md:text-xl text-stone-100 mb-8 font-light leading-relaxed drop-shadow-sm">
              Flexible plots, prime location near IIT Bhilai, and strong long-term value. Build your dream home in a community designed for the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-white text-emerald-900 px-8 py-4 font-bold rounded hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                Register for Priority Access <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => setShowModal(true)}
                className="border-2 border-white text-white px-8 py-4 font-bold rounded hover:bg-white/20 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                Download Brochure <Download size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Discover / Intro Section */}
      <section id="discover" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
               <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2">Project Intro</h2>
               <h3 className="text-4xl font-heading font-bold text-stone-900 mb-6">A Vision for the Future.<br/>A Place to Call Home.</h3>
               <p className="text-gray-600 leading-loose mb-6">
                 Strategically located near <strong className="text-emerald-800">IIT Bhilai</strong>, Chouhan Sunrise City is more than just a plotted residential project — it's a community designed for those who seek space, peace of mind, and long-term investment growth. Set in the rapidly developing corridor of <strong className="text-emerald-800">Bhilai’s Dhamdha Road</strong>, this premium development offers a unique opportunity to own land in one of Chhattisgarh’s most promising locations.
               </p>
               <p className="text-gray-600 leading-loose">
                 Whether you're planning to build your dream home or looking for a smart investment, Chouhan Sunrise City offers the perfect blend of <strong>location</strong>, <strong>lifestyle</strong>, and <strong>future value</strong>.
               </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200 hover:shadow-lg transition-shadow">
                 <h4 className="text-3xl font-black text-emerald-800 mb-1">Prime</h4>
                 <p className="text-sm text-gray-500 uppercase tracking-wider">Location</p>
              </div>
              <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100 hover:shadow-lg transition-shadow">
                 <h4 className="text-3xl font-black text-emerald-800 mb-1">Ready</h4>
                 <p className="text-sm text-gray-500 uppercase tracking-wider">Infrastructure</p>
              </div>
              <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100 hover:shadow-lg transition-shadow">
                 <h4 className="text-3xl font-black text-emerald-800 mb-1">Gated</h4>
                 <p className="text-sm text-gray-500 uppercase tracking-wider">Community</p>
              </div>
              <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200 hover:shadow-lg transition-shadow">
                 <h4 className="text-3xl font-black text-emerald-800 mb-1">Green</h4>
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
            <button 
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 text-emerald-800 font-bold border-b-2 border-emerald-800 pb-1 hover:text-emerald-600 hover:border-emerald-600 transition-colors"
            >
              <Download size={18} /> Download Layout Master Plan (PDF)
            </button>
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

      {/* Gallery */}
      <section id="gallery" className="bg-stone-50 py-24 text-stone-900 border-t border-stone-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
             <div>
               <h2 className="text-3xl font-heading font-bold mb-2">Visual Showcase</h2>
               <p className="text-stone-500">Drone views and on-ground developments</p>
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px]">
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-lg shadow-md">
               <img src="https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=1200" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Main View" />
               <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/80 to-transparent w-full">
                 <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Site Progress</span>
                 <h3 className="text-xl font-bold text-white">Main Entrance Avenue</h3>
               </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
               <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="View 2" />
               <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                 <Search className="text-white" />
               </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-md">
               <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="View 3" />
               <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                 <Search className="text-white" />
               </div>
            </div>
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

    </div>
  );
};

// Helper icons
const HeartPulse = ({ size, className }: { size: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.15 4.33l-1.3 1.5"/><path d="M18 15v3h-3"/></svg>
);
const ShoppingBag = ({ size, className }: { size: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
);

export default SunriseLanding;