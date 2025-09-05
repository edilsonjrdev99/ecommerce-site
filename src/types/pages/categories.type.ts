// Interface para item de categoria na listagem
export interface CategoryListItem {
  id: string;
  name: string;
  description: string;
  image: string;
  productsCount: number;
  slug: string;
  isPopular: boolean;
}
