import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    MapPin, Phone, Mail, CheckCircle2, ArrowRight, Download,
    Menu, X, ChevronDown, Trees, Shield, Zap, Home,
    Coffee, Users, Landmark, Search, Play, ChevronLeft, ChevronRight,
    Facebook, Instagram, Twitter, Youtube, Award, Banknote, Clock, Percent, Hammer
} from 'lucide-react';

const SECTIONS = [
    { id: 'home', label: 'Home' },
    { id: 'discover', label: 'Discover' },
    { id: 'why-choose-us', label: 'Why Choose Us' },
    { id: 'location', label: 'Location' },
];

const AMENITIES = [
    { icon: <Trees size={28} />, title: "Green Spaces", desc: "Lush green surroundings for a peaceful lifestyle." },
    { icon: <Shield size={28} />, title: "24/7 Security", desc: "Round-the-clock security surveillance." },
    { icon: <Zap size={28} />, title: "Power Backup", desc: "Uninterrupted power supply for common areas." },
    { icon: <Home size={28} />, title: "Modern Design", desc: "Contemporary architectural design." },
];

const GALLERY_IMAGES = [
    // Placeholder images - update with real ones later
    "/placeholder-gallery-1.jpg",
    "/placeholder-gallery-2.jpg",
    "/placeholder-gallery-3.jpg",
];

const HERO_IMAGES = [
    "/chouhan_dream_homes_1.webp",
    "/chouhan_dream_homes_2.webp"
];

