
import React, { useState, useEffect, useCallback, useRef } from 'react';
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
  Plus,
  Minus
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  navData: NavItem[];
}

// Refactored Mobile Item Component with Enhanced Usability
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
  const hasSubmenu = !!item.columns;

  return (
    <div className={`border-b border-white/10 transition-colors duration-300 ${isExpanded ? 'bg-[#00365c]' : 'bg-[#002b49]'}`}>
      {hasSubmenu ? (
        <button
          onClick={() => onToggle(item.label)}
          className="w-full flex justify-between items-center py-5 px-6 text-white hover:text-amber-400 transition-all select-none group"
        >
          <div className="flex items-center gap-3">
            <span className={`font-heading font-bold uppercase text-[13px] tracking-widest transition-colors ${isExpanded ? 'text-amber-400' : 'text-white'}`}>
              {item.label}
            </span>
            {isExpanded && <span className="bg-amber-500 w-1.5 h-1.5 rounded-full animate-pulse"></span>}
          </div>
          <div className={`transition-transform duration-500 ease-in-out ${isExpanded ? 'rotate-180' : 'rotate-0'}`}>
            {isExpanded ? (
              <Minus size={18} className="text-amber-400" />
            ) : (
              <Plus size={18} className="text-white/60 group-hover:text-amber-400" />
            )}
          </div>
        </button>
      ) : (
        <Link
          to={item.path || '#'}
          onClick={onLinkClick}
          className="w-full flex justify-between items-center py-5 px-6 text-white hover:text-amber-400 transition-colors"
        >
          <span className="font-heading font-bold uppercase text-[13px] tracking-widest">{item.label}</span>
        </Link>
      )}

      {/* Accordion Content with Enhanced Animation */}
      {hasSubmenu && (
        <div
          className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out bg-[#00223a]/50 ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
        >
          <div className="overflow-hidden">
            <div className="py-6 px-8 space-y-8">
              {item.columns!.map((col, idx) => (
                <div key={idx} className="animate-fadeIn" style={{ animationDelay: `${idx * 100}ms` }}>
                  {col.title && (
                    <h4 className="text-[10px] text-amber-500/80 font-black mb-4 uppercase tracking-[0.2em] border-b border-white/5 pb-2">
                      {col.title}
                    </h4>
                  )}
                  <ul className="space-y-4">
                    {col.links.length > 0 ? col.links.map((link, lIdx) => (
                      <li key={lIdx}>
                        <Link
                          to={link.path}
                          onClick={onLinkClick}
                          className="text-xs font-semibold text-white/70 block hover:text-amber-400 transition-all hover:translate-x-1 uppercase tracking-widest"
                        >
                          {link.label}
                        </Link>
                      </li>
                    )) : (
                      <li className="text-[10px] text-white/30 italic">No current listings</li>
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

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';

      const handleOutsideClick = (event: MouseEvent) => {
        if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
          setMobileMenuOpen(false);
        }
      };

      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') setMobileMenuOpen(false);
      };

      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleEscape);

      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 font-sans ${scrolled ? 'bg-[#002b49]/95 backdrop-blur-md shadow-lg' : 'bg-[#002b49]'
        }`}>

        {/* Top Bar - Hidden on Mobile (Shows only when Desktop Nav is active at XL) */}
        <div className="hidden xl:block border-b border-white/10 text-white uppercase bg-black/5">
          <div className="container-fluid mx-auto px-4 md:px-8 py-1.5 flex justify-end items-center gap-4 2xl:gap-6 text-[11px] 2xl:text-[12px] font-bold tracking-wider">
            <div className="flex gap-6 items-center">
              <Link to="/contact" className="hover:text-amber-400 transition-colors">Register for Updates</Link>
              <Link to="/careers" className="hover:text-amber-400 transition-colors">Careers</Link>
              <div className="flex gap-3 text-white/60 font-medium select-none">
                <span className="cursor-pointer hover:text-white transition-colors">EN</span>
                <span className="cursor-pointer hover:text-white transition-colors">HI</span>
              </div>
            </div>
            <div className="flex items-center gap-3 pl-6 border-l border-white/20">
              <a href="https://www.facebook.com/share/17atysTgnf/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors"><Facebook size={15} /></a>
              <a href="https://x.com/ChouhanHousing?t=qr_WRxVvfJ9a6q9yU_rHlA&s=09" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/chouhan_housing_commercial?igsh=MTZuNXpibTF4N2k4bA==" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors"><Instagram size={15} /></a>
              <a href="https://youtube.com/@chouhangroup-x7v?si=yHs8HX0SxFY9X1EB" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors"><Youtube size={15} /></a>
              <a href="#" className="hover:text-amber-400 transition-colors"><Linkedin size={15} /></a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="container-fluid mx-auto px-4 md:px-8">
          <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? 'h-12 md:h-13' : 'h-14 md:h-16'}`}>
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0 group z-50 max-w-[65%] md:max-w-none">
              {!imgError ? (
                <img
                  src="/logo.png"
                  alt="Chouhan Group"
                  className="h-6 md:h-7 xl:h-8 2xl:h-9 w-auto object-contain transition-transform group-hover:scale-105"
                  style={{ filter: 'brightness(0) saturate(100%) invert(61%) sepia(97%) saturate(1832%) hue-rotate(357deg) brightness(101%) contrast(93%)' }}
                  onError={() => setImgError(true)}
                />
              ) : (
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
            <nav className="hidden xl:flex items-center h-full gap-3 xl:gap-4 2xl:gap-6">
              {navData.map((item) => (
                <div
                  key={item.label}
                  className="group h-full flex items-center relative"
                  onMouseEnter={() => setActiveMenu(item.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    to={item.path || '#'}
                    className={`flex items-center gap-1 font-heading font-black text-[11px] xl:text-[11px] 2xl:text-[14px] tracking-wider 2xl:tracking-widest uppercase whitespace-nowrap transition-all duration-300 py-4 xl:py-6 border-b-2 border-transparent ${activeMenu === item.label ? 'text-amber-400 border-amber-400' : 'text-white hover:text-amber-400'
                      }`}
                  >
                    {item.label}
                    {item.columns && (
                      <ChevronDown size={10} className={`ml-0.5 transition-transform duration-300 opacity-70 ${activeMenu === item.label ? 'rotate-180' : ''}`} />
                    )}
                  </Link>

                  {/* Desktop Mega Menu Dropdown */}
                  {activeMenu === item.label && item.columns && (
                    <div className={`absolute top-full mt-0 w-max min-w-[300px] bg-white text-slate-800 shadow-xl rounded-b-lg border-t-4 border-amber-500 z-50 flex overflow-hidden animate-fadeIn max-w-[90vw] ${navData.indexOf(item) >= (navData.length / 2) - 1 ? 'right-0' : 'left-0'
                      }`}>
                      {item.columns.map((col, idx) => (
                        <div key={idx} className="p-6 min-w-[220px] border-r border-slate-100 last:border-r-0 bg-white">
                          {col.title && (
                            <h4 className="text-[15px] font-black text-amber-600 uppercase mb-4 tracking-widest border-b border-amber-100 pb-2 inline-block">
                              {col.title}
                            </h4>
                          )}
                          <ul className="space-y-2.5">
                            {col.links.length > 0 ? col.links.map((link, lIdx) => (
                              <li key={lIdx}>
                                <Link
                                  to={link.path}
                                  className="text-[14px] font-bold text-slate-500 hover:text-amber-600 hover:translate-x-1 transition-all block leading-tight uppercase tracking-wider"
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
              className="xl:hidden text-white hover:text-amber-400 transition-colors p-2 z-50 relative"
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
        className={`fixed inset-0 bg-black/70 z-[60] xl:hidden transition-opacity duration-500 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Drawer - Dark Blue Theme */}
      <div
        ref={mobileMenuRef}
        className={`fixed inset-y-0 right-0 w-full md:w-[450px] bg-[#002b49] z-[70] xl:hidden shadow-2xl transform-gpu transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) flex flex-col ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Mobile Header: Logo & Close */}
        <div className="flex justify-between items-center px-6 py-6 border-b border-white/10 shrink-0">
          {!imgError ? (
            <img
              src="/logo.png"
              alt="Chouhan Group"
              className="h-10 w-auto object-contain"
              style={{ filter: 'brightness(0) saturate(100%) invert(61%) sepia(97%) saturate(1832%) hue-rotate(357deg) brightness(101%) contrast(93%)' }}
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="font-serif text-xl font-bold text-white tracking-wider">CHOUHAN GROUP</span>
          )}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-white hover:text-amber-400 transition-colors p-2 rounded-full hover:bg-white/5"
            aria-label="Close menu"
          >
            <X size={32} strokeWidth={1} />
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-grow overflow-y-auto no-scrollbar">
          {/* Main Links List */}
          <div className="py-4">
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
          <div className="p-8 pb-12 mt-4 space-y-8 bg-black/10">
            {/* Social Icons - White Circle Style */}
            <div className="flex gap-4 items-center justify-center">
              {[
                { icon: <Facebook size={20} fill="currentColor" className="stroke-none" />, href: "https://www.facebook.com/share/17atysTgnf/" },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                  href: "https://x.com/ChouhanHousing?t=qr_WRxVvfJ9a6q9yU_rHlA&s=09"
                },
                { icon: <Instagram size={20} />, href: "https://www.instagram.com/chouhan_housing_commercial?igsh=MTZuNXpibTF4N2k4bA==" },
                { icon: <Youtube size={20} fill="currentColor" className="stroke-none" />, href: "https://youtube.com/@chouhangroup-x7v?si=yHs8HX0SxFY9X1EB" },
                { icon: <Linkedin size={20} fill="currentColor" className="stroke-none" />, href: "#" }
              ].map((social, idx) => (
                <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-amber-500 hover:text-white transition-all border border-white/10">
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Mobile Footer Actions */}
            <div className="flex flex-col gap-4">
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="block w-full py-5 px-6 text-center border-2 border-amber-500 text-amber-500 font-black uppercase tracking-[0.2em] text-[11px] hover:bg-amber-500 hover:text-white transition-all rounded-sm shadow-lg"
              >
                Register for updates
              </Link>
              <Link
                to="/careers"
                onClick={closeMobileMenu}
                className="block w-full py-4 px-6 text-center text-white/60 font-bold uppercase tracking-widest text-[10px] hover:text-amber-400 transition-colors"
              >
                Careers
              </Link>

              <div className="flex justify-center gap-6 pt-2 pb-4 text-[11px] font-bold text-white/40 border-t border-white/5 uppercase tracking-widest">
                <span className="text-amber-500">English</span>
                <span className="hover:text-amber-400 cursor-pointer transition-colors">Hindi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
