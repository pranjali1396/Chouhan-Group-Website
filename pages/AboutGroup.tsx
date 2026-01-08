
import React from 'react';
import {
  Building2, Car, BedDouble, Target, Eye, Users,
  Award, Briefcase, TrendingUp, CheckCircle, MapPin, Phone, Globe, Calendar, Presentation, PlayCircle, FileText,
  ChevronLeft, ChevronRight, ChevronUp, ChevronDown, Maximize2, RotateCcw, Download
} from 'lucide-react';

const TEAM = [
  {
    name: "Mr. Ajay Chouhan",
    role: "Founder & Chairman",
    image: "/new_images/ajay_chouhan.png",
    desc: "The visionary force behind Chouhan Group, founding the organization in 1998 with a commitment to excellence."
  },
  {
    name: "Suraj Chouhan",
    role: "Director",
    image: "/new_images/suraj_chouhan.png",
    desc: "Driving strategic growth and innovation across new verticals."
  },
  {
    name: "Sunny Chouhan",
    role: "Director",
    image: "/new_images/sunny_chouhan.png",
    desc: "Overseeing operational excellence and customer satisfaction."
  },
  {
    name: "Saurabh Chouhan",
    role: "Director",
    image: "/new_images/sourabh_chouhan.png",
    desc: "Leading marketing initiatives and brand development."
  }
];

const PORTFOLIO = {
  realEstate: {
    residential: [
      "Chouhan Green Valley Phase 1, 2, 3",
      "Chouhan Sunrise City",
      "Chouhan Dream Homes CHPL",
      "CHPL Shikhar Complex",
      "Chouhan Parkview",
      "Singapore Life City Phase 1, 2, 4",
      "Chouhan Town"
    ],
    commercial: [
      "Chouhan Complex",
      "Chouhan Parkview",
      "Chouhan Estate Phase 1, 2",
      "Chouhan Landmark",
      "Chouhan Business Park Phase 1, 2",
      "Chouhan Business Centre",
      "Chouhan City Centre"
    ]
  },
  auto: {
    brands: ["Maruti Suzuki Arena", "NEXA", "Hero MotoCorp", "Ashok Leyland"],
    locations: [
      "Maruti Suzuki Arena – Bypass Road",
      "Nexa – Bhilai",
      "Nexa – Kawardha",
      "Maruti Suzuki – Bemetara R Outlet",
      "Maruti Suzuki – Balod E Outlet",
      "Maruti Suzuki – Kawardha E Outlet",
      "MSSSP – Dallirajhara",
      "Hero Two-Wheeler Showroom (Durg)"
    ]
  },
  hospitality: {
    current: [
      "Empyrean Hotels – Bhilai",
      "Empyrean Lake Resort – Balod"
    ],
    upcoming: [
      "Hotel Empyrean – Tatibandh (Opening Shortly)",
      "Hotel Empyrean – Tumdibod",
      "Hotel Palladio – Bhilai",
      "Hotel Sky Park"
    ]
  }
};

