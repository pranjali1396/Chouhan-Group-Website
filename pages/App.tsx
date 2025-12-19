
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import GenericPage from './pages/GenericPage';
import SunriseLanding from './pages/SunriseLanding';
import CityCenter from './pages/CityCenter';
import AshokLeyland from './pages/AshokLeyland';
import AboutGroup from './pages/AboutGroup';
import Founder from './pages/Founder';
import CapitalDivision from './pages/CapitalDivision';
import CharitySponsorship from './pages/CharitySponsorship';
import Construction from './pages/Construction';
import SustainableDesign from './pages/SustainableDesign';
import Contact from './pages/Contact';
import CustomerCare from './pages/CustomerCare';
import NewHomes from './pages/NewHomes';
import Commercial from './pages/Commercial';
import ProjectDetail, { ProjectData } from './pages/ProjectDetail';
import { NAVIGATION_DATA } from './types';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Data for specific projects
const SINGAPORE_DATA: ProjectData = {
  title: "Singapore Life Phase 1, 2 And 4",
  description: "Proudly introducing Singapore Life City. Inspired by the architecture and lifestyle of the global city-state, this project brings world-class urban planning to the heart of Chhattisgarh. Rising as a landmark township, it offers 360 degree convenience and access to extensive indoor and outdoor amenities.\n\nThe layout is designed to be self-sufficient, featuring wide roads, dedicated commercial zones, and lush parks. Don't miss your chance to be a part of this award-winning community concept.",
  status: "Now Selling",
  address: "Singapore Life City, Bhilai, Chhattisgarh",
  logoText: "Singapore Life",
  presentationCentre: {
    address: "Ground Floor, Chouhan Estate, Beside Chandra Maurya Talkies, NH53, Bhilai, Chhattisgarh",
    hours: "Open Daily (Except Tuesdays) 10AM - 7PM"
  },
  contact: {
    phone: "+91 91091 04005",
    email: "chouhanhousing@gmail.com"
  },
  heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000",
  mapQuery: "Chouhan Estate, Bhilai",
  gallery: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=600",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600",
    "https://images.unsplash.com/photo-1600585154542-630a9398402c?q=80&w=600",
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=600"
  ]
};

const PARKVIEW_DATA: ProjectData = {
  title: "Chouhan Parkview",
  description: "Rising 14 storeys above Junwani Road, Chouhan Parkview is the final opportunity to own in this award-winning high-rise community. Experience 360 degree views and access to 40,000 sq.ft. of indoor and outdoor amenities.\n\nDesigned for the modern family, Parkview combines aesthetic stunning architecture with a truly exceptional amenity offering including a sky lounge, modern clubhouse, and premium high-speed elevators.",
  status: "Final Tower Now Selling",
  address: "Junwani Road, Bhilai, Chhattisgarh",
  logoText: "Parkview",
  presentationCentre: {
    address: "4th floor, beside Shankracharya Mahavidyalaya, Junwani Road, Bhilai",
    hours: "Open Daily 10AM - 7PM"
  },
  contact: {
    phone: "+91 72229 09449",
    email: "chouhanhousing@gmail.com"
  },
  heroImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2000",
  mapQuery: "Shankracharya Mahavidyalaya, Junwani, Bhilai",
  gallery: [
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800",
    "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=800"
  ]
};

const TOWN_DATA: ProjectData = {
  title: "Chouhan Town",
  description: "Proudly introducing Chouhan Town. Rising as a landmark of affordable luxury in Bhilai, this meticulously well-planned residential community will offer 360 degree views and access to 40,000 sq.ft. of indoor and outdoor amenities. Don't miss your chance to be a part of Chouhan Town.\n\nThe final phase is now selling! Register today to stay informed. Known for its excellent connectivity and robust infrastructure, Chouhan Town provides a perfect balance of comfort and convenience for growing families.",
  status: "Few Units Left",
  address: "Junwani-Bhilai Road, Bhilai, Chhattisgarh",
  logoText: "The Town",
  presentationCentre: {
    address: "Ground Floor, Chouhan Estate, Beside Chandra Maurya Talkies, NH53, Bhilai, Chhattisgarh",
    hours: "Open Daily 10AM - 7PM"
  },
  contact: {
    phone: "+91 91091 04005",
    email: "chouhanhousing@gmail.com"
  },
  heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000",
  mapQuery: "Chouhan Town, Bhilai",
  gallery: [
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800",
    "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800"
  ]
};

const GREEN_VALLEY_DATA: ProjectData = {
  title: "Chouhan Green Valley Phase 1, 2, 3",
  description: "Experience the ultimate in low-density living. Rising as the most prestigious residential community in Bhilai, Chouhan Green Valley Phase 1, 2, and 3 will offer 360 degree natural lighting and access to premium private community amenities. Don't miss your chance to be a part of this award-winning secured community.\n\nReady to Move homes are now available for discerning buyers who value serenity and space. Residents enjoy private access to lush gardens, walkways, and a dedicated community center designed with high-end architectural finishes.",
  status: "Ready to Move",
  address: "Beside Royal Greens, Junwani Road, Bhilai, Chhattisgarh - 490020",
  logoText: "Green Valley",
  presentationCentre: {
    address: "Beside Royal Greens, Junwani Road, Bhilai, Chhattisgarh",
    hours: "Open Daily 10AM - 6PM"
  },
  contact: {
    phone: "+91 98932 53399",
    email: "chouhanhousing@gmail.com"
  },
  heroImage: "https://images.unsplash.com/photo-1600596542815-e32cb718d202?q=80&w=2000",
  mapQuery: "Chouhan Green Valley, Junwani, Bhilai",
  gallery: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800",
    "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=800",
    "https://images.unsplash.com/photo-1600585154542-630a9398402c?q=80&w=800"
  ]
};