const ChouhanDreamHomesLanding: React.FC = () => {
    const [activeTab, setActiveTab] = useState('home');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    // Hero Slider Autoplay
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentHeroSlide((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!selectedImage) return;
            if (e.key === 'Escape') setSelectedImage(null);
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage]);

    const handleNext = () => {
        if (selectedImage) {
            const currentIndex = GALLERY_IMAGES.indexOf(selectedImage);
            const nextIndex = (currentIndex + 1) % GALLERY_IMAGES.length;
            setSelectedImage(GALLERY_IMAGES[nextIndex]);
        }
    };

    const handlePrev = () => {
        if (selectedImage) {
            const currentIndex = GALLERY_IMAGES.indexOf(selectedImage);
            const prevIndex = (currentIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
            setSelectedImage(GALLERY_IMAGES[prevIndex]);
        }
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="bg-white font-sans text-stone-800 pt-0">

            {/* Image Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fadeIn select-none"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 z-[90] text-white/80 hover:text-white bg-black/40 hover:bg-black/60 rounded-full p-2 transition-all backdrop-blur-sm"
                    >
                        <X size={32} />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-[80] text-white/70 hover:text-white bg-black/40 hover:bg-black/70 rounded-full p-2 md:p-3 transition-all backdrop-blur-sm"
                    >
                        <ChevronLeft size={32} className="w-8 h-8 md:w-10 md:h-10" />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); handleNext(); }}
                        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-[80] text-white/70 hover:text-white bg-black/40 hover:bg-black/70 rounded-full p-2 md:p-3 transition-all backdrop-blur-sm"
                    >
                        <ChevronRight size={32} className="w-8 h-8 md:w-10 md:h-10" />
                    </button>
                    <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
                        <img
                            src={selectedImage}
                            alt="Gallery Preview"
                            className="max-w-full max-h-full object-contain rounded shadow-2xl"
                        />
                    </div>
                </div>
            )}

            {/* Internal Navigation (Sticky) */}
            <div className="sticky top-0 z-40 bg-white/95 backdrop-blur shadow-sm border-b border-stone-100">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <img
                            src="/chouhan_dream_homes_logo.png"
                            alt="Chouhan Dream Homes"
                            className="h-12 w-auto object-contain"
                        />

                        <div className="hidden md:flex space-x-6 overflow-x-auto no-scrollbar">
                            {SECTIONS.filter(s => s.id !== 'home').map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`text-xs font-bold uppercase tracking-wider whitespace-nowrap py-2 border-b-2 transition-all ${activeTab === item.id
                                        ? 'border-emerald-600 text-emerald-800'
                                        : 'border-transparent text-gray-400 hover:text-emerald-600'
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                            <button
                                onClick={() => navigate('/new-homes')}
                                className="ml-4 text-[10px] font-bold uppercase tracking-widest text-emerald-600 hover:text-emerald-700 transition-colors flex items-center gap-1 border border-emerald-200 px-3 py-1.5 rounded-full"
                            >
                                <ArrowRight size={12} /> HOME
                            </button>
                        </div>

                        <button
                            className="md:hidden text-emerald-900 p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-stone-100 shadow-xl animate-fadeIn">
                        <div className="flex flex-col p-4 space-y-4">
                            {SECTIONS.filter(s => s.id !== 'home').map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        scrollToSection(item.id);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="text-left text-sm font-bold uppercase tracking-wider py-3 border-b border-stone-50 text-gray-500"
                                >
                                    {item.label}
                                </button>
                            ))}
                            <div className="pt-4 mt-2 border-t border-stone-100">
                                <button
                                    onClick={() => navigate('/new-homes')}
                                    className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-emerald-600 w-full"
                                >
                                    <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                                        <ArrowRight size={16} />
                                    </div>
                                    Back to Home
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Hero Section */}
            <section id="home" className="relative h-[85vh] w-full overflow-hidden bg-stone-900">
                {HERO_IMAGES.map((img, idx) => (
                    <div
                        key={idx}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentHeroSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                        <img
                            src={img}
                            alt={`Chouhan Dream Homes View ${idx + 1}`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30"></div>
                    </div>
                ))}
            </section>

            {/* Discover Section */}
            <section id="discover" className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/2">
                            <span className="text-emerald-900 font-bold tracking-widest text-xs uppercase block mb-4">Sold Out • Premier Complex</span>
                            <h1 className="text-4xl lg:text-5xl font-heading font-black text-stone-900 mb-6 leading-tight">
                                Chouhan Dream Home
                            </h1>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                <strong>Chouhan Dream Home</strong>, developed by Chouhan Group, is a premier residential and commercial complex in Bhilai, crafted with innovative design and a prime location.
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Established in 2005, this project quickly became a market favorite, achieving remarkable success by selling out within its first year. Our commitment to quality and excellence is evident in every aspect of Chouhan Dream Home, offering residents an exceptional blend of comfortable living spaces and convenient commercial facilities. Experience the legacy of Chouhan Dream Home, where visionary development meets.
                            </p>

                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-100 rounded text-stone-600 font-bold text-sm">
                                <CheckCircle2 size={16} className="text-emerald-600" /> Fully Sold Out by Chouhan Group
                            </div>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                            <div className="bg-stone-50 p-6 rounded-xl border border-stone-100">
                                <h3 className="font-bold text-stone-900 text-lg mb-1">Established 2005</h3>
                                <p className="text-sm text-stone-500">A Legacy Project</p>
                            </div>
                            <div className="bg-stone-50 p-6 rounded-xl border border-stone-100">
                                <h3 className="font-bold text-stone-900 text-lg mb-1">Sold Out</h3>
                                <p className="text-sm text-stone-500">Record Time</p>
                            </div>
                            <div className="bg-stone-50 p-6 rounded-xl border border-stone-100">
                                <h3 className="font-bold text-stone-900 text-lg mb-1">Mixed Use</h3>
                                <p className="text-sm text-stone-500">Residential & Commercial</p>
                            </div>
                            <div className="bg-stone-50 p-6 rounded-xl border border-stone-100">
                                <h3 className="font-bold text-stone-900 text-lg mb-1">Bhilai</h3>
                                <p className="text-sm text-stone-500">Prime Location</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section id="why-choose-us" className="py-24 bg-stone-50 border-y border-stone-200">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase block mb-2">Our Promise</span>
                        <h2 className="text-3xl font-heading font-bold text-stone-900">Why You Should Choose Us?</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* 1 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                            <div className="w-16 h-16 mx-auto bg-emerald-50 rounded-full flex items-center justify-center text-emerald-800 mb-6">
                                <Award size={32} />
                            </div>
                            <h3 className="font-bold text-stone-900 mb-2">Member of CREDAI & RERA Approved</h3>
                            <p className="text-sm text-stone-500">Certified and trusted real estate standard.</p>
                        </div>

                        {/* 2 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                            <div className="w-16 h-16 mx-auto bg-emerald-50 rounded-full flex items-center justify-center text-emerald-800 mb-6">
                                <Home size={32} />
                            </div>
                            <h3 className="font-bold text-stone-900 mb-2">Save Upto ₹2.67L Under PMAY</h3>
                            <p className="text-sm text-stone-500">Government subsidy benefits utilized.</p>
                        </div>

                        {/* 3 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                            <div className="w-16 h-16 mx-auto bg-emerald-50 rounded-full flex items-center justify-center text-emerald-800 mb-6">
                                <Clock size={32} />
                            </div>
                            <h3 className="font-bold text-stone-900 mb-2">20+ Years of Experience</h3>
                            <p className="text-sm text-stone-500">Decades of excellence in construction.</p>
                        </div>

                        {/* 4 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                            <div className="w-16 h-16 mx-auto bg-emerald-50 rounded-full flex items-center justify-center text-emerald-800 mb-6">
                                <Hammer size={32} />
                            </div>
                            <h3 className="font-bold text-stone-900 mb-2">High Standard Detailing in Construction</h3>
                            <p className="text-sm text-stone-500">Quality that stands the test of time.</p>
                        </div>

                        {/* 5 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                            <div className="w-16 h-16 mx-auto bg-emerald-50 rounded-full flex items-center justify-center text-emerald-800 mb-6">
                                <Shield size={32} />
                            </div>
                            <h3 className="font-bold text-stone-900 mb-2">1 Year of FREE Maintenance</h3>
                            <p className="text-sm text-stone-500">(*T&C Applied) Worry-free living.</p>
                        </div>

                        {/* 6 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                            <div className="w-16 h-16 mx-auto bg-emerald-50 rounded-full flex items-center justify-center text-emerald-800 mb-6">
                                <Percent size={32} />
                            </div>
                            <h3 className="font-bold text-stone-900 mb-2">Loan & EMI Facility Available</h3>
                            <p className="text-sm text-stone-500">Easy financing options.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section id="location" className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="lg:w-1/3">
                            <h2 className="text-3xl font-heading font-bold text-stone-900 mb-6">Prime Connectivity</h2>
                            <p className="text-gray-600 mb-6">
                                Located in a strategic area of Bhilai, Chouhan Dream Homes offers easy access to all daily necessities and major transit points.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-3 items-center">
                                    <div className="w-10 h-10 rounded bg-stone-100 flex items-center justify-center shrink-0"><MapPin size={18} /></div>
                                    <div>
                                        <h4 className="font-bold text-stone-900">Smriti Nagar, Bhilai</h4>
                                        <p className="text-xs text-gray-500">Prime Residential Location</p>
                                    </div>
                                </li>
                                <li className="flex gap-3 items-center">
                                    <div className="w-10 h-10 rounded bg-stone-100 flex items-center justify-center shrink-0"><CheckCircle2 size={18} /></div>
                                    <div>
                                        <h4 className="font-bold text-stone-900">Surya Treasure Island Mall</h4>
                                        <p className="text-xs text-gray-500">Shopping & Entertainment Hub</p>
                                    </div>
                                </li>
                                <li className="flex gap-3 items-center">
                                    <div className="w-10 h-10 rounded bg-stone-100 flex items-center justify-center shrink-0"><CheckCircle2 size={18} /></div>
                                    <div>
                                        <h4 className="font-bold text-stone-900">Empyrean Resort</h4>
                                        <p className="text-xs text-gray-500">Leisure & Recreation</p>
                                    </div>
                                </li>
                                <li className="flex gap-3 items-center">
                                    <div className="w-10 h-10 rounded bg-stone-100 flex items-center justify-center shrink-0"><CheckCircle2 size={18} /></div>
                                    <div>
                                        <h4 className="font-bold text-stone-900">Highway Connectivity</h4>
                                        <p className="text-xs text-gray-500">Seamless Travel Access</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:w-2/3 h-[400px] bg-stone-100 rounded-xl overflow-hidden relative shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.456914816671!2d81.31970288885498!3d21.2137226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293d0f17a4dc23%3A0xa96c8cb0dbdf4df6!2sCHPL%20DREAM%20HOMES%20D%20BLOCK!5e0!3m2!1sen!2sin!4v1767720274282!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-white text-stone-600 py-16 border-t border-stone-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-heading font-bold text-emerald-900 tracking-wider">CHOUHAN DREAM HOMES</h3>
                            <p className="text-sm leading-relaxed max-w-xs text-stone-500">
                                A premier residential and commercial complex in Bhilai, crafted with innovative design and a prime location.
                            </p>
                            <div className="flex items-center gap-6">
                                <div className="flex gap-4 items-center">
                                    <a href="https://www.facebook.com/share/17atysTgnf/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-emerald-600 hover:text-white transition-all">
                                        <Facebook size={18} />
                                    </a>
                                    <a href="https://www.instagram.com/chouhan_housing_commercial?igsh=MTZuNXpibTF4N2k4bA==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-emerald-600 hover:text-white transition-all">
                                        <Instagram size={18} />
                                    </a>
                                    <a href="https://x.com/ChouhanHousing?t=qr_WRxVvfJ9a6q9yU_rHlA&s=09" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-emerald-600 hover:text-white transition-all">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </a>
                                    <a href="https://youtube.com/@chouhangroup-x7v?si=yHs8HX0SxFY9X1EB" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-emerald-600 hover:text-white transition-all">
                                        <Youtube size={18} />
                                    </a>
                                </div>
                                <img
                                    src="/ChouhanG.png"
                                    alt="Chouhan Group Logo"
                                    className="h-12 w-auto object-contain"
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-sm font-bold text-emerald-900 uppercase tracking-widest">LOCATION</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 items-start">
                                    <MapPin size={18} className="text-emerald-600 flex-shrink-0 mt-1" />
                                    <span className="text-sm leading-relaxed text-stone-600">
                                        Chouhan Dream Homes,<br />
                                        Bhilai, Chhattisgarh 490020
                                    </span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <Phone size={18} className="text-emerald-600 flex-shrink-0 mt-1" />
                                    <a href="tel:+919109104005" className="text-sm text-stone-600 hover:text-emerald-600 transition-colors">
                                        +91 91091 04005
                                    </a>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <Mail size={18} className="text-emerald-600 flex-shrink-0 mt-1" />
                                    <a href="mailto:chouhanhousing@gmail.com" className="text-sm text-stone-600 hover:text-emerald-600 transition-colors">
                                        chouhanhousing@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-sm font-bold text-emerald-900 uppercase tracking-widest">Location Map</h3>
                            <div className="w-full h-48 bg-stone-100 rounded-lg overflow-hidden border border-stone-200">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.456914816671!2d81.31970288885498!3d21.2137226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293d0f17a4dc23%3A0xa96c8cb0dbdf4df6!2sCHPL%20DREAM%20HOMES%20D%20BLOCK!5e0!3m2!1sen!2sin!4v1767720274282!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-stone-100 text-center text-xs text-stone-400">
                        <p>© {new Date().getFullYear()} Chouhan Group. All rights reserved. | RERA Approved Project. | Privacy Policy | Disclaimer</p>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default ChouhanDreamHomesLanding;
