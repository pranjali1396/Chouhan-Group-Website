
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CATEGORIES = [
  {
    title: "NEW HOMES",
    subtitle: "",
    image: "/new_images/New%20homes.png",
    link: "/new-homes"
  },
  {
    title: "COMMERCIAL",
    subtitle: "",
    image: "/new_images/image.png",
    link: "/commercial"
  },
  {
    title: "HOSPITALITY",
    subtitle: "",
    image: "/new_images/chouhan2.jpg",
    link: "/hospitality"
  },
  {
    title: "AUTOMOBILES",
    subtitle: "PROUD TO BE INDIA'S LARGEST AUTOMOTIVE NETWORK",
    image: "/new_images/car%20image.png",
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
            <div className="absolute inset-0 bg-slate-100">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>

            {/* Gradient Overlay - Lightened for visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>

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
