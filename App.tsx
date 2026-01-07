
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
import ChouhanEstateLanding from './pages/ChouhanEstateLanding';
import ChouhanLandmarkLanding from './pages/ChouhanLandmarkLanding';
import ChouhanCityCenterLanding from './pages/ChouhanCityCenterLanding';
import ShikharComplexLanding from './pages/ShikharComplexLanding';
import ChouhanDreamHomesLanding from './pages/ChouhanDreamHomesLanding';
import ChouhanPlazaLanding from './pages/ChouhanPlazaLanding';

import { NAVIGATION_DATA } from './types';

// Scroll to top or to specific hash on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // With HashRouter, sometimes the hash is part of the pathname if using simple <Link>
    // but react-router-dom should handle it. However, we check both.
    const scrollTarget = hash || (pathname.includes('#') ? '#' + pathname.split('#')[1] : null);

    if (!scrollTarget) {
      window.scrollTo(0, 0);
    } else {
      const id = scrollTarget.replace('#', '');

      // Try multiple times to scroll as content might take time to render
      const tryScroll = (count: number) => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 100;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        } else if (count < 10) {
          setTimeout(() => tryScroll(count + 1), 200);
        }
      };

      tryScroll(0);
    }
  }, [pathname, hash]);

  return null;
};

// Data for specific projects
const SINGAPORE_DATA: ProjectData = {
  title: "Singapore Life City",
  description: "Now Selling – a self-sufficient integrated township inspired by the architecture and lifestyle of Singapore. Situated in Bhilai, featuring lush green landscapes, wide roads, and a plethora of amenities, Singapore Life City offers a global living experience. We encourage you to stay informed as this exciting new project begins to make its mark.",
  status: "Now Selling",
  address: "Singapore Life City, Bhilai, Chhattisgarh",
  presentationCentre: {
    address: "4th floor, beside Shankracharya Mahavidyalaya, Junwani Road, Bhilai",
    hours: "Open Daily 10AM - 7PM"
  },
  contact: {
    phone: "+91 91091 04005",
    email: "chouhanhousing@gmail.com"
  },
  heroImage: "/new images/herosingapore_optimized.webp",
  mapQuery: "CHOUHAN SINGAPORE LIFE CITY PHASE 1",
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
  heroImage: "/new images/chouhan_park_view_3.webp",
  mapQuery: "Chouhan Parkview",
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
  heroImage: "/new images/Businesscenter_hero.jpg",
  mapQuery: "Chouhan Business Center Phase-1",
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
  heroImage: "/new images/chouhan_business_park_ai.png",
  mapQuery: "Chouhan Business Center Phase-1",
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
  heroImage: "/new images/chouhan-green-valley-4 (1).webp",
  mapQuery: "Chouhan Green Valley Rd",
  websiteUrl: "https://green-valley-sage.vercel.app/"
};

const EMPYREAN_BHILAI_DATA: ProjectData = {
  title: "Empyrean Hotels Bhilai",
  description: "Now Open – Experience luxury redefined at Empyrean Hotels Bhilai. Offering world-class hospitality, exquisite dining, and premium accommodation in the heart of the city. Perfect for business travelers and leisure seekers alike.",
  status: "Now Open",
  address: "6856+QCJ, Durg Bypass, Padmanabhpur, Pushpak Nagar, near Maruti Suzuki Arena, Bhilai, Chhattisgarh 490020, India",
  presentationCentre: {
    address: "6856+QCJ, Durg Bypass, Padmanabhpur, Pushpak Nagar, near Maruti Suzuki Arena, Bhilai, Chhattisgarh 490020, India",
    hours: "Open 24/7"
  },
  contact: {
    phone: "+91 788 404 0000",
    email: "reservations@empyreanhotels.in"
  },
  heroImage: "/new images/chouhan2.jpg",
  mapQuery: "Empyrean hotels & resort, Bhilai",
  websiteUrl: "https://www.empyreanhotels.in/bhilai"
};

const EMPYREAN_BALOD_DATA: ProjectData = {
  title: "Empyrean Resort Balod",
  description: "Now Open – Escape to the serenity of Empyrean Resort Balod. Nestled by the lakeside, this resort offers a perfect blend of nature and luxury. Enjoy boating, infinity pools, and a tranquil atmosphere for a rejuvenating getaway.",
  status: "Now Open",
  address: "Tandula Dm Rd, Balod, Sivni, Chhattisgarh 491226",
  presentationCentre: {
    address: "Tandula Dm Rd, Balod, Sivni, Chhattisgarh 491226",
    hours: "Open 24/7"
  },
  contact: {
    phone: "+91 788 404 0000",
    email: "reservations@empyreanhotels.in"
  },
  heroImage: "/new images/ELR_Balod_104_optimized.webp",
  mapQuery: "Empyrean Lake Resort",
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
  heroImage: "/new images/chouhan_town_overview.webp",
  mapQuery: "Chouhan Town, Bhilai",
  websiteUrl: "https://chouhan-town.vercel.app/"
};

