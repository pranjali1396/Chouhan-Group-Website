
import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send, Building, Car, Coffee, Home } from 'lucide-react';

const Contact: React.FC = () => {
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

        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold uppercase tracking-widest text-xs block mb-2">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-heading font-black text-slate-900">Contact Us</h1>
          <div className="h-1 w-24 bg-amber-500 mx-auto mt-6"></div>
        </div>

        {/* Main Content: Head Office & Form */}
        <div className="flex flex-col lg:flex-row gap-12 mb-24">

          {/* Left: Head Office Info */}
          <div className="lg:w-1/2 space-y-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm h-full">
              <h2 className="text-2xl font-bold font-heading text-slate-900 mb-8 border-b border-slate-200 pb-4">
                Head Office
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-amber-600 mb-1">CHOUHAN GROUP</h3>
                  <div className="flex items-start gap-3 mt-4 text-slate-600">
                    <MapPin className="shrink-0 text-amber-500 mt-1" size={20} />
                    <p className="leading-relaxed font-bold">
                      Beside Shankracharya Mahavidyalaya, Junwani Road, Bhilai, Chhattisgarh – 490020
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-600">
                  <Phone className="shrink-0 text-amber-500" size={20} />
                  <span className="font-bold text-lg">+91 95111 21113</span>
                </div>

                <div className="flex items-center gap-3 text-slate-600">
                  <Mail className="shrink-0 text-amber-500" size={20} />
                  <span className="font-medium">chouhanhousing@gmail.com</span>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 h-64 bg-slate-200 rounded-xl overflow-hidden border border-slate-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.387995874254!2d81.35086031493582!3d21.21647798589694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a292317180413b5%3A0x7f4396265691176b!2sChouhan%20Estate!5e0!3m2!1sen!2sin!4v1625567891234!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Head Office Map"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right: Connect Form */}
          <div className="lg:w-1/2">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border-t-4 border-amber-500">
              <h2 className="text-2xl font-bold font-heading text-slate-900 mb-2">Let's Connect</h2>
              <p className="text-slate-500 mb-8 text-sm">Fill in the form below and we will contact you shortly.</p>

              <form className="space-y-5">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase">Your Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded p-4 focus:border-amber-500 focus:outline-none transition-colors" placeholder="Enter your full name" />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase">Your Email Address</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded p-4 focus:border-amber-500 focus:outline-none transition-colors" placeholder="email@example.com" />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase">Your Phone Number</label>
                  <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded p-4 focus:border-amber-500 focus:outline-none transition-colors" placeholder="+91 XXXXX XXXXX" />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase">Select Project / Model</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded p-4 focus:border-amber-500 focus:outline-none transition-colors text-slate-600">
                    <option>Select Option...</option>
                    <option>Real Estate - New Homes</option>
                    <option>Real Estate - Commercial</option>
                    <option>Automobile - Maruti Suzuki</option>
                    <option>Automobile - Nexa</option>
                    <option>Hospitality - Hotel Booking</option>
                    <option>Other Inquiry</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase">Message</label>
                  <textarea className="w-full bg-slate-50 border border-slate-200 rounded p-4 h-32 focus:border-amber-500 focus:outline-none transition-colors resize-none" placeholder="Type your message here...."></textarea>
                </div>

                <button type="button" className="w-full bg-slate-900 text-white font-bold uppercase tracking-widest py-4 rounded hover:bg-amber-600 transition-colors shadow-lg mt-4 flex justify-center items-center gap-2">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Other Locations Grid */}
        <div className="space-y-16">

          {/* Site Offices */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-amber-100 text-amber-600 rounded"><Home size={24} /></div>
              <h2 className="text-2xl font-bold font-heading text-slate-900">Site Offices</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Park View */}
              <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Chouhan Park View</h3>
                <div className="space-y-4 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="shrink-0 text-amber-500 mt-0.5" size={16} />
                    <span>4th floor, beside Shankracharya Mahavidyalaya, Junwani Road, Bhilai, Chhattisgarh - 490020</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="shrink-0 text-amber-500" size={16} />
                    <span className="font-bold">9109104783 / 7222909449</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="shrink-0 text-amber-500" size={16} />
                    <span>chouhanhousing@gmail.com</span>
                  </div>
                </div>
              </div>

              {/* Green Valley */}
              <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Chouhan Green Valley</h3>
                <div className="space-y-4 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="shrink-0 text-amber-500 mt-0.5" size={16} />
                    <span>Beside Royal Greens, Junwani Road, Bhilai, Chhattisgarh - 490020</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="shrink-0 text-amber-500" size={16} />
                    <span className="font-bold">9893253399</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="shrink-0 text-amber-500" size={16} />
                    <span>chouhanhousing@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hospitality */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-amber-100 text-amber-600 rounded"><Coffee size={24} /></div>
              <h2 className="text-2xl font-bold font-heading text-slate-900">Hospitality</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Empyrean Hotel */}
              <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Empyrean Hotel & Resort</h3>
                <div className="space-y-4 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="shrink-0 text-amber-500 mt-0.5" size={16} />
                    <span>NH-6, Durg Bypass, Pushpak Nagar, near Maruti Suzuki Arena, Bhilai, Chhattisgarh 490020</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="shrink-0 text-amber-500" size={16} />
                    <span className="font-bold">7566660048 / 6260341616</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="shrink-0 text-amber-500" size={16} />
                    <span>chouhanhousing@gmail.com</span>
                  </div>
                </div>
              </div>

              {/* Empyrean Lake Resort */}
              <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Empyrean Lake Resort</h3>
                <div className="space-y-4 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="shrink-0 text-amber-500 mt-0.5" size={16} />
                    <span>Near District Collectorate Office, Tandula Dam, Balod, Chhattisgarh - 491226</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="shrink-0 text-amber-500" size={16} />
                    <span className="font-bold">9109104001</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="shrink-0 text-amber-500" size={16} />
                    <span>empyreanresort@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Automobiles */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-amber-100 text-amber-600 rounded"><Car size={24} /></div>
              <h2 className="text-2xl font-bold font-heading text-slate-900">Automobiles</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Arena */}
              <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Maruti Suzuki Arena</h3>
                <div className="space-y-4 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="shrink-0 text-amber-500 mt-0.5" size={16} />
                    <span>NH-6, Durg – Rajnandgaon Bypass, Near Chouhan Town, Bhilai, Chhattisgarh - 490020</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="shrink-0 text-amber-500" size={16} />
                    <span className="font-bold">7222910055 / 7222910019</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="shrink-0 text-amber-500" size={16} />
                    <span className="break-all">sm.sales@chouhanautomobiles.com</span>
                  </div>
                </div>
              </div>

              {/* Nexa */}
              <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Maruti Suzuki Nexa</h3>
                <div className="space-y-4 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="shrink-0 text-amber-500 mt-0.5" size={16} />
                    <span>NH-6, Durg Bypass, near D-Mart, Katulbod, Bhilai, Durg, Chhattisgarh - 490020</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="shrink-0 text-amber-500" size={16} />
                    <span className="font-bold">7909999306 / 7909999309</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="shrink-0 text-amber-500" size={16} />
                    <span className="break-all">nexabusinesshead@chouhanautomobiles.com</span>
                  </div>
                </div>
              </div>

              {/* True Value */}
              <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Maruti Suzuki True Value</h3>
                <div className="space-y-4 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="shrink-0 text-amber-500 mt-0.5" size={16} />
                    <span>NH-6, Durg-Rjn Bypass, Infront of Hotel Empyrean, Bhilai, Chhattisgarh - 490020</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="shrink-0 text-amber-500" size={16} />
                    <span className="font-bold">7222910005</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="shrink-0 text-amber-500" size={16} />
                    <span className="break-all">edp.truevalue@chouhanautomobiles.com</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
