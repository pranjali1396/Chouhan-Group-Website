import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    MapPin, Phone, Mail, CheckCircle2, ArrowRight, Download,
    Menu, X, ChevronDown, ShoppingBag, Shield, Zap, Building2,
    Coffee, Users, Landmark, Search, Store, Car, Utensils,
    Facebook, Instagram, Youtube, Twitter, Film, Ticket,
    Palmtree, Layers, Clock, Store as StoreIcon, UtensilsCrossed
} from 'lucide-react';

const SECTIONS = [
    { id: 'home', label: 'Home' },
    { id: 'overview', label: 'Overview' },
    { id: 'stats', label: 'Project Highlights' },
    { id: 'amenities', label: 'Experience' },
    { id: 'location', label: 'Location' },
    { id: 'contact', label: 'Contact' },
];

const PROJECT_HIGHLIGHTS = [
    {
        title: "Total Project Land",
        value: "15 Acres",
        icon: <Landmark size={32} className="text-amber-600" />,
        desc: "Expansive development area"
    },
    {
        title: "Commercial Building",
        value: "G+2, G+4",
        icon: <Building2 size={32} className="text-amber-600" />,
        desc: "Multi-level retail & office blocks"
    },
    {
        title: "Multiplex",
        value: "5 Screens",
        icon: <Film size={32} className="text-amber-600" />,
        desc: "1200 Seats, Gold Class Signed"
    },
    {
        title: "Project Timeline",
        value: "2024",
        icon: <Clock size={32} className="text-amber-600" />,
        desc: "Expected Completion"
    },
];

const AMENITIES = [
    { icon: <Users size={28} />, title: "Club House", desc: "Exclusive recreational area for members and visitors." },
    { icon: <Palmtree size={28} />, title: "Kids Zone", desc: "Dedicated amusement park and children's play area." },
    { icon: <ShoppingBag size={28} />, title: "Shopping Complex", desc: "Comprehensive retail block with top national and international brands." },
    { icon: <UtensilsCrossed size={28} />, title: "Container Restaurant", desc: "Unique dining experience in a modern container-style setting." },
    { icon: <Utensils size={28} />, title: "Food Court", desc: "Vibrant food mall offering a diverse range of cuisines." },
    { icon: <Layers size={28} />, title: "Amphitheater", desc: "Open Air Theater (OAT) for live performances and events." },
];

const BRANDS = ["Reliance", "Tata", "Landmark", "KFC", "Pizza Hut", "Dominos", "Vaango", "Barbeque Nation", "Snow Park", "Amusement Park"];

const WHY_CHOOSE_DATA = [
    {
        icon: <Shield size={48} className="text-amber-600" />,
        title: "Member of CREDAI & RERA Approved",
        desc: "Certified and trusted real estate developer"
    },
    {
        icon: <Building2 size={48} className="text-amber-600" />,
        title: "Save Upto ₹267L Under PMAY",
        desc: "Government subsidy benefits available"
    },
    {
        icon: <Clock size={48} className="text-amber-600" />,
        title: "20+ Years of Experience",
        desc: "Two decades of excellence in real estate"
    },
    {
        icon: <Zap size={48} className="text-amber-600" />,
        title: "High Standard Detailing in Construction",
        desc: "Premium quality materials and workmanship"
    },
    {
        icon: <CheckCircle2 size={48} className="text-amber-600" />,
        title: "1 Year of FREE Maintenance (*T&C Applied)",
        desc: "Complimentary maintenance for peace of mind"
    },
    {
        icon: <Users size={48} className="text-amber-600" />,
        title: "Loan & EMI Facility Available",
        desc: "Flexible financing options for your convenience"
    }
];

const HERO_IMAGES = [
    "/images/city_center_interior_atrium.png",
    "/images/city_center_food_court.png",
    "/images/city_center_kids_zone.png"
];

