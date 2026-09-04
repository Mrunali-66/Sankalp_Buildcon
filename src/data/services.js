// Central Source of Truth for Services & Structured Workflow

export const SERVICES_DATA = [
  {
    number: '01',
    title: 'Residential Development',
    body: 'Thoughtfully planned 1, 2 and 3 BHK homes and modern residential buildings, designed around comfort, natural light and everyday family living.',
    icon: 'building',
    image: '/assets/services/service-residential.jpg',
    imageAlt: 'Modern residential building development by Sankalp Buildcon',
  },
  {
    number: '02',
    title: 'Redevelopment',
    body: 'Structured society redevelopment — from the first consultation and structural assessment through approvals, construction and handover.',
    icon: 'redevelopment',
    image: '/assets/services/service-redevelopment.jpg',
    imageAlt: 'Society redevelopment and building transformation',
    to: '#redevelopment',
    linkLabel: 'See the redevelopment process',
  },
  {
    number: '03',
    title: 'Construction Services',
    body: 'Supervised construction from foundation to finishing, with attention to structure, workmanship and materials at every stage.',
    icon: 'construction',
    image: '/assets/services/service-construction.jpg',
    imageAlt: 'Supervised on-site construction with structural crane',
  },
  {
    number: '04',
    title: 'Project Management',
    body: 'Coordinated execution across planning, design, construction, finishing and handover, with a single point of contact throughout.',
    icon: 'management',
    image: '/assets/services/service-management.jpg',
    imageAlt: 'Project management, technical supervision and site blueprints',
  },
  {
    number: '05',
    title: 'Planning & Design Coordination',
    body: 'Site assessment, feasibility and drawings coordinated with architects and consultants so plans translate cleanly to site.',
    icon: 'planning',
    image: '/assets/services/service-planning.jpg',
    imageAlt: 'Architectural planning, feasibility drawings and blueprint layout',
  },
  {
    number: '06',
    title: 'Quality & Specifications',
    body: 'RCC structural practice, quality wall and floor finishes, and safety provisions planned and documented per project.',
    icon: 'quality',
    image: '/assets/services/service-quality.jpg',
    imageAlt: 'Premium architectural stone finishes and quality execution',
    to: '#quality',
    linkLabel: 'View quality standards',
  },
]

export const WORKFLOW_STEPS = [
  {
    number: '01',
    title: 'Site planning',
    desc: 'Layout, orientation and the constraints of the plot worked out before anything is drawn.',
    icon: 'layout',
  },
  {
    number: '02',
    title: 'Soil testing & foundation',
    desc: 'Ground investigation, then foundation work designed to the findings.',
    icon: 'soil',
  },
  {
    number: '03',
    title: 'RCC & structural work',
    desc: 'Columns, beams and slabs cast to the approved structural drawings.',
    icon: 'structure',
  },
  {
    number: '04',
    title: 'Masonry & plaster',
    desc: 'Blockwork, internal and external plaster, carried out to a consistent finish.',
    icon: 'masonry',
  },
  {
    number: '05',
    title: 'Plumbing & electrical',
    desc: 'Concealed services laid out per unit and checked before closing up.',
    icon: 'plumbing',
  },
  {
    number: '06',
    title: 'Flooring & waterproofing',
    desc: 'Floor finishes laid, wet areas and terraces waterproofed and tested.',
    icon: 'flooring',
  },
  {
    number: '07',
    title: 'Painting & fittings',
    desc: 'Internal and external paint, sanitary ware and electrical fittings installed.',
    icon: 'painting',
  },
  {
    number: '08',
    title: 'Finishing & handover',
    desc: 'Final finishing, cleaning, snagging and handover.',
    icon: 'handover',
  },
]

export const SERVICE_CARDS = SERVICES_DATA
export const PROCESS = WORKFLOW_STEPS

export const WHY = [
  { icon: 'calendar', h: 'Experience since 2012', p: 'Years of focused work in residential construction and redevelopment.' },
  { icon: 'users', h: 'Trust & transparency', p: 'Honest communication and commitments we can put in writing.' },
  { icon: 'shield', h: 'Quality construction', p: 'Workmanship, planning and materials chosen for durability.' },
  { icon: 'leaf', h: 'Better living', p: 'Developments planned for comfort, convenience and quality of life.' },
]

