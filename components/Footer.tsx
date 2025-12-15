
import React from 'react';
import { ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#002b49] text-white font-sans text-sm relative">
      <div className="container mx-auto px-6 py-16">
        
        {/* Scroll To Top Button (Absolute Top Right) */}
        <button 
          onClick={scrollToTop}
          className="absolute top-8 right-6 md:right-12 p-2 rounded-full border border-white/30 hover:bg-white hover:text-[#002b49] transition-all text-white"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-8">
          
          {/* Column 1: Our Offices */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <h3 className="font-bold text-lg mb-6 text-white">Our Offices</h3>
            <div className="space-y-6 text-gray-300 text-xs">
              <div>
                <p className="text-white font-semibold mb-1">Head Office (Bhilai)</p>
                <p className="opacity-80">T: +91 91091 04005</p>
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Raipur Sales</p>
                <p className="opacity-80">T: +91 91091 04783</p>
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Durg Site Office</p>
                <p className="opacity-80">T: +91 72229 09449</p>
              </div>
            </div>
          </div>

          {/* Column 2: Additional Offices (Visual Continuation) */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1 lg:pt-[3.25rem]">
             <div className="space-y-6 text-gray-300 text-xs">
              <div>
                <p className="text-white font-semibold mb-1">Hospitality Division</p>
                <p className="opacity-80">T: +91 75666 60048</p>
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Automobile Division</p>
                <p className="opacity-80">T: +91 72229 10055</p>
              </div>
               <div>
                <p className="text-white font-semibold mb-1">General Inquiry</p>
                <p className="opacity-80">T: +91 95111 21113</p>
              </div>
             </div>
          </div>

          {/* Column 3: New Homes */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-6 text-white">New Homes</h3>
            <ul className="space-y-3 text-gray-300 text-xs font-medium">
              <li><Link to="/new-homes" className="hover:text-white hover:underline transition-colors">Now Selling</Link></li>
              <li><Link to="/new-homes/upcoming" className="hover:text-white hover:underline transition-colors">Coming Soon</Link></li>
              <li><Link to="/new-homes/completed" className="hover:text-white hover:underline transition-colors">Past Communities</Link></li>
              <li><Link to="/new-homes/map" className="hover:text-white hover:underline transition-colors">New Homes Map View</Link></li>
              <li><Link to="/care/real-estate" className="hover:text-white hover:underline transition-colors">Homeowner Centre</Link></li>
              <li><Link to="/contact" className="hover:text-white hover:underline transition-colors">Realtor Updates</Link></li>
            </ul>
          </div>

          {/* Column 4: Commercial */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-6 text-white">Commercial</h3>
            <ul className="space-y-3 text-gray-300 text-xs font-medium">
              <li><Link to="/commercial" className="hover:text-white hover:underline transition-colors">Industrial</Link></li>
              <li><Link to="/commercial" className="hover:text-white hover:underline transition-colors">Office</Link></li>
              <li><Link to="/commercial" className="hover:text-white hover:underline transition-colors">Retail</Link></li>
              <li><Link to="/commercial/leasing" className="hover:text-white hover:underline transition-colors">Tenant Snapshots</Link></li>
              <li><Link to="/commercial/map" className="hover:text-white hover:underline transition-colors">Map View</Link></li>
              <li><Link to="/contact" className="hover:text-white hover:underline transition-colors">Service Request</Link></li>
            </ul>
          </div>

          {/* Column 5: Customer Care & Hospitality */}
          <div className="col-span-1">
            <div className="mb-8">
              <h3 className="font-bold text-lg mb-6 text-white">Customer Care</h3>
              <ul className="space-y-3 text-gray-300 text-xs font-medium">
                <li><Link to="/care/real-estate" className="hover:text-white hover:underline transition-colors">Real Estate Support</Link></li>
                <li><Link to="/care/automobiles" className="hover:text-white hover:underline transition-colors">Automobile Support</Link></li>
                <li><Link to="/care/hospitality" className="hover:text-white hover:underline transition-colors">Hospitality Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Hospitality</h3>
               <ul className="space-y-3 text-gray-300 text-xs font-medium">
                 <li><Link to="/hospitality" className="hover:text-white hover:underline transition-colors">Hotels & Resorts</Link></li>
               </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 mb-6"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center text-center gap-3 text-[11px] text-gray-400 font-medium">
          
          <Link to="/" className="mb-1 block">
             <img src="/logo.png" alt="Chouhan Group" className="h-6 w-auto brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          </Link>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
             <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
             <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
             <Link to="/sitemap" className="hover:text-white transition-colors">Site Map</Link>
             <button className="hover:text-white transition-colors">Consent Preferences</button>
          </div>
          
          <div className="flex flex-col gap-0.5 opacity-60">
            <p>© Chouhan Group {new Date().getFullYear()}</p>
            <p>The trade-mark CHOUHAN GROUP is owned by Chouhan Property Management Services Ltd.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