const ChouhanCityCenterLanding: React.FC = () => {
    const [activeTab, setActiveTab] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
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

    // Slider Auto-rotation
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 4000); // Change every 4 seconds
        return () => clearInterval(timer);
    }, []);

    // Handle initial scroll if hash is present (for Register buttons)
    useEffect(() => {
        const handleInitialHash = () => {
            if (window.location.hash.toLowerCase().includes('contact')) {
                setTimeout(() => scrollToSection('contact'), 800);
            }
        };
        handleInitialHash();
        window.addEventListener('hashchange', handleInitialHash);
        return () => window.removeEventListener('hashchange', handleInitialHash);
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
                        <div className="cursor-pointer py-2 flex items-center gap-2" onClick={() => scrollToSection('home')}>
                            <img
                                src="/images/chouhan_city_center_mall_logo.png"
                                alt="Chouhan City Center"
                                className="h-10 w-auto object-contain"
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
            <section id="home" className="relative w-full">
                {/* Image Slider */}
                <div className="relative w-full h-[75vh] md:h-[85vh] overflow-hidden">
                    {HERO_IMAGES.map((img, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <img
                                src={img}
                                alt={`Chouhan City Center Slide ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/10"></div>
                        </div>
                    ))}

                    {/* Slider Indicators */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                        {HERO_IMAGES.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white'}`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Hero Text Content Below Image */}
                <div className="bg-stone-50 text-stone-900 py-16 border-b border-stone-100">
                    <div className="container mx-auto px-4 text-center">
                        <span className="inline-block px-3 py-1 bg-amber-600 text-white text-[10px] font-bold uppercase tracking-widest rounded mb-6 shadow-sm">
                            Coming Soon • Premier Destination
                        </span>
                        <h1 className="text-4xl md:text-6xl font-heading font-black mb-6 leading-tight text-stone-900">
                            Chouhan City Center
                        </h1>
                        <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto font-light leading-relaxed">
                            The Future of Shopping & Entertainment in Bhilai
                        </p>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section id="overview" className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="md:w-1/2">
                            <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-2">Project Overview</h2>
                            <h3 className="text-4xl font-heading font-bold text-stone-900 mb-6">Bhilai's Premier Lifestyle Hub</h3>
                            <p className="text-gray-600 leading-loose mb-6">
                                <strong>Chouhan City Center</strong>, by Chouhan Group, is Bhilai’s premier destination for shopping and entertainment, designed to cater to every family member. The center boasts a state-of-the-art multiplex with 5 screens and 1200 seats, including a luxurious Gold Class experience for movie lovers.
                            </p>
                            <p className="text-gray-600 leading-loose mb-6">
                                Families can enjoy a diverse range of activities at our comprehensive Family Entertainment Center, which features a retail block, food mall, open-air theater (OAT), and a vibrant children's park.
                            </p>
                            <div className="bg-stone-50 p-6 rounded-xl border-l-4 border-amber-500">
                                <h4 className="font-bold text-stone-900 mb-2">Brands Under Discussion</h4>
                                <p className="text-sm text-gray-500 leading-relaxed flex flex-wrap gap-2">
                                    {BRANDS.map((brand, i) => (
                                        <span key={i} className="inline-block bg-white px-2 py-1 rounded border border-stone-200">{brand}</span>
                                    ))}
                                </p>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="grid grid-cols-2 gap-4">
                                <img src="/images/city_center_interior_atrium.png" alt="Interior Atrium" className="rounded-2xl object-cover h-64 w-full shadow-lg hover:scale-105 transition-transform duration-500" />
                                <img src="/images/city_center_food_court.png" alt="Food Court" className="rounded-2xl object-cover h-64 w-full shadow-lg translate-y-8 hover:scale-105 transition-transform duration-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Highlights / Stats */}
            <section id="stats" className="py-24 bg-white text-stone-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/city_center_interior_atrium.png')] bg-cover bg-center opacity-15"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-heading font-bold mb-4 text-stone-900">Project Highlights</h2>
                        <p className="text-stone-600 max-w-2xl mx-auto">Designed on a massive 15-acre land parcel, creating a landmark destination for the entire region.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {PROJECT_HIGHLIGHTS.map((stat, idx) => (
                            <div key={idx} className="bg-stone-50 border border-stone-200 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 text-center group">
                                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                                    {stat.icon}
                                </div>
                                <h3 className="text-3xl font-black text-amber-600 mb-2">{stat.value}</h3>
                                <p className="text-lg font-bold text-stone-800 mb-1">{stat.title}</p>
                                <p className="text-xs text-stone-500 uppercase tracking-widest">{stat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Amenities Section */}
            <section id="amenities" className="py-24 bg-stone-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-amber-600 font-bold tracking-widest text-xs uppercase block mb-2">World-Class Facilities</span>
                        <h2 className="text-4xl font-heading font-bold text-stone-900">Experience Excellence</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {AMENITIES.map((amenity, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-amber-500 group">
                                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-stone-600 mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                                    {amenity.icon}
                                </div>
                                <h3 className="text-xl font-bold text-stone-900 mb-3">{amenity.title}</h3>
                                <p className="text-gray-500 leading-relaxed text-sm">{amenity.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Section - Reusing common data/layout concept but kept inline for simplicity as requested "same why choose section" */}
            {/* Why Choose Us */}
            <section id="why-choose" className="py-24 bg-stone-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-heading font-bold text-amber-600 uppercase">WHY YOU SHOULD CHOOSE US?</h2>
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
            <section id="location" className="py-24 bg-stone-50 relative">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/3 space-y-8">
                            <h2 className="text-3xl font-heading font-bold text-stone-900">Visit Us</h2>
                            <p className="text-stone-600 leading-relaxed">
                                Located in the heart of Bhilai, Chouhan City Center is easily accessible from all major residential and commercial hubs.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <MapPin className="text-amber-600 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-stone-900">Address</h4>
                                        <p className="text-stone-600 text-sm">Chouhan City Center<br />Bhilai, Chhattisgarh</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Clock className="text-amber-600 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-stone-900">Opening Soon</h4>
                                        <p className="text-stone-600 text-sm">Project Timeline: 2024</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-2/3 h-[450px] bg-white rounded-xl overflow-hidden relative shadow-lg border border-stone-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1816.7263785959487!2d81.32169861352865!3d21.227824044214177!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293db741399c11%3A0x256426d4e24ac938!2schouhan%20city%20centre!5e0!3m2!1sen!2sin!4v1767699713710!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Chouhan City Center Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lead Form Section */}
            {/* Lead Form Section */}
            {/* Lead Form Section */}
            <div id="contact" className="bg-stone-50 py-24 border-t border-stone-200">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border-t-4 border-amber-500">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-heading font-black text-stone-900 mb-4">Leasing Inquiry</h2>
                            <p className="text-gray-500">Become a part of Bhilai's next big landmark. Contact us for leasing opportunities.</p>
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
                                <label className="text-xs font-bold text-gray-500 uppercase">Brand / Business Name</label>
                                <input type="text" className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 text-sm focus:border-amber-500 focus:outline-none transition-colors" placeholder="Your Brand" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase">Message</label>
                                <textarea className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 text-sm focus:border-amber-500 focus:outline-none transition-colors h-32 resize-none" placeholder="Tell us about your requirements..."></textarea>
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
                            <h3 className="text-2xl font-heading font-bold text-blue-900 tracking-wider uppercase">CHOUHAN CITY CENTER</h3>
                            <p className="text-sm leading-relaxed max-w-xs">
                                Bhilai's premier destination for shopping and entertainment. A project by the Chouhan Group.
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
                                        Chouhan City Center,<br />
                                        Bhilai, Chhattisgarh, India.
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
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1816.7263785959487!2d81.32169861352865!3d21.227824044214177!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293db741399c11%3A0x256426d4e24ac938!2schouhan%20city%20centre!5e0!3m2!1sen!2sin!4v1767699713710!5m2!1sen!2sin"
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

export default ChouhanCityCenterLanding;
