import React, { useState, useMemo } from 'react';
import { Search, MapPin, Filter, ArrowRight, Car, Gauge, Settings, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const AUTOMOBILE_DATA = [
  {
    id: 1,
    name: "Maruti Suzuki Arena",
    location: "Bhilai & Raipur",
    baseLocation: "Bhilai",
    type: "Authorized Dealership",
    brand: "Maruti Suzuki",
    image: "/new images/Arena.webp",
    link: "/automobile/maruti",
    status: "Open Now",
    feature: "Sales • Service • Spares",
    amenities: ["Large Showroom", "Service Center", "Insurance"],
    websiteUrl: "https://www.arenaofbhilai.com/"
  },
  {
    id: 2,
    name: "Nexa Bhilai",
    location: "GE Road, Bhilai",
    baseLocation: "Bhilai",
    type: "Premium Dealership",
    brand: "Nexa",
    image: "/new images/maruti-suzuki.webp",
    link: "/automobile/nexa",
    status: "Open Now",
    feature: "Premium Car Experience",
    amenities: ["Lounge", "Personal relationship manager", "Test Drive"],
    websiteUrl: "https://www.nexaofdurgbypass.com/"
  },
  {
    id: 3,
    name: "Hero MotoCorp",
    location: "Durg",
    baseLocation: "Durg",
    type: "Two Wheeler Dealer",
    brand: "Hero",
    image: "/new images/herofinal.webp",
    link: "/automobile/hero",
    status: "Open Now",
    feature: "World's No. 1 Two Wheeler",
    amenities: ["Easy Finance", "Quick Service", "Exchange"],
    websiteUrl: "https://chouhanmotors.com"
  },
  {
    id: 4,
    name: "Ashok Leyland",
    location: "Raipur bypass",
    baseLocation: "Raipur",
    type: "Commercial Vehicles",
    brand: "Ashok Leyland",
    image: "new images/ashok-leyland.webp",
    link: "/automobile/ashok",
    status: "Coming Soon",
    feature: "Trucks & Buses",
    amenities: ["AMC Plans", "Genuine Parts", "Fleet Management"],
    websiteUrl: "https://www.ashokleyland.com/in/en"
  },
  {
    id: 5,
    name: "True Value",
    location: "Junwani Road, Bhilai",
    baseLocation: "Bhilai",
    type: "Pre-owned Cars",
    brand: "Maruti Suzuki",
    image: "/new images/trueshowroom.webp",
    link: "/automobile/true-value",
    status: "Open Now",
    feature: "Certified Used Cars",
    amenities: ["100+ Check Points", "Warranty", "Transfer Support"],
    websiteUrl: "https://chouhangroup.com/truevalue"
  }
];

const Automobile: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const filteredItems = useMemo(() => {
    return AUTOMOBILE_DATA.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesBrand = selectedBrand === 'All' || item.brand === selectedBrand;
      const matchesLocation = selectedLocation === 'All' || item.baseLocation === selectedLocation;
      const matchesStatus = selectedStatus === 'All' || item.status === selectedStatus;

      return matchesSearch && matchesBrand && matchesLocation && matchesStatus;
    });
  }, [searchTerm, selectedBrand, selectedLocation, selectedStatus]);

  const brands = ['All', 'Maruti Suzuki', 'Nexa', 'Hero', 'Ashok Leyland'];
  const locations = ['All', 'Bhilai', 'Raipur', 'Durg'];
  const statuses = ['All', 'Open Now', 'Coming Soon'];

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedBrand('All');
    setSelectedLocation('All');
    setSelectedStatus('All');
  };

  return (
    <div className="bg-slate-50 font-sans min-h-screen">

      {/* Hero Section */}
      <div className="bg-[#002b49] text-white pt-32 md:pt-48 pb-24 md:pb-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ad79c964c9ad?q=80&w=2000')] bg-cover bg-center opacity-10 blur-sm"></div>
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <span className="text-amber-500 font-bold tracking-widest text-xs uppercase mb-4 block animate-fadeIn">Driven by Excellence</span>
          <h1 className="text-4xl md:text-6xl font-heading font-black mb-6 animate-slideUp">
            Automobile Division
          </h1>
          <p className="text-slate-300 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 animate-slideUp delay-100">
            Showcasing the world's leading automotive brands through state-of-the-art showrooms and elite service facilities.
          </p>
        </div>
      </div>

      {/* Search Bar - Floating */}
      <div className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="bg-white rounded-xl shadow-xl p-6 border border-slate-100 max-w-5xl mx-auto animate-fadeInUp">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

            {/* Search Input */}
            <div className="md:col-span-4 lg:col-span-4 relative">
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1 ml-1">Search Showrooms</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="Showroom or name..."
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-amber-500 focus:bg-white transition-all text-sm font-medium text-slate-800"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Brand Filter */}
            <div className="md:col-span-4 lg:col-span-2">
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1 ml-1">Brand</label>
              <div className="relative">
                <Car className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <select
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-amber-500 focus:bg-white transition-all text-sm font-medium text-slate-800 appearance-none cursor-pointer"
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                >
                  {brands.map(b => (
                    <option key={b} value={b}>{b === 'All' ? 'All Brands' : b}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Location Filter */}
            <div className="md:col-span-4 lg:col-span-2">
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1 ml-1">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <select
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-amber-500 focus:bg-white transition-all text-sm font-medium text-slate-800 appearance-none cursor-pointer"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  {locations.map(loc => (
                    <option key={loc} value={loc}>{loc === 'All' ? 'All Cities' : loc}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Availability Filter */}
            <div className="md:col-span-12 lg:col-span-4">
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1 ml-1">Availability</label>
              <div className="relative">
                <Gauge className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <select
                  className="w-full pl-11 pr-8 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-amber-500 focus:bg-white transition-all text-sm font-medium text-slate-800 appearance-none cursor-pointer"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  {statuses.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l border-slate-200 pl-2">
                  <Filter size={12} className="text-slate-400" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-end mb-8 max-w-6xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold font-heading text-slate-900">Our Network</h2>
            <p className="text-sm text-slate-500 mt-1">Showing {filteredItems.length} locations</p>
          </div>
        </div>

        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredItems.map((item) => (
              <div key={item.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 flex gap-2">
                    <span className="bg-slate-900/80 backdrop-blur text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded">
                      {item.status}
                    </span>
                  </div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-amber-600 transition-colors uppercase tracking-tight">{item.name}</h3>
                    <div className="flex items-center text-slate-500 text-sm">
                      <MapPin size={14} className="mr-1 text-amber-500" />
                      {item.location}
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-lg mb-6 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={16} className="text-amber-500" />
                      <span className="text-sm font-bold text-slate-800">{item.type}</span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium">{item.feature}</p>
                  </div>

                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                      <Settings size={12} className="animate-spin-slow" /> {item.brand}
                    </span>
                    <Link
                      to={item.link}
                      className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 hover:bg-amber-500 hover:text-white transition-all group-hover:translate-x-1"
                    >
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-xl border border-dashed border-slate-300 max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap size={32} className="text-slate-300" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">No results found</h3>
            <p className="text-slate-500 max-w-md mx-auto">
              Try a different search or filter. We are constantly expanding our network.
            </p>
            <button
              onClick={clearFilters}
              className="mt-6 text-amber-600 font-bold text-sm uppercase tracking-widest hover:text-amber-700 hover:underline"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Automobile;
