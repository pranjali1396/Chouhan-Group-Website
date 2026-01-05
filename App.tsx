
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
import Hospitality from './pages/Hospitality';
import Automobile from './pages/Automobile';
import Rentals from './pages/Rentals';
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
  heroImage: "/images/singapore-life-city.png",
  mapQuery: "Chouhan Estate, Bhilai",
  websiteUrl: "https://singapore-city.vercel.app/"
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
  heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000",
  mapQuery: "Shankracharya Mahavidyalaya, Junwani, Bhilai",
  websiteUrl: "https://chouhan-park-view-xi.vercel.app/"
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
  heroImage: "/images/housing-business.png",
  mapQuery: "Chouhan Estate, Bhilai",
  websiteUrl: "https://chouhan-business-center.vercel.app/"
};

const BUSINESS_PARK_DATA: ProjectData = {
  title: "Chouhan Business Park",
  description: "Now Selling – A premier commercial destination offering world-class office spaces and retail environments. Designed for success, Chouhan Business Park integrates modern infrastructure with strategic location advantages to elevate your enterprise.",
  status: "Now Selling",
  address: "Bhilai, Chhattisgarh",
  presentationCentre: {
    address: "Chouhan Estate, Bhilai, Chhattisgarh",
    hours: "Open Daily 10AM - 8PM"
  },
  contact: {
    phone: "+91 95111 21113",
    email: "sales@chouhangroup.com"
  },
  heroImage: "/images/housing-business.png",
  mapQuery: "Chouhan Estate, Bhilai",
  websiteUrl: "https://chouhan-business-park.vercel.app/"
};

const GREEN_VALLEY_DATA: ProjectData = {
  title: "Chouhan Green Valley",
  description: "Now Selling – Experience the serenity of nature combined with modern living. Chouhan Green Valley offers premium residential plots in a lush, eco-friendly environment. Build your dream home in a community that values peace, space, and happiness.",
  status: "Now Selling",
  address: "Bhilai, Chhattisgarh",
  presentationCentre: {
    address: "Chouhan Estate, Bhilai, Chhattisgarh",
    hours: "Open Daily 10AM - 7PM"
  },
  contact: {
    phone: "+91 91091 04005",
    email: "chouhanhousing@gmail.com"
  },
  heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000",
  mapQuery: "Chouhan Estate, Bhilai",
  websiteUrl: "https://green-valley-sage.vercel.app/"
};

const EMPYREAN_BHILAI_DATA: ProjectData = {
  title: "Empyrean Hotels Bhilai",
  description: "Now Open – Experience luxury redefined at Empyrean Hotels Bhilai. Offering world-class hospitality, exquisite dining, and premium accommodation in the heart of the city. Perfect for business travelers and leisure seekers alike.",
  status: "Now Open",
  address: "GE Road, Bhilai, Chhattisgarh",
  presentationCentre: {
    address: "GE Road, Bhilai, Chhattisgarh",
    hours: "Open 24/7"
  },
  contact: {
    phone: "+91 788 404 0000",
    email: "reservations@empyreanhotels.in"
  },
  heroImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2000",
  mapQuery: "Empyrean Hotel, Bhilai",
  websiteUrl: "https://www.empyreanhotels.in/bhilai"
};

const EMPYREAN_BALOD_DATA: ProjectData = {
  title: "Empyrean Resort Balod",
  description: "Now Open – Escape to the serenity of Empyrean Resort Balod. Nestled by the lakeside, this resort offers a perfect blend of nature and luxury. Enjoy boating, infinity pools, and a tranquil atmosphere for a rejuvenating getaway.",
  status: "Now Open",
  address: "Lake Side, Balod, Chhattisgarh",
  presentationCentre: {
    address: "Lake Side, Balod, Chhattisgarh",
    hours: "Open 24/7"
  },
  contact: {
    phone: "+91 788 404 0000",
    email: "reservations@empyreanhotels.in"
  },
  heroImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2000",
  mapQuery: "Balod, Chhattisgarh",
  websiteUrl: "https://www.empyreanhotels.in/balod"
};

const CHOUHAN_TOWN_DATA: ProjectData = {
  title: "Chouhan Town",
  description: "Few Units Left – A vibrant community designed for modern families. Chouhan Town offers affordable yet premium 1 & 2 BHK apartments with essential amenities. Located in a prime area of Bhilai, it ensures connectivity, comfort, and a safe environment for your loved ones.",
  status: "Few Units Left",
  address: "Bhilai, Chhattisgarh",
  presentationCentre: {
    address: "Chouhan Estate, Bhilai, Chhattisgarh",
    hours: "Open Daily 10AM - 7PM"
  },
  contact: {
    phone: "+91 91091 04005",
    email: "chouhanhousing@gmail.com"
  },
  heroImage: "/images/housing-business.png",
  mapQuery: "Chouhan Town, Bhilai",
  websiteUrl: "https://chouhan-town.vercel.app/"
};

