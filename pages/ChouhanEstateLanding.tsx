import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    MapPin, Phone, Mail, CheckCircle2, ArrowRight, Download,
    Menu, X, ChevronDown, ShoppingBag, Shield, Zap, Building2,
    Coffee, Users, Landmark, Search, Store, Car, Utensils,
    Facebook, Instagram, Youtube, Twitter
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
    { icon: <ShoppingBag size={28} />, title: "Boutique Stores", desc: "A curated collection of fashion and lifestyle brands." },
    { icon: <Store size={28} />, title: "Supermarkets", desc: "Large supermarkets for all your daily needs and more." },
    { icon: <Car size={28} />, title: "Expansive Parking", desc: "Well-organized and spacious parking for a hassle-free visit." },
    { icon: <Coffee size={28} />, title: "Open-air Cafes", desc: "Relax and unwind at our beautiful open-air seating areas." },
    { icon: <Utensils size={28} />, title: "Dining Options", desc: "A variety of fast-food restaurants and international cuisines." },
    { icon: <Users size={28} />, title: "Themed Spaces", desc: "Bhilai's first multi-purpose themed shopping center." },
    { icon: <Zap size={28} />, title: "Leisure & Fun", desc: "Recreational facilities designed for people of all ages." },
];

const WHY_CHOOSE_DATA = [
    { title: "RERA APPROVED", desc: "Member of CREDAI & Fully RERA Approved project.", icon: <CheckCircle2 className="text-amber-600" size={32} /> },
    { title: "STRATEGIC LOCATION", desc: "Located in Junwani, Bhilai with excellent connectivity.", icon: <MapPin className="text-amber-600" size={32} /> },
    { title: "PREMIUM DETAILING", desc: "High standard detailing in construction with modern aesthetics.", icon: <Shield className="text-amber-600" size={32} /> },
    { title: "1 YEAR FREE MAINTENANCE", desc: "Enjoy hassle-free operations with complimentary maintenance.", icon: <Zap className="text-amber-600" size={32} /> },
    { title: "EXPERIENCE", desc: "Backed by 20+ Years of Experience in development.", icon: <Building2 className="text-amber-600" size={32} /> },
    { title: "FINANCIAL SUPPORT", desc: "Loan & EMI facilities available. PMAY benefits.", icon: <Landmark className="text-amber-600" size={32} /> },
];

