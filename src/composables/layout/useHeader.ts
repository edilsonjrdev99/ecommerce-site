import type { HeaderType } from '@/types/layout/header.type';

export default function useHeader() {
  const itemsPageHeader: HeaderType[] = [
    { label: 'Início', path: '/' },
    { label: 'Produtos', path: '/produtos' },
  ];

  const itemsCustomerHeader: HeaderType[] = [
    { label: 'Entrar', path: '/login' },
    { label: 'Carrinho', path: '/carrinho' },
  ];

  return {
    itemsPageHeader,
    itemsCustomerHeader,
  };
}
