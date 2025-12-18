
import React, { useState } from 'react';
import { Truck, MapPin, Calendar, Bell, Send, CheckCircle2 } from 'lucide-react';

const AshokLeyland: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white font-sans text-slate-800">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2000" 
          alt="Ashok Leyland Trucks" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 md:px-16">
                <div className="max-w-2xl">
                    <span className="bg-amber-500 text-slate-900 px-4 py-1 text-xs font-bold uppercase tracking-widest rounded mb-6 inline-block">
                    Coming Soon
                    </span>
                    <h1 className="text-4xl md:text-7xl text-white font-heading font-black tracking-wide drop-shadow-md mb-6">
                    Ashok Leyland
                    </h1>
                    <p className="text-xl text-slate-200 font-light leading-relaxed">
                    Expanding our automotive excellence. Chouhan Group is proud to partner with Ashok Leyland to bring world-class commercial vehicles to Chhattisgarh.
                    </p>
                </div>
            </div>
        </div>
      </div>

      {/* Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">Powering Your Business</h2>
                <p className="text-slate-600 leading-loose text-lg font-light mb-12">
                    We are setting up a state-of-the-art dealership offering the complete range of Ashok Leyland commercial vehicles, from light commercial vehicles to heavy-duty trucks and buses. Our facility will include a modern showroom and a fully equipped service center.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                        <Truck className="text-amber-500 mb-4" size={32} />
                        <h3 className="font-bold text-lg mb-2">Complete Range</h3>
                        <p className="text-sm text-slate-500">Full portfolio of trucks, buses, and light commercial vehicles.</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                        <MapPin className="text-amber-500 mb-4" size={32} />
                        <h3 className="font-bold text-lg mb-2">Prime Location</h3>
                        <p className="text-sm text-slate-500">Strategically located for easy access on NH-53.</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                        <Calendar className="text-amber-500 mb-4" size={32} />
                        <h3 className="font-bold text-lg mb-2">Opening 2024</h3>
                        <p className="text-sm text-slate-500">Construction is underway. Stay tuned for the grand launch.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1605218427306-0296d27fe8a7?q=80&w=2000')] bg-cover bg-center"></div>
          <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-2xl mx-auto bg-white text-slate-900 rounded-2xl p-8 md:p-12 shadow-2xl">
                  {!submitted ? (
                      <>
                        <div className="text-center mb-8">
                            <Bell className="mx-auto text-amber-500 mb-4" size={40} />
                            <h2 className="text-3xl font-bold font-heading mb-2">Get Notified</h2>
                            <p className="text-slate-500">Register your interest to get updates on the launch, pre-booking offers, and fleet deals.</p>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Full Name</label>
                                <input type="text" required className="w-full bg-slate-50 border border-slate-200 rounded p-3 focus:border-amber-500 focus:outline-none" placeholder="Enter your name" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Email Address</label>
                                <input type="email" required className="w-full bg-slate-50 border border-slate-200 rounded p-3 focus:border-amber-500 focus:outline-none" placeholder="Enter your email" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Phone Number</label>
                                <input type="tel" required className="w-full bg-slate-50 border border-slate-200 rounded p-3 focus:border-amber-500 focus:outline-none" placeholder="Enter your mobile number" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Interest Type</label>
                                <select className="w-full bg-slate-50 border border-slate-200 rounded p-3 focus:border-amber-500 focus:outline-none text-slate-600">
                                    <option>Buying a Vehicle</option>
                                    <option>Fleet Inquiry</option>
                                    <option>Service / Parts</option>
                                    <option>Job Application</option>
                                </select>
                            </div>
                            <button type="submit" className="w-full bg-amber-500 text-white font-bold uppercase tracking-widest py-4 rounded hover:bg-amber-600 transition-colors mt-4 flex items-center justify-center gap-2">
                                Register For Updates <Send size={18} />
                            </button>
                        </form>
                      </>
                  ) : (
                      <div className="text-center py-12">
                          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                              <CheckCircle2 size={40} />
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
                          <p className="text-slate-500">Your details have been registered. We will keep you updated on the grand opening.</p>
                          <button onClick={() => setSubmitted(false)} className="mt-8 text-amber-600 font-bold text-sm underline">Register another</button>
                      </div>
                  )}
              </div>
          </div>
      </section>

    </div>
  );
};

export default AshokLeyland;
