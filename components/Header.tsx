
import React, { useState, useEffect, useCallback } from 'react';
import { NavItem } from '../types';
import {
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Menu,
  X,
  ChevronDown,
  Phone,
  Briefcase
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  navData: NavItem[];
}

// Optimized Mobile Item Component with Dark Theme and Accordion Slide
const MobileNavItem = React.memo(({
  item,
  isExpanded,
  onToggle,
  onLinkClick
}: {
  item: NavItem,
  isExpanded: boolean,
  onToggle: (label: string) => void,
  onLinkClick: () => void
}) => {
  return (
    <div className="border-b border-white/10 last:border-0">
      {item.columns ? (
        <button
          onClick={() => onToggle(item.label)}
          className="w-full flex justify-between items-center py-5 px-6 text-white hover:text-amber-400 transition-colors select-none group bg-[#002b49]"
        >
          <span className="font-heading font-bold uppercase text-[13px] tracking-widest">{item.label}</span>
          <ChevronDown
            size={18}
            className={`transition-transform duration-300 text-white/70 group-hover:text-amber-400 ${isExpanded ? 'rotate-180' : ''}`}
          />
        </button>
      ) : (
        <Link
          to={item.path || '#'}
          onClick={onLinkClick}
          className="w-full flex justify-between items-center py-5 px-6 text-white hover:text-amber-400 transition-colors bg-[#002b49]"
        >
          <span className="font-heading font-bold uppercase text-[13px] tracking-widest">{item.label}</span>
        </Link>
      )}

      {/* Accordion Content - Slides open */}
      {item.columns && (
        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-in-out bg-[#00223a] ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
        >
          <div className="overflow-hidden">
            <div className="py-4 px-6 space-y-6">
              {item.columns.map((col, idx) => (
                <div key={idx}>
                  {col.title && (
                    <h4 className="text-[10px] text-white/40 font-bold mb-3 uppercase tracking-widest border-b border-white/5 pb-1 inline-block">{col.title}</h4>
                  )}
                  <ul className="space-y-3">
                    {col.links.length > 0 ? col.links.map((link, lIdx) => (
                      <li key={lIdx}>
                        <Link
                          to={link.path}
                          onClick={onLinkClick}
                          className="text-xs font-medium text-white/80 block hover:text-amber-400 transition-colors uppercase tracking-wider"
                        >
                          {link.label}
                        </Link>
                      </li>
                    )) : (
                      <li className="text-[10px] text-white/30 italic">No listings</li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

const Header: React.FC<HeaderProps> = ({ navData }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [imgError, setImgError] = useState(false);
  const location = useLocation();

  const toggleMobileExpand = useCallback((label: string) => {
    setMobileExpanded(prev => prev === label ? null : label);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change & prevent body scroll
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 font-sans ${scrolled ? 'bg-[#002b49]/95 backdrop-blur-md shadow-md' : 'bg-[#002b49]'
        }`}>

        {/* Top Bar - Hidden on Mobile */}
        <div className={`hidden md:block border-b border-white/10`}>
          <div className="w-full max-w-[1280px] mx-auto px-4 md:px-12 flex justify-end items-center gap-6 py-2.5 text-[11px] font-bold tracking-wider text-white uppercase">
            <div className="flex gap-6 items-center">
              <Link to="/register" className="hover:text-amber-400 transition-colors">Register for Updates</Link>
              <Link to="/careers" className="hover:text-amber-400 transition-colors">Careers</Link>
              <div className="flex gap-3 text-white/60 font-medium select-none">
                <span className="cursor-pointer hover:text-white transition-colors">EN</span>
                <span className="cursor-pointer hover:text-white transition-colors">HI</span>
              </div>
            </div>
            <div className="flex items-center gap-3 pl-6 border-l border-white/20">
              <a href="#" className="hover:text-amber-400 transition-colors"><Facebook size={15} /></a>
              <a href="#" className="hover:text-amber-400 transition-colors"><Twitter size={15} /></a>
              <a href="#" className="hover:text-amber-400 transition-colors"><Instagram size={15} /></a>
              <a href="#" className="hover:text-amber-400 transition-colors"><Youtube size={15} /></a>
              <a href="#" className="hover:text-amber-400 transition-colors"><Linkedin size={15} /></a>
            </div>

          </div>
        </div>

        {/* Main Navbar */}
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-12">
          <div className={`flex justify-between lg:justify-start lg:gap-16 items-center transition-all duration-300 ${scrolled ? 'h-16' : 'h-20 md:h-24'}`}>
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0 mr-4 group z-50">
              {!imgError ? (
                <img
                  src="/logo.png"
                  alt="Chouhan Group"
                  className="h-8 md:h-10 w-auto object-contain transition-transform group-hover:scale-105 brightness-0 invert"
                  onError={() => setImgError(true)}
                />
              ) : (
                /* Fallback Stylized Logo - White Text */
                <div className="flex flex-col items-center">
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-xl md:text-2xl font-bold text-white tracking-wider">CHOUHAN</span>
                  </div>
                  <div className="flex flex-col items-center -mt-1 w-full">
                    <span className="text-[8px] md:text-[10px] text-amber-400 font-sans font-bold tracking-[0.3em] uppercase w-full text-center">Group</span>
                  </div>
                </div>
              )}
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center h-full gap-4 xl:gap-5">
              {navData.map((item) => (
                <div
                  key={item.label}
                  className="group h-full flex items-center relative"
                  onMouseEnter={() => setActiveMenu(item.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    to={item.path || '#'}
                    className={`flex items-center gap-1 font-heading font-bold text-[13px] tracking-widest uppercase transition-all duration-300 py-6 border-b-2 border-transparent whitespace-nowrap ${activeMenu === item.label ? 'text-amber-400 border-amber-400' : 'text-white hover:text-amber-400'
                      }`}
                  >
                    {item.label}
                    {item.columns && (
                      <ChevronDown size={10} className={`ml-0.5 transition-transform duration-300 opacity-70 ${activeMenu === item.label ? 'rotate-180' : ''}`} />
                    )}
                  </Link>

                  {/* Desktop Mega Menu Dropdown */}
                  {activeMenu === item.label && item.columns && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-max min-w-[200px] bg-white text-slate-800 shadow-xl rounded-b-lg border-t-4 border-amber-500 z-50 flex overflow-hidden animate-fadeIn">
                      {item.columns.map((col, idx) => (
                        <div key={idx} className="p-6 min-w-[220px] border-r border-slate-100 last:border-r-0 bg-white">
                          {col.title && (
                            <h4 className="text-xs font-bold text-amber-600 uppercase mb-4 tracking-widest border-b border-amber-100 pb-2 inline-block">
                              {col.title}
                            </h4>
                          )}
                          <ul className="space-y-2.5">
                            {col.links.length > 0 ? col.links.map((link, lIdx) => (
                              <li key={lIdx}>
                                <Link
                                  to={link.path}
                                  className="text-[11px] font-bold text-slate-500 hover:text-amber-600 hover:translate-x-1 transition-all block leading-tight uppercase tracking-wider"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            )) : (
                              <li className="text-[10px] text-slate-400 italic">No current listings</li>
                            )}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button - White */}
            <button
              className="lg:hidden text-white hover:text-amber-400 transition-colors p-2 z-50 relative"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-[60] lg:hidden transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Drawer - Dark Blue Theme */}
      <div
        className={`fixed inset-y-0 right-0 w-full md:w-[400px] bg-[#002b49] z-[70] lg:hidden shadow-2xl transform-gpu transition-transform duration-300 ease-out will-change-transform flex flex-col ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Mobile Header: Logo & Close */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-white/10 shrink-0">
          {!imgError ? (
            <img
              src="/logo.png"
              alt="Chouhan Group"
              className="h-8 w-auto object-contain brightness-0 invert"
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="font-serif text-xl font-bold text-white tracking-wider">CHOUHAN GROUP</span>
          )}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-white hover:text-amber-400 transition-colors p-1"
            aria-label="Close menu"
          >
            <X size={32} strokeWidth={1} />
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-grow overflow-y-auto">
          {/* Main Links List */}
          <div>
            {navData.map((item) => (
              <MobileNavItem
                key={item.label}
                item={item}
                isExpanded={mobileExpanded === item.label}
                onToggle={toggleMobileExpand}
                onLinkClick={closeMobileMenu}
              />
            ))}
          </div>

          {/* Mobile Footer Actions */}
          <div className="p-8 pb-12 mt-4 space-y-8">
            {/* Social Icons - White Circle Style */}
            <div className="flex gap-4 items-center">
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#002b49] hover:bg-amber-500 hover:text-white transition-all">
                <Facebook size={20} fill="currentColor" className="stroke-none" />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#002b49] hover:bg-amber-500 hover:text-white transition-all">
                <Twitter size={20} fill="currentColor" className="stroke-none" />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#002b49] hover:bg-amber-500 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#002b49] hover:bg-amber-500 hover:text-white transition-all">
                <Youtube size={20} fill="currentColor" className="stroke-none" />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#002b49] hover:bg-amber-500 hover:text-white transition-all">
                <Linkedin size={20} fill="currentColor" className="stroke-none" />
              </a>
            </div>

            {/* Register Button */}
            <Link
              to="/register"
              onClick={closeMobileMenu}
              className="block w-full py-4 px-6 text-center border border-white/30 text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-[#002b49] transition-all"
            >
              Register for updates
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
