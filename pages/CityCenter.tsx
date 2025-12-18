
import React from 'react';
import { 
  Building2, MapPin, Phone, Mail, CheckCircle2, 
  Armchair, Utensils, ShoppingBag, Clapperboard, 
  Trees, Snowflake, FerrisWheel, Calendar, Send, 
  ShieldCheck, Banknote, HardHat, Clock, Award
} from 'lucide-react';

const BRANDS = [
  "Reliance", "Tata", "Landmark", "KFC", "Pizza Hut", 
  "Domino's", "Vaango", "Barbeque Nation", "Snow Park", "Amusement Park"
];

const SPECS = [
  { label: "Total Project Land", value: "15 Acres", icon: <MapPin /> },
  { label: "Commercial Building", value: "G+2, G+4", icon: <Building2 /> },
  { label: "Multiplex", value: "5 Screen, 1200 Seats", sub: "Gold Class Signed", icon: <Clapperboard /> },
  { label: "Project Timeline", value: "2024", icon: <Calendar /> },
];

const AMENITIES = [
  { label: "Multiplex Cinema", icon: <Clapperboard className="text-amber-500" /> },
  { label: "Retail Block", icon: <ShoppingBag className="text-amber-500" /> },
  { label: "Food Mall", icon: <Utensils className="text-amber-500" /> },
  { label: "Open Air Theater (OAT)", icon: <Armchair className="text-amber-500" /> },
  { label: "Children's Park", icon: <Trees className="text-amber-500" /> },
  { label: "Snow Park", icon: <Snowflake className="text-amber-500" /> },
  { label: "Amusement Park", icon: <FerrisWheel className="text-amber-500" /> },
  { label: "Commercial Blocks", icon: <Building2 className="text-amber-500" /> },
];

const USPS = [
  { 
    title: "Member of CREDAI & RERA Approved", 
    icon: <Award size={32} /> 
  },
  { 
    title: "Save Upto ₹2.67L Under PMAY", 
    icon: <Banknote size={32} /> 
  },
  { 
    title: "20+ Years of Experience", 
    icon: <ShieldCheck size={32} /> 
  },
  { 
    title: "High Standard Detailing in Construction", 
    icon: <HardHat size={32} /> 
  },
  { 
    title: "1 Year of FREE Maintenance", 
    sub: "(*T&C Applied)",
    icon: <Clock size={32} /> 
  },
  { 
    title: "Loan & EMI Facility Available", 
    icon: <CheckCircle2 size={32} /> 
  },
];

