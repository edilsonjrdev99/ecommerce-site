export interface CategoryProduct {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  description: string;
  category: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
}

export interface CategoryInfo {
  id: string;
  name: string;
  description: string;
  image: string;
  productsCount: number;
}

export interface CategoryFilters {
  searchTerm: string;
  priceRange: {
    min: number;
    max: number;
  };
  sortBy: string;
  hasDiscount: boolean;
  inStock: boolean;
  rating: number;
}

export interface CategoryStats {
  total: number;
  withDiscount: number;
  inStock: number;
  averagePrice: number;
}

export interface SortOption {
  value: string;
  label: string;
}

export interface CategoryContent {
  categoryInfo: CategoryInfo;
  products: CategoryProduct[];
  filters: CategoryFilters;
  sortOptions: SortOption[];
}
