
import React, { useState } from 'react';
import {
  Building2, Car, Coffee, MapPin, Phone, Mail,
  MessageCircle, Send, HelpCircle, CheckCircle2,
  Home as HomeIcon, Building
} from 'lucide-react';
import WhatsAppFAB from '../components/WhatsAppFAB';



type CategoryKey = 'real-estate' | 'hospitality' | 'automobiles';

interface CareData {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  colorClass: string;
  btnClass: string;
  accentColor: string;
  locations: Array<{
    name: string;
    address: string;
    phones: string[];
    email?: string;
    isHead?: boolean;
    hours?: string;
  }>
}

const CARE_DATA: Record<CategoryKey, CareData> = {
  'real-estate': {
    title: "Real Estate Support",
    subtitle: "Housing, Commercial & Construction Inquiries",
    icon: <Building2 size={24} />,
    colorClass: "bg-amber-50 text-amber-600 border-amber-200",
    btnClass: "bg-slate-100 text-slate-500 hover:bg-slate-200 active:bg-amber-500 active:text-white",
    accentColor: "amber",
    locations: [
      {
        name: "Head Office - Chouhan Group",
        address: "Ground Floor, Chouhan Estate, Beside Chandra Maurya Talkies, NH53, Bhilai, Chhattisgarh - 490001",
        phones: ["+91 91091 04005"],
        email: "chouhanhousing@gmail.com",
        isHead: true,
        hours: "10:00 AM - 7:00 PM"
      },
      {
        name: "Chouhan Park View Site Office",
        address: "4th floor, beside Shankracharya Mahavidyalaya, Junwani Road, Bhilai, Chhattisgarh - 49020",
        phones: ["9109104783", "7222909449"],
        email: "chouhanhousing@gmail.com"
      },
      {
        name: "Chouhan Green Valley Site Office",
        address: "Beside Royal Greens, Junwani Road, Bhilai, Chhattisgarh - 490020",
        phones: ["9893253399"],
        email: "chouhanhousing@gmail.com"
      }
    ]
  },
  'hospitality': {
    title: "Hospitality Support",
    subtitle: "Hotels, Resorts, Events & Bookings",
    icon: <Coffee size={24} />,
    colorClass: "bg-purple-50 text-purple-600 border-purple-200",
    btnClass: "bg-slate-100 text-slate-500 hover:bg-slate-200 active:bg-purple-600 active:text-white",
    accentColor: "purple",
    locations: [
      {
        name: "Empyrean Hotel & Resort",
        address: "NH-6, Durg Bypass, Pushpak Nagar, near Maruti Suzuki Arena, Bhilai, Chhattisgarh 490020",
        phones: ["7566660048", "6260341616"],
        email: "chouhanhousing@gmail.com"
      },
      {
        name: "Empyrean Lake Resort",
        address: "Near District Collectorate Office, Tandula Dam, Balod, Chhattisgarh - 491226",
        phones: ["9109104001"],
        email: "empyreanresort@gmail.com"
      }
    ]
  },
  'automobiles': {
    title: "Automobile Support",
    subtitle: "Sales, Service, Insurance & Accessories",
    icon: <Car size={24} />,
    colorClass: "bg-blue-50 text-blue-600 border-blue-200",
    btnClass: "bg-slate-100 text-slate-500 hover:bg-slate-200 active:bg-blue-600 active:text-white",
    accentColor: "blue",
    locations: [
      {
        name: "Maruti Suzuki Arena - Bhilai",
        address: "NH-6, Durg – Rajnandgaon Bypass, Near Chouhan Town, Bhilai, Chhattisgarh - 490020",
        phones: ["72229 10019", "72229 10022", "72229 10013", "72229 10033", "72229 10073"],
        email: "sm.sales@chouhanautomobiles.com"
      },
      {
        name: "Maruti Suzuki Nexa - Bhilai",
        address: "NH-6, Durg Bypass, near D-Mart, Katulbod, Bhilai, Durg, Chhattisgarh - 490020",
        phones: ["72229 10019", "72229 10022", "72229 10013", "72229 10033", "72229 10073"],
        email: "nexabusinesshead@chouhanautomobiles.com"
      },
      {
        name: "Maruti Suzuki True Value - Bhilai",
        address: "NH-6, Durg-Rjn Bypass, Infront of Hotel Empyrean, Bhilai, Chhattisgarh - 490020",
        phones: ["72229 10005"],
        email: "edp.truevalue@chouhanautomobiles.com"
      },
      {
        name: "Chouhan Hero - Bhilai",
        address: "NH-6, Durg-Rjn Bypass, Beside True Value Showroom, Bhilai, Chhattisgarh",
        phones: ["99931 21213", "70241 20121"],
        email: "chouhanhousing@gmail.com"
      },
      {
        name: "Maruti Suzuki Arena - Balod",
        address: "Near Shanti Traders, Jhamala Chowk, Balod, Chhattisgarh - 491226",
        phones: ["72229 10019", "72229 10029"],
        email: "chouhanhousing@gmail.com"
      }
    ]
  }
};

