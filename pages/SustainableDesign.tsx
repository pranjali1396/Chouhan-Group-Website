import React from 'react';
import {
  Leaf, Users, TrendingUp, Sun, Wind, Recycle,
  MapPin, Bike, Droplet, Zap, Hammer, Search,
  CheckCircle, Building2
} from 'lucide-react';

const ENV_FEATURES = [
  { icon: <Zap size={20} />, label: "Energy-efficient appliances & systems" },
  { icon: <Sun size={20} />, label: "Solar hot-water solutions" },
  { icon: <Droplet size={20} />, label: "High-efficiency boilers" },
  { icon: <Wind size={20} />, label: "Energy Star-rated windows for daylight" },
  { icon: <Wind size={20} />, label: "Natural ventilation optimization" },
  { icon: <Recycle size={20} />, label: "Recycling up to 75% of construction waste" },
  { icon: <Leaf size={20} />, label: "Green rooftops & community gardens" },
  { icon: <Bike size={20} />, label: "Bicycle lockers & efficient waste systems" }
];

const SOCIAL_FEATURES = [
  { icon: <MapPin size={20} />, label: "Proximity to schools, parks & retail" },
  { icon: <Users size={20} />, label: "Walkable neighbourhood layouts" },
  { icon: <TrendingUp size={20} />, label: "Easy access to major transit hubs" },
  { icon: <Building2 size={20} />, label: "Thoughtfully planned public spaces" }
];

