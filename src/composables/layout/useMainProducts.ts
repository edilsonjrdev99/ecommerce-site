import type { MainProducts } from '@/types/layout/mainProducts.type';

export default function useMainProducts() {
  const mainProducts: MainProducts[] = [
    {
      id: 1,
      name: 'Produto 1',
      description: 'Descrição do produto',
      price: 99.9,
    },
    {
      id: 2,
      name: 'Produto 2',
      description: 'Descrição do produto',
      price: 100.9,
    },
    {
      id: 3,
      name: 'Produto 3',
      description: 'Descrição do produto',
      price: 189.9,
    },
    {
      id: 4,
      name: 'Produto 4',
      description: 'Descrição do produto',
      price: 199.9,
    },
    {
      id: 5,
      name: 'Produto 5',
      description: 'Descrição do produto',
      price: 299.9,
    },
    {
      id: 6,
      name: 'Produto 6',
      description: 'Descrição do produto',
      price: 99.9,
    },
    {
      id: 7,
      name: 'Produto 7',
      description: 'Descrição do produto',
      price: 399.9,
    },
    {
      id: 8,
      name: 'Produto 8',
      description: 'Descrição do produto',
      price: 299.9,
    },
  ];

  return {
    mainProducts,
  };
}
