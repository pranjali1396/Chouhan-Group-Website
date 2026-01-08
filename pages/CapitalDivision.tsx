import React from 'react';
import {
  Briefcase, TrendingUp, DollarSign, PieChart,
  Globe, Shield, FileText, Upload, CheckCircle, ArrowRight
} from 'lucide-react';

const TRANSACTIONS = [
  {
    title: "Management Buy-Outs",
    desc: "We participate as a majority equity participant with management teams where the principal shareholder decides to exit."
  },
  {
    title: "Recapitalizations",
    desc: "For situations where the principal shareholder/owner is considering the sale of a partial amount of their holdings for tax or estate planning."
  },
  {
    title: "Divestitures",
    desc: "Partnering with management teams to allow for successful divestiture of non-core business units."
  },
  {
    title: "Shareholder Buy-Outs",
    desc: "Participating in transactions where an existing shareholder, possibly a financial investor, requires liquidity."
  },
  {
    title: "Consolidations",
    desc: "Partnering with companies that have identified acquisition opportunities to execute consolidation strategies."
  },
  {
    title: "Take Privates & LBOs",
    desc: "Providing capital and strategic support for take-private transactions and leveraged buy-outs."
  }
];

const CRITERIA = [
  "Annual revenues of between $10 million – $100 million.",
  "Sustainable EBITDA of between $2.5 million and $50 million.",
  "Established business with a profitable track record and stable cash flows.",
  "Recurring revenues stemming from long-term customer relationships.",
  "Strong management teams willing to partner with CHOUHAN GROUP.",
  "Sustainable competitive advantage in an attractive industry.",
  "Prefer businesses with a diversified supplier and customer base."
];

