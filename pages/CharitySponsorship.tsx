import React from 'react';
import { Heart, Ambulance, Trophy, Calendar, Users, HandHeart } from 'lucide-react';

const INITIATIVES = [
  {
    title: "Gifting City Ambulance",
    desc: "Ensuring rapid emergency response for our community by donating fully equipped ambulances to local hospitals.",
    icon: <Ambulance size={32} />
  },
  {
    title: "Sports Event Sponsor",
    desc: "Promoting health and teamwork by sponsoring local and regional sports tournaments and athlete development programs.",
    icon: <Trophy size={32} />
  },
  {
    title: "Community Events",
    desc: "Supporting cultural and social gatherings that bring people together and strengthen community bonds.",
    icon: <Calendar size={32} />
  }
];

const CharitySponsorship: React.FC = () => {
  return (
    <div className="bg-white font-sans text-slate-800 pt-32 md:pt-48">

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2000")' }}></div>
        <div className="absolute inset-0 bg-white/90"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-slate-900">
          <div className="inline-block border border-amber-500/30 bg-amber-50 px-4 py-1 rounded-full text-amber-600 font-bold tracking-widest text-xs uppercase mb-6">
            Corporate Social Responsibility
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black mb-6 drop-shadow-sm">Charity & Sponsorship</h1>
          <div className="h-1 w-24 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl font-light tracking-wide text-slate-600 max-w-3xl mx-auto">
            Helping communities thrive where we conduct business and beyond.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-4">Our Commitment</h2>
              <h3 className="text-4xl font-heading font-black text-slate-900 mb-8">
                Making a <span className="text-amber-500">Positive Impact</span>
              </h3>
              <div className="space-y-6 text-slate-600 leading-loose text-lg font-light">
                <p>
                  At <strong className="text-slate-900">CHOUHAN GROUP</strong>, we are committed to helping communities thrive where we conduct business and beyond. Being a good neighbour and making a positive impact is a part of what we stand for.
                </p>
                <p>
                  We take pride in connecting with our local communities while supporting them and giving back. We believe that true corporate success is measured not just by profits, but by the lives we touch and the communities we uplift.
                </p>
              </div>
            </div>

            {/* Stat Card */}
            <div className="lg:w-1/2">
              <div className="bg-white text-slate-900 p-12 rounded-2xl shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 border border-slate-100">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-50 group-hover:opacity-60 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-6 text-white shadow-md">
                    <HandHeart size={36} />
                  </div>
                  <div className="text-5xl md:text-6xl font-black mb-2 text-slate-900">
                    ₹ 5 CR+
                  </div>
                  <p className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-6">Donated to Date</p>
                  <p className="text-slate-600 leading-relaxed">
                    Supporting local events, charitable foundations, and community-focused organizations across Chhattisgarh.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Key Initiatives</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We actively sponsor charitable foundations and organizations that align with our values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INITIATIVES.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 group hover:border-amber-200">
                <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Content Box */}
          <div className="mt-16 bg-white border border-slate-200 rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-sm">
            <Users className="mx-auto text-slate-400 mb-4" size={48} />
            <h3 className="text-2xl font-bold font-heading text-slate-900 mb-4">Partner With Us</h3>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Are you a local organization or charity looking for support? We are always looking for new ways to give back to the community.
            </p>
            <button className="bg-slate-900 text-white px-8 py-3 font-bold uppercase tracking-widest text-xs rounded hover:bg-amber-500 hover:text-black transition-colors shadow-lg">
              Submit Sponsorship Request
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CharitySponsorship;