const ChouhanEstateLanding: React.FC = () => {
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
                                src="/images/chouhan_estate_logo-removebg-preview.png"
                                alt="Chouhan Estate"
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
            <section id="home" className="relative w-full overflow-hidden">
                <div className="hidden md:block w-full aspect-[32/13]">
                    <img
                        src="/images/chouhan_estate.webp"
                        alt="Chouhan Estate"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="block md:hidden w-full aspect-[15/8]">
                    <img
                        src="/images/chouhan_estate_mob.webp"
                        alt="Chouhan Estate"
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>

            {/* Hero Text Content Below Image */}
            <div className="bg-stone-50 text-stone-900 py-16 border-b border-stone-100">
                <div className="container mx-auto px-4 text-center">
                    <span className="inline-block px-3 py-1 bg-amber-500 text-white text-[10px] font-bold uppercase tracking-widest rounded mb-6 shadow-sm">
                        Now Renting • Lifestyle Destination
                    </span>
                    <h1 className="text-4xl md:text-6xl font-heading font-black mb-6 leading-tight text-stone-900">
                        Welcome to Chouhan Estate
                    </h1>
                    <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto font-light leading-relaxed">
                        Bhilai's Ultimate Lifestyle Destination. Bringing convenience, variety, and entertainment under one roof.
                    </p>
                </div>
            </div>

            {/* Discover / Intro Section */}
            <section id="discover" className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="md:w-1/2">
                            <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-2">Project Overview</h2>
                            <h3 className="text-4xl font-heading font-bold text-stone-900 mb-6">Experience the Best of Bhilai</h3>
                            <p className="text-gray-600 leading-loose mb-6">
                                <strong>Chouhan Estate</strong>, developed by Chouhan Group, is Bhilai's first multi-purpose themed shopping center designed for people of all ages. It offers a unique shopping and leisure experience, featuring a wide array of supermarkets, boutique stores, and recreational facilities.
                            </p>
                            <p className="text-gray-600 leading-loose">
                                One of the most remarkable aspects of Chouhan Estate is its <strong>expansive and well-organized parking space</strong>, ensuring a hassle-free visit for all. Shoppers can also relax at open-air cafes and fast-food restaurants, making it an ideal destination to unwind. As the largest "open layout" shopping space in Bhilai, Chouhan Estate stands out as the ultimate lifestyle destination, bringing convenience, variety, and entertainment under one roof.
                            </p>
                        </div>
                        <div className="md:w-1/2 grid grid-cols-2 gap-4">
                            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200 hover:shadow-lg transition-shadow">
                                <h4 className="text-3xl font-black text-amber-600 mb-1">Open</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Layout Design</p>
                            </div>
                            <div className="bg-stone-100 p-8 rounded-2xl border border-stone-200 hover:shadow-lg transition-shadow">
                                <h4 className="text-3xl font-black text-amber-600 mb-1">Large</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Parking Space</p>
                            </div>
                            <div className="bg-stone-100 p-8 rounded-2xl border border-stone-200 hover:shadow-lg transition-shadow">
                                <h4 className="text-3xl font-black text-amber-600 mb-1">themed</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Shopping Center</p>
                            </div>
                            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200 hover:shadow-lg transition-shadow">
                                <h4 className="text-3xl font-black text-amber-600 mb-1">prime</h4>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Highway Location</p>
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
                        <span className="text-amber-600 font-bold tracking-widest text-xs uppercase block mb-2">Features & Facilities</span>
                        <h2 className="text-4xl font-heading font-bold text-stone-900">The Chouhan Estate Experience</h2>
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
                        <h2 className="text-4xl font-heading font-bold text-stone-900">Why Choose Chouhan Estates</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {WHY_CHOOSE_DATA.map((item, idx) => (
                            <div key={idx} className="p-8 bg-white border border-stone-100 rounded-xl hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center text-stone-800">
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
                                Chouhan Estate is conveniently located on NH-53, making it easily accessible from all parts of Bhilai and Durg.
                            </p>

                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 rounded bg-stone-200 flex items-center justify-center flex-shrink-0">
                                        <Landmark size={20} className="text-amber-700" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-stone-900">NH-53 Highway</h4>
                                        <p className="text-sm text-stone-500">Prime connectivity on the national highway</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 rounded bg-stone-200 flex items-center justify-center flex-shrink-0">
                                        <ShoppingBag size={20} className="text-amber-700" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-stone-900">Bhilai Transit Point</h4>
                                        <p className="text-sm text-stone-500">Major commercial corridor</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 rounded bg-stone-200 flex items-center justify-center flex-shrink-0">
                                        <Car size={20} className="text-amber-700" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-stone-900">Easy Accessibility</h4>
                                        <p className="text-sm text-stone-500">Dedicated exit and entry points</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="lg:w-2/3 h-[400px] bg-white rounded-xl overflow-hidden relative shadow-lg border border-stone-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29756.990302027567!2d81.358373!3d21.207099!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2922df6e4f55fd%3A0x34b9b692db09d8f9!2sChauhan%20estate!5e0!3m2!1sen!2sin!4v1767695393351!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Chouhan Estate Location"
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
                            <h3 className="text-2xl font-heading font-bold text-blue-900 tracking-wider">CHOUHAN ESTATE</h3>
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
                                        Ground Floor, Chouhan Estate,<br />
                                        Beside Chandra Maurya Talkies,<br />
                                        GE Road, Supela, Bhilai, CG 490023
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
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29756.990302027567!2d81.358373!3d21.207099!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2922df6e4f55fd%3A0x34b9b692db09d8f9!2sChauhan%20estate!5e0!3m2!1sen!2sin!4v1767695393351!5m2!1sen!2sin"
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

export default ChouhanEstateLanding;
