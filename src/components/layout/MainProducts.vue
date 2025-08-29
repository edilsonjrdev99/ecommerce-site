<script setup lang="ts">
import type { MainProducts } from '@/types/layout/mainProducts.type';

import ProductCard from '@/components/common/ProductCard.vue';

import useMainProducts from '@/composables/layout/useMainProducts';

const { mainProducts } = useMainProducts();

// Handlers dos eventos
const handleProductClick = (product: MainProducts) => {
  console.log('Produto clicado:', product);
  // Implementar navegação para página do produto
};

const handleBuyClick = (product: MainProducts) => {
  console.log('Botão comprar clicado:', product);
  // Implementar adição ao carrinho
};
</script>

<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8"
  >
    <ProductCard
      v-for="mainProduct in mainProducts"
      :key="mainProduct.id"
      :product="mainProduct"
      @click="handleProductClick"
      @buy-click="handleBuyClick"
    />
  </div>
</template>

<style scoped></style>
