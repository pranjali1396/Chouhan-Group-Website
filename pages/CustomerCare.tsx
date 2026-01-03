
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Building2, Car, Coffee, MapPin, Phone, Mail,
  MessageCircle, Send, HelpCircle, CheckCircle2
} from 'lucide-react';

type CategoryKey = 'real-estate' | 'hospitality' | 'automobiles';

const CARE_DATA: Record<CategoryKey, {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  colorClass: string;
  btnClass: string;
  locations: Array<{
    name: string;
    address: string;
    phones: string[];
    email: string;
    isHead?: boolean;
  }>
}> = {
  'real-estate': {
    title: "Real Estate Support",
    subtitle: "Housing, Commercial & Construction Inquiries",
    icon: <Building2 size={24} />,
    colorClass: "bg-amber-50 text-amber-600 border-amber-200",
    btnClass: "bg-amber-500 hover:bg-amber-600",
    locations: [
      {
        name: "Head Office - Chouhan Group",
        address: "Ground Floor, Chouhan Estate, Beside Chandra Maurya Talkies, NH53, Bhilai, Chhattisgarh - 490001",
        phones: ["+91 95111 21113"],
        email: "chouhanhousing@gmail.com",
        isHead: true
      },
      {
        name: "Chouhan Park View Site Office",
        address: "4th floor, beside Shankracharya Mahavidyalaya, Junwani Road, Bhilai, Chhattisgarh - 490020",
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
    btnClass: "bg-purple-600 hover:bg-purple-700",
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
    btnClass: "bg-blue-600 hover:bg-blue-700",
    locations: [
      {
        name: "Maruti Suzuki Arena",
        address: "NH-6, Durg – Rajnandgaon Bypass, Near Chouhan Town, Bhilai, Chhattisgarh - 490020",
        phones: ["7222910055", "7222910019"],
        email: "sm.sales@chouhanautomobiles.com"
      },
      {
        name: "Maruti Suzuki Nexa",
        address: "NH-6, Durg Bypass, near D-Mart, Katulbod, Bhilai, Durg, Chhattisgarh - 490020",
        phones: ["7909999306", "7909999309"],
        email: "nexabusinesshead@chouhanautomobiles.com"
      },
      {
        name: "Maruti Suzuki True Value",
        address: "NH-6, Durg-Rjn Bypass, Infront of Hotel Empyrean, Bhilai, Chhattisgarh - 490020",
        phones: ["7222910005"],
        email: "edp.truevalue@chouhanautomobiles.com"
      }
    ]
  }
};

const CustomerCare: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('real-estate');

  useEffect(() => {
    const path = location.pathname.split('/').pop();
    if (path && (path === 'real-estate' || path === 'hospitality' || path === 'automobiles')) {
      setActiveCategory(path as CategoryKey);
    }
  }, [location]);

  const handleTabChange = (key: CategoryKey) => {
    setActiveCategory(key);
    navigate(`/care/${key}`);
  };

  const currentData = CARE_DATA[activeCategory];

  return (
    <div className="bg-white font-sans text-slate-800 pt-32 md:pt-48 pb-20">

      {/* WhatsApp Float */}
      <a
        href="#"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:bg-[#20bd5a] transition-colors flex items-center gap-2 font-bold animate-bounce-slow"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle size={24} />
        <span className="hidden md:inline">WhatsApp</span>
      </a>

      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-slate-500 font-bold uppercase tracking-widest text-xs block mb-2">We're Here To Help</span>
          <h1 className="text-4xl md:text-5xl font-heading font-black text-slate-900">Customer Care</h1>
          <div className="h-1 w-24 bg-slate-900 mx-auto mt-6"></div>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg font-light">
            Dedicated support channels for every aspect of your experience with Chouhan Group.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {(Object.keys(CARE_DATA) as CategoryKey[]).map((key) => (
            <button
              key={key}
              onClick={() => handleTabChange(key)}
              className={`flex items-center gap-2 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-sm ${activeCategory === key
                  ? CARE_DATA[key].btnClass + " text-white shadow-lg transform scale-105"
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }`}
            >
              {CARE_DATA[key].icon}
              {key.replace('-', ' ')}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-12 animate-fadeIn">

          {/* Contact Info List */}
          <div className="lg:w-7/12 space-y-8">
            <div className="mb-8">
              <h2 className={`text-2xl font-bold font-heading text-slate-900 flex items-center gap-3`}>
                <span className={`p-2 rounded-lg ${currentData.colorClass.split(' ')[0]} ${currentData.colorClass.split(' ')[1]}`}>
                  {currentData.icon}
                </span>
                {currentData.title}
              </h2>
              <p className="text-slate-500 mt-2 ml-14">{currentData.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {currentData.locations.map((loc, idx) => (
                <div key={idx} className={`p-8 rounded-xl border transition-all hover:shadow-md ${loc.isHead ? 'bg-slate-900 text-white border-slate-800' : 'bg-white border-slate-200 hover:border-slate-300'}`}>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className={`text-lg font-bold ${loc.isHead ? 'text-amber-500' : 'text-slate-900'}`}>{loc.name}</h3>
                    {loc.isHead && <span className="text-[10px] uppercase font-bold bg-amber-500 text-slate-900 px-2 py-1 rounded">Main HQ</span>}
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin size={18} className={`shrink-0 mt-1 ${loc.isHead ? 'text-slate-400' : 'text-slate-400'}`} />
                      <p className={`text-sm leading-relaxed ${loc.isHead ? 'text-slate-300' : 'text-slate-600'}`}>{loc.address}</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <Phone size={18} className={`shrink-0 ${loc.isHead ? 'text-slate-400' : 'text-slate-400'}`} />
                      <div className={`flex flex-col md:flex-row gap-2 md:gap-4 text-sm font-bold ${loc.isHead ? 'text-white' : 'text-slate-800'}`}>
                        {loc.phones.map((phone, pIdx) => (
                          <span key={pIdx}>{phone}</span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <Mail size={18} className={`shrink-0 ${loc.isHead ? 'text-slate-400' : 'text-slate-400'}`} />
                      <span className={`text-sm break-all ${loc.isHead ? 'text-slate-300' : 'text-slate-600'}`}>{loc.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:w-5/12">
            <div className={`sticky top-32 p-8 rounded-2xl shadow-xl border-t-8 ${currentData.colorClass.includes('amber') ? 'border-amber-500' : currentData.colorClass.includes('purple') ? 'border-purple-600' : 'border-blue-600'} bg-white`}>
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className="text-slate-400" />
                <h3 className="text-xl font-bold text-slate-900">Submit a Ticket</h3>
              </div>
              <p className="text-sm text-slate-500 mb-6">
                Have a specific issue or inquiry regarding <strong className="text-slate-900">{activeCategory.replace('-', ' ')}</strong>? Fill out the details below and our dedicated support team will get back to you.
              </p>

              <form className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase">Full Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded p-3 text-sm focus:outline-none focus:border-slate-400 transition-colors" placeholder="Your Name" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase">Phone</label>
                    <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded p-3 text-sm focus:outline-none focus:border-slate-400 transition-colors" placeholder="+91..." />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase">Email</label>
                    <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded p-3 text-sm focus:outline-none focus:border-slate-400 transition-colors" placeholder="you@example.com" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase">Subject</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded p-3 text-sm focus:outline-none focus:border-slate-400 transition-colors text-slate-600">
                    <option>General Inquiry</option>
                    <option>Complaint / Feedback</option>
                    <option>Service Request</option>
                    <option>Booking Status</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase">Description</label>
                  <textarea className="w-full bg-slate-50 border border-slate-200 rounded p-3 text-sm h-28 focus:outline-none focus:border-slate-400 transition-colors resize-none" placeholder="Please describe your issue..."></textarea>
                </div>

                <button type="button" className={`w-full text-white font-bold uppercase tracking-widest py-4 rounded shadow-lg mt-2 flex justify-center items-center gap-2 transition-colors ${currentData.btnClass}`}>
                  Submit Ticket <Send size={16} />
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* FAQ Teaser */}
        <div className="mt-24 pt-16 border-t border-slate-100 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h3>
          <p className="text-slate-500 mb-8 max-w-2xl mx-auto">
            Find quick answers to common questions about our properties, booking policies, and service centers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 bg-slate-50 rounded-lg text-left">
              <h4 className="font-bold text-slate-800 mb-2 text-sm flex items-start gap-2"><CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" /> How do I schedule a site visit?</h4>
              <p className="text-xs text-slate-500">You can call our site offices directly or use the inquiry form to request a preferred time slot.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg text-left">
              <h4 className="font-bold text-slate-800 mb-2 text-sm flex items-start gap-2"><CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" /> What are the service center hours?</h4>
              <p className="text-xs text-slate-500">Our automobile service centers are generally open from 9:00 AM to 7:00 PM, Monday through Saturday.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg text-left">
              <h4 className="font-bold text-slate-800 mb-2 text-sm flex items-start gap-2"><CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" /> How do I book a hotel room?</h4>
              <p className="text-xs text-slate-500">Direct bookings can be made via the hotel phone numbers listed above or through our hospitality partner sites.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CustomerCare;
