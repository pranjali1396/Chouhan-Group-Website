
import React, { useState, useMemo } from 'react';
import { Search, MapPin, Filter, ArrowRight, Building2, Briefcase, ShoppingBag, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';

const COMMERCIAL_PROPERTIES = [
  {
    id: 1,
    name: "Chouhan Business Center",
    location: "GE Road, Bhilai",
    type: "Office Space",
    sector: "Office",
    image: "/images/housing-business.png",
    link: "/commercial/business-center",
    status: "Now Selling",
    features: "Premium Offices • High Visibility",
    priceRange: "Mid-High"
  },
  {
    id: 2,
    name: "Chouhan City Center",
    location: "Bhilai",
    type: "Shopping Mall & Entertainment",
    sector: "Retail",
    image: "/images/vishal mega mart.jpg",
    link: "/commercial/city-center-details",
    detailsLink: "/commercial/city-center-details",
    websiteUrl: "/commercial/city-center",
    status: "Upcoming",
    features: "15 Acres • Multiplex • 1200 Seats",
    priceRange: "Premium"
  },
  {
    id: 3,
    name: "Chouhan Business Park",
    location: "Bhilai-Durg Road",
    type: "Commercial Complex",
    sector: "Mixed-use",
    image: "/images/housing-business.png",
    link: "/commercial/business-park",
    status: "Now Selling",
    features: "Large Floor Plates • Modern Facade",
    priceRange: "Mid"
  },
  {
    id: 4,
    name: "Chouhan Estates",
    location: "NH-53, Bhilai",
    type: "Industrial & Retail",
    sector: "Industrial",
    image: "/images/housing-business.png",
    link: "/commercial/estates",
    status: "Now Renting",
    features: "Warehouse Space • Highway Frontage",
    priceRange: "Competitive"
  },
  {
    id: 5,
    name: "Chouhan Landmark",
    location: "Bhilai",
    type: "Premium Commercial Hub",
    sector: "Mixed-use",
    image: "/images/vishal mega mart.jpg",
    link: "/commercial/landmark", // Keeping this link as it might be used by App router or user wants the dedicated page
    status: "Sold",
    features: "Anchor: Vishal Mega Mart",
    priceRange: "Premium"
  },
  {
    id: 6,
    name: "Chouhan Plaza",
    location: "Bhilai",
    type: "Retail Hub",
    sector: "Retail",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1200",
    link: "/commercial/plaza",
    status: "Sold",
    features: "Multi-brand Retail • Centralized AC",
    priceRange: "Mid"
  },
  {
    id: 7,
    name: "Chouhan Park View Commercial",
    location: "Junwani Road, Bhilai",
    type: "Commercial Complex",
    sector: "Mixed-use",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
    link: "/commercial/parkview-complex",
    status: "Now Selling",
    features: "Premium Shops • Office Spaces",
    priceRange: "Mid-High"
  },
  {
    id: 8,
    name: "Chouhan Complex",
    location: "Supela, Bhilai",
    type: "Commercial Hub",
    sector: "Retail",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1200",
    link: "/commercial/complex",
    status: "Sold",
    features: "Shops • Offices",
    priceRange: "Mid"
  }
];

const Commercial: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const filteredProperties = useMemo(() => {
    return COMMERCIAL_PROPERTIES.filter(property => {
      const matchesSearch = property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesSector = selectedSector === 'All' || property.sector === selectedSector;
      const matchesStatus = selectedStatus === 'All' || property.status === selectedStatus;

      return matchesSearch && matchesSector && matchesStatus;
    });
  }, [searchTerm, selectedSector, selectedStatus]);

  const sectors = ['All', 'Office', 'Retail', 'Industrial', 'Mixed-use'];
  const statuses = ['All', 'Now Selling', 'Now Renting', 'Upcoming', 'Sold'];

  return (
    <div className="bg-slate-50 font-sans min-h-screen">

      {/* Hero Section */}
      <div className="bg-[#002b49] text-white pt-32 md:pt-48 pb-24 md:pb-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2000')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <span className="text-amber-500 font-bold tracking-widest text-xs uppercase mb-4 block animate-fadeIn">For the Visionaries</span>
          <h1 className="text-4xl md:text-6xl font-heading font-black mb-6 animate-slideUp">
            Commercial Portfolio
          </h1>
          <p className="text-slate-300 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 animate-slideUp delay-100">
            Premium business environments, retail landmarks, and industrial spaces engineered for operational success and high returns.
          </p>
        </div>
      </div>

      {/* Search Bar - Floating */}
      <div className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="bg-white rounded-xl shadow-xl p-6 border border-slate-100 max-w-5xl mx-auto animate-fadeInUp">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

            {/* Search Input */}
            <div className="md:col-span-4 lg:col-span-5 relative">
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1 ml-1">Project Search</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="Business center, location..."
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-amber-500 focus:bg-white transition-all text-sm font-medium text-slate-800"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Sector Filter */}
            <div className="md:col-span-4 lg:col-span-3">
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1 ml-1">Sector</label>
              <div className="relative">
                <LayoutGrid className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <select
                  className="w-full pl-11 pr-8 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-amber-500 focus:bg-white transition-all text-sm font-medium text-slate-800 appearance-none cursor-pointer"
                  value={selectedSector}
                  onChange={(e) => setSelectedSector(e.target.value)}
                >
                  {sectors.map(s => (
                    <option key={s} value={s}>{s === 'All' ? 'All Sectors' : s}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l border-slate-200 pl-2">
                  <Filter size={12} className="text-slate-400" />
                </div>
              </div>
            </div>

            {/* Status Filter */}
            <div className="md:col-span-4 lg:col-span-4">
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1 ml-1">Availability</label>
              <div className="relative">
                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <select
                  className="w-full pl-11 pr-8 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-amber-500 focus:bg-white transition-all text-sm font-medium text-slate-800 appearance-none cursor-pointer"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  {statuses.map(s => (
                    <option key={s} value={s}>{s === 'All' ? 'Any Status' : s}</option>
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
            <h2 className="text-2xl font-bold font-heading text-slate-900">Commercial Destinations</h2>
            <p className="text-sm text-slate-500 mt-1">Showing {filteredProperties.length} results</p>
          </div>
        </div>

        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredProperties.map((property) => (
              <div key={property.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 flex gap-2">
                    <span className={`backdrop-blur text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded ${property.status === 'Now Selling' ? 'bg-amber-500/80' :
                      property.status === 'Upcoming' ? 'bg-blue-600/80' : 'bg-slate-500/80'
                      }`}>
                      {property.status}
                    </span>
                    <span className="bg-white/90 text-slate-900 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded border border-slate-100">
                      {property.sector}
                    </span>
                  </div>
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
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

                  <div className="bg-slate-50 p-4 rounded-lg mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 size={16} className="text-amber-500" />
                      <span className="text-sm font-bold text-slate-800 uppercase tracking-tight">{property.type}</span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium">{property.features}</p>
                  </div>

                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                      Project ID: CG-C{property.id}
                    </span>
                    {property.link.startsWith('http') ? (
                      <a
                        href={property.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-amber-600 transition-all group-hover:gap-3"
                      >
                        View Details <ArrowRight size={14} />
                      </a>
                    ) : (
                      <Link
                        to={property.link}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 hover:text-amber-600 transition-all group-hover:gap-3"
                      >
                        View Details <ArrowRight size={14} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-xl border border-dashed border-slate-300 max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase size={32} className="text-slate-300" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">No results found</h3>
            <p className="text-slate-500 max-w-md mx-auto">
              We couldn't find any commercial properties matching your filters. Try a different sector or search keyword.
            </p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedSector('All'); setSelectedStatus('All'); }}
              className="mt-6 text-amber-600 font-bold text-sm uppercase tracking-widest hover:text-amber-700"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Leasing Banner */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-[#002b49] rounded-2xl p-8 md:p-16 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full blur-[120px] opacity-10 -mr-32 -mt-32"></div>
            <div className="relative z-10 max-w-xl">
              <h2 className="text-3xl md:text-5xl font-heading font-black mb-6">Leasing Opportunities</h2>
              <p className="text-slate-300 text-lg font-light leading-relaxed">
                Are you looking for prime retail or office space for your brand? Partner with Chouhan Group to scale your business in the region's most active commercial hubs.
              </p>
            </div>
            <div className="relative z-10 shrink-0">
              <Link to="/contact" className="bg-amber-500 text-slate-900 px-10 py-5 font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-2xl rounded-sm inline-block">
                Contact Leasing Team
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Commercial;
