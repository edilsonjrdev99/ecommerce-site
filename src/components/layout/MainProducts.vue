<script setup lang="ts">
import useMainProducts from '@/composables/layout/useMainProducts';

const { mainProducts } = useMainProducts();
</script>

<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8"
  >
    <div
      class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
      v-for="mainProduct in mainProducts"
      :key="mainProduct.id"
    >
      <div class="bg-gray-200 h-48 rounded-md mb-4 overflow-hidden">
        <img
          :src="mainProduct.image"
          :alt="mainProduct.name"
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 class="font-semibold text-lg mb-2">{{ mainProduct.name }}</h3>
      <p class="text-gray-600 text-sm mb-3">{{ mainProduct.description }}</p>
      <p class="text-xl font-bold text-emerald-500">
        R$ {{ mainProduct.price }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