const CHOUHAN_ESTATES_DATA: ProjectData = {
  title: "Chouhan Estates",
  description: "Now Renting – Premier industrial and retail spaces located on the prime NH-53 highway. Chouhan Estates offers versatile warehouse spaces and high-visibility retail frontages designed for logistical efficiency and business growth. A strategic location for industrial and commercial ventures.",
  status: "Now Renting",
  address: "NH-53, Bhilai, Chhattisgarh",
  presentationCentre: {
    address: "Chouhan Estate, Bhilai, Chhattisgarh",
    hours: "Open Daily 10AM - 7PM"
  },
  contact: {
    phone: "+91 95111 21113",
    email: "sales@chouhangroup.com"
  },
  heroImage: "/new images/chouhan_estate.webp",
  mapQuery: "Chouhan Estate, Bhilai",
  websiteUrl: "/commercial/estate-details"
};

const SUNRISE_CITY_DATA: ProjectData = {
  title: "Sunrise City",
  description: "A Premier Plot Investment Opportunity in Durg. Strategically located near IIT Bhilai, Chouhan Sunrise City is more than just a plotted residential project — it's a community designed for those who seek space, peace of mind, and long-term investment growth.",
  status: "New Launch",
  address: "Dhamdha Road, Durg, Chhattisgarh",
  presentationCentre: {
    address: "Dhamdha Road, Durg, Chhattisgarh",
    hours: "Open Daily 10AM - 7PM"
  },
  contact: {
    phone: "+91 91091 04005",
    email: "chouhanhousing@gmail.com"
  },
  heroImage: "/new images/chouhan_sunrise_city_img_3.webp",
  mapQuery: "Sunrise City, Bhilai",
  websiteUrl: "/new-homes/sunrise-city"
};

const PARKVIEW_COMPLEX_DATA: ProjectData = {
  title: "Chouhan Parkview Complex",
  description: "Now Selling – A distinct modern commercial complex situated within the prestigious Chouhan Parkview township. Offering convenience retail and office spaces to serve the vibrant residential community. The perfect location for daily needs stores, clinics, and professional offices.",
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
  heroImage: "new images/chouhan_park_view_4.webp", // Reusing business center image as placeholder
  mapQuery: "Chouhan Parkview Complex, Junwani Road, Bhilai",
  websiteUrl: "https://chouhan-park-view-xi.vercel.app/commercial"
};

const CHOUHAN_LANDMARK_DATA: ProjectData = {
  title: "Chouhan Landmark",
  description: "Sold Out – A landmark success story, fully leased to Vishal Mega Mart. This premium commercial complex serves as a major retail destination in Bhilai.",
  status: "Sold",
  address: "NH-53, Bhilai, Chhattisgarh",
  presentationCentre: {
    address: "Chouhan Estate, Bhilai, Chhattisgarh",
    hours: "Closed - Project Sold Out"
  },
  contact: {
    phone: "+91 91091 04005",
    email: "chouhanhousing@gmail.com"
  },
  heroImage: "/images/vishal mega mart.jpg",
  mapQuery: "Vishal Mega Mart, NH-53, Bhilai",
  websiteUrl: "/commercial/landmark-details"
};

const CHOUHAN_CITY_CENTER_DATA: ProjectData = {
  title: "Chouhan City Center",
  description: "Coming Soon – Bhilai's premier destination for shopping and entertainment. Spanning 15 acres, this landmark project features a state-of-the-art multiplex with 5 screens and 1200 seats, comprehensive Family Entertainment Center, retail blocks, food mall, and vibrant children's park.",
  status: "Coming Soon",
  address: "Bhilai, Chhattisgarh",
  presentationCentre: {
    address: "Chouhan City Center, Bhilai, Chhattisgarh",
    hours: "Coming Soon - 2024"
  },
  contact: {
    phone: "+91 91091 04005",
    email: "chouhanhousing@gmail.com"
  },
  heroImage: "/images/chouhan_city_center_hero.png",
  mapQuery: "Chouhan City Centre, Bhilai",
  websiteUrl: "/commercial/city-center"
};

