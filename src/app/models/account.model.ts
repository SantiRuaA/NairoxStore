export interface EvoWeapon {
  name: string;
  level: string;
  maxLevel: number;
  currentLevel: number;
}

export interface Account {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  currency: string;
  region: string;
  level: number;
  likes: number;
  loginType: 'Google' | 'Facebook' | 'VK' | 'Twitter';
  badge?: string;
  badgeColor?: 'cyan' | 'pink' | 'amber' | 'emerald';
  status: 'available' | 'reserved' | 'sold';
  rank: string;
  passesCount: number;
  coverImage: string;
  videoUrl?: string;
  images: string[];
  tags: string[];
  evoWeapons: EvoWeapon[];
  exclusiveSkins: string[];
  description: string;
  createdAt?: string;
}