const CHOUHAN_ESTATES_DATA: ProjectData = {
  title: "Chouhan Estates",
  description: "Now Selling – Premier industrial and retail spaces located on the prime NH-53 highway. Chouhan Estates offers versatile warehouse spaces and high-visibility retail frontages designed for logistical efficiency and business growth. A strategic location for industrial and commercial ventures.",
  status: "Now Selling",
  address: "NH-53, Bhilai, Chhattisgarh",
  presentationCentre: {
    address: "Chouhan Estate, Bhilai, Chhattisgarh",
    hours: "Open Daily 10AM - 7PM"
  },
  contact: {
    phone: "+91 95111 21113",
    email: "sales@chouhangroup.com"
  },
  heroImage: "/images/housing-business.png",
  mapQuery: "Chouhan Estate, Bhilai",
};

const PARKVIEW_COMPLEX_DATA: ProjectData = {
  title: "Chouhan Parkview Complex",
  description: "Now Selling – A modern commercial complex situated within the prestigious Chouhan Parkview township. Offering convenience retail and office spaces to serve the vibrant residential community. The perfect location for daily needs stores, clinics, and professional offices.",
  status: "Now Selling",
  address: "Junwani Road, Bhilai, Chhattisgarh",
  presentationCentre: {
    address: "4th floor, beside Shankracharya Mahavidyalaya, Junwani Road, Bhilai",
    hours: "Open Daily 10AM - 7PM"
  },
  contact: {
    phone: "+91 72229 09449",
    email: "sales@chouhangroup.com"
  },
  heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000", // Reusing business center image as placeholder
  mapQuery: "Shankracharya Mahavidyalaya, Junwani, Bhilai",
};

const EMPYREAN_KENDRI_DATA: ProjectData = {
  title: "Empyrean Kendri",
  description: "Now Open – A premium transit boutique hotel located near Raipur Airport. Ideal for business travelers and short stays, offering modern amenities, comfortable rooms, and a rooftop lounge for relaxation. Experience efficiency and elegance combined.",
  status: "Now Open",
  address: "Near Airport, Raipur, Chhattisgarh",
  presentationCentre: {
    address: "Near Swami Vivekananda Airport, Raipur, Chhattisgarh",
    hours: "Open 24/7"
  },
  contact: {
    phone: "+91 788 404 0000",
    email: "reservations@empyreanhotels.in"
  },
  heroImage: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2000",
  mapQuery: "Swami Vivekananda Airport, Raipur",
};

const PALLADIO_DATA: ProjectData = {
  title: "Hotel Palladio",
  description: "Now Open – A classic luxury hotel situated in the prestigious Civil Lines area of Durg. Known for its timeless architecture, spacious banquet halls, and refined hospitality. The perfect venue for weddings, corporate events, and luxurious stays.",
  status: "Now Open",
  address: "Civil Lines, Durg, Chhattisgarh",
  presentationCentre: {
    address: "Civil Lines, Durg, Chhattisgarh",
    hours: "Open 24/7"
  },
  contact: {
    phone: "+91 788 404 0000",
    email: "info@hotelpalladio.in"
  },
  heroImage: "https://images.unsplash.com/photo-1551882547-ff43c63be5c2?q=80&w=2000",
  mapQuery: "Civil Lines, Durg",
};

const SKYPARK_DATA: ProjectData = {
  title: "Hotel Skypark",
  description: "Now Open – Experience contemporary comfort at Hotel Skypark. Located centrally with easy access to business districts, offering well-appointed rooms and excellent service. A preferred choice for modern travelers seeking value and quality.",
  status: "Now Open",
  address: "Bhilai, Chhattisgarh",
  presentationCentre: {
    address: "Bhilai, Chhattisgarh",
    hours: "Open 24/7"
  },
  contact: {
    phone: "+91 788 404 0000",
    email: "info@hotelskypark.in"
  },
  heroImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2000", // Using general luxury hotel image
  mapQuery: "Bhilai, Chhattisgarh",
  websiteUrl: "https://www.empyreanhotels.in/"
};

const MARUTI_DATA: ProjectData = {
  title: "Maruti Suzuki Arena",
  description: "Now Open – Your trusted destination for Maruti Suzuki vehicles. Experience the joy of mobility with our wide range of cars, state-of-the-art service center, and genuine spare parts availability. We ensure a seamless ownership experience.",
  status: "Open Now",
  address: "Bhilai & Raipur, Chhattisgarh",
  presentationCentre: {
    address: "Bhilai & Raipur, Chhattisgarh",
    hours: "Open Daily 10AM - 8PM"
  },
  contact: {
    phone: "+91 788 404 0000",
    email: "info@chouhanmaruti.com"
  },
  heroImage: "/images/maruti-arena.png",
  mapQuery: "Maruti Suzuki Arena, Bhilai",
  websiteUrl: "https://www.arenaofbhilai.com/"
};

