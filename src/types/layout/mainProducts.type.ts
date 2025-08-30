export interface MainProducts {
  id: number;
  name: string;
  description: string;
  price: number;
  discountValue?: number;
  image: string;
}

export interface ProductDetail extends MainProducts {
  brand: string;
  category: string;
  rating: number;
  reviewCount: number;
  stock: number;
  images: string[];
  specifications: ProductSpecification[];
  features: string[];
  warranty: string;
  dimensions: {
    width: number;
    height: number;
    depth: number;
    weight: number;
  };
  tags: string[];
}

export interface ProductSpecification {
  name: string;
  value: string;
}

export interface ProductReview {
  id: number;
  userName: string;
  userAvatar?: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  helpful: number;
}
