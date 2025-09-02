import type { MainCategory } from '@/types/layout/mainCategories.type';

export default function useMainCategories() {
  const mainCategories: MainCategory[] = [
    {
      id: 1,
      name: 'Smartphones',
      description: 'Galaxy, câmeras e acessórios móveis',
      image:
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&auto=format&fit=crop',
      productCount: 3, // Smartphone Galaxy + Câmera Digital + Carregador Wireless
      slug: 'smartphones',
    },
    {
      id: 2,
      name: 'Laptops',
      description: 'Notebooks, periféricos e acessórios',
      image:
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&auto=format&fit=crop',
      productCount: 6, // Notebook + Teclado + Monitor + Mouse + Impressora + Webcam
      slug: 'laptops',
    },
    {
      id: 3,
      name: 'Fones de Ouvido',
      description: 'Áudio premium e fones bluetooth',
      image:
        'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&auto=format&fit=crop',
      productCount: 1, // Fone Bluetooth
      slug: 'fones',
    },
    {
      id: 4,
      name: 'Tablets',
      description: 'Tablets e dispositivos portáteis',
      image:
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&auto=format&fit=crop',
      productCount: 2, // Tablet Android + Smartwatch
      slug: 'tablets',
    },
  ];

  return {
    mainCategories,
  };
}