const NEXA_DATA: ProjectData = {
  title: "Nexa Bhilai",
  description: "Now Open – Step into a world of innovation and premium experiences at Nexa Bhilai. We bring you a range of sophisticated cars designed to inspire. Enjoy personalized attention, exclusive lounges, and a test drive experience like no other.",
  status: "Open Now",
  address: "GE Road, Bhilai, Chhattisgarh",
  presentationCentre: {
    address: "GE Road, Bhilai, Chhattisgarh",
    hours: "Open Daily 10AM - 8PM"
  },
  contact: {
    phone: "+91 788 404 0000",
    email: "manager@chouhannexa.com"
  },
  heroImage: "/images/nexa-showroom.png",
  mapQuery: "Nexa, Bhilai",
  websiteUrl: "https://www.nexaofdurgbypass.com/"
};

const HERO_DATA: ProjectData = {
  title: "Hero MotoCorp",
  description: "Now Open – Ride with confidence with the world's largest two-wheeler manufacturer. Our Durg showroom offers the complete range of Hero motorcycles and scooters, backed by efficient service and genuine parts. Your journey starts here.",
  status: "Open Now",
  address: "Durg, Chhattisgarh",
  presentationCentre: {
    address: "Durg, Chhattisgarh",
    hours: "Open Daily 10AM - 8PM"
  },
  contact: {
    phone: "+91 788 404 0000",
    email: "sales@chouhanhero.com"
  },
  heroImage: "/images/hero-showroom.png",
  mapQuery: "Hero MotoCorp, Durg",
  websiteUrl: "https://chouhanmotors.com"
};

const TRUE_VALUE_DATA: ProjectData = {
  title: "Maruti Suzuki True Value",
  description: "Now Open – Trust and transparency in pre-owned cars. At True Value, every car goes through rigorous quality checks to ensure you get the best. Buy, sell, or exchange your car with complete peace of mind and excellent value.",
  status: "Open Now",
  address: "Junwani Road, Bhilai, Chhattisgarh",
  presentationCentre: {
    address: "Junwani Road, Bhilai, Chhattisgarh",
    hours: "Open Daily 10AM - 8PM"
  },
  contact: {
    phone: "+91 788 404 0000",
    email: "truevalue@chouhan.com"
  },
  heroImage: "/images/truevalue-showroom-v2.png",
  mapQuery: "True Value, Junwani, Bhilai",
  websiteUrl: "https://chouhangroup.com/truevalue"
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
          <Route path="/new-homes/green-valley" element={<ProjectDetail data={GREEN_VALLEY_DATA} />} />
          <Route path="/new-homes/town" element={<ProjectDetail data={CHOUHAN_TOWN_DATA} />} />

          <Route path="/commercial/business-center" element={<ProjectDetail data={BUSINESS_CENTER_DATA} />} />
          <Route path="/commercial/business-park" element={<ProjectDetail data={BUSINESS_PARK_DATA} />} />
          <Route path="/commercial/estates" element={<ProjectDetail data={CHOUHAN_ESTATES_DATA} />} />
          <Route path="/commercial/parkview-complex" element={<ProjectDetail data={PARKVIEW_COMPLEX_DATA} />} />

          <Route path="/commercial" element={<Commercial />} />
          <Route path="/commercial/city-center" element={<CityCenter />} />
          <Route path="/new-homes/sunrisecity" element={<SunriseLanding />} />

          <Route path="/hospitality" element={<Hospitality />} />
          <Route path="/hospitality/empyrean-bhilai" element={<ProjectDetail data={EMPYREAN_BHILAI_DATA} />} />
          <Route path="/hospitality/empyrean-balod" element={<ProjectDetail data={EMPYREAN_BALOD_DATA} />} />
          <Route path="/hospitality/empyrean-kendri" element={<ProjectDetail data={EMPYREAN_KENDRI_DATA} />} />
          <Route path="/hospitality/palladio" element={<ProjectDetail data={PALLADIO_DATA} />} />
          <Route path="/hospitality/skypark" element={<ProjectDetail data={SKYPARK_DATA} />} />

          <Route path="/automobile" element={<Automobile />} />
          <Route path="/automobile/maruti" element={<ProjectDetail data={MARUTI_DATA} />} />
          <Route path="/automobile/nexa" element={<ProjectDetail data={NEXA_DATA} />} />
          <Route path="/automobile/hero" element={<ProjectDetail data={HERO_DATA} />} />
          <Route path="/automobile/true-value" element={<ProjectDetail data={TRUE_VALUE_DATA} />} />
          <Route path="/automobile/ashok" element={<AshokLeyland />} />

          <Route path="/rentals" element={<Rentals />} />
          <Route path="/care" element={<CustomerCare />} />

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
