<script setup lang="ts">
import type { AboutStat } from '@/types/pages/about.type';

interface Props {
  stats: AboutStat[];
}

defineProps<Props>();
</script>

<template>
  <div class="bg-emerald-600 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="text-center transform transition-transform duration-300 hover:scale-105"
        >
          <div class="text-4xl md:text-5xl font-bold mb-2">
            {{ stat.number }}
          </div>
          <div class="text-lg md:text-xl font-semibold mb-1">
            {{ stat.label }}
          </div>
          <div class="text-sm md:text-base text-emerald-100 opacity-90">
            {{ stat.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
