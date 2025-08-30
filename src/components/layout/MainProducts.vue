<script setup lang="ts">
import { useRouter } from 'vue-router';
import type { MainProducts } from '@/types/layout/mainProducts.type';

import ProductCard from '@/components/common/ProductCard.vue';

import useProducts from '@/composables/products/useProducts';

const router = useRouter();
const { allProducts } = useProducts();

// Pega apenas os primeiros 8 produtos para exibir na home
const mainProducts = allProducts.slice(0, 8);

// Manipuladores dos eventos
const handleProductClick = (product: MainProducts) => {
  console.log('Produto clicado na Home:', product.id, product.name);
  router.push(`/produto/${product.id}`);
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
