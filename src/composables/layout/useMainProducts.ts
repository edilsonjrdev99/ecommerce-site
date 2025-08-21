import type { MainProducts } from '@/types/layout/mainProducts.type';

export default function useMainProducts() {
  const mainProducts: MainProducts[] = [
    {
      id: 1,
      name: 'Smartphone Galaxy',
      description: 'Smartphone com tela de 6.5 polegadas',
      price: 1299.99,
      discountValue: 999.99,
      image:
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
    },
    {
      id: 2,
      name: 'Notebook Gamer',
      description: 'Laptop para jogos e trabalho',
      price: 3599.99,
      image:
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
    },
    {
      id: 3,
      name: 'Fone Bluetooth',
      description: 'Fone sem fio com cancelamento de ruído',
      price: 459.99,
      discountValue: 299.99,
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    },
    {
      id: 4,
      name: 'Smartwatch',
      description: 'Relógio inteligente com GPS',
      price: 899.99,
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    },
    {
      id: 5,
      name: 'Câmera Digital',
      description: 'Câmera profissional 24MP',
      price: 2299.99,
      discountValue: 1799.99,
      image:
        'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400',
    },
    {
      id: 6,
      name: 'Teclado Mecânico',
      description: 'Teclado gamer RGB',
      price: 349.99,
      image:
        'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400',
    },
    {
      id: 7,
      name: 'Monitor 4K',
      description: 'Monitor ultra HD 27 polegadas',
      price: 1599.99,
      discountValue: 1199.99,
      image:
        'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400',
    },
    {
      id: 8,
      name: 'Mouse Gamer',
      description: 'Mouse óptico de alta precisão',
      price: 199.99,
      image:
        'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400',
    },
  ];

  return {
    mainProducts,
  };
}