// SOLD PROPERTIES DATA
const DREAM_HOMES_DATA: ProjectData = {
  title: "CHPL Dream Homes",
  description: "A completed residential community by Chouhan Group. CHPL Dream Homes offered premium quality construction and a strategic location in Bhilai. This project is now fully occupied and stands as a testament to our commitment to excellence and timely delivery.",
  status: "Sold",
  address: "Bhilai, Chhattisgarh",
  logoText: "Dream Homes",
  presentationCentre: {
    address: "Ground Floor, Chouhan Estate, Beside Chandra Maurya Talkies, NH53, Bhilai",
    hours: "Completed & Fully Sold"
  },
  contact: {
    phone: "+91 91091 04005",
    email: "chouhanhousing@gmail.com"
  },
  heroImage: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2000",
  mapQuery: "Chouhan Estate, Bhilai",
  gallery: [
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800"
  ]
};

const SHIKHAR_DATA: ProjectData = {
  title: "Shikhar Complex",
  description: "Shikhar Complex is a successfully completed mixed-use development by Chouhan Group. Known for its robust infrastructure and commercial viability, the project is now fully sold and operational, serving as a hub for local business and residential life.",
  status: "Sold",
  address: "Durg-Bhilai, Chhattisgarh",
  logoText: "Shikhar",
  presentationCentre: {
    address: "Ground Floor, Chouhan Estate, Beside Chandra Maurya Talkies, NH53, Bhilai",
    hours: "Completed & Fully Sold"
  },
  contact: {
    phone: "+91 91091 04005",
    email: "chouhanhousing@gmail.com"
  },
  heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000",
  mapQuery: "Chouhan Estate, Bhilai"
};

const BUSINESS_CENTER_DATA: ProjectData = {
  title: "Chouhan Business Center",
  description: "A state-of-the-art commercial hub designed for modern enterprise. Chouhan Business Center offers premium grade-A office spaces and retail outlets in the most accessible part of Bhilai. \n\nFeaturing advanced building management systems, ample multi-level parking, and high-speed connectivity, it is engineered for the visionaries of tomorrow. Limited inventory now available for sale and lease.",
  status: "Now Selling & Leasing",
  address: "GE Road, Bhilai, Chhattisgarh",
  logoText: "Business Center",
  presentationCentre: {
    address: "Ground Floor, Chouhan Estate, Beside Chandra Maurya Talkies, NH53, Bhilai",
    hours: "Open Daily 10AM - 8PM"
  },
  contact: {
    phone: "+91 95111 21113",
    email: "sales@chouhangroup.com"
  },
  heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000",
  mapQuery: "Chouhan Estate, Bhilai",
  gallery: [
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800",
    "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?q=80&w=800",
    "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=800",
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800"
  ]
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-slate-900 bg-white selection:bg-amber-100 selection:text-amber-900">
        <Header navData={NAVIGATION_DATA} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-homes" element={<NewHomes />} />
          <Route path="/commercial" element={<Commercial />} />
          
          {/* Specific Project Routes using the refined ProjectDetail Layout */}
          <Route path="/new-homes/singapore-life" element={<ProjectDetail data={SINGAPORE_DATA} />} />
          <Route path="/new-homes/parkview" element={<ProjectDetail data={PARKVIEW_DATA} />} />
          <Route path="/new-homes/town" element={<ProjectDetail data={TOWN_DATA} />} />
          <Route path="/new-homes/green-valley" element={<ProjectDetail data={GREEN_VALLEY_DATA} />} />
          
          {/* Sold Properties Routes */}
          <Route path="/new-homes/dream-home" element={<ProjectDetail data={DREAM_HOMES_DATA} />} />
          <Route path="/new-homes/shikhar" element={<ProjectDetail data={SHIKHAR_DATA} />} />
          
          {/* Commercial Specific Project Routes */}
          <Route path="/commercial/business-center" element={<ProjectDetail data={BUSINESS_CENTER_DATA} />} />
          <Route path="/commercial/city-center" element={<CityCenter />} />
          
          {/* Custom Landings */}
          <Route path="/new-homes/sunrisecity" element={<SunriseLanding />} />
          
          {/* Automobiles */}
          <Route path="/auto/ashok" element={<AshokLeyland />} />

          <Route path="/about/group" element={<AboutGroup />} />
          <Route path="/about/founder" element={<Founder />} />
          <Route path="/about/capital" element={<CapitalDivision />} />
          <Route path="/about/charity" element={<CharitySponsorship />} />
          <Route path="/about/constructions" element={<Construction />} />
          <Route path="/about/sustainable" element={<SustainableDesign />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/care/:category" element={<CustomerCare />} />
          
          {/* Generic routes for others */}
          <Route path="/:category/:sub" element={<GenericPage />} />
          <Route path="/:category" element={<GenericPage />} />
          <Route path="*" element={<Home />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
