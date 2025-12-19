
export interface SubLink {
  label: string;
  path: string;
}

export interface SubCategory {
  title?: string;
  links: SubLink[];
}

export interface NavItem {
  label: string;
  path?: string;
  columns?: SubCategory[]; // For mega menu columns
  simpleList?: SubLink[]; // For simple dropdowns
}

export const NAVIGATION_DATA: NavItem[] = [
  {
    label: "New Homes",
    columns: [
      {
        title: "NOW SELLING",
        links: [
          { label: "Singapore Life Phase 1, 2 And 4", path: "/new-homes/singapore-life" },
          { label: "Chouhan Green Valley Phase 1, 2, 3", path: "/new-homes/green-valley" },
          { label: "Sunrisecity", path: "/new-homes/sunrisecity" },
          { label: "Chouhan Town", path: "/new-homes/town" },
          { label: "Chouhan Parkview", path: "/new-homes/parkview" },
        ]
      },
      {
        title: "UPCOMING",
        links: [] 
      },
      {
        title: "SOLD",
        links: [
          { label: "CHPL Dream homes", path: "/new-homes/dream-home" },
          { label: "Shikhar Complex", path: "/new-homes/shikhar" },
        ] 
      }
    ]
  },
  {
    label: "Commercial",
    columns: [
      {
        title: "NOW SELLING",
        links: [
          { label: "Chouhan Business Center", path: "/commercial/business-center" },
          { label: "Chouhan Business Park", path: "/commercial/business-park" },
          { label: "Chouhan Estates", path: "/commercial/estates" },
          { label: "Chouhan Parkview Complex", path: "/commercial/parkview-complex" },
        ]
      },
      {
        title: "SOLD",
        links: [
          { label: "Chouhan Landmark", path: "/commercial/landmark" },
          { label: "Chouhan Complex", path: "/commercial/complex" },
          { label: "Chouhan Plaza", path: "/commercial/plaza" },
        ]
      },
      {
        title: "UPCOMING",
        links: [
          { label: "City Center Bhilai (Coming Soon)", path: "/commercial/city-center" },
        ]
      }
    ]
  },
  {
    label: "Hospitality",
    columns: [
      {
        links: [
          { label: "Empyrean Hotels Bhilai", path: "/hospitality/empyrean-bhilai" },
          { label: "Empyrean Resort Balod", path: "/hospitality/empyrean-balod" },
          { label: "Empyrean Kendri", path: "/hospitality/empyrean-kendri" },
          { label: "Empyrean Tumdibod", path: "/hospitality/empyrean-tumdibod" },
          { label: "Empyrean Tatiband", path: "/hospitality/empyrean-tatiband" },
          { label: "Hotel Palladio", path: "/hospitality/palladio" },
          { label: "Hotel Skypark", path: "/hospitality/skypark" },
        ]
      }
    ]
  },
  {
    label: "Automobile",
    columns: [
      {
        links: [
          { label: "Maruti Suzuki Arena", path: "/auto/maruti" },
          { label: "Nexa", path: "/auto/nexa" },
          { label: "True Value", path: "/auto/true-value" },
          { label: "Hero", path: "/auto/hero" },
          { label: "Ashok Leyland (Coming Soon)", path: "/auto/ashok" },
        ]
      }
    ]
  },
  {
    label: "Rentals",
    columns: [
      {
        title: "COMING SOON",
        links: [
          { label: "Chouhan Estates (Coming Soon)", path: "/rentals/estates" },
          { label: "Chouhan Parkview (Coming Soon)", path: "/rentals/parview" },
          { label: "City Center Mall (Coming Soon)", path: "/rentals/mall" },
          { label: "Apartments (Coming Soon)", path: "/rentals/apartments" },
          { label: "Retail Outlet (Coming Soon)", path: "/rentals/retail" },
        ]
      }
    ]
  },
  {
    label: "Customer Care",
    columns: [
      {
        links: [
          { label: "Real Estate", path: "/care/real-estate" },
          { label: "Hospitality", path: "/care/hospitality" },
          { label: "Automobiles", path: "/care/automobiles" },
        ]
      }
    ]
  },
  {
    label: "About",
    columns: [
      {
        links: [
          { label: "Our Founder", path: "/about/founder" },
          { label: "About Chouhan Group", path: "/about/group" },
          { label: "Capital Division", path: "/about/capital" },
          { label: "Charities And Sponsorship", path: "/about/charity" },
          { label: "Constructions", path: "/about/constructions" },
          { label: "Tourism", path: "/about/tourism" },
          { label: "Convention Centre", path: "/about/convention" },
          { label: "Government Projects", path: "/about/gov" },
          { label: "Sustainable Design", path: "/about/sustainable" },
          { label: "Chouhan Group Rewards", path: "/about/rewards" },
        ]
      }
    ]
  },
  {
    label: "Contact",
    path: "/contact"
  }
];
