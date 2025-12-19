
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
}

const ProjectDetail: React.FC<{ data: ProjectData }> = ({ data }) => {
  const isSold = data.status.toLowerCase() === 'sold';

  return (
    <div className="bg-white font-sans text-slate-800">
      {/* Hero Section - Large image with simple white text overlay */}
      <div className="relative h-[55vh] min-h-[400px] w-full overflow-hidden">
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
                   The final tower is now selling! <Link to="/contact" className="text-[#002b49] underline font-medium hover:text-amber-600">Register today</Link> to stay informed.
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
             {/* Script Logo Placeholder */}
             <div className="mb-10 pt-4">
               <h2 className="font-serif italic text-4xl text-[#4a5568] tracking-tight">
                 {data.logoText || data.title.split(' ')[0]}
                 <span className="block text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-[#718096] mt-2 not-italic">
                   CHOUHAN GROUP
                 </span>
               </h2>
             </div>

             <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#718096] mb-6 border-b border-slate-100 pb-2">Project Info</h3>
             
             {/* CTA Buttons - Hidden if Sold */}
             {!isSold ? (
               <div className="grid grid-cols-2 gap-3 mb-10">
                 <button className="bg-[#002b49] text-white py-3 px-2 text-[11px] font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors shadow-sm rounded-sm">
                   View Website
                 </button>
                 <button className="bg-[#002b49] text-white py-3 px-2 text-[11px] font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors shadow-sm rounded-sm">
                   Register Today
                 </button>
               </div>
             ) : (
               <div className="mb-10 p-6 bg-red-50 border border-red-100 rounded-sm text-center">
                 <div className="flex items-center justify-center gap-2 text-red-600 font-black uppercase tracking-[0.2em] text-xs">
                    <Ban size={14} /> Sold Out
                 </div>
                 <p className="text-[10px] text-red-400 mt-2 font-medium">All units in this project have been sold.</p>
               </div>
             )}

             {/* Details Table */}
             <div className="space-y-6 text-[13px] text-[#4a5568]">
                <div className="flex gap-4">
                   <div className="w-24 shrink-0 font-medium">Status:</div>
                   <div className={isSold ? "font-bold text-red-600 uppercase" : "font-light"}>{data.status}</div>
                </div>

                <div className="flex gap-4">
                   <div className="w-24 shrink-0 font-medium">Contact:</div>
                   <div className="font-light">
                     <a href={`mailto:${data.contact.email}`} className="text-[#002b49] underline hover:text-amber-600 block mb-1">
                       {data.contact.email}
                     </a>
                     <p className="text-slate-400">{data.contact.phone}</p>
                   </div>
                </div>

                <div className="flex gap-4">
                   <div className="w-24 shrink-0 font-medium">Presentation Centre:</div>
                   <div className="font-light leading-relaxed">
                     {data.presentationCentre.address}
                     <p className="text-slate-400 mt-1">{data.presentationCentre.hours}</p>
                   </div>
                </div>

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

             {/* Gallery Section */}
             {data.gallery && data.gallery.length > 0 && (
               <div className="mt-12">
                 <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#718096] mb-6 border-b border-slate-100 pb-2">Gallery</h3>
                 <div className="grid grid-cols-3 gap-2">
                    {data.gallery.slice(0, 6).map((img, idx) => (
                      <div key={idx} className="aspect-[4/3] overflow-hidden bg-slate-100 group cursor-pointer border border-slate-50 shadow-sm">
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
