import { School } from './types.ts';

export const SCHOOLS: School[] = [
  {
    id: 'ecole-globale',
    rank: 1,
    name: 'Ecole Globale International Girls\' School',
    location: 'Sahaspur Road, Horawala, Dehradun',
    rating: 4.8,
    reviewCount: 655,
    fees: '₹ 7L - 10L',
    ratio: '1:10',
    board: 'CBSE / CIE',
    type: 'Girls',
    sports: ['Swimming', 'Horse Riding', 'Squash'],
    summary: 'A leading girls boarding school ranked #1 for its holistic education and modern infrastructure.',
    features: [
      '40-acre campus with scenic views',
      'Apple Distinguished School status',
      'Focus on leadership & confidence'
    ],
    image: 'https://picsum.photos/800/600?random=1',
    isFeatured: true
  },
  {
    id: 'doon-school',
    rank: 2,
    name: 'The Doon School',
    location: 'Mall Rd, Krishna Nagar, Dehradun',
    rating: 4.5,
    reviewCount: 608,
    fees: '₹ 9.7L',
    ratio: '1:10',
    board: 'IB / ISC',
    type: 'Boys',
    sports: ['Cricket', 'Soccer', 'Hockey'],
    summary: 'India\'s premier all-boys boarding school with a rich legacy since 1935.',
    features: [
      '70-acre campus',
      'Strong alumni network',
      'Focus on public service'
    ],
    image: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: 'welham-girls',
    rank: 3,
    name: 'Welham Girls\' School',
    location: 'Municipal Rd, Dalanwala, Dehradun',
    rating: 4.3,
    reviewCount: 199,
    fees: '₹ 10.25L',
    ratio: '1:10',
    board: 'ICSE / ISC',
    type: 'Girls',
    sports: ['Basketball', 'Shooting', 'Tennis'],
    summary: 'Renowned for academic excellence and diverse co-curricular activities.',
    features: [
      'Exchange programs',
      'High academic standards',
      'Cultural heritage focus'
    ],
    image: 'https://picsum.photos/800/600?random=3'
  },
  {
    id: 'welham-boys',
    rank: 4,
    name: 'Welham Boys\' School',
    location: 'Acharya Narender Dev Marg, Dehradun',
    rating: 4.3,
    reviewCount: 188,
    fees: '₹ 7.8L',
    ratio: '1:10',
    board: 'CBSE',
    type: 'Boys',
    sports: ['Football', 'Hockey', 'Squash'],
    summary: 'Providing a rigorous learning experience for boys in a supportive environment.',
    features: [
      '30-acre campus',
      'Learning Resource Centre',
      'Emphasis on character'
    ],
    image: 'https://picsum.photos/800/600?random=4'
  },
  {
    id: 'woodstock',
    rank: 5,
    name: 'Woodstock School',
    location: 'Landour, Mussoorie',
    rating: 4.4,
    reviewCount: 194,
    fees: '₹ 14L - 16L',
    ratio: '1:10',
    board: 'IB',
    type: 'Co-ed',
    sports: ['Swimming', 'Badminton', 'Cross Country'],
    summary: 'One of the oldest residential schools in Asia, located in the serene hills of Mussoorie.',
    features: [
      'International diverse community',
      'Hanifl Centre for Outdoor Ed',
      'Advanced Science Labs'
    ],
    image: 'https://picsum.photos/800/600?random=5'
  },
  {
    id: 'asian-school',
    rank: 6,
    name: 'The Asian School',
    location: 'Vasant Vihar, Indira Nagar, Dehradun',
    rating: 3.9,
    reviewCount: 385,
    fees: '₹ 7.65L',
    ratio: '1:6',
    board: 'CBSE',
    type: 'Co-ed',
    sports: ['Horse Riding', 'Skating', 'Tennis'],
    summary: 'A top co-ed boarding school offering world-class facilities and academic rigor.',
    features: [
      '16-acre campus',
      'Technology enabled learning',
      'Organic food cafeteria'
    ],
    image: 'https://picsum.photos/800/600?random=6'
  }
];

export const NAV_ITEMS = [
  { label: 'Overview', href: '#hero' },
  { label: 'Rankings', href: '#listings' },
  { label: 'Admission', href: '#admission' },
  { label: 'Reviews', href: '#reviews' },
];