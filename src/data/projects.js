// One entry per project sheet. The slug becomes /projects/<slug> later.

export const PROJECTS = [
  {
    slug: 'premraj-vihar-2',
    status: 'ongoing',
    statusLabel: 'Ongoing project',
    statusClass: 'stat',
    name: 'Premraj Vihar 2.0',
    where: 'Anand Nagar, Old Sangvi, Pune – 27',
    cover: 'assets/projects/premraj-vihar-1.jpg',
    shots: [
      'assets/projects/premraj-vihar-2.jpg',
      'assets/projects/premraj-vihar-3.jpg',
      'assets/projects/premraj-vihar-4.jpg',
    ],
    lead: 'A residential development of 1 & 2 BHK homes currently under construction in Anand Nagar. Planning focuses on efficient layouts, natural light and ventilation, in a location already served by established local amenities.',
    facts: [
      { dt: 'Status', dd: 'Ongoing · under construction' },
      { dt: 'Configuration', dd: '1 & 2 BHK homes' },
      { dt: 'Location', dd: 'Anand Nagar, Old Sangvi, Pune – 27' },
      { dt: 'Carpet area', dd: 'To be confirmed', pending: true },
      { dt: 'Possession', dd: 'To be confirmed', pending: true },
    ],
    note: 'Floor plans, amenities and possession timeline — awaiting client content',
    cta: 'Enquire about this project',
    extraCta: { href: '#gallery', label: 'See site photographs' },
  },
  {
    slug: 'shree-krupa',
    status: 'upcoming',
    statusLabel: 'Upcoming project',
    statusClass: 'stat stat--soon',
    name: 'Shree Krupa Co-Op Housing Society',
    where: 'Dhore Nagar Chowk, Old Sangvi, Pune – 27',
    cover: 'assets/projects/shree-krupa-1.jpg',
    shots: [
      'assets/projects/shree-krupa-2.jpg',
      'assets/projects/shree-krupa-3.jpg',
      'assets/projects/shree-krupa-4.jpg',
    ],
    lead: 'An upcoming development at Dhore Nagar Chowk, Old Sangvi. Site photographs are shown above. Configuration, plans and other project details will be published here once they are finalised.',
    facts: [
      { dt: 'Status', dd: 'Upcoming' },
      { dt: 'Location', dd: 'Dhore Nagar Chowk, Old Sangvi, Pune – 27' },
      { dt: 'Configuration', dd: 'To be announced', pending: true },
      { dt: 'Details', dd: 'Coming soon', pending: true },
    ],
    note: 'Project details coming soon',
    cta: 'Register your interest',
    extraCta: null,
  },
]

export const getProject = (slug) => PROJECTS.find((p) => p.slug === slug)