const CityCenter: React.FC = () => {
  return (
    <div className="bg-white font-sans text-slate-800">
      
      {/* Hero Section */}
      <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1519567241046-7f570eee3ce9?q=80&w=2000" 
          alt="Chouhan City Center Mall" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-16">
          <div className="container mx-auto">
             <span className="bg-amber-500 text-slate-900 px-4 py-1 text-xs font-bold uppercase tracking-widest rounded mb-4 inline-block">
               Upcoming Landmark
             </span>
             <h1 className="text-4xl md:text-7xl text-white font-heading font-black tracking-wide drop-shadow-md mb-4">
               Chouhan City Center
             </h1>
             <p className="text-xl text-slate-200 font-light max-w-2xl">
               Bhilai's Premier Shopping & Entertainment Destination
             </p>
          </div>
        </div>
      </div>

      {/* Description & Specs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Main Content */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">About The Project</h2>
              <p className="text-slate-600 leading-loose text-lg font-light mb-8">
                Chouhan City Center, by Chouhan Group, is Bhilai’s premier destination for shopping and entertainment, designed to cater to every family member. The center boasts a state-of-the-art multiplex with 5 screens and 1200 seats, including a luxurious Gold Class experience for movie lovers. 
              </p>
              <p className="text-slate-600 leading-loose text-lg font-light mb-8">
                Families can enjoy a diverse range of activities at our comprehensive Family Entertainment Center, which features a retail block, food mall, open-air theater (OAT), and a vibrant children's park. The commercial blocks add to the shopping experience with an array of top brands and eateries. Whether you're looking for a fun day out, a shopping spree, or fine dining, Chouhan City Center offers a complete and enjoyable experience for all.
              </p>

              {/* Brands Section */}
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 mt-12">
                <h3 className="text-xl font-bold font-heading text-slate-900 mb-6">Brands Under Discussion</h3>
                <div className="flex flex-wrap gap-3">
                  {BRANDS.map((brand, idx) => (
                    <span key={idx} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-700 shadow-sm">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Specs */}
            <div className="lg:w-1/3">
               <div className="bg-[#002b49] text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500 rounded-full blur-3xl opacity-20"></div>
                  <h3 className="text-xl font-bold uppercase tracking-widest mb-8 border-b border-white/20 pb-4">Project Highlights</h3>
                  
                  <div className="space-y-6">
                    {SPECS.map((spec, idx) => (
                      <div key={idx} className="flex gap-4 items-start group">
                        <div className="p-3 bg-white/10 rounded-lg text-amber-400 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                          {React.cloneElement(spec.icon as React.ReactElement, { size: 20 })}
                        </div>
                        <div>
                          <span className="block text-xs uppercase text-slate-400 tracking-wider mb-1">{spec.label}</span>
                          <span className="block text-xl font-bold">{spec.value}</span>
                          {spec.sub && <span className="block text-xs text-amber-400 mt-1">{spec.sub}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
             <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Lifestyle</span>
             <h2 className="text-3xl font-heading font-black text-slate-900 mt-2">Family Entertainment Center</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {AMENITIES.map((amenity, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mb-4">
                  {amenity.icon}
                </div>
                <h4 className="font-bold text-slate-800 text-sm">{amenity.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USPs - "Why Choose Us" */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-heading font-black text-slate-900 mb-4">Why You Should Choose Us?</h2>
             <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full"></div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {USPS.map((usp, idx) => (
               <div key={idx} className="flex gap-4 p-6 border border-slate-100 rounded-xl hover:border-amber-200 hover:shadow-lg transition-all group bg-white">
                 <div className="shrink-0 text-slate-400 group-hover:text-amber-500 transition-colors">
                   {usp.icon}
                 </div>
                 <div>
                   <h3 className="font-bold text-lg text-slate-900 mb-1">{usp.title}</h3>
                   {usp.sub && <p className="text-xs text-slate-500">{usp.sub}</p>}
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="h-[400px] w-full bg-slate-200 relative">
        <iframe 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          title="City Center Location"
          src={`https://maps.google.com/maps?q=${encodeURIComponent("Chouhan City Center Bhilai")}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
          className="grayscale hover:grayscale-0 transition-all duration-500"
        ></iframe>
        <div className="absolute top-4 left-4 bg-white px-6 py-3 shadow-lg rounded-lg border-l-4 border-amber-500">
          <h3 className="font-bold text-slate-900">Location Map</h3>
          <p className="text-xs text-slate-500">Chouhan City Center, Bhilai</p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-24 bg-[#002b49] text-white" id="book-now">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/2">
               <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4 block">Book Now</span>
               <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">Your Luxurious Lifestyle Awaits</h2>
               <p className="text-slate-300 text-lg leading-relaxed mb-8 font-light">
                 Secure your space in Bhilai's most anticipated commercial landmark. Reach out to our sales team for floor plans, pricing, and leasing opportunities.
               </p>
               
               <div className="space-y-4">
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-amber-400">
                     <Phone size={18} />
                   </div>
                   <div>
                     <p className="text-xs text-slate-400 uppercase font-bold">Call Us</p>
                     <p className="text-lg font-bold">+91 95111 21113</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-amber-400">
                     <Mail size={18} />
                   </div>
                   <div>
                     <p className="text-xs text-slate-400 uppercase font-bold">Email Us</p>
                     <p className="text-lg font-bold">sales@chouhangroup.com</p>
                   </div>
                 </div>
               </div>
            </div>

            <div className="lg:w-1/2 w-full">
               <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 text-slate-800">
                 <h3 className="text-2xl font-bold font-heading mb-6 text-slate-900">Enquire Now</h3>
                 <form className="space-y-4">
                   <div>
                     <input type="text" placeholder="Your Name" className="w-full bg-slate-50 border border-slate-200 rounded p-4 focus:border-amber-500 focus:outline-none focus:bg-white transition-all" />
                   </div>
                   <div>
                     <input type="email" placeholder="Your Email Address" className="w-full bg-slate-50 border border-slate-200 rounded p-4 focus:border-amber-500 focus:outline-none focus:bg-white transition-all" />
                   </div>
                   <div>
                     <input type="tel" placeholder="Your Phone Number" className="w-full bg-slate-50 border border-slate-200 rounded p-4 focus:border-amber-500 focus:outline-none focus:bg-white transition-all" />
                   </div>
                   <div>
                     <select className="w-full bg-slate-50 border border-slate-200 rounded p-4 focus:border-amber-500 focus:outline-none focus:bg-white transition-all text-slate-500">
                       <option>Select Interest</option>
                       <option>Retail Space</option>
                       <option>Office Space</option>
                       <option>Food Court</option>
                       <option>Multiplex Partnership</option>
                     </select>
                   </div>
                   <div>
                     <textarea placeholder="Type your message here...." className="w-full bg-slate-50 border border-slate-200 rounded p-4 h-32 focus:border-amber-500 focus:outline-none focus:bg-white transition-all resize-none"></textarea>
                   </div>
                   <button className="w-full bg-amber-500 text-white font-bold uppercase tracking-widest py-4 rounded hover:bg-amber-600 transition-colors shadow-lg flex items-center justify-center gap-2">
                     Send Message <Send size={18} />
                   </button>
                 </form>
               </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default CityCenter;
