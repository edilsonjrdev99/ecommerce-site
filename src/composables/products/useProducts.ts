import { ref, computed } from 'vue';
import type { MainProducts } from '@/types/layout/mainProducts.type';
import type {
  ProductFilters,
  SortOption,
  CategoryOption,
  FilterOption,
} from '@/types/products/productFilters.type';

export default function useProducts() {
  // Lista completa de produtos (simulação - em produção viria de uma API)
  const allProducts: MainProducts[] = [
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
        'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400',
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
        'https://images.unsplash.com/photo-1579586337278-3f436f25d4d1?w=400',
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
        'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400',
    },
    {
      id: 9,
      name: 'Tablet Android',
      description: 'Tablet com tela de 10 polegadas',
      price: 899.99,
      discountValue: 699.99,
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400',
    },
    {
      id: 10,
      name: 'Impressora WiFi',
      description: 'Impressora multifuncional sem fio',
      price: 549.99,
      image:
        'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400',
    },
    {
      id: 11,
      name: 'Webcam HD',
      description: 'Câmera web com resolução 1080p',
      price: 159.99,
      discountValue: 119.99,
      image:
        'https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=400',
    },
    {
      id: 12,
      name: 'Carregador Wireless',
      description: 'Base de carregamento sem fio',
      price: 89.99,
      image:
        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400',
    },
  ];

  // Estado dos filtros
  const filters = ref<ProductFilters>({
    searchTerm: '',
    category: '',
    priceRange: { min: 0, max: 5000 },
    sortBy: 'name-asc',
    hasDiscount: false,
  });

  // Opções de ordenação
  const sortOptions: FilterOption[] = [
    { value: 'name-asc', label: 'Nome A-Z' },
    { value: 'name-desc', label: 'Nome Z-A' },
    { value: 'price-asc', label: 'Menor preço' },
    { value: 'price-desc', label: 'Maior preço' },
    { value: 'discount', label: 'Com desconto' },
  ];

  // Categorias simuladas
  const categoryOptions: CategoryOption[] = [
    { value: '', label: 'Todas as categorias', count: allProducts.length },
    { value: 'smartphone', label: 'Smartphones', count: 2 },
    { value: 'computador', label: 'Computadores', count: 3 },
    { value: 'audio', label: 'Áudio', count: 2 },
    { value: 'acessorio', label: 'Acessórios', count: 5 },
  ];

  // Produtos filtrados
  const filteredProducts = computed(() => {
    let result = [...allProducts];

    // Filtrar por termo de busca
    if (filters.value.searchTerm) {
      const searchTerm = filters.value.searchTerm.toLowerCase();
      result = result.filter(
        product =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm)
      );
    }

    // Filtrar por categoria (simulado - em produção seria uma propriedade do produto)
    if (filters.value.category) {
      // Lógica simplificada baseada no nome do produto
      result = result.filter(product => {
        const productName = product.name.toLowerCase();
        const category = filters.value.category;

        switch (category) {
          case 'smartphone':
            return (
              productName.includes('smartphone') ||
              productName.includes('tablet')
            );
          case 'computador':
            return (
              productName.includes('notebook') ||
              productName.includes('monitor') ||
              productName.includes('teclado') ||
              productName.includes('mouse')
            );
          case 'audio':
            return productName.includes('fone');
          case 'acessorio':
            return (
              productName.includes('smartwatch') ||
              productName.includes('carregador') ||
              productName.includes('webcam') ||
              productName.includes('impressora')
            );
          default:
            return true;
        }
      });
    }

    // Filtrar por faixa de preço
    result = result.filter(
      product =>
        product.price >= filters.value.priceRange.min &&
        product.price <= filters.value.priceRange.max
    );

    // Filtrar por desconto
    if (filters.value.hasDiscount) {
      result = result.filter(product => product.discountValue);
    }

    // Ordenar produtos
    result.sort((a, b) => {
      switch (filters.value.sortBy) {
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'price-asc': {
          const priceA = a.discountValue || a.price;
          const priceB = b.discountValue || b.price;
          return priceA - priceB;
        }
        case 'price-desc': {
          const priceDescA = a.discountValue || a.price;
          const priceDescB = b.discountValue || b.price;
          return priceDescB - priceDescA;
        }
        case 'discount': {
          const hasDiscountA = a.discountValue ? 1 : 0;
          const hasDiscountB = b.discountValue ? 1 : 0;
          return hasDiscountB - hasDiscountA;
        }
        case 'name-asc':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return result;
  });

  // Estatísticas dos produtos
  const productsStats = computed(() => ({
    total: filteredProducts.value.length,
    withDiscount: filteredProducts.value.filter(p => p.discountValue).length,
    minPrice: Math.min(
      ...filteredProducts.value.map(p => p.discountValue || p.price)
    ),
    maxPrice: Math.max(
      ...filteredProducts.value.map(p => p.discountValue || p.price)
    ),
  }));

  // Funções para atualizar filtros
  const updateSearchTerm = (term: string) => {
    filters.value.searchTerm = term;
  };

  const updateCategory = (category: string) => {
    filters.value.category = category;
  };

  const updatePriceRange = (min: number, max: number) => {
    filters.value.priceRange = { min, max };
  };

  const updateSortBy = (sort: SortOption) => {
    filters.value.sortBy = sort;
  };

  const updateHasDiscount = (hasDiscount: boolean) => {
    filters.value.hasDiscount = hasDiscount;
  };

  const resetFilters = () => {
    filters.value = {
      searchTerm: '',
      category: '',
      priceRange: { min: 0, max: 5000 },
      sortBy: 'name-asc',
      hasDiscount: false,
    };
  };

  return {
    // Estado
    filters: filters.value,
    filteredProducts,
    productsStats,

    // Opções
    sortOptions,
    categoryOptions,

    // Ações
    updateSearchTerm,
    updateCategory,
    updatePriceRange,
    updateSortBy,
    updateHasDiscount,
    resetFilters,
  };
}
