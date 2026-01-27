import React, { useState } from 'react';
import { Heart, Users, HandHeart, ChevronDown, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CHARITY_PROJECTS } from './CharityData';

const CharitySponsorship: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(12);
  const categories = ['All', 'Infrastructure', 'Environment', 'Healthcare', 'Youth Development', 'Community Support'];

  const filteredProjects = activeCategory === 'All'
    ? CHARITY_PROJECTS
    : CHARITY_PROJECTS.filter(p => getStatusDisplay(p.status) === activeCategory);

  function getStatusDisplay(status: string) {
    switch (status) {
      case 'Community Infrastructure': return 'Infrastructure';
      case 'Environment': return 'Environment';
      case 'Healthcare': return 'Healthcare';
      case 'Youth Development': return 'Youth Development';
      case 'Community Support': return 'Community Support';
      default: return status;
    }
  };

  const handleLoadMore = () => {
    setVisibleProjects(prev => prev + 12);
  };

  return (
    <div className="bg-white font-sans text-slate-800 pt-32 md:pt-48 pb-20">

      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden mb-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2000")' }}></div>
        <div className="absolute inset-0 bg-slate-900/50"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 border border-amber-500/30 bg-amber-500/10 backdrop-blur-xl px-4 py-2 rounded-full text-amber-200 font-bold tracking-[0.2em] text-[10px] uppercase mb-8">
            <Heart size={12} className="fill-amber-500 text-amber-500" />
            Corporate Social Responsibility
          </div>
          <h1 className="text-5xl md:text-8xl font-heading font-black mb-8 text-white tracking-tight">
            Charity & <span className="text-amber-500">Sponsorship</span>
          </h1>
          <p className="text-lg md:text-2xl font-light tracking-wide text-slate-200 max-w-2xl mx-auto">
            Making a positive impact in our communities through dedicated initiatives.
          </p>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-slate-50 rounded-2xl">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mx-auto mb-4">
              <HandHeart size={32} />
            </div>
            <div className="text-4xl font-black text-slate-900 mb-2">₹5 CR+</div>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Total Contributions</p>
          </div>
          <div className="text-center p-8 bg-slate-50 rounded-2xl">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
              <Users size={32} />
            </div>
            <div className="text-4xl font-black text-slate-900 mb-2">50,000+</div>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Lives Impacted</p>
          </div>
          <div className="text-center p-8 bg-slate-50 rounded-2xl">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
              <ImageIcon size={32} />
            </div>
            <div className="text-4xl font-black text-slate-900 mb-2">20+</div>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Active Projects</p>
          </div>
        </div>
      </section>

      {/* Thumbnail Gallery */}
      <section className="py-16" id="gallery">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-sm font-bold text-amber-600 uppercase tracking-[0.3em] mb-4">Our Initiatives</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-black text-slate-900">Project Gallery</h3>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setVisibleProjects(12);
                  }}
                  className={`px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Simple Thumbnail Grid - Matching Screenshot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {filteredProjects.slice(0, visibleProjects).map((project) => (
              <Link
                key={project.id}
                to={`/about/charities/${project.slug}`}
                className="group block"
              >
                {/* Thumbnail Image */}
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-slate-100 shadow-md group-hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={Array.isArray(project.heroImage) ? project.heroImage[0] : project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                </div>

                {/* Caption */}
                <p className="text-sm md:text-base text-slate-700 font-medium leading-snug text-center px-4 group-hover:text-amber-600 transition-colors">
                  {project.description.split('\n')[0]}
                </p>
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          {filteredProjects.length > visibleProjects && (
            <div className="text-center">
              <button
                onClick={handleLoadMore}
                className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-amber-600 transition-all duration-300 shadow-lg"
              >
                View More Projects
                <ChevronDown size={16} />
              </button>
            </div>
          )}

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <ImageIcon className="mx-auto text-slate-200 mb-6" size={64} strokeWidth={1} />
              <p className="text-slate-400 font-light text-xl">No projects found in this category.</p>
              <button
                onClick={() => setActiveCategory('All')}
                className="mt-6 text-amber-600 font-bold uppercase tracking-widest text-[10px] underline hover:text-slate-900 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Partner CTA */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="bg-slate-900 rounded-3xl p-12 md:p-20 text-center max-w-4xl mx-auto">
            <h2 className="text-amber-500 font-black uppercase tracking-[0.4em] text-[10px] mb-6">Partnership</h2>
            <h3 className="text-4xl md:text-6xl font-heading font-black text-white mb-8 leading-tight">
              Support a <span className="text-amber-500">Cause</span>
            </h3>
            <p className="text-slate-300 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
              We are always seeking meaningful ways to contribute to the community. Let's explore how we can make a difference together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-slate-900 px-10 py-4 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-amber-500 transition-all shadow-lg">
                Sponsorship Request
              </button>
              <button className="bg-transparent border-2 border-white/20 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all">
                Contact CSR Desk
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CharitySponsorship;
