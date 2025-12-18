import React from 'react';
import {
  Building2, MapPin, Phone, Mail, CheckCircle2,
  Armchair, Utensils, ShoppingBag, Clapperboard,
  Trees, Snowflake, FerrisWheel, Calendar, Send,
  ShieldCheck, Banknote, HardHat, Clock, Award,
  BellRing
} from 'lucide-react';

const BRANDS = [
  "Reliance", "Tata", "Landmark", "KFC", "Pizza Hut",
  "Domino's", "Vaango", "Barbeque Nation", "Snow Park", "Amusement Park"
];

const SPECS = [
  { label: "Total Project Land", value: "15 Acres", icon: <MapPin /> },
  { label: "Commercial Building", value: "G+2, G+4", icon: <Building2 /> },
  { label: "Multiplex", value: "5 Screen, 1200 Seats", sub: "Gold Class Signed", icon: <Clapperboard /> },
  { label: "Status", value: "Coming Soon", icon: <Calendar /> },
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
      <div className="relative h-[75vh] min-h-[600px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519567241046-7f570eee3ce9?q=80&w=2000"
          alt="Chouhan City Center Mall"
          className="w-full h-full object-cover scale-105 animate-slowZoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 md:px-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-amber-500 text-slate-900 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] rounded-full shadow-lg">
                  Coming Soon
                </span>
                <span className="flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-widest">
                  <BellRing size={14} className="animate-bounce" /> Get Early Access
                </span>
              </div>
              <h1 className="text-5xl md:text-8xl text-white font-heading font-black tracking-tight leading-tight mb-6 drop-shadow-2xl">
                Chouhan <br /> City Center
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 font-light max-w-2xl leading-relaxed mb-10">
                Bhilai's most anticipated destination for luxury retail, fine dining, and world-class entertainment.
              </p>
              <a href="#book-now" className="bg-white text-[#002b49] px-10 py-5 font-black uppercase tracking-widest text-xs hover:bg-amber-500 hover:text-white transition-all shadow-2xl rounded-sm inline-block">
                Register Interest
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Description & Specs */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* Main Content */}
            <div className="lg:w-2/3">
              <h2 className="text-4xl font-heading font-black text-slate-900 mb-8 border-l-8 border-amber-500 pl-6">The Future of Leisure</h2>
              <p className="text-slate-600 leading-loose text-lg font-light mb-8">
                Chouhan City Center, by Chouhan Group, is Bhilai’s premier destination for shopping and entertainment, designed to cater to every family member. The center boasts a state-of-the-art multiplex with 5 screens and 1200 seats, including a luxurious Gold Class experience for movie lovers.
              </p>
              <p className="text-slate-600 leading-loose text-lg font-light mb-8">
                Families can enjoy a diverse range of activities at our comprehensive Family Entertainment Center, which features a retail block, food mall, open-air theater (OAT), and a vibrant children's park. The commercial blocks add to the shopping experience with an array of top brands and eateries under discussion, including Reliance, Tata, Landmark, KFC, Pizza Hut, Domino’s, Vaango, Barbeque Nation, Snow Park, and Amusement Park.
              </p>

              {/* Brands Section */}
              <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 mt-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full -mr-16 -mt-16"></div>
                <h3 className="text-xl font-bold font-heading text-slate-900 mb-8 flex items-center gap-3">
                  <ShoppingBag className="text-amber-500" /> Brands Under Discussion
                </h3>
                <div className="flex flex-wrap gap-4">
                  {BRANDS.map((brand, idx) => (
                    <span key={idx} className="px-6 py-3 bg-white border border-slate-200 rounded-lg text-sm font-black text-slate-600 shadow-sm hover:border-amber-400 hover:text-amber-600 transition-all cursor-default">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Specs */}
            <div className="lg:w-1/3">
              <div className="bg-[#002b49] text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden sticky top-32">
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500 rounded-full blur-[100px] opacity-10"></div>
                <h3 className="text-xl font-black uppercase tracking-[0.2em] mb-10 border-b border-white/10 pb-6 flex items-center gap-3">
                  Project Snapshot
                </h3>

                <div className="space-y-8">
                  {SPECS.map((spec, idx) => (
                    <div key={idx} className="flex gap-5 items-start group">
                      <div className="p-4 bg-white/5 rounded-2xl text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                        {React.cloneElement(spec.icon as React.ReactElement, { size: 24 })}
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase text-white/40 font-black tracking-widest mb-1">{spec.label}</span>
                        <span className="block text-xl font-bold tracking-tight">{spec.value}</span>
                        {spec.sub && <span className="block text-xs text-amber-500 mt-1 font-bold">{spec.sub}</span>}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-xs text-white/50 leading-relaxed italic">
                    *Project details are subject to change during construction.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Lifestyle & Recreation</span>
            <h2 className="text-4xl font-heading font-black text-slate-900">Family Entertainment Center</h2>
            <div className="h-1.5 w-24 bg-amber-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {AMENITIES.map((amenity, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition-all group">
                <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors">
                  {React.cloneElement(amenity.icon as React.ReactElement, { size: 28, className: "group-hover:text-white transition-colors" })}
                </div>
                <h4 className="font-black text-slate-800 text-sm uppercase tracking-wider">{amenity.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USPs - "Why Choose Us" */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-heading font-black text-slate-900 mb-6">Why You Should Choose Us?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-light">
              Chouhan Group has been Bhilai's most trusted developer for over 20 years, bringing uncompromising quality to every landmark we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {USPS.map((usp, idx) => (
              <div key={idx} className="flex gap-6 p-8 border border-slate-100 rounded-3xl hover:border-amber-200 hover:shadow-2xl transition-all group bg-white">
                <div className="shrink-0 text-slate-300 group-hover:text-amber-500 transition-colors">
                  {usp.icon}
                </div>
                <div>
                  <h3 className="font-black text-lg text-slate-900 mb-2 leading-tight">{usp.title}</h3>
                  {usp.sub && <p className="text-xs text-amber-600 font-bold uppercase tracking-widest">{usp.sub}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-32 bg-[#002b49] text-white overflow-hidden relative" id="book-now">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000')] bg-cover opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">

            <div className="lg:w-1/2">
              <span className="text-amber-500 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Inquiry & Pre-Booking</span>
              <h2 className="text-5xl md:text-7xl font-heading font-black mb-8 leading-tight">Your Luxurious <br /> Lifestyle Awaits</h2>
              <p className="text-slate-300 text-xl leading-relaxed mb-12 font-light">
                Secure your space in Bhilai's most anticipated commercial landmark. Reach out to our sales team for floor plans, pricing, and leasing opportunities.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-amber-500 border border-white/5 shadow-xl backdrop-blur-md">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/40 uppercase font-black tracking-widest mb-1">Call Support</p>
                    <p className="text-xl font-black">+91 95111 21113</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-amber-500 border border-white/5 shadow-xl backdrop-blur-md">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/40 uppercase font-black tracking-widest mb-1">Email Sales</p>
                    <p className="text-lg font-black truncate">sales@chouhangroup.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="bg-white rounded-[2rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] p-8 md:p-12 text-slate-800 border border-white/10">
                <h3 className="text-3xl font-black font-heading mb-8 text-slate-900 text-center">Enquire Now</h3>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input type="text" placeholder="Your Name" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:border-amber-500 focus:outline-none focus:bg-white transition-all font-medium" />
                    <input type="tel" placeholder="Phone Number" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:border-amber-500 focus:outline-none focus:bg-white transition-all font-medium" />
                  </div>
                  <input type="email" placeholder="Email Address" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:border-amber-500 focus:outline-none focus:bg-white transition-all font-medium" />
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:border-amber-500 focus:outline-none focus:bg-white transition-all font-bold text-slate-500 appearance-none">
                    <option>Select Interest</option>
                    <option>Retail Space</option>
                    <option>Office Space</option>
                    <option>Food Court</option>
                    <option>Multiplex Partnership</option>
                  </select>
                  <textarea placeholder="Type your message here...." className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 h-32 focus:border-amber-500 focus:outline-none focus:bg-white transition-all resize-none font-medium"></textarea>
                  <button className="w-full bg-amber-500 text-white font-black uppercase tracking-[0.2em] py-5 rounded-xl hover:bg-amber-400 transition-all shadow-2xl flex items-center justify-center gap-3 group">
                    Register Now <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
