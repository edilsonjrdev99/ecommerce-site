<script setup lang="ts">
import type { SectionType } from '@/types/ui/section.type';

withDefaults(defineProps<SectionType>(), {
  centered: true,
  size: 'md',
});
</script>

<template>
  <section
    class="section-container mt-2"
    :class="[centered ? 'text-center' : 'text-left', `section-${size}`]"
  >
    <h2 class="section-title">{{ title }}</h2>
    <p class="section-subtitle">{{ subtitle }}</p>

    <!-- Slot para conteúdo adicional -->
    <slot />
  </section>
</template>

<style scoped>
.section-container {
  margin-bottom: 2rem;
}

.section-title {
  font-weight: 600;
  color: var(--dark-bg);
  margin-bottom: 0.5rem;
}

.section-subtitle {
  color: #64748b;
  line-height: 1.6;
}

/* Tamanhos */
.section-sm .section-title {
  font-size: 1.5rem;
}

.section-md .section-title {
  font-size: 2rem;
}

.section-lg .section-title {
  font-size: 2.5rem;
}

.section-sm .section-subtitle {
  font-size: 0.875rem;
}

.section-md .section-subtitle {
  font-size: 1rem;
}

.section-lg .section-subtitle {
  font-size: 1.125rem;
}
</style>