const CHOUHAN_PLAZA_DATA: ProjectData = {
  title: "Chouhan Plaza",
  description: "Sold Out – A bustling retail hub in Bhilai that has become a favorite destination for shoppers. With its strategic location and centralized air conditioning, Chouhan Plaza offers a comfortable and convenient shopping experience. Home to multiple leading brands.",
  status: "Sold",
  address: "Bhilai, Chhattisgarh",
  presentationCentre: {
    address: "Bhilai, Chhattisgarh",
    hours: "Closed - Project Sold Out"
  },
  contact: {
    phone: "+91 95111 21113",
    email: "sales@chouhangroup.com"
  },
  heroImage: "/new images/chouhan_plaza_ai.png",
  mapQuery: "Chouhan Plaza, Bhilai",
  websiteUrl: "/commercial/plaza-details"
};

const CHOUHAN_COMPLEX_DATA: ProjectData = {
  title: "Chouhan Complex",
  description: "Sold Out – A prominent commercial hub in Supela, Bhilai. Known for its strategic location and vibrant mix of retail shops and office spaces.",
  status: "Sold",
  address: "Supela, Bhilai, Chhattisgarh",
  presentationCentre: {
    address: "Supela, Bhilai, Chhattisgarh",
    hours: "Closed - Project Sold Out"
  },
  contact: {
    phone: "+91 95111 21113",
    email: "sales@chouhangroup.com"
  },
  heroImage: "/new images/kmart.webp",
  mapQuery: "Shubham K Mart,junwani road",
  websiteUrl: "https://chouhan-complex.vercel.app/"
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
  address: "Service Lane, Pushpak Nagar, Smriti Nagar, Chhattisgarh 490020",
  presentationCentre: {
    address: "Service Lane, Pushpak Nagar, Smriti Nagar, Chhattisgarh 490020",
    hours: "Open Daily 10AM - 8PM"
  },
  contact: {
    phone: "+91 788 404 0000",
    email: "info@chouhanmaruti.com"
  },
  heroImage: "/new images/Arena.webp",
  mapQuery: "Maruti Suzuki ARENA (Chouhan Automobiles, Bhilai, Durg Bypass",
  websiteUrl: "https://www.arenaofbhilai.com/"
};

const NEXA_DATA: ProjectData = {
  title: "Nexa Bhilai",
  description: "Now Open – Step into a world of innovation and premium experiences at Nexa Bhilai. We bring you a range of sophisticated cars designed to inspire. Enjoy personalized attention, exclusive lounges, and a test drive experience like no other.",
  status: "Open Now",
  address: "Service Lane, Pushpak Nagar, Smriti Nagar, Chhattisgarh 490020",
  presentationCentre: {
    address: "Service Lane, Pushpak Nagar, Smriti Nagar, Chhattisgarh 490020",
    hours: "Open Daily 10AM - 8PM"
  },
  contact: {
    phone: "+91 788 404 0000",
    email: "manager@chouhannexa.com"
  },
  heroImage: "/new images/maruti-suzuki.webp",
  mapQuery: "Maruti Suzuki True Value (Chouhan Automobiles LLP, Bhilai, Nehru Nagar)",
  websiteUrl: "https://www.nexaofdurgbypass.com/"
};

const HERO_DATA: ProjectData = {
  title: "Hero MotoCorp",
  description: "Now Open – Ride with confidence with the world's largest two-wheeler manufacturer. Our Durg showroom offers the complete range of Hero motorcycles and scooters, backed by efficient service and genuine parts. Your journey starts here.",
  status: "Open Now",
  address: "Service Lane, Pushpak Nagar, Smriti Nagar, Chhattisgarh 490020",
  presentationCentre: {
    address: "Service Lane, Pushpak Nagar, Smriti Nagar, Chhattisgarh 490020",
    hours: "Open Daily 10AM - 8PM"
  },
  contact: {
    phone: "+91 788 404 0000",
    email: "sales@chouhanhero.com"
  },
  heroImage: "/new images/herofinal.webp",
  mapQuery: "Maruti Suzuki True Value (Chouhan Automobiles LLP, Bhilai, Nehru Nagar)",
  websiteUrl: "https://chouhanmotors.com"
};

const TRUE_VALUE_DATA: ProjectData = {
  title: "Maruti Suzuki True Value",
  description: "Now Open – Trust and transparency in pre-owned cars. At True Value, every car goes through rigorous quality checks to ensure you get the best. Buy, sell, or exchange your car with complete peace of mind and excellent value.",
  status: "Open Now",
  address: "Service Lane, Pushpak Nagar, Smriti Nagar, Chhattisgarh 490020",
  presentationCentre: {
    address: "Service Lane, Pushpak Nagar, Smriti Nagar, Chhattisgarh 490020",
    hours: "Open Daily 10AM - 8PM"
  },
  contact: {
    phone: "+91 788 404 0000",
    email: "truevalue@chouhan.com"
  },
  heroImage: "/new images/trueshowroom.webp",
  mapQuery: "Maruti Suzuki True Value (Chouhan Automobiles LLP, Bhilai, Nehru Nagar)",
  websiteUrl: "https://chouhangroup.com/truevalue"
};