const CapitalDivision: React.FC = () => {
  return (
    <div className="bg-white font-sans text-slate-800 pt-32 md:pt-48">

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000")' }}></div>
        <div className="absolute inset-0 bg-white/90"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-slate-900">
          <div className="inline-block border border-amber-500/30 bg-amber-50 px-4 py-1 rounded-full text-amber-600 font-bold tracking-widest text-xs uppercase mb-6">
            Capital Division
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black mb-6 drop-shadow-sm">Strategic Investment Partners</h1>
          <div className="h-1 w-24 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl font-light tracking-wide text-slate-600 max-w-3xl mx-auto">
            Partnering with visionary management teams to create long-term shareholder value.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8">Investment Philosophy</h2>
            <p className="text-slate-600 leading-loose text-lg font-light mb-8">
              Our investment criteria reflects our philosophy of partnering with management teams to create shareholder value by actively supporting their vision in pursuit of aggressive and well-developed growth plans. Unlike some private equity firms, <strong className="text-slate-900">CHOUHAN GROUP</strong> takes a more long-term approach to each investment opportunity with the view of determining how it fits within the overall group.
            </p>
          </div>
        </div>
      </section>

      {/* Transactions Grid */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="text-amber-500" size={32} />
            <h2 className="text-3xl font-heading font-bold text-slate-900">Types of Transactions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TRANSACTIONS.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 text-slate-600 group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venture Funding */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4">Innovation Focus</h2>
              <h3 className="text-4xl font-heading font-bold mb-6 text-slate-900">Venture Funding</h3>
              <p className="text-slate-600 leading-loose mb-6">
                CHOUHAN GROUP is a provider of growth and venture capital with a focus on founder-led companies in the <strong className="text-slate-900">software, mobile, and Internet sectors</strong>. We provide venture capital funding to technology-focused entrepreneurs who are ready to scale.
              </p>
              <p className="text-slate-600 leading-loose">
                We welcome the opportunity to review your business plan and explore how our capital and strategic network can accelerate your growth.
              </p>
            </div>
            <div className="md:w-1/2 bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white shadow-sm border border-slate-100 rounded-xl text-center">
                  <Globe className="mx-auto mb-3 text-blue-500" size={32} />
                  <span className="font-bold text-slate-800">Internet</span>
                </div>
                <div className="p-6 bg-white shadow-sm border border-slate-100 rounded-xl text-center">
                  <DollarSign className="mx-auto mb-3 text-green-500" size={32} />
                  <span className="font-bold text-slate-800">FinTech</span>
                </div>
                <div className="p-6 bg-white shadow-sm border border-slate-100 rounded-xl text-center">
                  <PieChart className="mx-auto mb-3 text-purple-500" size={32} />
                  <span className="font-bold text-slate-800">SaaS</span>
                </div>
                <div className="p-6 bg-white shadow-sm border border-slate-100 rounded-xl text-center">
                  <Shield className="mx-auto mb-3 text-amber-500" size={32} />
                  <span className="font-bold text-slate-800">Security</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transaction Criteria */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-slate-900 mb-12 text-center">Transaction Criteria</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-slate-600 leading-loose mb-8">
                CHOUHAN GROUP believes that the most important characteristic of an acquisition is not the size of the original transaction, but rather the potential that exists for the business to expand profitably through internal and external growth.
              </p>
              <p className="text-slate-600 leading-loose mb-8">
                We will consider investments across most industries & are not restricted geographically, though our preference is for <strong className="text-slate-900">CHHATTISGARH</strong> based investments.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg mb-6 text-slate-900 border-b border-slate-100 pb-2">Ideal Characteristics</h3>
              <ul className="space-y-4">
                {CRITERIA.map((criterion, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <CheckCircle className="text-amber-500 shrink-0 mt-1" size={18} />
                    <span className="text-slate-600 text-sm">{criterion}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Form */}
      <section className="py-20 bg-white" id="submission-form">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <div className="bg-slate-50 p-8 text-center border-b border-slate-200">
              <h2 className="text-2xl font-bold mb-2 text-slate-900">Submit a Business Plan</h2>
              <p className="text-slate-500 text-sm">Please provide detailed information for our review process.</p>
            </div>

            <form className="p-8 md:p-12 space-y-8">

              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="font-bold text-lg text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                  <FileText size={18} className="text-amber-500" /> Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Contact Name *</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded p-3 focus:border-amber-500 focus:outline-none transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Title</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded p-3 focus:border-amber-500 focus:outline-none transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Phone *</label>
                    <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded p-3 focus:border-amber-500 focus:outline-none transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Email *</label>
                    <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded p-3 focus:border-amber-500 focus:outline-none transition-colors" />
                  </div>
                  <div className="space-y-1 md:col-span-2">
                    <label className="text-xs font-bold text-slate-500 uppercase">Address *</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded p-3 focus:border-amber-500 focus:outline-none transition-colors mb-2" placeholder="Street Address" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded p-3 focus:border-amber-500 focus:outline-none transition-colors" placeholder="City" />
                      <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded p-3 focus:border-amber-500 focus:outline-none transition-colors" placeholder="State / Province" />
                      <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded p-3 focus:border-amber-500 focus:outline-none transition-colors" placeholder="Postal Code" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Info */}
              <div className="space-y-6">
                <h3 className="font-bold text-lg text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                  <TrendingUp size={18} className="text-amber-500" /> Business Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Company Name</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded p-3 focus:border-amber-500 focus:outline-none transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase">Sector</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded p-3 focus:border-amber-500 focus:outline-none transition-colors text-slate-600">
                      <option>Select Sector...</option>
                      <option>Real Estate</option>
                      <option>Technology / Software</option>
                      <option>Manufacturing</option>
                      <option>Healthcare</option>
                      <option>Retail</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-1 md:col-span-2">
                    <label className="text-xs font-bold text-slate-500 uppercase">Website</label>
                    <input type="url" className="w-full bg-slate-50 border border-slate-200 rounded p-3 focus:border-amber-500 focus:outline-none transition-colors" placeholder="https://" />
                  </div>
                  <div className="space-y-1 md:col-span-2">
                    <label className="text-xs font-bold text-slate-500 uppercase">Executive Summary</label>
                    <textarea className="w-full bg-slate-50 border border-slate-200 rounded p-3 h-32 focus:border-amber-500 focus:outline-none transition-colors resize-none" placeholder="Brief overview of the business..."></textarea>
                  </div>
                </div>
              </div>

              {/* File Upload */}
              <div className="space-y-4">
                <h3 className="font-bold text-lg text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                  <Upload size={18} className="text-amber-500" /> Business Plan Document
                </h3>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer group">
                  <Upload className="mx-auto h-12 w-12 text-slate-400 group-hover:text-amber-500 transition-colors mb-3" />
                  <p className="text-sm text-slate-600 font-medium">Click to upload or drag and drop</p>
                  <p className="text-xs text-slate-400 mt-1">PDF, DOCX, PPTX (Max 9 MB)</p>
                </div>
              </div>

              <div className="pt-4">
                <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold uppercase tracking-widest py-4 rounded hover:from-amber-400 hover:to-amber-500 hover:shadow-lg transition-all flex justify-center items-center gap-2">
                  Submit Application <ArrowRight size={20} />
                </button>
              </div>

            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CapitalDivision;