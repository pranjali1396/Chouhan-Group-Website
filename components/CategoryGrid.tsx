
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CATEGORIES = [
  {
    title: "NEW HOMES",
    subtitle: "",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop",
    link: "/new-homes"
  },
  {
    title: "COMMERCIAL",
    subtitle: "",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
    link: "/commercial"
  },
  {
    title: "HOSPITALITY",
    subtitle: "",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
    link: "/hospitality"
  },
  {
    title: "AUTOMOBILES",
    subtitle: "PROUD TO BE INDIA'S LARGEST AUTOMOTIVE NETWORK",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop",
    link: "/automobile"
  }
];

const CategoryGrid: React.FC = () => {
  return (
    <section className="w-full bg-white relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-auto lg:h-[350px]">
        {CATEGORIES.map((cat, idx) => (
          <Link
            key={idx}
            to={cat.link}
            className="group relative w-full h-[250px] md:h-[300px] lg:h-full overflow-hidden block border-r border-white/10 last:border-r-0 border-b lg:border-b-0"
          >
            {/* Background Image */}
            <div className="absolute inset-0 bg-slate-900">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 transition-opacity duration-500"></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 z-10">
              <div className="flex flex-col justify-end h-full">
                {cat.subtitle && (
                  <p className="text-amber-400 text-[10px] md:text-[11px] font-bold tracking-widest uppercase mb-2 leading-tight max-w-[80%]">
                    {cat.subtitle}
                  </p>
                )}
                <h2 className="text-white font-heading font-black text-2xl uppercase tracking-tighter flex items-end gap-2">
                  {cat.title}
                </h2>
                <div className="h-1 w-0 bg-amber-500 mt-2 transition-all duration-500 group-hover:w-16"></div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
