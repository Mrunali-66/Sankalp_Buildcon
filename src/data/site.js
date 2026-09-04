// All page content lives here, so text edits never touch the components.

export const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'founder', label: 'Our Founder' },
  { id: 'projects', label: 'Projects' },
  { id: 'redevelopment', label: 'Redevelopment' },
  { id: 'services', label: 'Services' },
  { id: 'quality', label: 'Quality & Specifications' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
]

// Home-page anchor for a nav item, or a real route if it has one.
export const navHref = (l) => l.href || `#${l.id}`

export const PILLARS = [
  { h: 'Thoughtful planning', p: 'Layouts shaped around how families actually use a home day to day.' },
  { h: 'Dependable construction', p: 'Disciplined execution and close supervision through every stage of work.' },
  { h: 'Long-term value', p: 'Decisions weighed on how a building performs years after handover.' },
]

export const REDEV_POINTS = [
  'Better planned layouts',
  'Modern infrastructure',
  'Quality construction',
  'Transparent communication',
]

export const REDEV_STEPS = [
  { no: '01', h: 'Understanding the society', p: 'Site visit, review of the existing structure, and an open discussion with members about needs and expectations.' },
  { no: '02', h: 'Planning & consultation', p: 'Feasibility, planning options, and a clear presentation of what redevelopment would actually mean for the society.' },
  { no: '03', h: 'Design & approvals', p: 'Architectural drawings, statutory documentation, and coordination with the relevant authorities.' },
  { no: '04', h: 'Construction & execution', p: 'Supervised construction in defined stages, with regular updates and a single point of contact for members.' },
  { no: '05', h: 'Modern living delivered', p: 'Handover of completed homes and common areas, with documentation in order and support through the transition.' },
]

export const SERVICES = [
  { no: '01', h: 'Residential development', p: 'Thoughtfully planned homes designed for modern living, comfort and everyday practicality.' },
  { no: '02', h: 'Redevelopment', p: 'Structured society redevelopment with clear planning, approvals and communication throughout.' },
  { no: '03', h: 'Construction services', p: 'Supervised construction with attention to structure, workmanship and finishing quality.' },
  { no: '04', h: 'Project planning', p: 'Site assessment, feasibility and planning that balances regulation with liveable design.' },
  { no: '05', h: 'Design coordination', p: 'Working with architects, consultants and contractors so drawings translate cleanly to site.' },
  { no: '06', h: 'Project execution', p: 'Stage-wise delivery, site supervision and handover with documentation in order.' },
]

export const SCHEDULE = [
  { ref: 'A1', cat: 'Structural quality', note: 'Structural design, framing and load considerations, prepared by the appointed consultant for each development.' },
  { ref: 'A2', cat: 'Construction standards', note: 'Masonry, plastering and finishing works carried out to the standards set in the approved drawings.' },
  { ref: 'B1', cat: 'Electrical planning', note: 'Point layouts, distribution and provisions planned per unit and listed in the project document.' },
  { ref: 'B2', cat: 'Plumbing systems', note: 'Water supply, drainage and fixture provisions planned at design stage and confirmed in writing.' },
  { ref: 'C1', cat: 'Flooring & finishes', note: 'Flooring, dado, paint and joinery finishes, which vary by development and unit type.' },
  { ref: 'C2', cat: 'Common areas', note: 'Entrance, staircase, lobby and terrace treatments, defined per development in the drawings.' },
  { ref: 'D1', cat: 'Safety considerations', note: 'Provisions planned in line with the approvals applicable to each project and its location.' },
  { ref: 'D2', cat: 'Water & infrastructure', note: "Storage, pumping and site infrastructure planned to each project's requirements and approvals." },
]

export const COMMITMENTS = [
  { no: '01', h: 'Built on trust', p: 'Strong relationships and responsible commitments are the foundation of every project. We say what we will do, and we put it in writing.' },
  { no: '02', h: 'Driven by quality', p: 'Careful planning and supervised execution, focused on how a building performs long after the last unit is handed over.' },
  { no: '03', h: 'Committed to better futures', p: 'Developments designed with people, communities and the next generation of residents in mind — not just the sale.' },
]

export const COMMIT_SUB = [
  { h: 'Thoughtful planning', p: 'Every layout is tested against how a family will actually live in it.' },
  { h: 'Transparency', p: 'Clear updates on progress, and no commitments we cannot document.' },
  { h: 'Long-term value', p: 'Choices weighed on maintenance and durability, not first impressions.' },
]

export const PLATES = [
  { g: 'ongoing', cls: 'p-wide', src: '/assets/projects/premraj-vihar-2.jpg', alt: 'Premraj Vihar 2.0 Master Rooftop & Terrace Planning', cap: 'Premraj Vihar 2.0 · Master Rooftop & Terrace Plan', no: '01' },
  { g: 'ongoing', cls: 'p-narrow', src: '/assets/projects/premraj-niketan.jpg', alt: 'Premraj Niketan 2.0 Contemporary Elevation', cap: 'Premraj Niketan 2.0 · Architectural Elevation', no: '02' },
  { g: 'completed', cls: 'p-narrow', src: '/assets/projects/sai-sarth-night.jpg', alt: 'Sai Sarth Residency Illuminated Evening Architectural Lighting', cap: 'Sai Sarth Residency · Evening Architectural Lighting', no: '03' },
  { g: 'completed', cls: 'p-narrow', src: '/assets/projects/minakshi-apartment.jpg', alt: 'Minakshi Apartment Facade & Balconies', cap: 'Minakshi Apartment · Opp. Tulja Bhavani Mandir', no: '04' },
  { g: 'completed', cls: 'p-wide', src: '/assets/projects/kapila-society.jpg', alt: 'Kapila Society 3D Perspective & Terrace Overview', cap: 'Kapila Society · Mula Nagar, Old Sangvi', no: '05' },
  { g: 'completed', cls: 'p-narrow', src: '/assets/projects/sai-sarth-residency.jpg', alt: 'Sai Sarth Residency Modern Elevation & Retail Frontage', cap: 'Sai Sarth Residency · Corner Elevation & Retail', no: '06' },
]

export const PROJECT_OPTIONS = [
  'Premraj Vihar 2.0 — Ongoing',
  'Shree Krupa Co-Op Housing Society — Upcoming',
  'Society redevelopment',
  'Construction services',
  'Other enquiry',
]
