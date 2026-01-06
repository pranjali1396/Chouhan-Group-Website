import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    MapPin, Phone, Mail, CheckCircle2, ArrowRight, Download,
    Menu, X, ChevronDown, ShoppingBag, Shield, Zap, Building2,
    Coffee, Users, Landmark, Search, Store, Car, Utensils,
    Facebook, Instagram, Youtube, Twitter, Shirt, Home, Tags, ShoppingBasket
} from 'lucide-react';

const SECTIONS = [
    { id: 'home', label: 'Home' },
    { id: 'discover', label: 'Discover' },
    { id: 'amenities', label: 'Experience' },
    { id: 'why-choose', label: 'Why Choose Us' },
    { id: 'location', label: 'Location' },
    { id: 'contact', label: 'Contact' },
];

const AMENITIES = [
    { icon: <Shirt size={28} />, title: "Trendy Fashion", desc: "Latest collection of apparel for Men, Women & Kids at affordable prices." },
    { icon: <Home size={28} />, title: "Home Essentials", desc: "A wide range of home decor, kitchenware, and furnishing needs." },
    { icon: <ShoppingBasket size={28} />, title: "Daily Groceries", desc: "Fresh groceries and daily household essentials under one roof." },
    { icon: <Tags size={28} />, title: "Best Value", desc: "Unbeatable prices and exciting offers on your favorite products every day." },
    { icon: <Car size={28} />, title: "Ample Parking", desc: "Hassle-free parking space for a convenient shopping experience." },
    { icon: <Zap size={28} />, title: "Air Conditioned", desc: "Comfortable centralized air-conditioned shopping environment." },
    { icon: <Utensils size={28} />, title: "Food & Snacks", desc: "Grab a quick bite and refreshments while you shop." },
];

const WHY_CHOOSE_DATA = [
    { title: "RERA APPROVED", desc: "Member of CREDAI & Fully RERA Approved project.", icon: <CheckCircle2 className="text-amber-600" size={32} /> },
    { title: "STRATEGIC LOCATION", desc: "Located in Junwani, Bhilai with excellent connectivity.", icon: <MapPin className="text-amber-600" size={32} /> },
    { title: "PREMIUM DETAILING", desc: "High standard detailing in construction with modern aesthetics.", icon: <Shield className="text-amber-600" size={32} /> },
    { title: "1 YEAR FREE MAINTENANCE", desc: "Enjoy hassle-free operations with complimentary maintenance.", icon: <Zap className="text-amber-600" size={32} /> },
    { title: "EXPERIENCE", desc: "Backed by 20+ Years of Experience in development.", icon: <Building2 className="text-amber-600" size={32} /> },
    { title: "FINANCIAL SUPPORT", desc: "Loan & EMI facilities available. PMAY benefits.", icon: <Landmark className="text-amber-600" size={32} /> },
];

