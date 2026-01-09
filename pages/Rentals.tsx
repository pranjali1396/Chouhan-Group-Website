import React, { useState, useMemo } from 'react';
import { Search, MapPin, Filter, ArrowRight, Key, Building, Clock, Info, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const RENTALS_DATA = [
  {
    id: 1,
    name: "Chouhan Estates",
    location: "NH-53, Bhilai",
    type: "Commercial Leasing",
    category: "Commercial",
    image: "/new_images/chouhan_estate.webp",
    link: "/commercial/estate-details",
    status: "Active",
    feature: "Industrial & Retail Spaces",
    amenities: ["Highway Access", "Large Parking", "Loading Bay"]
  },
  {
    id: 5,
    name: "Chouhan Landmark",
    location: "Bhilai",
    type: "Retail Lease",
    category: "Commercial",
    image: "/new_images/landmark.png",
    link: "/commercial/landmark-details",
    status: "Fully Leased",
    feature: "Anchor: Vishal Mega Mart",
    amenities: ["Open Layout", "Security", "Food Court"]
  },
  {
    id: 2,
    name: "City Center Mall",
    location: "Bhilai",
    type: "Retail Lease",
    category: "Commercial",
    image: "/images/chouhan_city_center_hero.png",
    link: "/rentals/mall",
    status: "Coming Soon",
    feature: "High Footfall Retail",
    amenities: ["AC", "Security", "Food Court"]
  },
  {
    id: 3,
    name: "Chouhan Parkview",
    location: "Junwani, Bhilai",
    type: "Luxury Rental",
    category: "Residential",
    image: "/new_images/parview.png",
    link: "/rentals/parkview",
    status: "Coming Soon",
    feature: "Fully Furnished Options",
    amenities: ["Power Backup", "Clubhouse", "Gym"]
  },
  {
    id: 4,
    name: "Retail Outlet Spaces",
    location: "GE Road",
    type: "Commercial Shop",
    category: "Commercial",
    image: "/new_images/chouhan_plaza_ai.png",
    link: "/rentals/retail",
    status: "Coming Soon",
    feature: "Prime Road Frontage",
    amenities: ["Visibility", "loading Bay", "Parking"]
  }
];

const Rentals: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = useMemo(() => {
    return RENTALS_DATA.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const categories = ['All', 'Residential', 'Commercial'];

  return (
    <div className="bg-slate-50 font-sans min-h-screen">

      {/* Hero Section */}
      <div className="bg-[#002b49] text-white pt-32 md:pt-48 pb-24 md:pb-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 blur-sm" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000")' }}></div>
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <span className="text-amber-500 font-bold tracking-widest text-xs uppercase mb-4 block animate-fadeIn">Seamless Living</span>
          <h1 className="text-4xl md:text-6xl font-heading font-black mb-6 animate-slideUp">
            Leasing & Rentals
          </h1>
          <p className="text-slate-300 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 animate-slideUp delay-100">
            Managed residential apartments and strategic commercial spaces. Experience the quality of Chouhan Group with the flexibility of renting.
          </p>
        </div>
      </div>

      {/* Search Bar - Floating */}
      <div className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="bg-white rounded-xl shadow-xl p-6 border border-slate-100 max-w-5xl mx-auto animate-fadeInUp">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

            {/* Search Input */}
            <div className="md:col-span-6 lg:col-span-8 relative">
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1 ml-1">Search Rentals</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="Apartment or mall name..."
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-amber-500 focus:bg-white transition-all text-sm font-medium text-slate-800"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="md:col-span-6 lg:col-span-4">
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1 ml-1">Category</label>
              <div className="relative">
                <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <select
                  className="w-full pl-11 pr-8 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-amber-500 focus:bg-white transition-all text-sm font-medium text-slate-800 appearance-none cursor-pointer"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat === 'All' ? 'All Categories' : cat}</option>
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
            <h2 className="text-2xl font-bold font-heading text-slate-900">Leasing Portfolio</h2>
            <p className="text-sm text-slate-500 mt-1">Showing {filteredItems.length} opportunities</p>
          </div>
        </div>

        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredItems.map((item) => (
              <div key={item.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 flex gap-2">
                    <span className="bg-slate-900/80 backdrop-blur text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded flex items-center gap-1">
                      <Clock size={10} /> {item.status}
                    </span>
                  </div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
                      <Key size={16} className="text-amber-500" />
                      <span className="text-sm font-bold text-slate-800">{item.type}</span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium">{item.feature}</p>
                  </div>

                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                      <Shield size={12} className="text-slate-300" /> Managed Property
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
              <Info size={32} className="text-slate-300" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">No listings found</h3>
            <p className="text-slate-500 max-w-md mx-auto">
              Try a different filter or check back later as we add more properties.
            </p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
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

export default Rentals;
