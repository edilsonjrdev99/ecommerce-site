import type { Brand } from '@/types/layout/brands.type';

export default function useBrands() {
  const brands: Brand[] = [
    {
      id: 1,
      name: 'Apple',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
      website: 'https://apple.com',
    },
    {
      id: 2,
      name: 'Samsung',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg',
      website: 'https://samsung.com',
    },
    {
      id: 3,
      name: 'Sony',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg',
      website: 'https://sony.com',
    },
    {
      id: 4,
      name: 'HP',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg',
      website: 'https://hp.com',
    },
    {
      id: 5,
      name: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      website: 'https://microsoft.com',
    },
    {
      id: 6,
      name: 'Dell',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg',
      website: 'https://dell.com',
    },
  ];

  return {
    brands,
  };
}
