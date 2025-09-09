import type { HeaderType } from '@/types/layout/header.type';

export default function useHeader() {
  const itemsPageHeader: HeaderType[] = [
    { label: 'Início', path: '/' },
    { label: 'Produtos', path: '/produtos' },
    { label: 'Categorias', path: '/categorias' },
    { label: 'Ofertas', path: '/ofertas' },
    { label: 'Sobre', path: '/sobre' },
    { label: 'Contato', path: '/contato' },
  ];

  const itemsCustomerHeader: HeaderType[] = [
    { label: 'Entrar', path: '/entrar' },
    { label: 'Carrinho', path: '/carrinho' },
  ];

  return {
    itemsPageHeader,
    itemsCustomerHeader,
  };
}