const SHIKHAR_COMPLEX_DATA: ProjectData = {
  title: "Shikhar Complex",
  description: "Sold Out – A prominent commercial landmark in Bhilai.",
  status: "Sold",
  address: "Bhilai, Chhattisgarh",
  presentationCentre: {
    address: "Bhilai, Chhattisgarh",
    hours: "Closed - Project Sold Out"
  },
  contact: {
    phone: "+91 95111 21113",
    email: "sales@chouhangroup.com"
  },
  heroImage: "/images/housing-business.png", // Placeholder
  mapQuery: "Shikhar Apartments",
  websiteUrl: "/commercial/shikhar-complex"
};

const CHOUHAN_DREAM_HOMES_DATA: ProjectData = {
  title: "Chouhan Dream Homes",
  description: "Sold Out – Affordable luxury for every family.",
  status: "Sold",
  address: "Bhilai, Chhattisgarh",
  presentationCentre: {
    address: "Bhilai, Chhattisgarh",
    hours: "Closed - Project Sold Out"
  },
  contact: {
    phone: "+91 91091 04005",
    email: "chouhanhousing@gmail.com"
  },
  heroImage: "/chouhan_dream_homes_1.webp", // Placeholder
  mapQuery: "CHPL DREAM HOMES D BLOCK",
  websiteUrl: "/new-homes/dream-homes"
};


const AppContent: React.FC = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/commercial/estate-details' || location.pathname === '/commercial/landmark-details' || location.pathname === '/commercial/city-center' || location.pathname === '/new-homes/sunrise-city' || location.pathname === '/commercial/shikhar-complex' || location.pathname === '/new-homes/dream-homes' || location.pathname === '/commercial/plaza-details';

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-900 bg-white selection:bg-amber-100 selection:text-amber-900">
      {!hideHeaderFooter && <Header navData={NAVIGATION_DATA} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-homes" element={<NewHomes />} />

        {/* Specific Project Routes */}
        <Route path="/new-homes/singapore-life" element={<ProjectDetail data={SINGAPORE_DATA} />} />
        <Route path="/new-homes/parkview" element={<ProjectDetail data={PARKVIEW_DATA} />} />
        <Route path="/new-homes/green-valley" element={<ProjectDetail data={GREEN_VALLEY_DATA} />} />
        <Route path="/new-homes/town" element={<ProjectDetail data={CHOUHAN_TOWN_DATA} />} />
        <Route path="/new-homes/sunrise-city-details" element={<ProjectDetail data={SUNRISE_CITY_DATA} />} />
        <Route path="/new-homes/sunrise-city" element={<SunriseLanding />} />
        <Route path="/new-homes/dream-homes-details" element={<ProjectDetail data={CHOUHAN_DREAM_HOMES_DATA} />} />
        <Route path="/new-homes/dream-homes" element={<ChouhanDreamHomesLanding />} />

        <Route path="/commercial/business-center" element={<ProjectDetail data={BUSINESS_CENTER_DATA} />} />
        <Route path="/commercial/business-park" element={<ProjectDetail data={BUSINESS_PARK_DATA} />} />
        <Route path="/commercial/estates" element={<ProjectDetail data={CHOUHAN_ESTATES_DATA} />} />
        <Route path="/commercial/parkview-complex" element={<ProjectDetail data={PARKVIEW_COMPLEX_DATA} />} />
        <Route path="/commercial/landmark" element={<ProjectDetail data={CHOUHAN_LANDMARK_DATA} />} />
        <Route path="/commercial/plaza-details" element={<ChouhanPlazaLanding />} />
        <Route path="/commercial/plaza" element={<ProjectDetail data={CHOUHAN_PLAZA_DATA} />} />
        <Route path="/commercial/complex" element={<ProjectDetail data={CHOUHAN_COMPLEX_DATA} />} />
        <Route path="/commercial/shikhar-complex-details" element={<ProjectDetail data={SHIKHAR_COMPLEX_DATA} />} />
        <Route path="/commercial/shikhar-complex" element={<ShikharComplexLanding />} />

        <Route path="/commercial" element={<Commercial />} />
        <Route path="/commercial/city-center-details" element={<ProjectDetail data={CHOUHAN_CITY_CENTER_DATA} />} />
        <Route path="/commercial/city-center" element={<ChouhanCityCenterLanding />} />
        <Route path="/commercial/estate-details" element={<ChouhanEstateLanding />} />
        <Route path="/commercial/landmark-details" element={<ChouhanLandmarkLanding />} />

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

      {!hideHeaderFooter && <Footer />}
    </div>
  );
};


const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
};

export default App;
