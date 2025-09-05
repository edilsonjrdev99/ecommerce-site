<script setup lang="ts">
import { useRouter } from 'vue-router';
import type { CategoryListItem } from '@/types/pages/categories.type';

import Section from '@/components/ui/Section.vue';

import useCategories from '@/composables/pages/useCategories';

const router = useRouter();

const {
  categories,
  popularCategories,
  isLoading,
  totalCategories,
  totalProducts,
  fetchCategories,
  navigateToCategory,
} = useCategories();

// Executar busca inicial de categorias
fetchCategories();

// Manipulador para clique na categoria
const handleCategoryClick = (category: CategoryListItem) => {
  const categoryPath = navigateToCategory(category.slug);
  router.push(categoryPath);
};
</script>

<template>
  <div class="categories-page">
    <!-- Seção Hero -->
    <Section class="bg-emerald-600 text-white hero-section">
      <div class="relative overflow-hidden">
        <!-- Elementos decorativos -->
        <div
          class="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800"
        ></div>
        <div
          class="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full transform translate-x-48 -translate-y-48"
        ></div>
        <div
          class="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full transform -translate-x-32 translate-y-32"
        ></div>

        <div
          class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28"
        >
          <div class="text-center">
            <h1 class="text-4xl lg:text-6xl font-bold mb-6">
              Explore Nossas <span class="text-emerald-200">Categorias</span>
            </h1>
            <p
              class="text-xl lg:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed"
            >
              Descubra produtos incríveis organizados por categoria para
              facilitar sua busca
            </p>
            <div class="mt-8 flex justify-center gap-8 text-emerald-100">
              <div class="text-center">
                <div class="text-3xl font-bold">{{ totalCategories }}</div>
                <div class="text-sm opacity-90">Categorias</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold">{{ totalProducts }}+</div>
                <div class="text-sm opacity-90">Produtos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <!-- Seção de Categorias Populares -->
    <Section class="py-16 lg:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Categorias Populares
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            As categorias mais procuradas pelos nossos clientes
          </p>
        </div>

        <div
          v-if="!isLoading"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div
            v-for="category in popularCategories"
            :key="category.id"
            class="category-card category-card--popular"
            @click="handleCategoryClick(category)"
          >
            <div class="category-card__image">
              <img :src="category.image" :alt="category.name" />
              <div class="category-card__overlay">
                <div class="category-card__badge">Popular</div>
              </div>
            </div>
            <div class="category-card__content">
              <h3 class="category-card__title">{{ category.name }}</h3>
              <p class="category-card__description">
                {{ category.description }}
              </p>
              <div class="category-card__footer">
                <span class="category-card__count">
                  {{ category.productsCount }} produto{{
                    category.productsCount !== 1 ? 's' : ''
                  }}
                </span>
                <svg
                  class="category-card__arrow"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Loading skeleton para categorias populares -->
        <div
          v-else
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div
            v-for="i in 3"
            :key="i"
            class="category-card category-card--skeleton"
          >
            <div
              class="category-card__image category-card__image--skeleton"
            ></div>
            <div class="category-card__content">
              <div
                class="category-card__title category-card__title--skeleton"
              ></div>
              <div
                class="category-card__description category-card__description--skeleton"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <!-- Seção de Todas as Categorias -->
    <Section class="py-16 lg:py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Todas as Categorias
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore nossa coleção completa de categorias
          </p>
        </div>

        <div
          v-if="!isLoading"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div
            v-for="category in categories"
            :key="category.id"
            class="category-card category-card--compact"
            @click="handleCategoryClick(category)"
          >
            <div class="category-card__image category-card__image--compact">
              <img :src="category.image" :alt="category.name" />
              <div v-if="category.isPopular" class="category-card__overlay">
                <div class="category-card__badge category-card__badge--small">
                  Popular
                </div>
              </div>
            </div>
            <div class="category-card__content category-card__content--compact">
              <h3 class="category-card__title category-card__title--compact">
                {{ category.name }}
              </h3>
              <div class="category-card__footer category-card__footer--compact">
                <span
                  class="category-card__count category-card__count--compact"
                >
                  {{ category.productsCount }} produto{{
                    category.productsCount !== 1 ? 's' : ''
                  }}
                </span>
                <svg
                  class="category-card__arrow category-card__arrow--compact"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Loading skeleton para todas as categorias -->
        <div
          v-else
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div
            v-for="i in 8"
            :key="i"
            class="category-card category-card--compact category-card--skeleton"
          >
            <div
              class="category-card__image category-card__image--compact category-card__image--skeleton"
            ></div>
            <div class="category-card__content category-card__content--compact">
              <div
                class="category-card__title category-card__title--compact category-card__title--skeleton"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </div>
