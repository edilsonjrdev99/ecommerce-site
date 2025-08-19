<script setup lang="ts">
import HeroBanner from '@/components/layout/HeroBanner.vue';
import Section from '@/components/ui/Section.vue';
import MainProducts from '@/components/layout/MainProducts.vue';
import MainCategories from '@/components/layout/MainCategories.vue';
</script>

<template>
  <div>
    <div>
      <HeroBanner />
    </div>

    <div class="container mx-auto px-4">
      <Section
        title="Categorias em Destaque"
        subtitle="Explore nossas principais categorias de produtos"
      >
        <MainCategories />
      </Section>
    </div>

    <div class="container mx-auto px-4">
      <Section
        title="Produtos"
        subtitle="Veja as novidades de produtos que acabaram de chegar"
      >
        <MainProducts />
      </Section>
    </div>
  </div>
</template>
