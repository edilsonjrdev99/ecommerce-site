export interface PromoBanner {
  id: number;
  title: string;
  subtitle: string;
  discount: string;
  ctaText: string;
  ctaLink: string;
  backgroundColor: string;
  textColor: string;
  isActive: boolean;
  expiresAt?: Date;
}
