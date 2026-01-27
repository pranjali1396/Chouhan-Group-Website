import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, X, ZoomIn, ArrowLeft } from 'lucide-react';
import { CHARITY_PROJECTS } from './CharityData';

const CharityProjectDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    const currentIndex = CHARITY_PROJECTS.findIndex(p => p.slug === slug);
    const project = CHARITY_PROJECTS[currentIndex];

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    if (!project) {
        return (
            <div className="pt-48 pb-20 text-center">
                <h2 className="text-2xl font-bold">Project not found</h2>
                <Link to="/about/charities" className="text-amber-600 underline mt-4 inline-block">Back to Gallery</Link>
            </div>
        );
    }

    const nextProject = CHARITY_PROJECTS[(currentIndex + 1) % CHARITY_PROJECTS.length];
    const prevProject = CHARITY_PROJECTS[(currentIndex - 1 + CHARITY_PROJECTS.length) % CHARITY_PROJECTS.length];

    const allImages = [
        ...(Array.isArray(project.heroImage) ? project.heroImage : [project.heroImage]),
        ...(project.gallery || [])
    ];

    return (
        <div className="bg-[#f8fafc] min-h-screen pt-32 pb-24">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Navigation Header */}
                <div className="flex items-center justify-between mb-12">
                    <Link to="/about/charities" className="flex items-center gap-2 text-slate-500 hover:text-amber-600 transition-colors font-bold uppercase tracking-widest text-[10px]">
                        <ArrowLeft size={14} /> Back to Gallery
                    </Link>
                    <div className="flex items-center gap-4">
                        <Link to={`/about/charities/${prevProject.slug}`} className="p-2 hover:bg-white rounded-full transition-colors text-slate-400 hover:text-slate-900 shadow-sm border border-slate-100" title="Previous Project">
                            <ChevronLeft size={20} />
                        </Link>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            {currentIndex + 1} / {CHARITY_PROJECTS.length}
                        </span>
                        <Link to={`/about/charities/${nextProject.slug}`} className="p-2 hover:bg-white rounded-full transition-colors text-slate-400 hover:text-slate-900 shadow-sm border border-slate-100" title="Next Project">
                            <ChevronRight size={20} />
                        </Link>
                    </div>
                </div>

                {/* Main Album Container */}
                <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
                    {/* Hero Section */}
                    <div className="relative w-full overflow-hidden group bg-slate-900">
                        <img
                            src={Array.isArray(project.heroImage) ? project.heroImage[0] : project.heroImage}
                            alt={project.title}
                            className="w-full h-auto max-h-[80vh] object-contain transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 md:p-20">
                        <div className="max-w-4xl mx-auto">
                            {/* Project Identity */}
                            <div className="text-center mb-16">
                                <div className="inline-block bg-amber-50 text-amber-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                                    {project.status}
                                </div>
                                <h1 className="text-4xl md:text-6xl font-heading font-black text-slate-900 mb-4 tracking-tight">
                                    {project.title}
                                </h1>
                                <div className="w-12 h-1 bg-amber-500 mx-auto rounded-full"></div>
                            </div>

                            {/* Highlighted Intro - Acting as the narrative hook */}
                            <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200/50 shadow-inner mb-20">
                                <p className="text-2xl md:text-4xl font-heading font-medium text-slate-800 italic leading-relaxed text-center">
                                    "{project.description.split('\n')[0]}"
                                </p>
                            </div>

                            {/* Main Gallery - 'The Other Photos' brought higher */}
                            <div className="mb-24 px-4 md:px-0">
                                <div className="flex items-center justify-between mb-10 pb-4 border-b border-slate-100">
                                    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Project Photo Gallery</h3>
                                    <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest">{allImages.length - 1} Images</span>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                                    {allImages.slice(1).map((img, idx) => (
                                        <div
                                            key={idx}
                                            className="relative group cursor-zoom-in overflow-hidden rounded-2xl bg-slate-50 shadow-md transition-all duration-700 hover:shadow-2xl aspect-square"
                                            onClick={() => setSelectedImage(img)}
                                        >
                                            <img
                                                src={img}
                                                alt={`${project.title} gallery ${idx + 1}`}
                                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                <div className="bg-white/90 backdrop-blur-md p-4 rounded-full shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                    <ZoomIn size={24} className="text-slate-900" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Detailed Description - Secondary Content */}
                            <div className="max-w-3xl mx-auto space-y-10 text-slate-600 text-lg md:text-xl font-light leading-relaxed mb-24 border-t border-slate-50 pt-16">
                                {project.description.split('\n').slice(1).map((para, i) => (
                                    para.trim() && <p key={i} className="text-center md:text-left">{para}</p>
                                ))}
                            </div>

                            {/* Support Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-slate-100">
                                <div>
                                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">Location Context</h4>
                                    <p className="text-slate-900 font-bold text-lg mb-2">{project.address}</p>
                                    <p className="text-slate-500 font-light">Part of our ongoing commitment to spatial and community development in Chhattisgarh.</p>
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">Impact Goal</h4>
                                    <p className="text-slate-900 font-bold text-lg mb-2">Sustainable Community Infrastructure</p>
                                    <p className="text-slate-500 font-light">Improving the quality of life and providing dignified facilities for all citizens.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Navigation */}
                <div className="mt-20">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-8 text-center">Next in the Album</p>
                    <Link
                        to={`/about/charities/${nextProject.slug}`}
                        className="group flex items-center justify-between p-8 md:p-12 bg-white rounded-[2.5rem] hover:bg-slate-900 transition-all duration-700 shadow-xl border border-slate-100"
                    >
                        <div className="flex items-center gap-8">
                            <div className="w-24 h-24 md:w-32 md:h-24 rounded-2xl overflow-hidden shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                                <img src={Array.isArray(nextProject.heroImage) ? nextProject.heroImage[0] : nextProject.heroImage} className="w-full h-full object-cover" alt="" />
                            </div>
                            <div>
                                <h4 className="text-2xl md:text-3xl font-heading font-black text-slate-900 group-hover:text-white transition-colors mb-2">{nextProject.title}</h4>
                                <p className="text-[10px] text-amber-600 font-black uppercase tracking-[0.3em]">{nextProject.status}</p>
                            </div>
                        </div>
                        <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-amber-500 transition-all transform group-hover:translate-x-2">
                            <ChevronRight className="text-slate-900" size={32} />
                        </div>
                    </Link>
                </div>
            </div>

            {/* Lightbox Overlay */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-4 md:p-12 cursor-default"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) setSelectedImage(null);
                    }}
                >
                    <button
                        className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={48} strokeWidth={1} />
                    </button>

                    {allImages.length > 1 && (
                        <>
                            <button
                                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors p-4 z-[110]"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    const currentIndex = allImages.indexOf(selectedImage);
                                    const prevIndex = (currentIndex - 1 + allImages.length) % allImages.length;
                                    setSelectedImage(allImages[prevIndex]);
                                }}
                            >
                                <ChevronLeft size={64} strokeWidth={1} />
                            </button>
                            <button
                                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors p-4 z-[110]"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    const currentIndex = allImages.indexOf(selectedImage);
                                    const nextIndex = (currentIndex + 1) % allImages.length;
                                    setSelectedImage(allImages[nextIndex]);
                                }}
                            >
                                <ChevronRight size={64} strokeWidth={1} />
                            </button>
                        </>
                    )}

                    <img
                        src={selectedImage}
                        alt="Full size view"
                        className="max-w-full max-h-full object-contain shadow-2xl transition-all duration-500 animate-in zoom-in-95"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
};

export default CharityProjectDetail;
