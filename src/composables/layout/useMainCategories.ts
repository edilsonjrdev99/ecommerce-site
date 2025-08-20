import type { MainCategory } from '@/types/layout/mainCategories.type';

export default function useMainCategories() {
  const mainCategories: MainCategory[] = [
    {
      id: 1,
      name: 'Eletrônicos',
      description: 'Smartphones, laptops e acessórios',
      image:
        'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400',
      productCount: 156,
      slug: 'eletronicos',
    },
    {
      id: 2,
      name: 'Moda Feminina',
      description: 'Roupas, sapatos e acessórios',
      image:
        'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400',
      productCount: 284,
      slug: 'moda-feminina',
    },
    {
      id: 3,
      name: 'Casa & Decoração',
      description: 'Móveis e objetos decorativos',
      image:
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
      productCount: 98,
      slug: 'casa-decoracao',
    },
    {
      id: 4,
      name: 'Esportes',
      description: 'Equipamentos e roupas esportivas',
      image:
        'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400',
      productCount: 127,
      slug: 'esportes',
    },
  ];

  return {
    mainCategories,
  };
}
