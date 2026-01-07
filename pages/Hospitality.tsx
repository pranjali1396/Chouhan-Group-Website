import React, { useState, useMemo } from 'react';
import { Search, MapPin, Filter, ArrowRight, Coffee, Waves, Utensils, Star, Bed } from 'lucide-react';
import { Link } from 'react-router-dom';

const HOSPITALITY_DATA = [
  {
    id: 1,
    name: "Empyrean Hotels Bhilai",
    location: "GE Road, Bhilai",
    type: "Luxury Hotel",
    rating: "4.5",
    image: "/new images/chouhan2.jpg",
    link: "/hospitality/empyrean-bhilai",
    status: "Now Open",
    category: "Hotel",
    amenities: ["Fine Dining", "Bar & Lounge", "Meeting Rooms", "wedding venues", "Luxury suites"],
    websiteUrl: "https://www.empyreanhotels.in/bhilai"
  },
  {
    id: 2,
    name: "Empyrean Resort Balod",
    location: "Lake Side, Balod",
    type: "Lakeside Resort",
    rating: "4.8",
    image: "/new images/ELR_Balod 25.jpg",
    link: "/hospitality/empyrean-balod",
    status: "Now Open",
    category: "Resort",
    amenities: ["Infinity Pool", "Club", "Water sports", "Wedding venues", "luxury rooms"],
    websiteUrl: "https://www.empyreanhotels.in/balod"
  },
  {
    id: 3,
    name: "Empyrean Kendri",
    location: "Near Airport, Raipur",
    type: "Transit Boutique Hotel",
    rating: "4.2",
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1200",
    link: "/hospitality/empyrean-kendri",
    status: "Upcoming",
    category: "Boutique",
    amenities: ["Airport Shuttle", "Business Hub", "Rooftop"]
  },
  {
    id: 4,
    name: "Empyrean Tumdibod",
    location: "National Highway, Rajnandgaon",
    type: "Highway Resort",
    rating: "4.0",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200",
    link: "/hospitality/empyrean-tumdibod",
    status: "Upcoming",
    category: "Resort",
    amenities: ["Food Court", "Drive-through", "Rooms"]
  },
  {
    id: 5,
    name: "Hotel Palladio",
    location: "Civil Lines, Durg",
    type: "Classic Luxury",
    rating: "4.4",
    image: "https://images.unsplash.com/photo-1551882547-ff43c63be5c2?q=80&w=1200",
    link: "/hospitality/palladio",
    status: "Upcoming",
    category: "Hotel",
    amenities: ["Spa", "Banquet Hall", "Luxury Suites"]
  },
  {
    id: 6,
    name: "Hotel Skypark",
    location: "Bhilai",
    type: "Modern Business Hotel",
    rating: "4.1",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200",
    link: "/hospitality/skypark",
    status: "Upcoming",
    category: "Hotel",
    amenities: ["Centrally Located", "Business Rooms", "Dining"]
  }
];

// ... (existing helper logic in component) ...

// Filtered Items memo logic stays same as context.

// In the rendering part:


const Hospitality: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const filteredItems = useMemo(() => {
    return HOSPITALITY_DATA.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesStatus = selectedStatus === 'All' || item.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchTerm, selectedCategory, selectedStatus]);

  const categories = ['All', 'Hotel', 'Resort', 'Boutique'];
  const statuses = ['All', 'Now Open', 'Upcoming'];

  return (
    <div className="bg-slate-50 font-sans min-h-screen">

      {/* Hero Section */}
      <div className="bg-[#002b49] text-white pt-32 md:pt-48 pb-24 md:pb-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000')] bg-cover bg-center opacity-10 scale-110 blur-sm"></div>
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <span className="text-amber-500 font-bold tracking-widest text-xs uppercase mb-4 block animate-fadeIn">Experience Luxury</span>
          <h1 className="text-4xl md:text-6xl font-heading font-black mb-6 animate-slideUp">
            Hospitality Collection
          </h1>
          <p className="text-slate-300 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 animate-slideUp delay-100">
            From urban luxury hotels to serene lakeside resorts, discover our exceptional destinations for every stay.
          </p>
        </div>
      </div>

      {/* Search Bar - Floating */}
      <div className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="bg-white rounded-xl shadow-xl p-6 border border-slate-100 max-w-5xl mx-auto animate-fadeInUp">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

            {/* Search Input */}
            <div className="md:col-span-4 lg:col-span-5 relative">
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1 ml-1">Search Destinations</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="Hotel name, city..."
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-amber-500 focus:bg-white transition-all text-sm font-medium text-slate-800"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="md:col-span-4 lg:col-span-3">
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1 ml-1">Category</label>
              <div className="relative">
                <Coffee className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <select
                  className="w-full pl-11 pr-8 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-amber-500 focus:bg-white transition-all text-sm font-medium text-slate-800 appearance-none cursor-pointer"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat === 'All' ? 'All Types' : cat}</option>
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
                <Star className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
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
            <h2 className="text-2xl font-bold font-heading text-slate-900">Featured Destinations</h2>
            <p className="text-sm text-slate-500 mt-1">Showing {filteredItems.length} destinations</p>
          </div>
        </div>

        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredItems.map((item) => (
              <Link to={item.link} key={item.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col block">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 flex gap-2">
                    <span className="bg-slate-900/80 backdrop-blur text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded">
                      {item.status}
                    </span>
                    <span className="bg-amber-500/90 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded flex items-center gap-1">
                      <Star size={10} fill="currentColor" /> {item.rating}
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

                  <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-6 text-sm text-slate-600 bg-slate-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Bed size={16} className="text-slate-400" />
                      <span className="font-medium">{item.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Utensils size={16} className="text-slate-400" />
                      <span className="font-medium">{item.category}</span>
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        {item.amenities.slice(0, 2).join(' • ')}
                      </span>
                    </div>
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
              <Waves size={32} className="text-slate-300" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">No destinations found</h3>
            <p className="text-slate-500 max-w-md mx-auto">
              Try adjusting your search criteria or explore our other hospitality offerings.
            </p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); setSelectedStatus('All'); }}
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

export default Hospitality;
