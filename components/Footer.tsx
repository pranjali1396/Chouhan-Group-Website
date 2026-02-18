
import React from 'react';
import { ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#002b49] text-white font-heading text-sm relative">
      <div className="container mx-auto px-6 py-16">

        {/* Scroll To Top Button (Absolute Top Right) */}
        <button
          onClick={scrollToTop}
          className="absolute top-8 right-6 md:right-12 p-2 rounded-full border border-white/30 hover:bg-white hover:text-[#002b49] transition-all text-white"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-8">

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
                <p className="text-white font-semibold mb-1">Housing Division</p>
                <p className="opacity-80">T: +91 91091 04005</p>
              </div>
            </div>
          </div>

          {/* Column 3: New Homes */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-6 text-white">New Homes</h3>
            <ul className="space-y-3 text-gray-300 text-xs font-medium">
              <li><Link to="/new-homes/parkview" className="hover:text-white hover:underline transition-colors">Chouhan Parkview</Link></li>
              <li><Link to="/new-homes/green-valley" className="hover:text-white hover:underline transition-colors">Chouhan Green Valley</Link></li>
              <li><Link to="/new-homes/singapore-life" className="hover:text-white hover:underline transition-colors">Singapore Life City</Link></li>
              <li><Link to="/new-homes/town" className="hover:text-white hover:underline transition-colors">Chouhan Town</Link></li>
              <li><Link to="/new-homes/sunrise-city" className="hover:text-white hover:underline transition-colors">Sunrise City</Link></li>
              <li><Link to="/new-homes/dream-homes" className="hover:text-white hover:underline transition-colors">Chouhan Dream Homes</Link></li>
            </ul>
          </div>

          {/* Column 4: Commercial */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-6 text-white">Commercial</h3>
            <ul className="space-y-3 text-gray-300 text-xs font-medium">
              <li><Link to="/commercial/business-center" className="hover:text-white hover:underline transition-colors">Chouhan Business Center</Link></li>
              <li><Link to="/commercial/business-park" className="hover:text-white hover:underline transition-colors">Chouhan Business Park</Link></li>
              <li><Link to="/commercial/estates" className="hover:text-white hover:underline transition-colors">Chouhan Estates</Link></li>
              <li><Link to="/commercial/plaza-details" className="hover:text-white hover:underline transition-colors">Chouhan Plaza</Link></li>
              <li><Link to="/commercial/city-center" className="hover:text-white hover:underline transition-colors">Chouhan City Center</Link></li>
              <li><Link to="/commercial/landmark-details" className="hover:text-white hover:underline transition-colors">Chouhan Landmark</Link></li>
              <li><Link to="/commercial/parkview-complex" className="hover:text-white hover:underline transition-colors">Chouhan Parkview Complex</Link></li>
              <li><Link to="/commercial/shikhar-complex" className="hover:text-white hover:underline transition-colors">Shikhar Complex</Link></li>
            </ul>
          </div>

          {/* Column 5: Automobiles */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-6 text-white">Automobiles</h3>
            <ul className="space-y-3 text-gray-300 text-xs font-medium">
              <li><Link to="/automobile?brand=Maruti%20Suzuki" className="hover:text-white hover:underline transition-colors">Maruti Suzuki Arena</Link></li>
              <li><Link to="/automobile?brand=Nexa" className="hover:text-white hover:underline transition-colors">NEXA</Link></li>
              <li><Link to="/automobile/hero" className="hover:text-white hover:underline transition-colors">Hero MotoCorp</Link></li>
              <li><Link to="/automobile/ashok" className="hover:text-white hover:underline transition-colors">Ashok Leyland</Link></li>
              <li><Link to="/automobile/true-value" className="hover:text-white hover:underline transition-colors">True Value</Link></li>
            </ul>
          </div>

          {/* Column 6: Customer Care & Hospitality */}
          <div className="col-span-1">
            <div className="mb-8">
              <h3 className="font-bold text-lg mb-6 text-white">Customer Care</h3>
              <ul className="space-y-3 text-gray-300 text-xs font-medium">
                <li><Link to="/care" className="hover:text-white hover:underline transition-colors">Real Estate Support</Link></li>
                <li><Link to="/care" className="hover:text-white hover:underline transition-colors">Automobile Support</Link></li>
                <li><Link to="/care" className="hover:text-white hover:underline transition-colors">Hospitality Support</Link></li>
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
            <img src="/new_images/Chouhan_Main_logo.png" alt="Chouhan Group" className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          </Link>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Site Map</Link>
            <Link to="/consent-preferences" className="hover:text-white transition-colors">Consent Preferences</Link>
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
