import { ref, computed } from 'vue';
import type {
  ProductDetail,
  ProductReview,
} from '@/types/layout/mainProducts.type';
import useProducts from './useProducts';

export default function useProductDetail() {
  const currentProduct = ref<ProductDetail | null>(null);
  const loading = ref(false);
  const selectedImageIndex = ref(0);
  const quantity = ref(1);

  const { getProductById: getProductData } = useProducts();

  const mockReviews: Record<number, ProductReview[]> = {
    1: [
      {
        id: 1,
        userName: 'João Silva',
        userAvatar:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
        rating: 5,
        title: 'Excelente smartphone!',
        comment:
          'Comprei esse celular há 3 meses e estou muito satisfeito. A câmera é incrível e a bateria dura o dia todo.',
        date: '2024-01-15',
        helpful: 12,
      },
      {
        id: 2,
        userName: 'Maria Santos',
        userAvatar:
          'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100',
        rating: 4,
        title: 'Bom custo benefício',
        comment:
          'Por esse preço, vale muito a pena. Única coisa que poderia melhorar é o tempo de carregamento.',
        date: '2024-01-10',
        helpful: 8,
      },
    ],
    2: [
      {
        id: 3,
        userName: 'Pedro Costa',
        userAvatar:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
        rating: 5,
        title: 'Perfeito para jogos',
        comment:
          'Roda todos os jogos que eu quero em alta qualidade. Excelente investimento!',
        date: '2024-01-20',
        helpful: 15,
      },
    ],
  };

  const selectedImage = computed(() => {
    if (!currentProduct.value) return '';
    return (
      currentProduct.value.images[selectedImageIndex.value] ||
      currentProduct.value.image
    );
  });

  const finalPrice = computed(() => {
    if (!currentProduct.value) return 0;
    return currentProduct.value.discountValue || currentProduct.value.price;
  });

  const hasDiscount = computed(() => {
    return (
      currentProduct.value?.discountValue &&
      currentProduct.value.discountValue < currentProduct.value.price
    );
  });

  const discountPercentage = computed(() => {
    if (!hasDiscount.value || !currentProduct.value) return 0;
    const discount =
      currentProduct.value.price - currentProduct.value.discountValue!;
    return Math.round((discount / currentProduct.value.price) * 100);
  });

  const totalPrice = computed(() => {
    return finalPrice.value * quantity.value;
  });

  const productReviews = computed(() => {
    if (!currentProduct.value) return [];
    return mockReviews[currentProduct.value.id] || [];
  });

  const averageRating = computed(() => {
    if (!productReviews.value.length) return 0;
    const sum = productReviews.value.reduce(
      (acc, review) => acc + review.rating,
      0
    );
    return sum / productReviews.value.length;
  });

  const getProductById = async (id: number): Promise<ProductDetail | null> => {
    loading.value = true;

    try {
      // Simula delay da API
      await new Promise(resolve => setTimeout(resolve, 500));

      const product = getProductData(id);
      currentProduct.value = product;
      selectedImageIndex.value = 0;
      quantity.value = 1;

      return product;
    } catch (error) {
      console.error('Erro ao buscar produto:', error);
      return null;
    } finally {
      loading.value = false;
    }
  };

  // Seleciona uma imagem específica na galeria
  const selectImage = (index: number) => {
    if (
      currentProduct.value &&
      index >= 0 &&
      index < currentProduct.value.images.length
    ) {
      selectedImageIndex.value = index;
    }
  };

  // Incrementa a quantidade do produto
  const incrementQuantity = () => {
    if (currentProduct.value && quantity.value < currentProduct.value.stock) {
      quantity.value++;
    }
  };

  // Decrementa a quantidade do produto
  const decrementQuantity = () => {
    if (quantity.value > 1) {
      quantity.value--;
    }
  };

  // Define uma quantidade específica
  const setQuantity = (value: number) => {
    if (
      currentProduct.value &&
      value >= 1 &&
      value <= currentProduct.value.stock
    ) {
      quantity.value = value;
    }
  };

  // Adiciona o produto ao carrinho
  const addToCart = () => {
    if (!currentProduct.value) return;

    console.log(
      `Adicionando ${quantity.value}x ${currentProduct.value.name} ao carrinho`
    );
  };

  // Compra imediatamente o produto
  const buyNow = () => {
    if (!currentProduct.value) return;

    console.log(`Comprando ${quantity.value}x ${currentProduct.value.name}`);
  };

  return {
    currentProduct,
    loading,
    selectedImageIndex,
    quantity,
    selectedImage,
    finalPrice,
    hasDiscount,
    discountPercentage,
    totalPrice,
    productReviews,
    averageRating,
    getProductById,
    selectImage,
    incrementQuantity,
    decrementQuantity,
    setQuantity,
    addToCart,
    buyNow,
  };
}
