
import React, { useState, useMemo } from 'react';
import { Search, MapPin, Filter, ArrowRight, Home, IndianRupee, BedDouble, Building2, Trees } from 'lucide-react';
import { Link } from 'react-router-dom';

const PROPERTIES = [
  {
    id: 1,
    name: "Singapore Life Phase 1, 2 And 4",
    location: "Bhilai",
    type: "Premium Plots and Bunglows",
    price: "₹ 25L - ₹ 65L",
    priceVal: 2500000,
    image: "/new images/WhatsApp Image 2025-10-02 at 05.47.15_1a2db32e.jpg",
    link: "/new-homes/singapore-life",
    status: "Now Selling",
    bhk: "3 & 4 BHK",
    amenities: ["Clubhouse", "Pool", "Gym"]
  },
  {
    id: 2,
    name: "Chouhan Green Valley Phase 1, 2, 3",
    location: "Junwani, Bhilai",
    type: "Premium Flats, Bungalows and Penthouse",
    price: "₹ 55L - ₹ 1.2Cr",
    priceVal: 5500000,
    image: "/new images/chouhan-green-valley-6 (1).webp",
    link: "/new-homes/green-valley",
    status: "Ready to Move",
    bhk: "4 & 5 BHK Villas and 2 and 3 bhk Flats",
    amenities: ["Gated", "Gardens", "Security"]
  },
  {
    id: 3,
    name: "Sunrise City",
    location: "Dhamdha Road, Durg",
    type: "Plotted Development",
    price: "₹ 15L - ₹ 45L",
    priceVal: 1500000,
    image: "new images/sunrise_city.webp",
    link: "/new-homes/sunrise-city-details",
    status: "New Launch",
    bhk: "Residential Plots",
    amenities: ["Wide Roads", "Parks", "Temple"]
  },
  {
    id: 4,
    name: "Chouhan Town",
    location: "Bhilai",
    type: "Apartments and bunglows",
    price: "₹ 22L - ₹ 40L",
    priceVal: 2200000,
    image: "/new images/chouhan_town_overview.webp",
    link: "/new-homes/town",
    status: "Few Units Left",
    bhk: "1, 2, 3, 4 and 5 BHK",
    amenities: ["Community Hall", "Play Area"]
  },
  {
    id: 5,
    name: "Chouhan Parkview",
    location: "Junwani Road, Bhilai",
    type: "High-Rise Apartments and Bungalows",
    price: "₹ 35L - ₹ 60L",
    priceVal: 3500000,
    image: "/new images/Housing Chouhan (3).png",
    link: "/new-homes/parkview",
    status: "Now Selling",
    bhk: "2, 3, 4 and 5 BHK",
    amenities: ["Sky Lounge", "Gym", "Parking"]
  },
  {
    id: 6,
    name: "Chouhan Dream Homes",
    location: "Bhilai",
    type: "Affordable Luxury apartments",
    price: "Sold Out",
    priceVal: 0,
    image: "chouhan_dream_homes_1.webp",
    link: "/new-homes/dream-homes-details",
    status: "Sold Out",
    bhk: "1,2 and 3 bhk",
    amenities: ["Gated", "Security", "Parks"]
  },
  {
    id: 7,
    name: "Shikhar Complex",
    location: "Bhilai",
    type: "Premium Apartments",
    price: "Sold Out",
    priceVal: 0,
    image: "/images/shikhar_complex_hero.png",
    link: "/commercial/shikhar-complex-details", // Pointing to detail page
    status: "Sold Out",
    bhk: "Shops & Offices",
    amenities: ["Prime Location", "Parking"]
  }
];

