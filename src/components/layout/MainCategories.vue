<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/css/core';

import useMainCategories from '@/composables/layout/useMainCategories';

const { mainCategories } = useMainCategories();

// Configurações do Splide para mobile
const splideOptions = {
  type: 'loop',
  perPage: 1,
  perMove: 1,
  gap: '1rem',
  padding: '2rem',
  arrows: true,
  pagination: true,
  breakpoints: {
    640: {
      padding: '1rem',
    },
  },
};
</script>

<template>
  <!-- Layout Desktop -->
  <div class="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
    <div
      class="category-card"
      v-for="category in mainCategories"
      :key="category.id"
    >
      <div class="category-card__image-wrapper">
        <img
          :src="category.image"
          :alt="category.name"
          class="category-card__image"
        />
      </div>

      <div class="category-card__overlay"></div>

      <div class="category-card__content">
        <h3 class="category-card__title">{{ category.name }}</h3>
        <p class="category-card__description">{{ category.description }}</p>
        <p class="category-card__product-count">
          {{ category.productCount }} produtos
        </p>
      </div>
    </div>
  </div>

  <!-- Layout Mobile - Slider com Splide -->
  <div class="md:hidden mt-8">
    <Splide :options="splideOptions" class="categories-splide">
      <SplideSlide
        v-for="category in mainCategories"
        :key="category.id"
        class="categories-splide__slide"
      >
        <div class="category-card">
          <div class="category-card__image-wrapper">
            <img
              :src="category.image"
              :alt="category.name"
              class="category-card__image"
            />
          </div>

          <div class="category-card__overlay"></div>

          <div class="category-card__content">
            <h3 class="category-card__title">{{ category.name }}</h3>
            <p class="category-card__description">{{ category.description }}</p>
            <p class="category-card__product-count">
              {{ category.productCount }} produtos
            </p>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  </div>
</template>

<style scoped>
/* Bloco: Category Card - Padrão Reutilizado */
.category-card {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  height: 280px;
}

.category-card:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  transform: translateY(-4px);
}

/* Elemento: Image Wrapper */
.category-card__image-wrapper {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.category-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.category-card:hover .category-card__image {
  transform: scale(1.1);
}

/* Elemento: Overlay */
.category-card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.2) 50%,
    transparent 100%
  );
  z-index: 1;
}

/* Elemento: Content */
.category-card__content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  color: white;
  z-index: 2;
}

.category-card__title {
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.4;
  margin: 0 0 0.25rem 0;
}

.category-card__description {
  font-size: 0.875rem;
  color: #e5e7eb;
  line-height: 1.5;
  margin: 0 0 0.5rem 0;
}

.category-card__product-count {
  font-size: 0.75rem;
  color: #d1d5db;
  margin: 0;
}

/* Customização do Splide */
.categories-splide {
  padding: 0;
  position: relative;
  margin: 0 4rem;
}

/* Setas personalizadas */
.categories-splide :deep(.splide__arrow) {
  background: white !important;
  border: none !important;
  border-radius: 50% !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
  width: 40px !important;
  height: 40px !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
  opacity: 1 !important;
  z-index: 10 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  position: absolute !important;
}

.categories-splide :deep(.splide__arrow:hover) {
  background: var(--primary) !important;
  box-shadow: 0 6px 20px rgba(6, 167, 125, 0.3) !important;
}

.categories-splide :deep(.splide__arrow svg) {
  fill: var(--primary) !important;
  transition: fill 0.3s ease !important;
  width: 20px !important;
  height: 20px !important;
}

.categories-splide :deep(.splide__arrow:hover svg) {
  fill: white !important;
}

.categories-splide :deep(.splide__arrow--prev) {
  left: -4rem !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  right: auto !important;
}

.categories-splide :deep(.splide__arrow--next) {
  right: -4rem !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  left: auto !important;
}

/* Corrigir ícones das setas */
.categories-splide :deep(.splide__arrow--prev svg) {
  transform: rotate(180deg);
}

.categories-splide :deep(.splide__arrow--next svg) {
  transform: rotate(0deg);
}

/* Garantir posicionamento correto das setas */
.categories-splide :deep(.splide__arrow--prev:hover) {
  transform: translateY(-50%) scale(1.1) !important;
}

.categories-splide :deep(.splide__arrow--next:hover) {
  transform: translateY(-50%) scale(1.1) !important;
}

/* Indicadores personalizados */
.categories-splide :deep(.splide__pagination) {
  bottom: -3rem;
}

.categories-splide :deep(.splide__pagination__page) {
  background: #d1d5db;
  border: none;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  margin: 0 4px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.categories-splide :deep(.splide__pagination__page.is-active) {
  background: var(--primary);
  border-radius: 4px;
  width: 24px;
}

.categories-splide :deep(.splide__pagination__page:hover) {
  background: #9ca3af;
  transform: scale(1.2);
}

.categories-splide :deep(.splide__pagination__page.is-active:hover) {
  background: var(--primary);
}

/* Design Responsivo */
@media (max-width: 640px) {
  .category-card {
    height: 240px;
  }

  .category-card__content {
    padding: 1rem;
  }

  .category-card__title {
    font-size: 1rem;
  }

  .category-card__description {
    font-size: 0.8125rem;
  }

  .categories-splide {
    margin: 0 3rem;
  }

  .categories-splide :deep(.splide__arrow) {
    width: 36px !important;
    height: 36px !important;
  }

  .categories-splide :deep(.splide__arrow--prev) {
    left: -3rem !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
    right: auto !important;
  }

  .categories-splide :deep(.splide__arrow--next) {
    right: -3rem !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
    left: auto !important;
  }
}

@media (max-width: 480px) {
  .category-card {
    height: 200px;
  }

  .category-card__content {
    padding: 0.75rem;
  }

  .category-card__title {
    font-size: 0.9375rem;
  }

  .category-card__description {
    font-size: 0.75rem;
    margin-bottom: 0.25rem;
  }

  .category-card__product-count {
    font-size: 0.6875rem;
  }

  .categories-splide :deep(.splide__arrow) {
    width: 32px !important;
    height: 32px !important;
  }

  .categories-splide {
    margin: 0 2.5rem;
  }

  .categories-splide :deep(.splide__arrow--prev) {
    left: -2.5rem !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
    right: auto !important;
  }

  .categories-splide :deep(.splide__arrow--next) {
    right: -2.5rem !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
    left: auto !important;
  }

  .categories-splide :deep(.splide__pagination__page) {
    width: 6px;
    height: 6px;
  }

  .categories-splide :deep(.splide__pagination__page.is-active) {
    width: 18px;
  }
}

/* Acessibilidade */
@media (prefers-reduced-motion: reduce) {
  .category-card,
  .category-card__image,
  .categories-splide :deep(.splide__arrow),
  .categories-splide :deep(.splide__pagination__page) {
    transition: none;
  }
}
</style>