const CustomerCare: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('real-estate');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });

  const currentData = CARE_DATA[activeCategory];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    // CRMIntegration will automatically capture this form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', mobile: '', email: '', message: '' });
    }, 600);

  };

  return (
    <div className="bg-white font-sans text-slate-800 pt-32 md:pt-48 pb-20">

      {/* WhatsApp Float - Enhanced */}
      <WhatsAppFAB />

      <div className="container mx-auto px-4 max-w-7xl">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-slate-600 font-bold uppercase tracking-[0.3em] text-[10px] block mb-2">Support Channels</span>
          <h1 className="text-4xl md:text-5xl font-heading font-black text-slate-900 leading-tight">Customer Care</h1>
          <div className="h-1 w-24 bg-amber-500 mx-auto mt-6"></div>
          <p className="mt-8 text-slate-700 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
            Need assistance? Reach out to our dedicated support teams across our Real Estate, Hospitality, and Automobile divisions.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-20 animate-fadeIn">
          {(Object.keys(CARE_DATA) as CategoryKey[]).map((key) => {
            const data = CARE_DATA[key];
            const isActive = activeCategory === key;

            let activeStyle = "";
            if (key === 'real-estate') activeStyle = "bg-amber-500 text-white shadow-amber-200/50";
            if (key === 'hospitality') activeStyle = "bg-purple-600 text-white shadow-purple-200/50";
            if (key === 'automobiles') activeStyle = "bg-blue-600 text-white shadow-blue-200/50";

            return (
              <button
                key={key}
                onClick={() => {
                  setActiveCategory(key);
                  if (formStatus === 'success') setFormStatus('idle');
                }}
                className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs transition-all duration-300 shadow-md transform hover:-translate-y-1 ${isActive ? activeStyle + " scale-105 shadow-xl" : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                  }`}
              >
                {data.icon}
                {key.replace('-', ' ')}
              </button>
            );
          })}
        </div>

        {/* Main Section */}
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">

          {/* Left Side: Contact Details */}
          <div className="lg:w-7/12 space-y-8 animate-fadeIn" key={activeCategory}>
            <div className="mb-8 pl-4 border-l-4" style={{ borderColor: activeCategory === 'real-estate' ? '#f59e0b' : activeCategory === 'hospitality' ? '#9333ea' : '#2563eb' }}>
              <h2 className="text-3xl font-heading font-black text-slate-900 mb-2">{currentData.title}</h2>
              <p className="text-slate-600 text-lg font-medium">{currentData.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {currentData.locations.map((loc, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg md:text-xl font-black text-slate-900 uppercase tracking-tight">{loc.name}</h3>
                    {loc.isHead && (
                      <span className="text-[9px] font-black bg-amber-500 text-slate-900 px-3 py-1 rounded-full uppercase tracking-widest">
                        Main HQ
                      </span>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="shrink-0 text-amber-500 mt-1" size={18} />
                      <span className="text-sm font-bold text-slate-800 leading-relaxed">
                        {loc.address}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="shrink-0 text-amber-500" size={18} />
                      <div className="flex flex-wrap gap-x-4 gap-y-1">
                        {loc.phones.map((phone, pIdx) => (
                          <a
                            key={pIdx}
                            href={`tel:${phone.replace(/\s/g, '')}`}
                            className="text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>

                    {loc.email && (
                      <div className="flex items-center gap-3">
                        <Mail className="shrink-0 text-amber-500" size={18} />
                        <a
                          href={`mailto:${loc.email}`}
                          className="text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors break-all"
                        >
                          {loc.email}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Shared Ticket Form */}
          <div className="lg:w-5/12">
            <div className="sticky top-32">
              <div className={`p-10 rounded-[2.5rem] shadow-2xl border-t-8 bg-white transition-all duration-500 ${activeCategory === 'real-estate' ? 'border-amber-500' :
                activeCategory === 'hospitality' ? 'border-purple-600' :
                  'border-blue-600'
                }`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-slate-50 rounded-2xl">
                    <HelpCircle className="text-slate-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black font-heading">Support Ticket</h3>
                    <p className="text-[10px] uppercase font-black text-slate-600 tracking-widest mt-1">24 Hour Response Time</p>
                  </div>
                </div>

                <p className="text-sm text-slate-800 leading-relaxed mb-8 font-medium">
                  Have a specific issue regarding <strong className="text-black uppercase tracking-tighter">{activeCategory.replace('-', ' ')}</strong>? Our dedicated team will get back to you within 24 hours.
                </p>

                {formStatus === 'success' ? (
                  <div className="py-12 text-center animate-fadeIn">
                    <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h4 className="text-2xl font-black text-slate-900 mb-2">Request Sent</h4>
                    <p className="text-sm text-slate-800 mb-8 max-w-xs mx-auto">We've received your inquiry and will assign a manager to assist you shortly.</p>
                    <button onClick={() => setFormStatus('idle')} className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-amber-500 transition-all">
                      Back to form
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        type="text"
                        className="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm focus:ring-4 focus:ring-slate-100 transition-all font-medium"
                        placeholder="Your Name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Mobile</label>
                        <input
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleInputChange}
                          required
                          type="tel"
                          className="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm focus:ring-4 focus:ring-slate-100 transition-all font-medium"
                          placeholder="+91..."
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email</label>
                        <input
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          type="email"
                          className="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm focus:ring-4 focus:ring-slate-100 transition-all font-medium"
                          placeholder="mail@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Message Detail</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm h-32 focus:ring-4 focus:ring-slate-100 transition-all font-medium resize-none"
                        placeholder="Describe your request..."
                      ></textarea>
                    </div>

                    {formStatus === 'error' && (
                      <p className="text-red-500 text-xs font-bold">{errorMessage}</p>
                    )}

                    <button
                      disabled={formStatus === 'submitting'}
                      type="submit"
                      className={`w-full text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl transition-all shadow-xl flex justify-center items-center gap-3 hover:-translate-y-1 active:scale-95 ${activeCategory === 'real-estate' ? 'bg-amber-500 shadow-amber-200' :
                        activeCategory === 'hospitality' ? 'bg-purple-600 shadow-purple-200' :
                          'bg-blue-600 shadow-blue-200'
                        }`}
                    >
                      {formStatus === 'submitting' ? 'Processing...' : 'Submit Ticket'} <Send size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default CustomerCare;
