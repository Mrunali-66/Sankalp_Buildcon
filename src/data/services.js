// Central Source of Truth for Services & Structured Workflow

export const SERVICES_DATA = [
  {
    number: '01',
    title: 'Residential Development',
    body: 'Thoughtfully planned 1, 2 and 3 BHK homes and modern residential buildings, designed around comfort, natural light and everyday family living.',
    icon: 'building',
    image: '/assets/services/service-residential.jpg',
    imageAlt: 'Modern residential building development by Sankalp Buildcon',
    to: '#projects',
    linkLabel: 'Learn more',
  },
  {
    number: '02',
    title: 'Redevelopment',
    body: 'Structured society redevelopment — from the first consultation and structural assessment through approvals, construction and handover.',
    icon: 'redevelopment',
    image: '/assets/services/service-redevelopment.jpg',
    imageAlt: 'Society redevelopment and contemporary building transformation',
    to: '#redevelopment',
    linkLabel: 'Learn more',
  },
  {
    number: '03',
    title: 'Construction Services',
    body: 'Supervised construction from foundation to finishing, with attention to structure, workmanship and materials at every stage.',
    icon: 'construction',
    image: '/assets/services/service-construction.jpg',
    imageAlt: 'Supervised construction site with crane and structural framework',
    to: '#workflow',
    linkLabel: 'Learn more',
  },
  {
    number: '04',
    title: 'Project Management',
    body: 'Coordinated execution across planning, design, construction, finishing and handover, with a single point of contact throughout.',
    icon: 'management',
    image: '/assets/services/service-management.jpg',
    imageAlt: 'Project management, site supervision helmet and blueprints',
    to: '#workflow',
    linkLabel: 'Learn more',
  },
  {
    number: '05',
    title: 'Planning & Design Coordination',
    body: 'Site assessment, feasibility and seamless coordination with architects and consultants so plans translate clearly to site.',
    icon: 'planning',
    image: '/assets/services/service-planning.jpg',
    imageAlt: 'Architectural blueprints, workspace and design coordination',
    to: '#workflow',
    linkLabel: 'Learn more',
  },
  {
    number: '06',
    title: 'Quality & Specifications',
    body: 'RCC structural practice, quality wall and floor finishes, and safety provisions planned and documented per project.',
    icon: 'quality',
    image: '/assets/services/service-quality.jpg',
    imageAlt: 'Premium architectural wall finishes and quality structural execution',
    to: '#quality',
    linkLabel: 'Learn more',
  },
]

export const WORKFLOW_STEPS = [
  {
    number: '01',
    title: 'Site Planning',
    desc: 'We start with detailed site analysis and layout planning to build the right foundation.',
    icon: 'layout',
    checklist: [
      'Site survey & analysis',
      'Plot orientation & zoning',
      'Regulatory compliance',
      'Work schedule planning',
    ],
    illustration: 'blueprint',
  },
  {
    number: '02',
    title: 'Soil Testing & Foundation',
    desc: 'Strong structures begin underground with precise testing and foundation work.',
    icon: 'soil',
    checklist: [
      'Soil investigation',
      'Foundation design',
      'Excavation & levelling',
      'PCC & footing work',
    ],
    illustration: 'foundation',
  },
  {
    number: '03',
    title: 'RCC & Structural Work',
    desc: 'Building the skeleton with high-grade materials and engineered precision.',
    icon: 'structure',
    checklist: [
      'Column & beam casting',
      'Slab & stair construction',
      'Structural quality checks',
      'Safety & curing process',
    ],
    illustration: 'frame',
  },
  {
    number: '04',
    title: 'Masonry & Plaster',
    desc: 'Shaping the spaces with strong masonry and smooth finishes.',
    icon: 'masonry',
    checklist: [
      'Wall construction',
      'Internal & external plaster',
      'Lintels & chajjas',
      'Surface leveling',
    ],
    illustration: 'wall',
  },
  {
    number: '05',
    title: 'Plumbing & Electrical',
    desc: 'Concealed services laid out per unit and checked before closing up.',
    icon: 'plumbing',
    checklist: [
      'Plumbing installation',
      'Electrical wiring',
      'Concealed services',
      'System testing',
    ],
    illustration: 'pipes',
  },
  {
    number: '06',
    title: 'Flooring & Waterproofing',
    desc: 'Floor finishes laid, wet areas and terraces waterproofed and tested.',
    icon: 'flooring',
    checklist: [
      'Flooring & tiling',
      'Waterproofing (bath, terrace)',
      'Drainage slope checks',
      'Water ponding test',
    ],
    illustration: 'tiles',
  },
  {
    number: '07',
    title: 'Painting & Fittings',
    desc: 'Internal and external paint, sanitary ware and electrical fittings installed.',
    icon: 'painting',
    checklist: [
      'Wall putty & primer',
      'Interior & exterior painting',
      'Sanitary ware installation',
      'Electrical fittings',
    ],
    illustration: 'paint',
  },
  {
    number: '08',
    title: 'Finishing & Handover',
    desc: 'Final finishing, cleaning, snagging and handover with complete documentation.',
    icon: 'handover',
    checklist: [
      'Final inspection & snagging',
      'Cleaning & polishing',
      'Handover documentation',
      'Post-handover support',
    ],
    illustration: 'door',
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

