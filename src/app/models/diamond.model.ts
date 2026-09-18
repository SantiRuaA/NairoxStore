export interface DiamondPackage {
  id: string;
  name: string;
  diamonds: number;
  bonus: number;
  price: number;
  originalPrice?: number;
  currency: string;
  isPopular?: boolean;
  category: 'diamonds' | 'membership' | 'pass';
  deliveryTime: string;
  badge?: string;
  icon: string;
}
