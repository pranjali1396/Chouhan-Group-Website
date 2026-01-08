import React, { useState } from 'react';
import {
  HardHat, Truck, Ruler, CheckCircle2, ClipboardList,
  Building, Hammer, ArrowRight, Briefcase
} from 'lucide-react';

const PORTFOLIO_ITEMS = [
  { label: "Master-Planned Communities", icon: <Building size={24} /> },
  { label: "Mixed-Use Developments", icon: <Briefcase size={24} /> },
  { label: "High & Low-Rise Condos", icon: <Building size={24} /> },
  { label: "Shopping Centres", icon: <Truck size={24} /> },
  { label: "Office Buildings", icon: <Briefcase size={24} /> }
];

const Construction: React.FC = () => {
  const [activeForm, setActiveForm] = useState<'contractor' | 'supplier'>('contractor');

  return (
    <div className="bg-white font-sans text-slate-800 pt-32 md:pt-48">

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000")' }}></div>
        <div className="absolute inset-0 bg-white/90"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-slate-900">
          <div className="inline-block border border-amber-500/30 bg-amber-50 px-4 py-1 rounded-full text-amber-600 font-bold tracking-widest text-xs uppercase mb-6">
            In-House Excellence
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black mb-6 drop-shadow-sm">Construction Division</h1>
          <div className="h-1 w-24 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl font-light tracking-wide text-slate-600 max-w-3xl mx-auto">
            Building the future with precision, quality control, and superior craftsmanship.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-4">Our Expertise</h2>
              <h3 className="text-4xl font-heading font-black text-slate-900 mb-8">
                Diverse <span className="text-amber-500">Portfolio</span>
              </h3>
              <div className="space-y-6 text-slate-600 leading-loose text-lg font-light">
                <p>
                  <strong className="text-slate-900">CHOUHAN GROUP's</strong> diverse construction portfolio consists of master-planned and mixed-use communities, high- and low-rise condominiums, shopping centres, and office buildings.
                </p>
                <p>
                  The company internally manages construction operations for all of their developments and civil infrastructure projects in <strong className="text-slate-900">CHHATTISGARH</strong>. By project managing in-house, CHOUHAN GROUP ensures that their team is involved in every facet of the process.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {PORTFOLIO_ITEMS.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-100 rounded-lg hover:shadow-md transition-shadow">
                    <div className="text-amber-500">{item.icon}</div>
                    <span className="font-bold text-sm text-slate-800">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="bg-white text-slate-800 p-10 rounded-2xl shadow-xl relative overflow-hidden border border-slate-100">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-50"></div>
                <h3 className="text-2xl font-bold mb-6 font-heading text-slate-900">Our Approach</h3>
                <div className="space-y-8 relative z-10">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 shrink-0">
                      <Ruler size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-slate-900">Internal Management</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Our approach assures that the team maintains a greater degree of quality control, achieves project timelines, and ultimately delivers a superior product to the homeowner.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 shrink-0">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-slate-900">Research & Technology</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Before breaking ground, the team extensively researches new technologies and works closely with design teams and specialized consultants.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Forms */}
      <section className="py-24 bg-slate-50 border-t border-slate-200" id="apply">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">Partner With Us</h2>
            <p className="text-slate-600">Join our network of trusted professionals. Select your category below.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            {/* Tabs */}
            <div className="flex border-b border-slate-100">
              <button
                onClick={() => setActiveForm('contractor')}
                className={`flex-1 py-6 text-sm font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 ${activeForm === 'contractor' ? 'bg-amber-500 text-white' : 'bg-white text-slate-500 hover:bg-slate-50'}`}
              >
                <HardHat size={18} /> Contractor Application
              </button>
              <button
                onClick={() => setActiveForm('supplier')}
                className={`flex-1 py-6 text-sm font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 ${activeForm === 'supplier' ? 'bg-slate-800 text-white' : 'bg-white text-slate-500 hover:bg-slate-50'}`}
              >
                <Truck size={18} /> Supplier Application
              </button>
            </div>

            <div className="p-8 md:p-12">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {activeForm === 'contractor' ? 'Contractor Registration' : 'Supplier Registration'}
                </h3>
                <p className="text-slate-500 text-sm">Please complete the form below to be considered for upcoming projects.</p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Company Name *</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded p-3 focus:border-amber-500 focus:outline-none transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Contact Person *</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded p-3 focus:border-amber-500 focus:outline-none transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Email Address *</label>
                    <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded p-3 focus:border-amber-500 focus:outline-none transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Phone Number *</label>
                    <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded p-3 focus:border-amber-500 focus:outline-none transition-colors" />
                  </div>

                  {activeForm === 'contractor' ? (
                    <>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-500 uppercase">Trade / Specialty *</label>
                        <select className="w-full bg-slate-50 border border-slate-200 rounded p-3 focus:border-amber-500 focus:outline-none transition-colors text-slate-600">
                          <option>Select Trade...</option>
                          <option>Civil Works</option>
                          <option>Electrical</option>
                          <option>Plumbing</option>
                          <option>Carpentry</option>
                          <option>Painting</option>
                          <option>HVAC</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-500 uppercase">License Number</label>
                        <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded p-3 focus:border-amber-500 focus:outline-none transition-colors" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-500 uppercase">Material / Product Type *</label>
                        <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded p-3 focus:border-amber-500 focus:outline-none transition-colors" placeholder="e.g. Cement, Steel, Tiles" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-500 uppercase">Delivery Capacity</label>
                        <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded p-3 focus:border-amber-500 focus:outline-none transition-colors" placeholder="e.g. Statewide" />
                      </div>
                    </>
                  )}

                  <div className="space-y-1 md:col-span-2">
                    <label className="text-xs font-bold text-slate-500 uppercase">Address</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded p-3 focus:border-amber-500 focus:outline-none transition-colors" placeholder="Head Office Address" />
                  </div>

                  <div className="space-y-1 md:col-span-2">
                    <label className="text-xs font-bold text-slate-500 uppercase">
                      {activeForm === 'contractor' ? 'Experience / Past Projects' : 'Product Catalog / Additional Details'}
                    </label>
                    <textarea className="w-full bg-slate-50 border border-slate-200 rounded p-3 h-32 focus:border-amber-500 focus:outline-none transition-colors resize-none"></textarea>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex flex-col md:flex-row gap-4 items-center justify-between">
                  <p className="text-xs text-slate-400 text-center md:text-left">
                    By submitting this form, you certify that the information provided is accurate.
                  </p>
                  <button className={`px-8 py-3 font-bold uppercase tracking-widest text-sm rounded transition-all shadow-lg flex items-center gap-2 ${activeForm === 'contractor' ? 'bg-amber-500 text-white hover:bg-amber-400' : 'bg-slate-800 text-white hover:bg-slate-700'}`}>
                    Submit Application <ArrowRight size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Construction;