const SustainableDesign: React.FC = () => {
  return (
    <div className="bg-white font-sans text-slate-800 pt-32 md:pt-48">

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2000')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-white/90"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-slate-900">
          <div className="inline-block border border-emerald-500/30 bg-emerald-50 px-4 py-1 rounded-full text-emerald-600 font-bold tracking-widest text-xs uppercase mb-6">
            Building For Tomorrow
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black mb-6 drop-shadow-sm">Sustainable Design</h1>
          <div className="h-1 w-24 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl font-light tracking-wide text-slate-600 max-w-3xl mx-auto">
            Shaping modern lifestyles with a commitment to environmental responsibility and social impact.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8">
              Building the Future Across <br />
              <span className="text-emerald-600">Real Estate, Hospitality & Automobile</span>
            </h2>
            <p className="text-slate-600 leading-loose text-lg font-light mb-8">
              <strong className="text-slate-900">CHOUHAN GROUP’s</strong> diverse portfolio spans real estate development, hospitality, and the automobile sector, reflecting our commitment to shaping modern lifestyles and strengthening regional infrastructure.
            </p>
            <p className="text-slate-600 leading-loose text-lg font-light">
              In real estate, our construction expertise includes master-planned and mixed-use communities, high- and low-rise condominiums, shopping centres, office buildings, and premium hospitality projects. Our automobile division further extends our focus on service excellence, mobility solutions, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Integrated Construction Excellence */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-amber-100 text-amber-600 rounded"><Hammer size={24} /></div>
                <h2 className="text-2xl font-bold font-heading text-slate-900">Integrated Construction Excellence</h2>
              </div>
              <p className="text-slate-600 leading-loose mb-6">
                CHOUHAN GROUP internally manages all construction operations for its developments and civil infrastructure projects across Chhattisgarh. By handling project management in-house, our team remains actively involved in every stage—from planning to execution—ensuring precision, accountability, and uncompromised quality.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 border-l-4 border-l-amber-500">
                <div className="flex gap-4 items-start">
                  <Search className="text-amber-500 shrink-0 mt-1" size={20} />
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Before breaking ground, our experts conduct extensive research on emerging technologies and collaborate closely with design specialists and technical consultants. This rigorous approach ensures stronger quality control and timely delivery.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200" alt="Construction Site" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                  <p className="text-white font-medium border-l-4 border-amber-500 pl-4">
                    Our highly trained construction team brings decades of experience to every project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars of Sustainability */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs">Our Responsibility</span>
            <h2 className="text-4xl font-heading font-black text-slate-900 mt-2">Sustainable Development</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              We are dedicated to building communities that are environmentally responsible, socially uplifting, and economically impactful.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Environmental */}
            <div className="bg-white rounded-xl shadow-lg border-t-4 border-emerald-500 overflow-hidden group hover:-translate-y-2 transition-transform duration-300 border border-slate-100">
              <div className="p-8">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                  <Leaf size={32} />
                </div>
                <h3 className="text-2xl font-bold font-heading text-slate-900 mb-4">Environmental</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  We prioritize Brownfield sites and urban infills to revitalize underutilized areas. We use locally manufactured, recycled materials and target strict waste reduction goals.
                </p>
                <ul className="space-y-3">
                  {ENV_FEATURES.slice(0, 5).map((feat, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-600 items-start">
                      <span className="text-emerald-500 shrink-0 mt-0.5">{feat.icon}</span>
                      <span>{feat.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Social */}
            <div className="bg-white rounded-xl shadow-lg border-t-4 border-blue-500 overflow-hidden group hover:-translate-y-2 transition-transform duration-300 border border-slate-100">
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
                  <Users size={32} />
                </div>
                <h3 className="text-2xl font-bold font-heading text-slate-900 mb-4">Social</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Beyond constructing buildings, we foster well-being. Our communities are designed to be active, dynamic places where residents can live, work, and thrive.
                </p>
                <ul className="space-y-3">
                  {SOCIAL_FEATURES.map((feat, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-600 items-start">
                      <span className="text-blue-500 shrink-0 mt-0.5">{feat.icon}</span>
                      <span>{feat.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Economic */}
            <div className="bg-white rounded-xl shadow-lg border-t-4 border-amber-500 overflow-hidden group hover:-translate-y-2 transition-transform duration-300 border border-slate-100">
              <div className="p-8">
                <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp size={32} />
                </div>
                <h3 className="text-2xl font-bold font-heading text-slate-900 mb-4">Economic</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Supporting local growth is central to our mission. We prioritize hiring local talent and partnering with regional suppliers to benefit the community.
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-sm text-slate-600 items-start">
                    <CheckCircle className="text-amber-500 shrink-0 mt-0.5" size={18} />
                    <span>Generating employment opportunities</span>
                  </li>
                  <li className="flex gap-3 text-sm text-slate-600 items-start">
                    <CheckCircle className="text-amber-500 shrink-0 mt-0.5" size={18} />
                    <span>Increasing foot traffic to local businesses</span>
                  </li>
                  <li className="flex gap-3 text-sm text-slate-600 items-start">
                    <CheckCircle className="text-amber-500 shrink-0 mt-0.5" size={18} />
                    <span>Contributing to public infrastructure</span>
                  </li>
                  <li className="flex gap-3 text-sm text-slate-600 items-start">
                    <CheckCircle className="text-amber-500 shrink-0 mt-0.5" size={18} />
                    <span>Strengthening long-term regional stability</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Materials & Waste Note */}
      <section className="py-20 bg-emerald-50 text-emerald-900">
        <div className="container mx-auto px-4 text-center">
          <Recycle className="mx-auto text-emerald-600 mb-6" size={48} />
          <h2 className="text-3xl font-heading font-bold mb-6 text-slate-900">Responsible Sourcing & Waste Management</h2>
          <p className="max-w-3xl mx-auto text-slate-600 text-lg font-light leading-relaxed mb-12">
            We select locally manufactured and recycled materials—such as bricks, cement, concrete, and countertops—to support durability and reduce transportation emissions. With strict quality control measures, we <strong className="text-slate-900 font-bold">recycle up to 75% of construction waste</strong>.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="p-4 bg-white shadow-sm border border-emerald-100 rounded-lg">
              <span className="block text-2xl font-bold text-slate-900 mb-1">75%</span>
              <span className="text-xs uppercase tracking-widest text-emerald-600">Waste Recycled</span>
            </div>
            <div className="p-4 bg-white shadow-sm border border-emerald-100 rounded-lg">
              <span className="block text-2xl font-bold text-slate-900 mb-1">100%</span>
              <span className="text-xs uppercase tracking-widest text-emerald-600">Local Sourcing</span>
            </div>
            <div className="p-4 bg-white shadow-sm border border-emerald-100 rounded-lg">
              <span className="block text-2xl font-bold text-slate-900 mb-1">A+</span>
              <span className="text-xs uppercase tracking-widest text-emerald-600">Energy Efficiency</span>
            </div>
            <div className="p-4 bg-white shadow-sm border border-emerald-100 rounded-lg">
              <span className="block text-2xl font-bold text-slate-900 mb-1">Zero</span>
              <span className="text-xs uppercase tracking-widest text-emerald-600">Transport Waste</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SustainableDesign;