const ChouhanLandmarkLanding: React.FC = () => {
    const [activeTab, setActiveTab] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    // Scroll spy effect
    useEffect(() => {
        const handleScroll = () => {
            const sections = SECTIONS.map(s => document.getElementById(s.id));
            const scrollPos = window.scrollY + 200;

            sections.forEach(sec => {
                if (sec && sec.offsetTop <= scrollPos && (sec.offsetTop + sec.offsetHeight) > scrollPos) {
                    setActiveTab(sec.id);
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

            {/* Internal Navigation (Sticky) */}
            <div className="sticky top-0 z-40 bg-white/95 backdrop-blur shadow-sm border-b border-stone-100">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <div className="cursor-pointer py-2" onClick={() => scrollToSection('home')}>
                            <img
                                src="/images/chouhan_landmark_logo.webp"
                                alt="Chouhan Landmark"
                                className="h-12 w-auto object-contain"
                            />
                        </div>
                        {/* Desktop Nav */}
                        <div className="hidden md:flex space-x-8 items-center">
                            {SECTIONS.filter(s => s.id !== 'home').map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`text-xs font-bold uppercase tracking-wider whitespace-nowrap py-2 border-b-2 transition-all ${activeTab === item.id
                                        ? 'border-amber-500 text-stone-900'
                                        : 'border-transparent text-gray-400 hover:text-amber-500'
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                            <button
                                onClick={() => navigate('/commercial')}
                                className="ml-4 text-[10px] font-bold uppercase tracking-widest text-amber-600 hover:text-amber-700 transition-colors flex items-center gap-1 border border-amber-200 px-3 py-1.5 rounded-full"
                            >
                                <ArrowRight size={12} /> HOME
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-stone-900 p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white/95 backdrop-blur border-t border-stone-100 animate-fadeIn overflow-hidden">
                        <div className="flex flex-col p-6 space-y-4">
                            {SECTIONS.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        scrollToSection(item.id);
                                        setIsMenuOpen(false);
                                    }}
                                    className={`text-sm font-bold uppercase tracking-wider text-left flex items-center justify-between ${activeTab === item.id ? 'text-amber-600' : 'text-stone-500'}`}
                                >
                                    {item.label}
                                    {activeTab === item.id && <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>}
                                </button>
                            ))}
                            <div className="pt-4 mt-2 border-t border-stone-100">
                                <button
                                    onClick={() => navigate('/commercial')}
                                    className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-amber-600 w-full"
                                >
                                    <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center">
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
            <section id="home" className="relative w-full bg-stone-50">
                <div className="flex flex-col md:flex-row min-h-[60vh]">
                    {/* Image Half */}
                    <div className="w-full md:w-1/2 relative h-[400px] md:h-auto">
                        <img
                            src="/images/vishal mega mart.jpg"
                            alt="Vishal Mega Mart at Chouhan Landmark"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10"></div>
                    </div>

                    {/* Text Half */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:p-24 bg-stone-50">
                        <span className="inline-block px-3 py-1 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest rounded mb-6 w-fit shadow-sm">
                            Sold Out • Fully Leased
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 leading-tight text-stone-900">
                            Chouhan<br />Landmark
                        </h1>
                        <p className="text-lg text-stone-600 font-light leading-relaxed max-w-lg">
                            Home to <strong>Vishal Mega Mart</strong> - Bhilai's Favorite Shopping Destination. Experiencing the future of retail in a premium setting.
                        </p>
                    </div>
                </div>
            </section>

            {/* Discover / Intro Section */}
            <section id="discover" className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="md:w-1/2">
                            <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-2">Project Overview</h2>
                            <h3 className="text-4xl font-heading font-bold text-stone-900 mb-6">A Landmark Success Story</h3>
                            <p className="text-gray-600 leading-loose mb-6">
                                <strong>Chouhan Landmark</strong> has established itself as a premier commercial hub in Bhilai. We are proud to announce that this entire complex has been successfully leased/sold to <strong>Vishal Mega Mart</strong>, one of India's leading fashion-led hypermarket chains.
                            </p>
                            <p className="text-gray-600 leading-loose">
                                This partnership underscores the strategic value and premium quality of Chouhan Landmark. As a bustling retail anchor, Vishal Mega Mart serves thousands of customers daily, offering wide-ranging products including fashion, general merchandise, and grocery, making it a key shopping destination in the city.
                            </p>
                        </div>
                        <div className="md:w-1/2 grid grid-cols-2 gap-4">
                            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200 hover:shadow-lg transition-shadow">
                                <h4 className="text-3xl font-black text-amber-600 mb-1">100%</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Leased / Sold</p>
                            </div>
                            <div className="bg-stone-100 p-8 rounded-2xl border border-stone-200 hover:shadow-lg transition-shadow">
                                <h4 className="text-3xl font-black text-amber-600 mb-1">Anchor</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Vishal Mega Mart</p>
                            </div>
                            <div className="bg-stone-100 p-8 rounded-2xl border border-stone-200 hover:shadow-lg transition-shadow">
                                <h4 className="text-3xl font-black text-amber-600 mb-1">Prime</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Highway Location</p>
                            </div>
                            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200 hover:shadow-lg transition-shadow">
                                <h4 className="text-3xl font-black text-amber-600 mb-1">Hub</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Retail Center</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Amenities / Experience */}
            <section id="amenities" className="py-24 bg-stone-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-100/50 -skew-x-12 translate-x-1/4"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="mb-16">
                        <span className="text-amber-600 font-bold tracking-widest text-xs uppercase block mb-2">Shopping Experience</span>
                        <h2 className="text-4xl font-heading font-bold text-stone-900">What's In Store</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {AMENITIES.map((amenity, idx) => (
                            <div key={idx} className="group p-6 bg-white border border-stone-100 rounded-xl hover:shadow-xl hover:border-amber-200 transition-all duration-300">
                                <div className="w-14 h-14 bg-stone-50 rounded-full flex items-center justify-center text-amber-700 mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                                    {amenity.icon}
                                </div>
                                <h3 className="font-bold text-lg text-stone-900 mb-2">{amenity.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{amenity.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section id="why-choose" className="py-24 bg-white relative overflow-hidden text-stone-900">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-heading font-bold text-stone-900">Why Choose Chouhan Landmark</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {WHY_CHOOSE_DATA.map((item, idx) => (
                            <div key={idx} className="p-8 bg-white border border-stone-100 rounded-xl hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
                                <div className="mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold text-lg text-stone-900 mb-4 tracking-wider">{item.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Location */}
            <section id="location" className="py-24 bg-stone-50 text-stone-800 relative">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/3 space-y-8">
                            <h2 className="text-3xl font-heading font-bold text-stone-900">How to Find Us</h2>
                            <p className="text-stone-600 leading-relaxed">
                                Chouhan Landmark is conveniently located in Bhilai, making it easily accessible from all parts of the city.
                            </p>

                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 rounded bg-stone-200 flex items-center justify-center flex-shrink-0">
                                        <Landmark size={20} className="text-amber-700" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-stone-900">Prime Location</h4>
                                        <p className="text-sm text-stone-500">Centrally located in Bhilai</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 rounded bg-stone-200 flex items-center justify-center flex-shrink-0">
                                        <ShoppingBag size={20} className="text-amber-700" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-stone-900">Shopping Hub</h4>
                                        <p className="text-sm text-stone-500">Major commercial corridor</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 rounded bg-stone-200 flex items-center justify-center flex-shrink-0">
                                        <Car size={20} className="text-amber-700" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-stone-900">Easy Accessibility</h4>
                                        <p className="text-sm text-stone-500">Hassle-free entry and exit</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="lg:w-2/3 h-[400px] bg-white rounded-xl overflow-hidden relative shadow-lg border border-stone-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7439.153109250939!2d81.358149!3d21.208974!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a292361400e16cb%3A0xf07d3b773118ba0a!2sVishal%20Mega%20Mart!5e0!3m2!1sen!2sin!4v1767697731552!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Chouhan Landmark Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lead Form Section */}
            <div id="contact" className="bg-stone-50 py-24 border-t border-stone-200">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border-t-4 border-amber-500">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-heading font-black text-stone-900 mb-4">Plan Your Visit</h2>
                            <p className="text-gray-500">Interested in retail space or have a general inquiry? Reach out to our management team.</p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase">Full Name</label>
                                    <input type="text" className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 text-sm focus:border-amber-500 focus:outline-none transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase">Phone Number</label>
                                    <input type="tel" className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 text-sm focus:border-amber-500 focus:outline-none transition-colors" placeholder="+91 00000 00000" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase">Email Address</label>
                                <input type="email" className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 text-sm focus:border-amber-500 focus:outline-none transition-colors" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase">Reason for Inquiry</label>
                                <select className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 text-sm focus:border-amber-500 focus:outline-none transition-colors">
                                    <option>General Inquiry</option>
                                    <option>Retail Space Leasing</option>
                                    <option>Advertising Opportunities</option>
                                    <option>Feedback/Suggestions</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase">Message</label>
                                <textarea className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 text-sm focus:border-amber-500 focus:outline-none transition-colors" rows={4} placeholder="How can we help you?"></textarea>
                            </div>

                            <button type="button" className="w-full bg-stone-900 text-white font-bold text-sm uppercase tracking-widest py-4 rounded-lg hover:bg-stone-800 transition-colors shadow-lg mt-4">
                                Submit Inquiry
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="bg-white text-stone-600 py-16 border-t border-stone-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                        {/* Column 1: Brand */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-heading font-bold text-blue-900 tracking-wider uppercase">CHOUHAN LANDMARK</h3>
                            <p className="text-sm leading-relaxed max-w-xs">
                                Bhilai's most premium commercial complex designed for a connected lifestyle. A project by the Chouhan Group.
                            </p>
                            <div className="flex gap-4 items-center">
                                <a href="https://www.facebook.com/share/17atysTgnf/" target="_blank" rel="noopener noreferrer" className="text-stone-700 hover:text-amber-600 transition-colors">
                                    <Facebook size={18} />
                                </a>
                                <a href="https://www.instagram.com/chouhan_housing_commercial?igsh=MTZuNXpibTF4N2k4bA==" target="_blank" rel="noopener noreferrer" className="text-stone-700 hover:text-amber-600 transition-colors">
                                    <Instagram size={18} />
                                </a>
                                <a href="https://x.com/ChouhanHousing?t=qr_WRxVvfJ9a6q9yU_rHlA&s=09" target="_blank" rel="noopener noreferrer" className="text-stone-700 hover:text-amber-600 transition-colors">
                                    <Twitter size={18} />
                                </a>
                                <a href="https://youtube.com/@chouhangroup-x7v?si=yHs8HX0SxFY9X1EB" target="_blank" rel="noopener noreferrer" className="text-stone-700 hover:text-amber-600 transition-colors">
                                    <Youtube size={18} />
                                </a>
                                <img
                                    src="/ChouhanG.png"
                                    className="h-8 w-auto ml-4 object-contain opacity-80 hover:opacity-100 transition-opacity"
                                    alt="Chouhan Group"
                                />
                            </div>
                        </div>

                        {/* Column 2: Location Details */}
                        <div className="space-y-6">
                            <h3 className="text-sm font-bold text-blue-900 uppercase tracking-widest">Location</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-4">
                                    <MapPin size={20} className="text-amber-600 flex-shrink-0" />
                                    <span className="text-sm leading-relaxed">
                                        Chouhan Landmark, Ward no. 6,<br />
                                        Contractor Colony, Supela,<br />
                                        Bhilai, Chhattisgarh 490001
                                    </span>
                                </li>
                                <li className="flex gap-4 items-center">
                                    <Phone size={18} className="text-amber-600 flex-shrink-0" />
                                    <span className="text-sm">+91 91091 04005</span>
                                </li>
                                <li className="flex gap-4 items-center">
                                    <Mail size={18} className="text-amber-600 flex-shrink-0" />
                                    <span className="text-sm underline cursor-pointer hover:text-amber-600 transition-colors">chouhanhousing@gmail.com</span>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: Mini Map */}
                        <div className="h-40 rounded-lg overflow-hidden border border-stone-100 shadow-sm relative group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7439.153109250939!2d81.358149!3d21.208974!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a292361400e16cb%3A0xf07d3b773118ba0a!2sVishal%20Mega%20Mart!5e0!3m2!1sen!2sin!4v1767697731552!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mini Map"
                            ></iframe>
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors pointer-events-none"></div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-center items-center gap-4 text-[11px] font-medium text-stone-400">
                        <p>© {new Date().getFullYear()} Chouhan Group. All rights reserved.</p>
                        <div className="flex gap-4">
                            <span className="cursor-pointer hover:text-stone-600">| RERA Approved Project.</span>
                            <span className="cursor-pointer hover:text-stone-600">| Privacy Policy</span>
                            <span className="cursor-pointer hover:text-stone-600">| Disclaimer</span>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default ChouhanLandmarkLanding;
