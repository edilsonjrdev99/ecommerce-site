export interface Product3D {
  id: number;
  name: string;
  description: string;
  price: string;
  model: string;
  iosModel?: string;
  poster?: string;
  features: string[];
  hasAR: boolean;
  animationName?: string;
  autoplay?: boolean;
}
