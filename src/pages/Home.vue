<script setup lang="ts">
import HeroBanner from '@/components/layout/HeroBanner.vue';
import Section from '@/components/ui/Section.vue';
</script>

<template>
  <div>
    <div>
      <HeroBanner />
    </div>

    <div class="flex justify-center items-center">
      <Section
        title="Produtos"
        subtitle="Veja as novidades de produtos que acabaram de chegar"
      />
    </div>
  </div>
</template>
