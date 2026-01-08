export interface School {
  id: string;
  rank: number;
  name: string;
  location: string;
  rating: number;
  reviewCount: number;
  fees: string;
  ratio: string;
  board: string;
  type: 'Girls' | 'Boys' | 'Co-ed';
  sports: string[];
  summary: string;
  features: string[];
  image: string;
  isFeatured?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}