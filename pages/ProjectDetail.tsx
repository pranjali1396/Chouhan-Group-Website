
import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, Ban } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  heroImage: string;
  mapQuery: string;
  logoText?: string; // For the script-style logo in the sidebar
  gallery?: string[];
  websiteUrl?: string;
}

const ProjectDetail: React.FC<{ data: ProjectData }> = ({ data }) => {
  const isSold = data.status.toLowerCase() === 'sold';

  return (
    <div className="bg-white font-sans text-slate-800 pt-32 md:pt-48">
      {/* Hero Section - Large image with simple white text overlay */}
      <div className="relative h-[85vh] min-h-[500px] w-full overflow-hidden">
        <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/10"></div>

        {/* SOLD OUT Overlay */}
        {isSold && (
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <div className="bg-red-600/90 text-white border-4 border-white px-10 py-4 md:px-16 md:py-6 text-4xl md:text-7xl font-black uppercase tracking-[0.2em] -rotate-12 shadow-2xl animate-pulse">
              Sold Out
            </div>
          </div>
        )}

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl text-white font-heading font-light tracking-wide leading-tight max-w-4xl drop-shadow-lg">
              {data.title}
            </h1>
          </div>
        </div>
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
                  The final tower is now selling! {data.websiteUrl ? (
                    data.websiteUrl.startsWith('/') ? (
                      <Link to={`${data.websiteUrl}#contact`} className="text-[#002b49] underline font-medium hover:text-amber-600">
                        {data.title.toLowerCase().includes('maruti') || data.title.toLowerCase().includes('nexa') || data.title.toLowerCase().includes('hero') || data.title.toLowerCase().includes('true value') ? 'Call Now' : 'Register today'}
                      </Link>
                    ) : (
                      <a
                        href={
                          data.title.toLowerCase().includes('maruti') || data.title.toLowerCase().includes('nexa') || data.title.toLowerCase().includes('hero') || data.title.toLowerCase().includes('true value')
                            ? `tel:${data.contact.phone}`
                            : data.title.toLowerCase().includes('green valley') || data.title.toLowerCase().includes('town')
                              ? `${data.websiteUrl.endsWith('/') ? data.websiteUrl : data.websiteUrl + '/'}#contact`
                              : data.title.toLowerCase().includes('empyrean') || data.title.toLowerCase().includes('balod')
                                ? `https://www.empyreanhotels.in/contact`
                                : data.title.toLowerCase().includes('parkview')
                                  ? data.title.toLowerCase().includes('complex') || data.title.toLowerCase().includes('commercial')
                                    ? `${data.websiteUrl.endsWith('/') ? data.websiteUrl.slice(0, -1) : data.websiteUrl}/contact`
                                    : `${data.websiteUrl.endsWith('/') ? data.websiteUrl.slice(0, -1) : data.websiteUrl}/contact-us`
                                  : `${data.websiteUrl.endsWith('/') ? data.websiteUrl.slice(0, -1) : data.websiteUrl}/contact`
                        }
                        target={data.title.toLowerCase().match(/maruti|nexa|hero|true value/) ? undefined : "_blank"}
                        rel={data.title.toLowerCase().match(/maruti|nexa|hero|true value/) ? undefined : "noopener noreferrer"}
                        className="text-[#002b49] underline font-medium hover:text-amber-600"
                      >
                        {data.title.toLowerCase().includes('maruti') || data.title.toLowerCase().includes('nexa') || data.title.toLowerCase().includes('hero') || data.title.toLowerCase().includes('true value') ? 'Call Now' : 'Register today'}
                      </a>
                    )
                  ) : (
                    <a href={data.title.toLowerCase().match(/maruti|nexa|hero|true value/) ? `tel:${data.contact.phone}` : "#contact"} className="text-[#002b49] underline font-medium hover:text-amber-600">
                      {data.title.toLowerCase().includes('maruti') || data.title.toLowerCase().includes('nexa') || data.title.toLowerCase().includes('hero') || data.title.toLowerCase().includes('true value') ? 'Call Now' : 'Register today'}
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
              {data.websiteUrl ? (
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
                  <button className="bg-slate-300 text-slate-500 py-3 px-2 text-[11px] font-bold uppercase tracking-wider cursor-not-allowed shadow-sm rounded-sm">
                    View Website
                  </button>
                )
              )}

              {!isSold && (
                data.websiteUrl ? (
                  data.websiteUrl.startsWith('/') ? (
                    <Link to={data.title.toLowerCase().match(/maruti|nexa|hero|true value/) ? "tel:" + data.contact.phone : `${data.websiteUrl}#contact`} className="bg-[#002b49] text-white py-3 px-2 text-[11px] font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors shadow-sm rounded-sm text-center flex items-center justify-center">
                      {data.title.toLowerCase().includes('maruti') || data.title.toLowerCase().includes('nexa') || data.title.toLowerCase().includes('hero') || data.title.toLowerCase().includes('true value') ? 'Call Now' : 'Register Today'}
                    </Link>
                  ) : (
                    <a
                      href={
                        data.title.toLowerCase().includes('maruti') || data.title.toLowerCase().includes('nexa') || data.title.toLowerCase().includes('hero') || data.title.toLowerCase().includes('true value')
                          ? `tel:${data.contact.phone}`
                          : data.title.toLowerCase().includes('green valley') || data.title.toLowerCase().includes('town')
                            ? `${data.websiteUrl.endsWith('/') ? data.websiteUrl : data.websiteUrl + '/'}#contact`
                            : data.title.toLowerCase().includes('empyrean') || data.title.toLowerCase().includes('balod')
                              ? `https://www.empyreanhotels.in/contact`
                              : data.title.toLowerCase().includes('parkview')
                                ? data.title.toLowerCase().includes('complex') || data.title.toLowerCase().includes('commercial')
                                  ? `${data.websiteUrl.endsWith('/') ? data.websiteUrl.slice(0, -1) : data.websiteUrl}/contact`
                                  : `${data.websiteUrl.endsWith('/') ? data.websiteUrl.slice(0, -1) : data.websiteUrl}/contact-us`
                                : `${data.websiteUrl.endsWith('/') ? data.websiteUrl.slice(0, -1) : data.websiteUrl}/contact`
                      }
                      target={data.title.toLowerCase().match(/maruti|nexa|hero|true value/) ? undefined : "_blank"}
                      rel={data.title.toLowerCase().match(/maruti|nexa|hero|true value/) ? undefined : "noopener noreferrer"}
                      className="bg-[#002b49] text-white py-3 px-2 text-[11px] font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors shadow-sm rounded-sm text-center flex items-center justify-center"
                    >
                      {data.title.toLowerCase().includes('maruti') || data.title.toLowerCase().includes('nexa') || data.title.toLowerCase().includes('hero') || data.title.toLowerCase().includes('true value') ? 'Call Now' : 'Register Today'}
                    </a>
                  )
                ) : (
                  <a href={data.title.toLowerCase().match(/maruti|nexa|hero|true value/) ? `tel:${data.contact.phone}` : "#contact"} className="bg-[#002b49] text-white py-3 px-2 text-[11px] font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors shadow-sm rounded-sm text-center flex items-center justify-center">
                    {data.title.toLowerCase().includes('maruti') || data.title.toLowerCase().includes('nexa') || data.title.toLowerCase().includes('hero') || data.title.toLowerCase().includes('true value') ? 'Call Now' : 'Register Today'}
                  </a>
                )
              )}
            </div>

            {/* Project Details Section */}
            <div id="contact" className="scroll-mt-32 space-y-10">
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

              {/* Registration Form (Only if not sold) */}
              {!isSold && (
                <div className="bg-slate-50 p-8 rounded-sm border border-slate-100 mt-12">
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-6">Register Your Interest</h4>
                  <form className="space-y-4">
                    <div>
                      <input type="text" className="w-full bg-white border border-slate-200 rounded-sm p-4 text-sm focus:outline-none focus:border-amber-500 transition-colors shadow-inner" placeholder="Full Name *" required />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="tel" className="w-full bg-white border border-slate-200 rounded-sm p-4 text-sm focus:outline-none focus:border-amber-500 transition-colors shadow-inner" placeholder="Phone Number *" required />
                      <input type="email" className="w-full bg-white border border-slate-200 rounded-sm p-4 text-sm focus:outline-none focus:border-amber-500 transition-colors shadow-inner" placeholder="Email Address *" required />
                    </div>
                    <textarea className="w-full bg-white border border-slate-200 rounded-sm p-4 text-sm focus:outline-none focus:border-amber-500 transition-colors h-32 resize-none shadow-inner" placeholder="I'm interested in learning more..."></textarea>
                    <button type="button" className="w-full bg-[#002b49] text-white py-4 font-bold uppercase tracking-[0.2em] text-xs hover:bg-slate-800 transition-all shadow-lg rounded-sm">
                      Submit Enquiry
                    </button>
                    <p className="text-[10px] text-slate-400 text-center italic mt-4">Safe & Confidential: Your information is protected.</p>
                  </form>
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
                  {data.gallery.slice(0, 6).map((img, idx) => (
                    <div key={idx} className="aspect-[4/3] overflow-hidden bg-slate-100 group cursor-pointer border border-slate-50 shadow-sm rounded-sm">
                      <img
                        src={img}
                        alt={`${data.title} Gallery ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
