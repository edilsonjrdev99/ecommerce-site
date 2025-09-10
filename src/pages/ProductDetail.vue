<script setup lang="ts">
import { ref, onMounted } from 'vue';

import { useRoute, useRouter } from 'vue-router';

import Button from '@/components/ui/Button.vue';

import useProductDetail from '@/composables/products/useProductDetail';

const route = useRoute();
const router = useRouter();

const {
  currentProduct,
  loading,
  selectedImage,
  selectedImageIndex,
  quantity,
  finalPrice,
  hasDiscount,
  discountPercentage,
  totalPrice,
  productReviews,
  getProductById,
  selectImage,
  incrementQuantity,
  decrementQuantity,
  setQuantity,
  addToCart,
  buyNow,
} = useProductDetail();

const activeTab = ref('description');

onMounted(async () => {
  // Garante que a página inicie no topo
  window.scrollTo({ top: 0, behavior: 'instant' });

  const productId = parseInt(route.params.id as string);
  if (!productId) {
    router.push('/produtos');
    return;
  }

  const product = await getProductById(productId);
  if (!product) {
    router.push('/produtos');
  }
});

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
};

const formatDate = (dateString: string) => {
  return new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(dateString));
};

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => i < Math.floor(rating));
};

const goBack = () => {
  router.push('/produtos');
};
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Estado de Carregamento -->
    <div v-if="loading" class="flex items-center justify-center min-h-screen">
      <div
        class="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-600"
      ></div>
    </div>

    <!-- Produto Não Encontrado -->
    <div
      v-else-if="!currentProduct"
      class="flex items-center justify-center min-h-screen"
    >
      <div class="text-center">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">
          Produto não encontrado
        </h2>
        <Button label="Voltar aos produtos" @click="goBack" />
      </div>
    </div>

    <!-- Detalhe do Produto -->
    <div v-else class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Navegação Estrutural -->
      <nav class="flex items-center space-x-2 text-sm text-gray-600 mb-6">
        <button
          @click="goBack"
          class="hover:text-emerald-600 transition-colors"
        >
          Produtos
        </button>
        <span>></span>
        <span>{{ currentProduct.category }}</span>
        <span>></span>
        <span class="text-gray-900">{{ currentProduct.name }}</span>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <!-- Imagens do Produto -->
        <div class="space-y-4">
          <!-- Imagem Principal -->
          <div
            class="aspect-square bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              :src="selectedImage"
              :alt="currentProduct.name"
              class="w-full h-full object-contain p-4"
            />
          </div>

          <!-- Miniaturas das Imagens -->
          <div class="flex space-x-2 overflow-x-auto pb-2">
            <button
              v-for="(image, index) in currentProduct.images"
              :key="index"
              @click="selectImage(index)"
              :class="[
                'flex-shrink-0 w-20 h-20 rounded-lg border-2 overflow-hidden transition-all',
                index === selectedImageIndex
                  ? 'border-emerald-500 ring-2 ring-emerald-200'
                  : 'border-gray-300 hover:border-emerald-300',
              ]"
            >
              <img
                :src="image"
                :alt="`${currentProduct.name} ${index + 1}`"
                class="w-full h-full object-contain p-1 bg-white"
              />
            </button>
          </div>
        </div>

        <!-- Informações do Produto -->
        <div class="space-y-6">
          <!-- Cabeçalho -->
          <div>
            <div class="flex items-center space-x-2 mb-2">
              <span class="text-sm text-emerald-600 font-medium">{{
                currentProduct.brand
              }}</span>
              <div class="flex items-center space-x-1">
                <div class="flex">
                  <svg
                    v-for="(filled, index) in renderStars(
                      currentProduct.rating
                    )"
                    :key="index"
                    :class="[
                      'w-4 h-4',
                      filled ? 'text-yellow-400' : 'text-gray-300',
                    ]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
                <span class="text-sm text-gray-600"
                  >{{ currentProduct.rating }} ({{
                    currentProduct.reviewCount
                  }}
                  avaliações)</span
                >
              </div>
            </div>
            <h1 class="text-3xl font-bold text-gray-900 mb-4">
              {{ currentProduct.name }}
            </h1>
          </div>

          <!-- Preço -->
          <div class="bg-white p-6 rounded-lg shadow-sm border">
            <div class="flex items-baseline space-x-3 mb-2">
              <span class="text-3xl font-bold text-emerald-600">{{
                formatPrice(finalPrice)
              }}</span>
              <span
                v-if="hasDiscount"
                class="text-lg text-gray-500 line-through"
              >
                {{ formatPrice(currentProduct.price) }}
              </span>
              <span
                v-if="hasDiscount"
                class="text-sm bg-red-100 text-red-600 px-2 py-1 rounded"
              >
                -{{ discountPercentage }}%
              </span>
            </div>
            <p class="text-sm text-gray-600">
              Em estoque: {{ currentProduct.stock }} unidades disponíveis
            </p>
          </div>

          <!-- Quantidade e Ações -->
          <div class="bg-white p-6 rounded-lg shadow-sm border space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Quantidade</label
              >
              <div class="flex items-center space-x-3">
                <button
                  @click="decrementQuantity"
                  :disabled="quantity <= 1"
                  class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  -
                </button>
                <input
                  :value="quantity"
                  @input="
                    setQuantity(
                      parseInt(
                        ($event.target as HTMLInputElement)?.value || '1'
                      )
                    )
                  "
                  type="number"
                  min="1"
                  :max="currentProduct.stock"
                  class="w-20 text-center border border-gray-300 rounded px-3 py-2"
                />
                <button
                  @click="incrementQuantity"
                  :disabled="quantity >= currentProduct.stock"
                  class="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  +
                </button>
              </div>
              <p class="text-sm text-gray-600 mt-2">
                Total: {{ formatPrice(totalPrice) }}
              </p>
            </div>

            <div
              class="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4"
            >
              <Button
                label="Adicionar ao Carrinho"
                variant="outline"
                size="md"
                class="flex-1"
                @click="addToCart"
              />
              <Button
                label="Comprar Agora"
                variant="primary"
                size="md"
                class="flex-1"
                @click="buyNow"
              />
            </div>
          </div>

          <!-- Características -->
          <div class="bg-white p-6 rounded-lg shadow-sm border">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">
              Características
            </h3>
            <div class="grid grid-cols-1 gap-2">
              <div
                v-for="feature in currentProduct.features"
                :key="feature"
                class="flex items-center"
              >
                <svg
                  class="w-4 h-4 text-emerald-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm text-gray-700">{{ feature }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Seção de Abas -->
      <div class="bg-white rounded-lg shadow-sm border">
        <!-- Navegação das Abas -->
        <div class="border-b border-gray-200">
          <nav class="flex space-x-8 px-6">
            <button
              v-for="tab in ['description', 'specifications', 'reviews']"
              :key="tab"
              @click="activeTab = tab"
              :class="[
                'py-4 px-1 border-b-2 font-medium text-sm transition-colors',
                activeTab === tab
                  ? 'border-emerald-500 text-emerald-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
              ]"
            >
              {{
                tab === 'description'
                  ? 'Descrição'
                  : tab === 'specifications'
                    ? 'Especificações'
                    : 'Avaliações'
              }}
            </button>
          </nav>
        </div>

        <!-- Conteúdo das Abas -->
        <div class="p-6">
          <!-- Aba Descrição -->
          <div v-if="activeTab === 'description'">
            <p class="text-gray-700 leading-relaxed">
              {{ currentProduct.description }}
            </p>

            <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Dimensões</h4>
                <div class="space-y-1 text-sm text-gray-600">
                  <p>Largura: {{ currentProduct.dimensions.width }}mm</p>
                  <p>Altura: {{ currentProduct.dimensions.height }}mm</p>
                  <p>Profundidade: {{ currentProduct.dimensions.depth }}mm</p>
                  <p>Peso: {{ currentProduct.dimensions.weight }}g</p>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Garantia</h4>
                <p class="text-sm text-gray-600">
                  {{ currentProduct.warranty }}
                </p>
              </div>
            </div>
          </div>

          <!-- Aba Especificações -->
          <div v-else-if="activeTab === 'specifications'">
            <div class="space-y-4">
              <div
                v-for="spec in currentProduct.specifications"
                :key="spec.name"
                class="flex justify-between py-3 border-b border-gray-100 last:border-b-0"
              >
                <span class="font-medium text-gray-900">{{ spec.name }}</span>
                <span class="text-gray-700">{{ spec.value }}</span>
              </div>
            </div>
          </div>

          <!-- Aba Avaliações -->
          <div v-else-if="activeTab === 'reviews'">
            <div v-if="productReviews.length === 0">
              <p class="text-gray-600 text-center py-8">
                Nenhuma avaliação ainda.
              </p>
            </div>
            <div v-else class="space-y-6">
              <div
                v-for="review in productReviews"
                :key="review.id"
                class="border-b border-gray-100 last:border-b-0 pb-6 last:pb-0"
              >
                <div class="flex items-start space-x-4">
                  <img
                    :src="
                      review.userAvatar ||
                      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100'
                    "
                    :alt="review.userName"
                    class="w-12 h-12 rounded-full object-cover"
                  />
                  <div class="flex-1">
                    <div class="flex items-center space-x-2 mb-1">
                      <h5 class="font-medium text-gray-900">
                        {{ review.userName }}
                      </h5>
                      <div class="flex">
                        <svg
                          v-for="(filled, index) in renderStars(review.rating)"
                          :key="index"
                          :class="[
                            'w-4 h-4',
                            filled ? 'text-yellow-400' : 'text-gray-300',
                          ]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                      </div>
                      <span class="text-sm text-gray-600">{{
                        formatDate(review.date)
                      }}</span>
                    </div>
                    <h6 class="font-medium text-gray-900 mb-2">
                      {{ review.title }}
                    </h6>
                    <p class="text-gray-700 mb-3">{{ review.comment }}</p>
                    <div class="flex items-center space-x-2">
                      <button
                        class="text-sm text-gray-600 hover:text-emerald-600"
                      >
                        👍 Útil ({{ review.helpful }})
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
}
</style>
