import { ref } from 'vue';
import type { CategoryListItem } from '@/types/pages/categories.type';

export default function useCategories() {
  // Estado de carregamento
  const isLoading = ref(false);

  // Lista de categorias principais
  const categories = ref<CategoryListItem[]>([
    {
      id: 'smartphones',
      name: 'Smartphones',
      description: 'Descubra os melhores smartphones com tecnologia de ponta',
      image:
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop',
      productsCount: 5,
      slug: 'smartphones',
      isPopular: true,
    },
    {
      id: 'laptops',
      name: 'Laptops & Notebooks',
      description: 'Notebooks e laptops para trabalho e entretenimento',
      image:
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop',
      productsCount: 7,
      slug: 'laptops',
      isPopular: true,
    },
    {
      id: 'fones',
      name: 'Fones de Ouvido',
      description:
        'Fones de ouvido premium para uma experiência sonora incrível',
      image:
        'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop',
      productsCount: 1,
      slug: 'fones',
      isPopular: false,
    },
    {
      id: 'tablets',
      name: 'Tablets',
      description: 'Tablets versáteis para produtividade e entretenimento',
      image:
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop',
      productsCount: 2,
      slug: 'tablets',
      isPopular: false,
    },
    {
      id: 'gaming',
      name: 'Gaming',
      description: 'Equipamentos gaming para elevar sua experiência de jogo',
      image:
        'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&auto=format&fit=crop',
      productsCount: 0,
      slug: 'gaming',
      isPopular: true,
    },
    {
      id: 'casa-inteligente',
      name: 'Casa Inteligente',
      description: 'Dispositivos inteligentes para automatizar sua casa',
      image:
        'https://images.unsplash.com/photo-1558618666-fbd1a2d4d6e4?w=800&auto=format&fit=crop',
      productsCount: 0,
      slug: 'casa-inteligente',
      isPopular: false,
    },
  ]);

  // Categorias populares (filtradas)
  const popularCategories = ref<CategoryListItem[]>(
    categories.value.filter(category => category.isPopular)
  );

  // Estatísticas gerais
  const totalCategories = ref(categories.value.length);
  const totalProducts = ref(
    categories.value.reduce(
      (total, category) => total + category.productsCount,
      0
    )
  );

  // Função para buscar categorias (simula uma API call)
  const fetchCategories = async () => {
    isLoading.value = true;
    // Simula delay de API
    await new Promise(resolve => setTimeout(resolve, 500));
    isLoading.value = false;
  };

  // Função para navegar para uma categoria específica
  const navigateToCategory = (categorySlug: string) => {
    return `/categoria/${categorySlug}`;
  };

  return {
    categories,
    popularCategories,
    isLoading,
    totalCategories,
    totalProducts,
    fetchCategories,
    navigateToCategory,
  };
}
