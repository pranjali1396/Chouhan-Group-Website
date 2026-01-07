
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
    path: "/new-homes",
    columns: [
      {
        title: "NOW SELLING",
        links: [
          { label: "Singapore Life Phase 1, 2 And 4", path: "/new-homes/singapore-life" },
          { label: "Chouhan Green Valley Phase 1, 2, 3", path: "/new-homes/green-valley" },
          { label: "Sunrise City", path: "/new-homes/sunrise-city-details" }, // Assuming this should point to details based on context
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
          { label: "Chouhan Dream Homes", path: "/new-homes/dream-homes-details" },
          { label: "Shikhar Complex", path: "/commercial/shikhar-complex-details" },
        ]
      }
    ]
  },
  {
    label: "Commercial",
    path: "/commercial",
    columns: [
      {
        title: "NOW SELLING / LEASING",
        links: [
          { label: "Chouhan Business Center", path: "/commercial/business-center" },
          { label: "Chouhan Business Park", path: "/commercial/business-park" },
          { label: "Chouhan Estates", path: "/commercial/estates" },
          { label: "Chouhan Parkview Complex", path: "/commercial/parkview-complex" },
        ]
      },
      {
        title: "UPCOMING",
        links: [
          { label: "City Center Bhilai (Coming Soon)", path: "/commercial/city-center-details" },
        ]
      },
      {
        title: "SOLD",
        links: [
          { label: "Chouhan Landmark", path: "/commercial/landmark" },
          { label: "Chouhan Complex", path: "/commercial/complex" },
          { label: "Chouhan Plaza", path: "/commercial/plaza-details" },
        ]
      }
    ]
  },
  {
    label: "Hospitality",
    path: "/hospitality",
    columns: [
      {
        title: "NOW OPEN",
        links: [
          { label: "Empyrean Hotels Bhilai", path: "/hospitality/empyrean-bhilai" },
          { label: "Empyrean Resort Balod", path: "/hospitality/empyrean-balod" },
        ]
      },
      {
        title: "UPCOMING",
        links: [
          { label: "Empyrean Kendri", path: "/hospitality/empyrean-kendri" },
          { label: "Hotel Palladio", path: "/hospitality/palladio" },
          { label: "Hotel Skypark", path: "/hospitality/skypark" },
          { label: "Empyrean Tumdibod", path: "/hospitality/empyrean-tumdibod" },
          { label: "Empyrean Tatiband", path: "/hospitality/empyrean-tatiband" },
        ]
      },
      {
        title: "LEGACY",
        links: []
      }
    ]
  },
  {
    label: "Automobile",
    path: "/automobile",
    columns: [
      {
        title: "SHOWROOMS",
        links: [
          { label: "Maruti Suzuki Arena", path: "/automobile/maruti" },
          { label: "Nexa", path: "/automobile/nexa" },
          { label: "Hero", path: "/automobile/hero" },
          { label: "True Value", path: "/automobile/true-value" },
        ]
      },
      {
        title: "UPCOMING",
        links: [
          { label: "Ashok Leyland", path: "/automobile/ashok" },
        ]
      }
    ]
  },
  {
    label: "Rentals",
    path: "/rentals",
    columns: [
      {
        title: "RESIDENTIAL",
        links: [
          { label: "Chouhan Estates", path: "/rentals/estates" },
          { label: "Apartments", path: "/rentals/apartments" },
        ]
      },
      {
        title: "COMMERCIAL",
        links: [
          { label: "City Center Mall", path: "/rentals/mall" },
          { label: "Retail Outlets", path: "/rentals/retail" },
        ]
      },
      {
        title: "UPCOMING",
        links: [
          { label: "Chouhan Parkview", path: "/rentals/parview" },
        ]
      }
    ]
  },
  {
    label: "Customer Care",
    columns: [
      {
        title: "REAL ESTATE",
        links: [
          { label: "Maintenance Request", path: "/care/real-estate" },
          { label: "Payment Portal", path: "/care/real-estate" },
          { label: "Documentation", path: "/care/real-estate" },
        ]
      },
      {
        title: "DIVISION SUPPORT",
        links: [
          { label: "Hospitality Care", path: "/care/hospitality" },
          { label: "Automobile Service", path: "/care/automobiles" },
        ]
      },
      {
        title: "FEEDBACK",
        links: [
          { label: "Submit Complaint", path: "/care/contact" },
          { label: "General Inquiry", path: "/contact" },
        ]
      }
    ]
  },
  {
    label: "About",
    columns: [
      {
        title: "COMPANY",
        links: [
          { label: "Our Founder", path: "/about/founder" },
          { label: "About Chouhan Group", path: "/about/group" },
          { label: "Constructions", path: "/about/constructions" },
        ]
      },
      {
        title: "INITIATIVES",
        links: [
          { label: "Capital Division", path: "/about/capital" },
          { label: "Sustainable Design", path: "/about/sustainable" },
          { label: "Charities", path: "/about/charity" },
        ]
      },
      {
        title: "LIFESTYLE",
        links: [
          { label: "Tourism", path: "/about/tourism" },
          { label: "Convention Centre", path: "/about/convention" },
          { label: "Group Rewards", path: "/about/rewards" },
        ]
      }
    ]
  },
  {
    label: "Contact",
    path: "/contact"
  }
];