const AboutGroup: React.FC = () => {
  const [showSummary, setShowSummary] = React.useState(false);
  const [showPresentation, setShowPresentation] = React.useState(false);
  const [currentSlide, setCurrentSlide] = React.useState(1);
  const totalSlides = 32;
  const iframeRef = React.useRef<HTMLIFrameElement>(null);

  const nextSlide = () => setCurrentSlide(prev => Math.min(prev + 1, totalSlides));
  const prevSlide = () => setCurrentSlide(prev => Math.max(prev - 1, 1));
  const restart = () => setCurrentSlide(1);

  const startPresenterMode = () => {
    setShowSummary(false);
    setShowPresentation(true);
    setCurrentSlide(1);
  };

  const closePresentation = () => {
    setShowPresentation(false);
    setShowSummary(true);
  };


  // Update iframe when slide changes
  React.useEffect(() => {
    if (iframeRef.current && showPresentation) {
      const newUrl = `/Corporate_Business_Profile.pdf#page=${currentSlide}&toolbar=0&navpanes=0&scrollbar=0&view=Fit`;

      // Only update if the URL is different (avoid unnecessary reloads)
      if (iframeRef.current.src !== window.location.origin + newUrl) {
        iframeRef.current.src = newUrl;
      }
    }
  }, [currentSlide, showPresentation]);

  // Focus trap for keyboard navigation
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (showPresentation) {
      // Focus the container to capture keyboard events immediately
      containerRef.current?.focus();
    }
  }, [showPresentation]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!showPresentation) return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prevSlide();
      }
      if (e.key === 'Escape') closePresentation();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showPresentation]);

  return (
    <div className="bg-white font-sans text-slate-800 pt-32 md:pt-48">

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/new_images/sunrixecity_04.webp")' }}></div>
        <div className="absolute inset-0 bg-white/90"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-slate-900">
          <div className="inline-block border border-amber-500/30 bg-amber-50 px-4 py-1 rounded-full text-amber-600 font-bold tracking-widest text-xs uppercase mb-6">
            Est. 1998
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 drop-shadow-sm">About Chouhan Group</h1>
          <div className="h-1 w-24 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl font-light tracking-wide text-slate-600">
            Innovating. Building. Driving Excellence.
          </p>
        </div>
      </section>

      {/* Corporate Overview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-4">Our Story</h2>
              <h3 className="text-4xl font-heading font-black text-slate-900 mb-8">
                A Legacy Rooted in <span className="text-amber-500">Vision & Dedication</span>
              </h3>
              <div className="space-y-6 text-slate-600 leading-loose text-lg font-light">
                <p>
                  Founded in 1998 by <strong className="text-slate-900">Mr. Ajay Chouhan</strong>, the Chouhan Group stands as a multi-vertical enterprise with a legacy rooted in entrepreneurship. Over the years, the group has grown into a dynamic organization and emerged as a leader across diverse sectors—namely Real Estate, Automobile Dealerships, and Hospitality.
                </p>
                <p>
                  We pride ourselves on a strong foundation of trust, performance, and innovation, delivering impactful projects and experiences that shape communities and improve lives. Today, we continue to strive for excellence, bringing quality to all ventures while contributing actively to community development.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -mr-8 -mt-8 z-0"></div>

                <h3 className="text-xl font-bold font-heading text-slate-900 mb-8 relative z-10 flex items-center gap-2">
                  Corporate Fast Facts
                  <div className="h-0.5 w-8 bg-amber-500"></div>
                </h3>

                <div className="space-y-6 relative z-10">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 hover:bg-amber-50 transition-colors group/item">
                    <div className="p-2 bg-white rounded-full shadow-sm text-amber-500 group-hover/item:scale-110 transition-transform">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Global Headquarters</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">Ground Floor, Chouhan Estate, Beside Chandra Maurya Talkies, NH53, Bhilai, Chhattisgarh</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 hover:bg-amber-50 transition-colors group/item">
                    <div className="p-2 bg-white rounded-full shadow-sm text-amber-500 group-hover/item:scale-110 transition-transform">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Established</h4>
                      <p className="text-slate-500 text-xs">1998</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 hover:bg-amber-50 transition-colors group/item">
                    <div className="p-2 bg-white rounded-full shadow-sm text-amber-500 group-hover/item:scale-110 transition-transform">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Contact</h4>
                      <p className="text-slate-500 text-xs">+91 9109104005</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 hover:bg-amber-50 transition-colors group/item">
                    <div className="p-2 bg-white rounded-full shadow-sm text-amber-500 group-hover/item:scale-110 transition-transform">
                      <Globe size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">Online Presence</h4>
                      <p className="text-slate-500 text-xs">chouhangroup.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission Values */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="bg-white p-10 rounded-xl shadow-md border-t-4 border-amber-500 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mb-6">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4 text-slate-900">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                Crossing boundaries and creating sustainable destinations that redefine life experiences globally. We aspire to be at the forefront of transformative solutions, shaping a future where every endeavor reflects our dedication to exceeding expectations.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-10 rounded-xl shadow-md border-t-4 border-slate-700 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-slate-100 text-slate-700 rounded-full flex items-center justify-center mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4 text-slate-900">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To create a lasting impact on lives, inspiring through quality, transparency, and customer-centric initiatives. Driven by a passion for excellence, we aim to pioneer innovative solutions across all our sectors.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-10 rounded-xl shadow-md border-t-4 border-amber-500 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mb-6">
                <Briefcase size={32} />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4 text-slate-900">Our Values</h3>
              <p className="text-slate-600 leading-relaxed">
                We hold dear the values of integrity, transparency, and openness. We aspire to inspire and guide our customers towards excellence in every interaction. Our commitment to addressing needs through quality-oriented initiatives is unwavering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-black text-slate-900 mb-16">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((member, idx) => (
              <div key={idx} className="group relative">
                <div className="h-96 overflow-hidden rounded-lg mb-6 bg-slate-100 relative shadow-sm">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-left">
                    <p className="text-white text-sm">{member.desc}</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-amber-600 font-medium text-sm uppercase tracking-widest mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Verticals Portfolio */}
      <section className="bg-slate-50 text-slate-800 py-24 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-black mb-4 text-center text-slate-900">Our Portfolio</h2>
          <div className="flex justify-center mb-16">
            <button
              onClick={() => setShowSummary(true)}
              className="group flex items-center gap-3 bg-[#002b49] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-amber-500 hover:text-black transition-all shadow-xl hover:shadow-amber-500/20"
            >
              <Presentation size={20} className="group-hover:scale-110 transition-transform" />
              View Corporate Business Profile
              <PlayCircle size={20} className="animate-pulse" />
            </button>
          </div>

          {/* Real Estate */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-amber-100 text-amber-600 rounded"><Building2 size={24} /></div>
              <h3 className="text-3xl font-bold text-slate-900">Real Estate</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-l border-slate-300 pl-6 md:pl-12">
              <div>
                <h4 className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-6">Residential Projects</h4>
                <ul className="space-y-4">
                  {PORTFOLIO.realEstate.residential.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 hover:text-amber-600 transition-colors">
                      <CheckCircle size={18} className="text-amber-500 mt-1 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-6">Commercial Projects</h4>
                <ul className="space-y-4">
                  {PORTFOLIO.realEstate.commercial.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 hover:text-amber-600 transition-colors">
                      <CheckCircle size={18} className="text-amber-500 mt-1 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Automobiles */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-100 text-blue-600 rounded"><Car size={24} /></div>
              <h3 className="text-3xl font-bold text-slate-900">Automobiles</h3>
            </div>
            <div className="border-l border-slate-300 pl-6 md:pl-12">
              <p className="text-slate-600 mb-8 max-w-2xl">
                We are proud partners with leading automotive brands, offering exceptional service and customer experiences through our extensive network of dealerships including Maruti Suzuki, NEXA, Hero, and Ashok Leyland.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {PORTFOLIO.auto.locations.map((loc, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded hover:shadow-md transition-all">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm tracking-wide font-medium">{loc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hospitality */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-purple-100 text-purple-600 rounded"><BedDouble size={24} /></div>
              <h3 className="text-3xl font-bold text-slate-900">Hospitality</h3>
            </div>
            <div className="border-l border-slate-300 pl-6 md:pl-12 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-purple-600 font-bold uppercase tracking-widest text-sm mb-6">Current Properties</h4>
                <ul className="space-y-4">
                  {PORTFOLIO.hospitality.current.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600">
                      <span className="w-1.5 h-1.5 bg-purple-500 rotate-45"></span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-purple-600 font-bold uppercase tracking-widest text-sm mb-6">Upcoming Projects</h4>
                <ul className="space-y-4">
                  {PORTFOLIO.hospitality.upcoming.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600">
                      <span className="w-1.5 h-1.5 bg-purple-500 rotate-45"></span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block p-4 bg-amber-50 rounded-full text-amber-500 mb-6">
            <Award size={40} />
          </div>
          <h2 className="text-4xl font-heading font-black text-slate-900 mb-6">Awards & Recognition</h2>
          <p className="max-w-2xl mx-auto text-slate-600 mb-16">
            Our commitment to quality has been recognized across the industry. From "Best Performing New Outlet" for Maruti Suzuki to regional real estate excellence awards.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholders for Award Images */}
            <div className="h-40 bg-slate-50 shadow-sm rounded-lg flex items-center justify-center p-4 border border-slate-100">
              <span className="font-bold text-slate-400">Real Estate Excellence</span>
            </div>
            <div className="h-40 bg-slate-50 shadow-sm rounded-lg flex items-center justify-center p-4 border border-slate-100">
              <span className="font-bold text-slate-400">Maruti Suzuki Gold</span>
            </div>
            <div className="h-40 bg-slate-50 shadow-sm rounded-lg flex items-center justify-center p-4 border border-slate-100">
              <span className="font-bold text-slate-400">NEXA Platinum Dealer</span>
            </div>
            <div className="h-40 bg-slate-50 shadow-sm rounded-lg flex items-center justify-center p-4 border border-slate-100">
              <span className="font-bold text-slate-400">Hospitality Design Award</span>
            </div>
          </div>
        </div>
      </section>

      {/* Presentation Modal - True Theater/Presenter Mode */}
      {showPresentation && (
        <div
          ref={containerRef}
          tabIndex={0}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md transition-all duration-500 outline-none"
        >

          {/* Download Button - Top Left */}
          <a
            href="/Corporate_Business_Profile.pdf"
            download="Chouhan_Group_Corporate_Profile.pdf"
            className="absolute top-6 left-6 z-[120] flex items-center gap-2 px-4 py-2.5 rounded-full bg-amber-500 text-white hover:bg-amber-600 transition-all font-bold text-sm shadow-lg border border-amber-400"
            title="Download PDF for faster navigation"
          >
            <Download size={18} />
            <span className="hidden sm:inline">Download PDF</span>
          </a>

          {/* Close Button - Top Right */}
          <button
            onClick={closePresentation}
            className="absolute top-6 right-6 z-[120] w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white/50 hover:bg-red-500 hover:text-white transition-all group border border-white/10"
            title="Exit Presentation (ESC)"
          >
            <div className="text-3xl leading-none group-hover:rotate-90 transition-transform font-light">&times;</div>
          </button>

          {/* Presenter Stage */}
          <div className="relative w-full h-full max-w-[98vw] max-h-[96vh] flex flex-col items-center justify-center animate-fadeIn">

            {/* Click overlays removed to allow cursor interaction with PDF */}

            {/* The Slide Area */}
            <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8">
              <div className="w-full h-full max-w-screen-xl aspect-video bg-black shadow-[0_0_100px_rgba(0,0,0,0.8)] rounded-lg overflow-hidden border border-white/5 relative z-10">
                <iframe
                  ref={iframeRef}
                  src={`/Corporate_Business_Profile.pdf#page=${currentSlide}&toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
                  className="w-full h-full border-none"
                  title="Corporate Business Profile"
                ></iframe>
              </div>
            </div>

            {/* Progress indicator at the very bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5 overflow-hidden z-50">
              <div
                className="h-full bg-amber-500 transition-all duration-500 ease-out shadow-[0_0_15px_rgba(245,158,11,0.5)]"
                style={{ width: `${(currentSlide / totalSlides) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* Presentation Summary Modal */}
      {showSummary && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-scaleUp">
            {/* Header */}
            <div className="p-6 md:p-8 bg-gradient-to-r from-[#002b49] to-[#003d66] text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-amber-500 rounded-xl">
                    <FileText size={28} />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-heading font-black">Corporate Business Profile</h2>
                    <p className="text-sm text-white/70 mt-1">Chouhan Group • Complete Overview</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowSummary(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-all"
                >
                  <div className="text-2xl">&times;</div>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="text-amber-500" size={28} />
                  <h3 className="text-xl font-bold text-slate-900">Corporate Business Profile Overview</h3>
                </div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  A comprehensive {totalSlides}-slide presentation showcasing Chouhan Group's multi-vertical business portfolio, achievements, and 25+ years of excellence since 1998.
                </p>
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                  <p className="text-sm text-amber-900 font-medium">
                    📊 <strong>Ready to present?</strong> Use Presenter Mode for a professional slide-by-slide experience with keyboard navigation and progress tracking.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <Building2 size={20} className="text-amber-600" />
                    Real Estate Division
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Residential Projects (7+ developments)</li>
                    <li>• Commercial Complexes</li>
                    <li>• Premium Townships</li>
                    <li>• Bungalow Collections</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <Car size={20} className="text-blue-600" />
                    Automobile Division
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Maruti Suzuki Arena & NEXA</li>
                    <li>• Hero MotoCorp Dealerships</li>
                    <li>• Ashok Leyland Commercial</li>
                    <li>• 10+ Locations Across Region</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <BedDouble size={20} className="text-purple-600" />
                    Hospitality Division
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Empyrean Hotels (Multiple Locations)</li>
                    <li>• Hotel Palladio - Bhilai</li>
                    <li>• Hotel Sky Park</li>
                    <li>• Premium Dining & Events</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <Award size={20} className="text-green-600" />
                    Key Highlights
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• 25+ Years of Excellence</li>
                    <li>• Multi-Award Winning Group</li>
                    <li>• 1000+ Employees</li>
                    <li>• Pan-Regional Presence</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                <p className="text-sm text-amber-900">
                  <strong>Total Slides:</strong> {totalSlides} | <strong>Divisions Covered:</strong> Real Estate, Automobiles, Hospitality | <strong>Projects Showcased:</strong> 20+
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-3">
              <button
                onClick={startPresenterMode}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all font-bold text-base flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
              >
                <PlayCircle size={20} />
                Start Presenter Mode
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">32 Slides</span>
              </button>
              <button
                onClick={() => setShowSummary(false)}
                className="w-full sm:w-auto px-6 py-3 bg-slate-200 text-slate-700 rounded-xl hover:bg-slate-300 transition-all font-bold text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutGroup;
