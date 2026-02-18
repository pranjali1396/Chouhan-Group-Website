
import React, { useState, useEffect } from 'react';
import { Facebook, Twitter, Linkedin, Mail, Ban, ChevronLeft, ChevronRight, ArrowRight, Send, CheckCircle2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export interface ProjectData {
  title: string;
  description: string;
  status: string;
  address: string;
  presentationCentre: {
    address: string;
    hours: string;
  };
  contact: {
    phone: string;
    email: string;
  };
  heroImage: string | string[];
  heroPositions?: string[];
  mapQuery: string;
  logoText?: string; // For the script-style logo in the sidebar
  gallery?: string[];
  websiteUrl?: string;
}

const ProjectDetail: React.FC<{ data: ProjectData }> = ({ data }) => {
  const location = useLocation();
  const isSold = data.status.toLowerCase() === 'sold';
  const isHospitality = location.pathname.includes('/hospitality/');
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const heroImages = Array.isArray(data.heroImage) ? data.heroImage : [data.heroImage];

  const getContactUrl = () => {
    const title = data.title.toLowerCase();
    const webUrl = (data.websiteUrl || '').toLowerCase();

    if (title.match(/maruti|nexa|hero|true value/)) {
      return `tel:${data.contact.phone}`;
    }

    // Real Estate Specific Microsites
    if (title.includes('singapore') || webUrl.includes('singapore-city')) {
      return "https://singapore-city.chouhangroup.com/contact.html";
    }
    if (title.includes('parkview') || webUrl.includes('parkview')) {
      return "https://chouhan-parkview.chouhangroup.com/contact-us.html";
    }
    if (title.includes('green valley') || webUrl.includes('greenvalley')) {
      return "https://chouhan-greenvalley.chouhangroup.com/#contact";
    }
    if (title.includes('town') || webUrl.includes('chouhantown')) {
      return "https://chouhantown.chouhangroup.com/#contact";
    }

    // Generic Website contact fallback
    if (data.websiteUrl && data.websiteUrl.startsWith('http')) {
      return `${data.websiteUrl.replace(/\/$/, '')}/contact`;
    }

    return "#contact";
  };

  const contactUrl = getContactUrl();

  const isExternalContact = contactUrl.startsWith('http') || contactUrl.startsWith('tel:');

  useEffect(() => {
    if (heroImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // CRMIntegration will automatically capture this form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 600);
  };
  const scrollToContact = (e: React.MouseEvent) => {
    if (contactUrl === "#contact") {
      e.preventDefault();
      const element = document.getElementById('contact');
      if (element) {
        const offset = 120;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };



  return (
    <div className="bg-white font-sans text-slate-800 pt-32 md:pt-48">
      {/* Hero Section - Large image with simple white text overlay */}
      <div className="relative h-[35vh] md:h-[85vh] min-h-[220px] md:min-h-[500px] w-full overflow-hidden">
        {heroImages.length === 1 ? (
          <div className="absolute inset-0 bg-slate-900">
            {heroImages[0].toLowerCase().endsWith('.mp4') ? (
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/new_images/sunrise_city_drone.jpg"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              >
                <source src={heroImages[0]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={heroImages[0]}
                alt={data.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: data.heroPositions && data.heroPositions[0] ? data.heroPositions[0] as any : 'center' }}
                loading="eager"
                {...(true ? { fetchPriority: "high" } as any : {})}
                decoding="async"
              />
            )}
          </div>
        ) : (
          heroImages.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentHeroIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              {img.toLowerCase().endsWith('.mp4') ? (
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/new_images/sunrise_city_drone.jpg"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                >
                  <source src={img} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={img}
                  alt={`${data.title} ${idx + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: data.heroPositions && data.heroPositions[idx] ? data.heroPositions[idx] as any : 'center' }}
                  loading={idx === 0 ? "eager" : "lazy"}
                  {...(idx === 0 ? { fetchPriority: "high" } as any : {})}
                  decoding="async"
                />
              )}
              {/* Background color to prevent white flash */}
              <div className="absolute inset-0 -z-10 bg-slate-900"></div>
            </div>
          ))
        )}

        {data.title !== "Sunrise City" && (
          <div className="absolute inset-0 bg-black/20 z-10"></div>
        )}

        {/* Navigation Arrows for Slider (only if multiple images) */}
        {heroImages.length > 1 && (
          <>
            <button
              onClick={() => setCurrentHeroIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-all md:flex hidden items-center justify-center"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-all md:flex hidden items-center justify-center"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {heroImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentHeroIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${idx === currentHeroIndex ? 'bg-white w-6' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </>
        )}

        {/* SOLD OUT Overlay */}
        {isSold && (
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <div className="bg-red-600/90 text-white border-4 border-white px-8 py-3 md:px-16 md:py-6 text-3xl md:text-7xl font-black uppercase tracking-[0.2em] -rotate-12 shadow-2xl animate-pulse">
              Sold Out
            </div>
          </div>
        )}

        {data.title !== "Sunrise City" && (
          <div className="absolute bottom-0 left-0 w-full p-4 md:p-12">
            <div className="container mx-auto px-4">
              <h1 className="text-2xl md:text-6xl text-white font-heading font-light tracking-wide leading-tight max-w-4xl drop-shadow-lg">
                {data.title}
              </h1>
            </div>
          </div>
        )}
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

          {/* Left Column - Main Content */}
          <div className="lg:w-[60%]">
            <div className="space-y-6 text-[#555] leading-relaxed text-[15px]">
              {data.description.split('\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              {!isSold && (
                <p className="text-[#555]">
                  {data.status === 'Now Renting' ? 'Units are now available for rent! ' :
                    data.status === 'Now Selling' ? (data.title.toLowerCase().includes('parkview') ? 'The final tower is now selling! ' : 'Units are now available for sale! ') :
                      data.status === 'Ready to Move' ? 'Project is ready for possession! Units are now available for sale! ' :
                        data.status === 'Few Units Left' ? 'Only a few units remaining! Grab yours today. ' :
                          data.status === 'New Launch' ? 'New phase is now launching! ' :
                            data.status === 'Upcoming' || data.status === 'Coming Soon' ? 'Project is coming soon! ' : ''}
                  {isExternalContact ? (
                    <a
                      href={contactUrl}
                      target={contactUrl.startsWith('tel:') ? undefined : "_blank"}
                      rel={contactUrl.startsWith('tel:') ? undefined : "noopener noreferrer"}
                      className="text-[#002b49] underline font-medium hover:text-amber-600"
                    >
                      {data.title.toLowerCase().match(/maruti|nexa|hero|true value/) ? 'Call Now' : 'Contact Us'}
                    </a>
                  ) : (
                    <a
                      href={contactUrl}
                      onClick={scrollToContact}
                      className="text-[#002b49] underline font-medium hover:text-amber-600"
                    >
                      {data.title.toLowerCase().match(/maruti|nexa|hero|true value/) ? 'Call Now' : 'Contact Us'}
                    </a>
                  )} to stay informed.
                </p>
              )}
            </div>

            <div className="mt-12">
              <h3 className="text-sm font-bold text-[#333] mb-6">Project Location:</h3>
              <div className="w-full h-[400px] bg-slate-100 border border-slate-200 relative group">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  title="Location Map"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(data.mapQuery)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                  className="grayscale-[0.2]"
                ></iframe>
                <div className="absolute top-4 right-4 bg-white p-2 shadow-md rounded-sm md:hidden">
                  <span className="text-[10px] font-bold text-slate-400">TOUCH TO NAVIGATE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:w-[40%]">
            {/* Script Logo Removed as per user request */}



            {/* Project Name */}
            <h2 className="text-2xl font-heading font-bold text-slate-800 mb-8 leading-tight">
              {data.title}
            </h2>

            <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#718096] mb-6 border-b border-slate-100 pb-2">Project Info</h3>

            {/* CTA Buttons - Hidden if Sold */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {data.websiteUrl && !((data.status.toLowerCase() === 'upcoming' || data.status.toLowerCase() === 'coming soon') && isHospitality) ? (
                data.websiteUrl.startsWith('/') ? (
                  <Link to={data.websiteUrl} className="bg-[#002b49] text-white py-3 px-2 text-[11px] font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors shadow-sm rounded-sm text-center flex items-center justify-center">
                    View Website
                  </Link>
                ) : (
                  <a href={data.websiteUrl} target="_blank" rel="noopener noreferrer" className="bg-[#002b49] text-white py-3 px-2 text-[11px] font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors shadow-sm rounded-sm text-center flex items-center justify-center">
                    View Website
                  </a>
                )
              ) : (
                !isSold && (
                  <button className="bg-slate-300 text-slate-500 py-3 px-2 text-[11px] font-bold uppercase tracking-wider cursor-not-allowed shadow-sm rounded-sm text-center flex items-center justify-center">
                    View Website
                  </button>
                )
              )}

              {!isSold && (
                isExternalContact ? (
                  <a
                    href={contactUrl}
                    target={contactUrl.startsWith('tel:') ? undefined : "_blank"}
                    rel={contactUrl.startsWith('tel:') ? undefined : "noopener noreferrer"}
                    className="bg-[#002b49] text-white py-3 px-2 text-[11px] font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors shadow-sm rounded-sm text-center flex items-center justify-center"
                  >
                    {data.title.toLowerCase().match(/maruti|nexa|hero|true value/) ? 'Call Now' : 'Contact Us'}
                  </a>
                ) : (
                  <a
                    href={contactUrl}
                    onClick={scrollToContact}
                    className="bg-[#002b49] text-white py-3 px-2 text-[11px] font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors shadow-sm rounded-sm text-center flex items-center justify-center"
                  >
                    {data.title.toLowerCase().match(/maruti|nexa|hero|true value/) ? 'Call Now' : 'Contact Us'}
                  </a>
                )
              )}
            </div>

            {/* Project Details Section */}
            <div id="project-sidebar" className="scroll-mt-32 space-y-10">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#718096] mb-6 border-b border-slate-100 pb-2">Project Details</h3>

              <div className="space-y-6 text-[13px] text-[#4a5568]">
                {/* Status */}
                <div className="flex gap-4">
                  <div className="w-24 shrink-0 font-medium">Status:</div>
                  <div className={isSold ? "font-bold text-red-600 uppercase" : "font-light"}>{data.status}</div>
                </div>

                {/* Contact */}
                {data.title.toLowerCase().includes('maruti') ||
                  data.title.toLowerCase().includes('nexa') ||
                  data.title.toLowerCase().includes('hero') ||
                  data.title.toLowerCase().includes('true value') ? (
                  <>
                    <div className="flex gap-4">
                      <div className="w-24 shrink-0 font-medium whitespace-nowrap">Contact:</div>
                      <div className="font-light">
                        <a href={`mailto:${data.contact.email}`} className="text-[#002b49] underline hover:text-amber-600 block mb-1">
                          {data.contact.email}
                        </a>
                        <p className="text-slate-400">{data.contact.phone}</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-24 shrink-0 font-medium">Showroom:</div>
                      <div className="font-light leading-relaxed">
                        {data.presentationCentre.address}
                        <p className="text-slate-400 mt-1">{data.presentationCentre.hours}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex gap-4">
                      <div className="w-24 shrink-0 font-medium whitespace-nowrap">📞 Contact:</div>
                      <div className="font-light">
                        <a href={`tel:${data.contact.phone}`} className="text-[#002b49] font-bold hover:text-amber-600">
                          {data.contact.phone}
                        </a>
                      </div>
                    </div>

                    {/* Head Office / Presentation Centre */}
                    <div className="flex gap-4">
                      <div className="w-24 shrink-0 font-medium whitespace-nowrap">📍 Office:</div>
                      <div className="font-light leading-relaxed">
                        {data.presentationCentre.address}
                        {data.presentationCentre.hours && (
                          <p className="text-slate-400 mt-1">{data.presentationCentre.hours}</p>
                        )}
                      </div>
                    </div>
                  </>
                )}

                {/* Share */}
                <div className="flex gap-4 items-center">
                  <div className="w-24 shrink-0 font-medium">Share:</div>
                  <div className="flex gap-2">
                    <button className="w-7 h-7 bg-[#002b49] text-white flex items-center justify-center hover:bg-amber-500 transition-colors rounded-sm"><Facebook size={12} fill="white" stroke="none" /></button>
                    <button className="w-7 h-7 bg-[#002b49] text-white flex items-center justify-center hover:bg-amber-500 transition-colors rounded-sm"><Twitter size={12} fill="white" stroke="none" /></button>
                    <button className="w-7 h-7 bg-[#002b49] text-white flex items-center justify-center hover:bg-amber-500 transition-colors rounded-sm"><Mail size={12} /></button>
                    <button className="w-7 h-7 bg-[#002b49] text-white flex items-center justify-center hover:bg-amber-500 transition-colors rounded-sm"><Linkedin size={12} fill="white" stroke="none" /></button>
                  </div>
                </div>
              </div>

              {/* Official Project Enquiry Form */}
              {!isSold && (
                <div id="contact" className="bg-white p-8 md:p-10 rounded-xl border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] mt-16 transition-all hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.12)] scroll-mt-32">
                  {isExternalContact && !contactUrl.startsWith('tel:') ? (
                    <div className="text-center py-12">
                      <div className="mb-8">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-600 block mb-3">Register Interest</span>
                        <h3 className="text-2xl font-heading font-black text-[#002b49] mb-4 uppercase tracking-tight">
                          Official {data.title} Registration
                        </h3>
                        <div className="h-1 w-12 bg-amber-500 mx-auto rounded-full mb-6"></div>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto">
                          Click below to open the official registration form for <strong>{data.title}</strong> and receive exclusive project details, floor plans, and pricing.
                        </p>
                      </div>
                      <a
                        href={contactUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-[#002b49] text-white py-5 px-10 font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-slate-800 transition-all rounded-sm shadow-lg group"
                      >
                        Contact Us <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  ) : formStatus === 'success' ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 size={32} />
                      </div>
                      <h3 className="text-2xl font-black text-[#002b49] mb-2">Request Sent</h3>
                      <p className="text-slate-500 text-sm mb-8">We've received your enquiry for <strong>{data.title}</strong> and will contact you shortly.</p>
                      <button onClick={() => setFormStatus('idle')} className="bg-[#002b49] text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-slate-800 transition-all">
                        Send another enquiry
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="mb-10 text-center">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-600 block mb-3">Priority Support</span>
                        <h3 className="text-2xl font-heading font-black text-[#002b49] mb-4 uppercase tracking-tight">
                          Official {data.title} Project Enquiry
                        </h3>
                        <div className="h-1 w-12 bg-amber-500 mx-auto rounded-full mb-6"></div>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto">
                          Fill out the form below to receive floor plans, pricing, and project details directly from our sales team.
                        </p>
                      </div>

                      <form onSubmit={handleFormSubmit} className="space-y-4">
                        <input type="hidden" name="project" value={data.title} />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input
                            required
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Full Name *"
                            className="w-full bg-slate-50 border border-slate-100 rounded-sm p-4 text-sm focus:border-[#002b49] focus:outline-none transition-all"
                          />
                          <input
                            required
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            type="tel"
                            placeholder="Phone Number *"
                            className="w-full bg-slate-50 border border-slate-100 rounded-sm p-4 text-sm focus:border-[#002b49] focus:outline-none transition-all"
                          />
                        </div>
                        <input
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          type="email"
                          placeholder="Email Address *"
                          className="w-full bg-slate-50 border border-slate-100 rounded-sm p-4 text-sm focus:border-[#002b49] focus:outline-none transition-all"
                        />
                        <textarea
                          required
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your interest (e.g., 2 BHK, Investment, etc.)"
                          className="w-full bg-slate-50 border border-slate-100 rounded-sm p-4 text-sm focus:border-[#002b49] focus:outline-none transition-all min-h-[100px] resize-none"
                        ></textarea>
                        <button
                          disabled={formStatus === 'submitting'}
                          type="submit"
                          className="w-full flex items-center justify-center gap-3 bg-[#002b49] text-white py-5 px-6 font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-slate-800 transition-all rounded-sm shadow-lg group disabled:opacity-50"
                        >
                          {formStatus === 'submitting' ? 'Processing...' : 'Submit Enquiry'} <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                      </form>
                    </>
                  )}
                  <div className="mt-8 text-center">
                    <p className="text-[10px] text-slate-400 font-medium italic">
                      Safe & Confidential: Your information is managed directly by Chouhan Group and sent to our CRM.
                    </p>
                  </div>
                </div>
              )}

              {isSold && (
                <div className="bg-red-50 p-6 rounded-sm border border-red-100 text-center mt-8">
                  <div className="flex items-center justify-center gap-2 text-red-600 font-black uppercase tracking-[0.2em] text-xs">
                    <Ban size={14} /> Sold Out
                  </div>
                  <p className="text-[10px] text-red-400 mt-2 font-medium">All units in this project have been sold.</p>
                </div>
              )}
            </div>

            {/* Gallery Section */}
            {data.gallery && data.gallery.length > 0 && (
              <div className="mt-16">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#718096] mb-8 border-b border-slate-100 pb-2">Photo Gallery</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {data.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedImage(img)}
                      className="aspect-[4/3] overflow-hidden bg-slate-100 group cursor-pointer border border-slate-50 shadow-sm rounded-sm"
                    >
                      <img
                        src={img}
                        alt={`${data.title} Gallery ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12 cursor-default"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedImage(null);
          }}
        >
          <button
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
            onClick={() => setSelectedImage(null)}
          >
            <span className="text-5xl font-light">&times;</span>
          </button>

          {data.gallery && data.gallery.length > 1 && (
            <>
              <button
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors p-4 z-[110]"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = data.gallery!.indexOf(selectedImage);
                  const prevIndex = (currentIndex - 1 + data.gallery!.length) % data.gallery!.length;
                  setSelectedImage(data.gallery![prevIndex]);
                }}
              >
                <ChevronLeft size={48} strokeWidth={1} />
              </button>
              <button
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors p-4 z-[110]"
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = data.gallery!.indexOf(selectedImage);
                  const nextIndex = (currentIndex + 1) % data.gallery!.length;
                  setSelectedImage(data.gallery![nextIndex]);
                }}
              >
                <ChevronRight size={48} strokeWidth={1} />
              </button>
            </>
          )}

          <img
            src={selectedImage}
            alt="Enlarged gallery view"
            className="max-w-full max-h-full object-contain shadow-2xl transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
