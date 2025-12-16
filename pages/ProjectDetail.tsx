
import React from 'react';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
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
}

const ProjectDetail: React.FC<{ data: ProjectData }> = ({ data }) => {
  return (
    <div className="bg-white font-sans text-slate-800">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-16">
          <div className="container mx-auto">
             <h1 className="text-4xl md:text-6xl text-white font-heading font-normal tracking-wide drop-shadow-md">{data.title}</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column */}
          <div className="lg:w-2/3">
             <p className="text-slate-600 leading-relaxed text-lg mb-8 font-light">
               {data.description}
             </p>
             <p className="mb-12 text-slate-600 text-lg font-light">
               <Link to="/contact" className="text-slate-900 border-b border-slate-900 hover:text-amber-600 hover:border-amber-600 transition-colors pb-0.5">
                 Register today
               </Link> to be among the first to receive information as soon as it is available.
             </p>

             <h3 className="text-[#002b49] font-medium text-base mb-4">Presentation Centre:</h3>
             <div className="w-full h-[450px] bg-slate-100 border border-slate-200">
               <iframe 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  scrolling="no" 
                  marginHeight={0} 
                  marginWidth={0} 
                  title="Location Map"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(data.mapQuery)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
               ></iframe>
             </div>
          </div>

          {/* Right Column - Project Info */}
          <div className="lg:w-1/3">
             <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-6">Project Info</h3>
             
             <div className="grid grid-cols-2 gap-4 mb-10">
               <button className="bg-[#002b49] text-white py-3.5 px-4 text-[11px] font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors shadow-sm">
                 View Website
               </button>
               <button className="bg-[#002b49] text-white py-3.5 px-4 text-[11px] font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors shadow-sm">
                 Register Today
               </button>
             </div>

             <div className="space-y-8 text-sm text-slate-600">
                <div className="grid grid-cols-3 gap-4">
                   <div className="text-slate-500 font-medium">Status:</div>
                   <div className="col-span-2 text-slate-800 font-light">{data.status}</div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                   <div className="text-slate-500 font-medium">Address:</div>
                   <div className="col-span-2 text-slate-800 font-light leading-relaxed">{data.address}</div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                   <div className="text-slate-500 font-medium">Presentation Centre:</div>
                   <div className="col-span-2 text-slate-800 font-light leading-relaxed">
                     <p className="mb-4">{data.presentationCentre.address}</p>
                     <p className="text-slate-500">{data.presentationCentre.hours}</p>
                   </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                   <div className="text-slate-500 font-medium">Contact:</div>
                   <div className="col-span-2 font-light">
                     <p className="text-[#002b49] underline mb-1 cursor-pointer hover:text-amber-600 transition-colors">{data.contact.phone}</p>
                     <p className="text-[#002b49] underline cursor-pointer hover:text-amber-600 transition-colors">{data.contact.email}</p>
                   </div>
                </div>

                <div className="grid grid-cols-3 gap-4 items-center pt-2">
                   <div className="text-slate-500 font-medium">Share:</div>
                   <div className="col-span-2 flex gap-2">
                      <button className="w-8 h-8 bg-[#002b49] text-white flex items-center justify-center hover:bg-amber-500 transition-colors rounded-sm"><Facebook size={14} /></button>
                      <button className="w-8 h-8 bg-[#002b49] text-white flex items-center justify-center hover:bg-amber-500 transition-colors rounded-sm"><Twitter size={14} /></button>
                      <button className="w-8 h-8 bg-[#002b49] text-white flex items-center justify-center hover:bg-amber-500 transition-colors rounded-sm"><Mail size={14} /></button>
                      <button className="w-8 h-8 bg-[#002b49] text-white flex items-center justify-center hover:bg-amber-500 transition-colors rounded-sm"><Linkedin size={14} /></button>
                   </div>
                </div>
             </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
