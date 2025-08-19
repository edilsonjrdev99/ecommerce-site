<script setup lang="ts">
import useMainCategories from '@/composables/layout/useMainCategories';

const { mainCategories } = useMainCategories();
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
    <div
      class="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
      v-for="category in mainCategories"
      :key="category.id"
    >
      <div class="aspect-square overflow-hidden">
        <img
          :src="category.image"
          :alt="category.name"
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      
      <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 class="font-bold text-lg mb-1">{{ category.name }}</h3>
        <p class="text-sm text-gray-200 mb-2">{{ category.description }}</p>
        <p class="text-xs text-gray-300">{{ category.productCount }} produtos</p>
      </div>
      
    </div>
  </div>
</template>

<style scoped></style>