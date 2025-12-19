
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
  title: "Singapore Life City",
  description: "Now Selling – a self-sufficient integrated township inspired by the architecture and lifestyle of Singapore. Situated in Bhilai, featuring lush green landscapes, wide roads, and a plethora of amenities, Singapore Life City offers a global living experience. We encourage you to stay informed as this exciting new project begins to make its mark.",
  status: "Now Selling",
  address: "Singapore Life City, Bhilai, Chhattisgarh",
  presentationCentre: {
    address: "Ground Floor, Chouhan Estate, Beside Chandra Maurya Talkies, NH53, Bhilai, Chhattisgarh",
    hours: "Open Daily (Except Tuesdays) 10AM - 7PM"
  },
  contact: {
    phone: "+91 91091 04005",
    email: "chouhanhousing@gmail.com"
  },
  heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000",
  mapQuery: "Chouhan Estate, Bhilai"
};

const PARKVIEW_DATA: ProjectData = {
  title: "Chouhan Parkview",
  description: "Now Selling – Premium high-rise apartments on Junwani Road. Experience elevated living with a Sky Lounge, modern clubhouse, and panoramic views of the city. Situated in the heart of Bhilai's educational hub featuring stunning architecture and a truly exceptional amenity offering.",
  status: "Now Selling",
  address: "Junwani Road, Bhilai, Chhattisgarh",
  presentationCentre: {
    address: "4th floor, beside Shankracharya Mahavidyalaya, Junwani Road, Bhilai",
    hours: "Open Daily 10AM - 7PM"
  },
  contact: {
    phone: "+91 72229 09449",
    email: "chouhanhousing@gmail.com"
  },
  heroImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2000",
  mapQuery: "Shankracharya Mahavidyalaya, Junwani, Bhilai"
};

const BUSINESS_CENTER_DATA: ProjectData = {
  title: "Chouhan Business Center",
  description: "Now Selling – A state-of-the-art commercial hub designed for modern businesses. Offering premium office spaces, retail outlets, and robust infrastructure to accelerate your business growth. Located centrally to provide maximum visibility and accessibility.",
  status: "Now Selling",
  address: "GE Road, Bhilai, Chhattisgarh",
  presentationCentre: {
    address: "Ground Floor, Chouhan Estate, Beside Chandra Maurya Talkies, NH53, Bhilai",
    hours: "Open Daily 10AM - 8PM"
  },
  contact: {
    phone: "+91 95111 21113",
    email: "sales@chouhangroup.com"
  },
  heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000",
  mapQuery: "Chouhan Estate, Bhilai"
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
          
          {/* Specific Project Routes */}
          <Route path="/new-homes/singapore-life" element={<ProjectDetail data={SINGAPORE_DATA} />} />
          <Route path="/new-homes/parkview" element={<ProjectDetail data={PARKVIEW_DATA} />} />
          <Route path="/commercial/business-center" element={<ProjectDetail data={BUSINESS_CENTER_DATA} />} />
          
          {/* Commercial / Custom Pages */}
          <Route path="/commercial/city-center" element={<CityCenter />} />
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
