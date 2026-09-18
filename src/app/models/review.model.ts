export interface Review {
  id: string;
  author: string;
  avatar?: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  productPurchased: string;
  proofImage?: string;
  country?: string;
  likesCount?: number;
}