</template>

<style scoped>
/* Layout da página */
.categories-page {
  min-height: 100vh;
  background: #f9fafb;
}

/* Hero section sem espaçamento superior */
.hero-section {
  margin-top: 0 !important;
}

/* Remove espaçamento do primeiro Section */
.categories-page :first-child {
  margin-top: 0 !important;
}

/* Remove espaçamento específico do section-container */
.hero-section .section-container {
  margin-top: 0 !important;
}

/* Cards de categoria */
.category-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;
}

.category-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: rgba(6, 167, 125, 0.2);
}

/* Imagem da categoria */
.category-card__image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.category-card__image--compact {
  height: 150px;
}

.category-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.category-card:hover .category-card__image img {
  transform: scale(1.05);
}

/* Overlay e badge */
.category-card__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    rgba(6, 167, 125, 0.1) 0%,
    transparent 50%
  );
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 1rem;
}

.category-card__badge {
  background: rgba(6, 167, 125, 0.9);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
}

.category-card__badge--small {
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
}

/* Conteúdo da categoria */
.category-card__content {
  padding: 1.5rem;
}

.category-card__content--compact {
  padding: 1rem;
}

.category-card__title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--dark-bg);
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.category-card__title--compact {
  font-size: 1.125rem;
  margin-bottom: 0.75rem;
}

.category-card__description {
  color: #6b7280;
  line-height: 1.5;
  margin-bottom: 1rem;
  font-size: 0.875rem;
}

/* Rodapé da categoria */
.category-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.category-card__footer--compact {
  margin-top: 0.5rem;
}

.category-card__count {
  font-size: 0.875rem;
  color: var(--primary);
  font-weight: 600;
}

.category-card__count--compact {
  font-size: 0.75rem;
}

.category-card__arrow {
  width: 1.25rem;
  height: 1.25rem;
  color: #9ca3af;
  transition: all 0.3s ease;
}

.category-card__arrow--compact {
  width: 1rem;
  height: 1rem;
}

.category-card:hover .category-card__arrow {
  color: var(--primary);
  transform: translateX(4px);
}

/* Variação popular */
.category-card--popular {
  border: 2px solid rgba(6, 167, 125, 0.1);
}

.category-card--popular:hover {
  border-color: var(--primary);
}

/* Estados de skeleton loading */
.category-card--skeleton {
  pointer-events: none;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.category-card__image--skeleton {
  background: #e5e7eb;
}

.category-card__title--skeleton {
  height: 1.5rem;
  background: #e5e7eb;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.category-card__description--skeleton {
  height: 3rem;
  background: #f3f4f6;
  border-radius: 4px;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Design Responsivo */
@media (max-width: 768px) {
  .category-card__content {
    padding: 1rem;
  }

  .category-card__title {
    font-size: 1.25rem;
  }

  .category-card__title--compact {
    font-size: 1rem;
  }

  .category-card__image {
    height: 150px;
  }

  .category-card__image--compact {
    height: 120px;
  }
}

@media (max-width: 480px) {
  .categories-page {
    padding: 0;
  }

  .category-card {
    margin: 0 0.5rem;
  }

  .category-card__badge {
    font-size: 0.75rem;
    padding: 0.25rem 0.75rem;
  }
}
</style>
