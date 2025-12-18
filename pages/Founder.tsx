import React from 'react';
import { Quote, Linkedin, Mail, ArrowRight } from 'lucide-react';

const TEAM = [
  {
    name: "Suraj Chouhan",
    role: "Director",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&fit=crop",
    bio: "Suraj leads the group's strategic expansion into new markets. With a keen eye for emerging trends, he has been pivotal in diversification strategies across the hospitality and automotive sectors.",
    linkedin: "#"
  },
  {
    name: "Sunny Chouhan",
    role: "Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&fit=crop",
    bio: "Focusing on operational excellence, Sunny ensures that the group's commitment to quality is met in every project. His management ensures seamless execution from conception to delivery.",
    linkedin: "#"
  },
  {
    name: "Saurabh Chouhan",
    role: "Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&fit=crop",
    bio: "Spearheading the brand's marketing and customer engagement, Saurabh brings a modern approach to the legacy business, driving digital transformation and brand loyalty.",
    linkedin: "#"
  }
];

const Founder: React.FC = () => {
  return (
    <div className="bg-white font-sans text-slate-800">
      
      {/* Founder Hero */}
      <section className="relative pt-32 pb-20 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Founder Image */}
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&fit=crop" 
                  alt="Mr. Ajay Chouhan" 
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-200 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-slate-200 rounded-full blur-3xl opacity-50"></div>
            </div>

            {/* Founder Content */}
            <div className="lg:w-1/2 text-slate-900">
               <div className="inline-flex items-center gap-2 text-amber-600 font-bold uppercase tracking-widest text-xs mb-4">
                 <span className="w-8 h-0.5 bg-amber-500"></span>
                 Our Founder
               </div>
               <h1 className="text-5xl lg:text-6xl font-heading font-black mb-2 text-slate-900">Mr. Ajay Chouhan</h1>
               <p className="text-2xl text-slate-500 font-light mb-8">Founder & Chairman</p>
               
               <div className="relative p-8 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg mb-8">
                 <Quote className="absolute top-4 left-4 text-amber-200 transform -scale-x-100" size={48} />
                 <p className="relative z-10 text-lg italic text-slate-700 leading-relaxed font-serif">
                   "True success is not just about building structures, but about building trust. Since 1998, our goal has been to create value that transcends generations, ensuring that every family associated with Chouhan Group feels a sense of pride and security."
                 </p>
               </div>

               <div className="flex gap-4">
                 <button className="bg-slate-900 text-white px-8 py-3 font-bold uppercase tracking-widest text-sm hover:bg-amber-500 hover:text-black transition-colors rounded">
                   Read Full Story
                 </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-heading font-bold mb-8 border-b border-slate-100 pb-4 text-slate-900">The Journey</h2>
          <div className="space-y-6 text-slate-600 leading-loose text-lg">
            <p>
              Mr. Ajay Chouhan, a visionary entrepreneur, embarked on his journey in 1998 with a modest capital but an ambitious dream: to redefine the real estate landscape of Central India. Recognizing the potential of Bhilai and Durg, he established the Chouhan Group with a core philosophy centered on integrity and customer satisfaction.
            </p>
            <p>
              Under his astute leadership, the group transformed from a single vertical entity into a diversified conglomerate. His ability to foresee market trends led to the strategic expansion into Hospitality and Automobiles, partnering with global giants like Maruti Suzuki and Hero MotoCorp.
            </p>
            <p>
              Beyond business, Mr. Chouhan is deeply committed to social responsibility. He believes that corporate growth must go hand-in-hand with community welfare, driving various charitable initiatives and sustainable development practices across all group projects.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">The Pillars of Strength</span>
            <h2 className="text-4xl font-heading font-black text-slate-900 mt-2">Leadership Team</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-6 rounded-full"></div>
            <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
              Working alongside Mr. Ajay Chouhan, the next generation of leadership drives innovation, operational excellence, and strategic growth across all verticals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TEAM.map((member, idx) => (
              <div key={idx} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
                <div className="h-80 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Social Overlay */}
                  <div className="absolute bottom-4 right-4 z-20 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                    <a href={member.linkedin} className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center hover:bg-amber-600">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-slate-900">{member.name}</h3>
                  <p className="text-amber-600 font-bold uppercase text-xs tracking-widest mt-1 mb-4">{member.role}</p>
                  <p className="text-slate-600 leading-relaxed text-sm mb-6">
                    {member.bio}
                  </p>
                  <div className="pt-6 border-t border-slate-100">
                    <button className="text-slate-900 font-bold text-sm flex items-center gap-2 hover:text-amber-600 transition-colors group-hover:gap-3">
                      View Profile <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Founder;