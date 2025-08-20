<script setup lang="ts">
import useBrands from '@/composables/layout/useBrands';

const { brands } = useBrands();
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-8">
    <div
      v-for="brand in brands"
      :key="brand.id"
      class="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 group"
    >
      <img
        :src="brand.logo"
        :alt="brand.name"
        class="max-h-12 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
      />
    </div>
  </div>
</template>

<style scoped></style>
