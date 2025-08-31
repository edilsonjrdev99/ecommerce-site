<script setup lang="ts">
import type { CompanyValue } from '@/types/pages/about.type';

interface Props {
  value: CompanyValue;
}

defineProps<Props>();
</script>

<template>
  <div class="relative group h-full">
    <div
      class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-emerald-200 hover:-translate-y-1 h-full flex flex-col"
    >
      <!-- Ícone -->
      <div
        class="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl mb-6 group-hover:bg-emerald-200 transition-colors"
      >
        <svg
          class="w-8 h-8 text-emerald-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            :d="value.icon"
          />
        </svg>
      </div>

      <!-- Conteúdo -->
      <h3
        class="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors"
      >
        {{ value.title }}
      </h3>
      <p class="text-gray-600 leading-relaxed flex-grow">
        {{ value.description }}
      </p>

      <!-- Elemento decorativo -->
      <div
        class="absolute top-4 right-4 w-2 h-2 bg-emerald-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      ></div>
    </div>
  </div>
</template>