const NewHomes: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [priceRange, setPriceRange] = useState('All');

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter(property => {
      const matchesSearch = property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesLocation = selectedLocation === 'All' || property.location.includes(selectedLocation);

      let matchesPrice = true;
      if (priceRange === 'Under 25L') matchesPrice = property.priceVal < 2500000;
      if (priceRange === '25L - 50L') matchesPrice = property.priceVal >= 2500000 && property.priceVal <= 5000000;
      if (priceRange === 'Above 50L') matchesPrice = property.priceVal > 5000000;

      return matchesSearch && matchesLocation && matchesPrice;
    });
  }, [searchTerm, selectedLocation, priceRange]);

  const locations = ['All', ...Array.from(new Set(PROPERTIES.map(p => p.location.split(', ')[p.location.split(', ').length - 1])))];

  return (
    <div className="bg-slate-50 font-sans min-h-screen">

      {/* Hero Section */}
      <div className="bg-[#002b49] text-white pt-32 md:pt-48 pb-24 md:pb-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <span className="text-amber-500 font-bold tracking-widest text-xs uppercase mb-4 block animate-fadeIn">Find Your Sanctuary</span>
          <h1 className="text-4xl md:text-6xl font-heading font-black mb-6 animate-slideUp">
            New Homes Collection
          </h1>
          <p className="text-slate-300 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 animate-slideUp delay-100">
            Discover premier residential communities across Bhilai, Durg, and Raipur designed for modern living.
          </p>
        </div>
      </div>

      {/* Search Bar - Floating */}
      <div className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="bg-white rounded-xl shadow-xl p-6 border border-slate-100 max-w-5xl mx-auto animate-fadeInUp">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

            {/* Search Input */}
            <div className="md:col-span-4 lg:col-span-5 relative">
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1 ml-1">Search Keywords</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="Project name, area..."
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-amber-500 focus:bg-white transition-all text-sm font-medium text-slate-800"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Location Filter */}
            <div className="md:col-span-4 lg:col-span-3">
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1 ml-1">Location</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <select
                  className="w-full pl-11 pr-8 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-amber-500 focus:bg-white transition-all text-sm font-medium text-slate-800 appearance-none cursor-pointer"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  {locations.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l border-slate-200 pl-2">
                  <Filter size={12} className="text-slate-400" />
                </div>
              </div>
            </div>

            {/* Price Filter */}
            <div className="md:col-span-4 lg:col-span-4">
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1 ml-1">Budget</label>
              <div className="relative">
                <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <select
                  className="w-full pl-11 pr-8 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-amber-500 focus:bg-white transition-all text-sm font-medium text-slate-800 appearance-none cursor-pointer"
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                >
                  <option value="All">Any Price</option>
                  <option value="Under 25L">Under ₹ 25 Lakhs</option>
                  <option value="25L - 50L">₹ 25L - ₹ 50L</option>
                  <option value="Above 50L">Above ₹ 50 Lakhs</option>
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
            <h2 className="text-2xl font-bold font-heading text-slate-900">Featured Projects</h2>
            <p className="text-sm text-slate-500 mt-1">Showing {filteredProperties.length} properties</p>
          </div>
        </div>

        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredProperties.map((property) => (
              <Link to={property.link} key={property.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col block">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-slate-900/80 backdrop-blur text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded">
                      {property.status}
                    </span>
                  </div>
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-xl font-bold font-heading">{property.price}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-amber-600 transition-colors">{property.name}</h3>
                    <div className="flex items-center text-slate-500 text-sm">
                      <MapPin size={14} className="mr-1 text-amber-500" />
                      {property.location}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-6 text-sm text-slate-600 bg-slate-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Building2 size={16} className="text-slate-400" />
                      <span className="font-medium">{property.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BedDouble size={16} className="text-slate-400" />
                      <span className="font-medium">{property.bhk}</span>
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {property.amenities.slice(0, 2).join(' • ')}
                    </span>
                    <div
                      className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 hover:bg-amber-500 hover:text-white transition-all group-hover:translate-x-1"
                    >
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-xl border border-dashed border-slate-300 max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home size={32} className="text-slate-300" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">No properties found</h3>
            <p className="text-slate-500 max-w-md mx-auto">
              We couldn't find any properties matching your search criteria. Try adjusting your filters or search keywords.
            </p>
            <button
              onClick={() => { setSearchTerm(''); setPriceRange('All'); setSelectedLocation('All'); }}
              className="mt-6 text-amber-600 font-bold text-sm uppercase tracking-widest hover:text-amber-700"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewHomes;
