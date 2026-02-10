import React, { useState } from 'react';
import { Heart, Users, HandHeart, ChevronDown, Image as ImageIcon, X, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CHARITY_PROJECTS } from './CharityData';
import { submitLead } from '../crmApi';

const CharitySponsorship: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(12);
  const categories = ['All', 'Infrastructure', 'Environment', 'Healthcare', 'Youth Development', 'Community Support'];
  const [showForm, setShowForm] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    requestType: 'General Sponsorship',
    message: ''
  });


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      await submitLead({
        customerName: formData.fullName,
        mobile: formData.phone,
        email: formData.email,
        interestedProject: 'Charity & Sponsorship',
        remarks: `Organization: ${formData.organization} | Request Type: ${formData.requestType} | Message: ${formData.message}`,
        source: 'Website - Charity Sponsorship Request'
      });
      setFormStatus('success');

      // Reset form after delay
      setTimeout(() => {
        setShowForm(false);
        setFormStatus('idle');
        setFormData({
          fullName: '',
          organization: '',
          email: '',
          phone: '',
          requestType: 'General Sponsorship',
          message: ''
        });
      }, 3000);
    } catch (err: any) {
      console.error(err);
      setFormStatus('error');
    }
  };

  // Helper function to map detailed status strings to simple category names
  const getStatusDisplay = (status: string) => {
    if (!status) return 'Other';
    switch (status.trim()) {
      case 'Community Infrastructure': return 'Infrastructure';
      case 'Environment': return 'Environment';
      case 'Healthcare': return 'Healthcare';
      case 'Youth Development': return 'Youth Development';
      case 'Community Support': return 'Community Support';
      default: return status;
    }
  };

  // Filter projects based on active category
  const filteredProjects = React.useMemo(() => {
    if (!CHARITY_PROJECTS) return [];
    return activeCategory === 'All'
      ? CHARITY_PROJECTS
      : CHARITY_PROJECTS.filter(p => getStatusDisplay(p.status) === activeCategory);
  }, [activeCategory]);

  // Debugging log - this will show in the browser console (F12)
  React.useEffect(() => {
    console.log("Active Category:", activeCategory);
    console.log("Filtered Results Count:", filteredProjects.length);
    if (CHARITY_PROJECTS.length === 0) console.warn("WARNING: CHARITY_PROJECTS array is empty!");
  }, [activeCategory, filteredProjects]);

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.slice(0, visibleProjects).map((project) => (
              <Link
                key={project.id}
                to={`/about/charities/${project.slug}`}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100"
              >
                {/* Card Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={Array.isArray(project.heroImage) ? project.heroImage[0] : project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md">
                      {getStatusDisplay(project.status)}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold font-heading text-slate-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {project.description.split('\n')[0]}
                  </p>

                  <div className="pt-4 border-t border-slate-100 flex justify-between items-center mt-auto">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Read More
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 group-hover:bg-amber-500 group-hover:text-white transition-all group-hover:translate-x-1">
                      <ChevronDown size={16} className="-rotate-90" />
                    </div>
                  </div>
                </div>
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

      {/* Sponsorship Request Modal */}
      {showForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-scaleUp">
            {/* Modal Header */}
            <div className="p-8 bg-slate-950 text-white flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-heading font-black">Sponsorship Request</h2>
                <p className="text-slate-400 text-sm mt-1">Please provide details about your proposal.</p>
              </div>
              <button
                onClick={() => setShowForm(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-all"
              >
                <X size={24} />
              </button>
            </div>

            {/* Form Content */}
            <div className="p-8 max-h-[70vh] overflow-y-auto">
              {formStatus === 'success' ? (
                <div className="text-center py-12 animate-fadeIn">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Submitted!</h3>
                  <p className="text-slate-500">Thank you for Reaching out. Our CSR desk will review your proposal and get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {formStatus === 'error' && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded flex items-center gap-3 text-red-700 text-sm">
                      <AlertCircle size={18} />
                      There was an error submitting your request. Please try again.
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:border-amber-500 focus:outline-none focus:bg-white transition-all shadow-inner"
                        placeholder="e.g. Rahul Sharma"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Organization (If any)</label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:border-amber-500 focus:outline-none focus:bg-white transition-all shadow-inner"
                        placeholder="e.g. NGO Name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:border-amber-500 focus:outline-none focus:bg-white transition-all shadow-inner"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:border-amber-500 focus:outline-none focus:bg-white transition-all shadow-inner"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Nature of Request *</label>
                    <select
                      name="requestType"
                      value={formData.requestType}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:border-amber-500 focus:outline-none focus:bg-white transition-all shadow-inner"
                    >
                      <option>General Sponsorship</option>
                      <option>Community Infrastructure</option>
                      <option>Environment Initiative</option>
                      <option>Healthcare Support</option>
                      <option>Youth development</option>
                      <option>Other Event</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Message / Proposal *</label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 h-32 focus:border-amber-500 focus:outline-none focus:bg-white transition-all resize-none shadow-inner"
                      placeholder="Briefly describe the cause or event..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className={`w-full py-4 rounded-xl flex items-center justify-center gap-3 font-bold uppercase tracking-[0.2em] text-xs transition-all shadow-lg ${formStatus === 'submitting' ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-slate-900 text-white hover:bg-amber-500 hover:text-black'}`}
                  >
                    {formStatus === 'submitting' ? (
                      <div className="w-5 h-5 border-2 border-slate-400 border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>Submit Request <Send size={16} /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
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
            <button
              onClick={() => setShowForm(true)}
              className="bg-white text-slate-900 px-10 py-4 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-amber-500 transition-all shadow-lg"
            >
              Sponsorship Request
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CharitySponsorship;
