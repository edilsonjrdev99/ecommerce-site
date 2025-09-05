import { computed, reactive } from 'vue';
import type {
  CategoryProduct,
  CategoryFilters,
  CategoryStats,
  CategoryInfo,
} from '@/types/pages/category.type';

export default function useCategory(categoryId: string) {
  // Mock data para demonstração
  const categoryInfo: CategoryInfo = {
    id: categoryId,
    name: getCategoryName(categoryId),
    description: getCategoryDescription(categoryId),
    image: getCategoryImage(categoryId),
    productsCount: 0,
  };

  const mockProducts: CategoryProduct[] = [
    // Smartphones (baseados nos produtos reais do projeto)
    {
      id: 1, // Smartphone Galaxy (produto real)
      name: 'Smartphone Galaxy',
      price: 999.99,
      originalPrice: 1299.99,
      discount: 23,
      image:
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
      description: 'Smartphone com tela de 6.5 polegadas',
      category: 'smartphones',
      rating: 4.5,
      reviewCount: 324,
      inStock: true,
      isNew: true,
      isFeatured: true,
    },
    // Laptops (baseados nos produtos reais do projeto)
    {
      id: 2, // Notebook Gamer (produto real)
      name: 'Notebook Gamer',
      price: 3599.99,
      image:
        'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400',
      description: 'Laptop para jogos e trabalho',
      category: 'laptops',
      rating: 4.7,
      reviewCount: 156,
      inStock: true,
      isNew: true,
      isFeatured: true,
    },
    {
      id: 6, // Teclado Mecânico (produto real)
      name: 'Teclado Mecânico',
      price: 349.99,
      image:
        'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400',
      description: 'Teclado gamer RGB',
      category: 'laptops', // Categorizando como acessório de laptop
      rating: 4.3,
      reviewCount: 89,
      inStock: true,
    },
    {
      id: 7, // Monitor 4K (produto real)
      name: 'Monitor 4K',
      price: 1199.99,
      originalPrice: 1599.99,
      discount: 25,
      image:
        'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400',
      description: 'Monitor ultra HD 27 polegadas',
      category: 'laptops', // Categorizando como acessório de laptop
      rating: 4.6,
      reviewCount: 112,
      inStock: true,
    },
    {
      id: 8, // Mouse Gamer (produto real)
      name: 'Mouse Gamer',
      price: 199.99,
      image:
        'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400',
      description: 'Mouse óptico de alta precisão',
      category: 'laptops', // Categorizando como acessório de laptop
      rating: 4.4,
      reviewCount: 67,
      inStock: true,
    },
    // Fones (baseados nos produtos reais do projeto)
    {
      id: 3, // Fone Bluetooth (produto real)
      name: 'Fone Bluetooth',
      price: 299.99,
      originalPrice: 459.99,
      discount: 35,
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      description: 'Fone sem fio com cancelamento de ruído',
      category: 'fones',
      rating: 4.3,
      reviewCount: 289,
      inStock: true,
      isFeatured: true,
    },
    // Tablets (baseados nos produtos reais do projeto)
    {
      id: 9, // Tablet Android (produto real)
      name: 'Tablet Android',
      price: 699.99,
      originalPrice: 899.99,
      discount: 22,
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400',
      description: 'Tablet com tela de 10 polegadas',
      category: 'tablets',
      rating: 4.2,
      reviewCount: 156,
      inStock: true,
      isFeatured: true,
    },
    // Produtos adicionais usando IDs reais do projeto
    {
      id: 4, // Smartwatch (produto real)
      name: 'Smartwatch',
      price: 899.99,
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400',
      description: 'Relógio inteligente com GPS',
      category: 'tablets', // Categorizando como dispositivo móvel
      rating: 4.1,
      reviewCount: 78,
      inStock: true,
    },
    {
      id: 5, // Câmera Digital (produto real)
      name: 'Câmera Digital',
      price: 1799.99,
      originalPrice: 2299.99,
      discount: 22,
      image:
        'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400',
      description: 'Câmera profissional 24MP',
      category: 'smartphones', // Categorizando junto com dispositivos
      rating: 4.5,
      reviewCount: 134,
      inStock: true,
    },
    {
      id: 10, // Impressora WiFi (produto real)
      name: 'Impressora WiFi',
      price: 549.99,
      image:
        'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400',
      description: 'Impressora multifuncional sem fio',
      category: 'laptops', // Categorizando como acessório
      rating: 4.0,
      reviewCount: 45,
      inStock: true,
    },
    {
      id: 11, // Webcam HD (produto real)
      name: 'Webcam HD',
      price: 119.99,
      originalPrice: 159.99,
      discount: 25,
      image:
        'https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=400',
      description: 'Câmera web com resolução 1080p',
      category: 'laptops', // Categorizando como acessório
      rating: 4.2,
      reviewCount: 89,
      inStock: true,
    },
    {
      id: 12, // Carregador Wireless (produto real)
      name: 'Carregador Wireless',
      price: 89.99,
      image:
        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400',
      description: 'Base de carregamento sem fio',
      category: 'smartphones', // Categorizando como acessório de smartphone
      rating: 4.1,
      reviewCount: 67,
      inStock: true,
    },
  ];

  const filters = reactive<CategoryFilters>({
    searchTerm: '',
    priceRange: {
      min: 0,
      max: 10000,
    },
    sortBy: 'relevance',
    hasDiscount: false,
    inStock: true,
    rating: 0,
  });

  const sortOptions = [
    { value: 'relevance', label: 'Relevância' },
    { value: 'price-asc', label: 'Menor preço' },
    { value: 'price-desc', label: 'Maior preço' },
    { value: 'name', label: 'Nome A-Z' },
    { value: 'rating', label: 'Melhor avaliados' },
    { value: 'newest', label: 'Mais recentes' },
    { value: 'discount', label: 'Maior desconto' },
  ];

  // Filtrar produtos por categoria
  const categoryProducts = computed(() => {
    return mockProducts.filter(product => product.category === categoryId);
  });

  // Produtos filtrados
  const filteredProducts = computed(() => {
    let products = categoryProducts.value;

    // Filtro de busca
    if (filters.searchTerm) {
      products = products.filter(
        product =>
          product.name
            .toLowerCase()
            .includes(filters.searchTerm.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(filters.searchTerm.toLowerCase())
      );
    }

    // Filtro de preço
    products = products.filter(
      product =>
        product.price >= filters.priceRange.min &&
        product.price <= filters.priceRange.max
    );

    // Filtro de desconto
    if (filters.hasDiscount) {
      products = products.filter(
        product => product.discount && product.discount > 0
      );
    }

    // Filtro de estoque
    if (filters.inStock) {
      products = products.filter(product => product.inStock);
    }

    // Filtro de avaliação
    if (filters.rating > 0) {
      products = products.filter(product => product.rating >= filters.rating);
    }

    // Ordenação
    return sortProducts(products, filters.sortBy);
  });

  // Estatísticas dos produtos
  const categoryStats = computed<CategoryStats>(() => {
    const products = categoryProducts.value;
    const withDiscount = products.filter(
      p => p.discount && p.discount > 0
    ).length;
    const inStock = products.filter(p => p.inStock).length;
    const averagePrice =
      products.reduce((sum, p) => sum + p.price, 0) / products.length || 0;

    return {
      total: products.length,
      withDiscount,
      inStock,
      averagePrice: Math.round(averagePrice * 100) / 100,
    };
  });

  // Funções de atualização dos filtros
  const updateSearchTerm = (searchTerm: string) => {
    filters.searchTerm = searchTerm;
  };

  const updatePriceRange = (min: number, max: number) => {
    filters.priceRange.min = min;
    filters.priceRange.max = max;
  };

  const updateSortBy = (sortBy: string) => {
    filters.sortBy = sortBy;
  };

  const updateHasDiscount = (hasDiscount: boolean) => {
    filters.hasDiscount = hasDiscount;
  };

  const updateInStock = (inStock: boolean) => {
    filters.inStock = inStock;
  };

  const updateRating = (rating: number) => {
    filters.rating = rating;
  };

  const resetFilters = () => {
    filters.searchTerm = '';
    filters.priceRange.min = 0;
    filters.priceRange.max = 10000;
    filters.sortBy = 'relevance';
    filters.hasDiscount = false;
    filters.inStock = true;
    filters.rating = 0;
  };

  // Função para ordenar produtos
  const sortProducts = (products: CategoryProduct[], sortBy: string) => {
    const sorted = [...products];

    switch (sortBy) {
      case 'price-asc':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return sorted.sort((a, b) => b.price - a.price);
      case 'name':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case 'rating':
        return sorted.sort((a, b) => b.rating - a.rating);
      case 'newest':
        return sorted.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      case 'discount':
        return sorted.sort((a, b) => (b.discount || 0) - (a.discount || 0));
      default:
        return sorted.sort(
          (a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0)
        );
    }
  };

  // Atualizar contagem de produtos na categoria
  categoryInfo.productsCount = categoryStats.value.total;

  return {
    categoryInfo,
    filters,
    filteredProducts,
    categoryStats,
    sortOptions,
    updateSearchTerm,
    updatePriceRange,
    updateSortBy,
    updateHasDiscount,
    updateInStock,
    updateRating,
    resetFilters,
  };
}

// Funções auxiliares para obter informações da categoria
function getCategoryName(categoryId: string): string {
  const categories: Record<string, string> = {
    smartphones: 'Smartphones',
    laptops: 'Laptops',
    fones: 'Fones de Ouvido',
    tablets: 'Tablets',
    acessorios: 'Acessórios',
    gaming: 'Gaming',
    'casa-inteligente': 'Casa Inteligente',
  };
  return categories[categoryId] || 'Categoria';
}

function getCategoryDescription(categoryId: string): string {
  const descriptions: Record<string, string> = {
    smartphones: 'Descubra os melhores smartphones com tecnologia de ponta',
    laptops: 'Notebooks e laptops para trabalho e entretenimento',
    fones: 'Fones de ouvido premium para uma experiência sonora incrível',
    tablets: 'Tablets versáteis para produtividade e entretenimento',
    acessorios: 'Acessórios tecnológicos para complementar seus dispositivos',
    gaming: 'Equipamentos gaming para elevar sua experiência de jogo',
    'casa-inteligente': 'Dispositivos inteligentes para automatizar sua casa',
  };
  return (
    descriptions[categoryId] ||
    'Produtos de qualidade para suas necessidades tecnológicas'
  );
}

function getCategoryImage(categoryId: string): string {
  const images: Record<string, string> = {
    smartphones:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop',
    laptops:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop',
    fones:
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop',
    tablets:
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop',
    acessorios:
      'https://images.unsplash.com/photo-1558618666-fbd1a2d4d6e4?w=800&auto=format&fit=crop',
    gaming:
      'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&auto=format&fit=crop',
    'casa-inteligente':
      'https://images.unsplash.com/photo-1558882224-dda166733046?w=800&auto=format&fit=crop',
  };
  return (
    images[categoryId] ||
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop'
  );
}
