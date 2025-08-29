export interface ProductFilters {
  searchTerm: string;
  category: string;
  priceRange: PriceRange;
  sortBy: SortOption;
  hasDiscount: boolean;
}

export interface PriceRange {
  min: number;
  max: number;
}

export type SortOption =
  | 'name-asc'
  | 'name-desc'
  | 'price-asc'
  | 'price-desc'
  | 'discount';

export interface FilterOption {
  value: string;
  label: string;
}

export interface CategoryOption extends FilterOption {
  count?: number;
}
