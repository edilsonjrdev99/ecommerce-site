<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import type { CategoryProduct } from '@/types/pages/category.type';
import type { MainProducts } from '@/types/layout/mainProducts.type';

import ProductCard from '@/components/common/ProductCard.vue';

import useCategory from '@/composables/pages/useCategory';

const route = useRoute();
const router = useRouter();

const categoryId = route.params.id as string;

const {
  categoryInfo,
  filters,
  filteredProducts,
  categoryStats,
  sortOptions,
  updateSearchTerm,
  updatePriceRange,
  updateSortBy,
  updateHasDiscount,
  updateInStock,
  updateRating,
  resetFilters,
} = useCategory(categoryId);

// Converter CategoryProduct para MainProducts para o ProductCard
const convertToMainProduct = (product: CategoryProduct): MainProducts => {
  return {
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.originalPrice || product.price,
    discountValue: product.discount ? product.price : undefined,
    image: product.image,
  };
};

// Manipuladores dos eventos
const handleProductClick = (product: MainProducts) => {
  console.log('Produto clicado na categoria:', product.id, product.name);
  router.push(`/produto/${product.id}`);
};

const handleBuyClick = (product: MainProducts) => {
  console.log('Botão comprar clicado:', product);
  // Implementar adição ao carrinho
};

// Handler para busca
const handleSearch = (event: Event) => {
  const target = event.target as { value: string } | null;
  if (target) {
    updateSearchTerm(target.value);
  }
};

// Handler para preço mínimo
const handleMinPriceChange = (event: Event) => {
  const target = event.target as { value: string } | null;
  if (target) {
    const minPrice = parseFloat(target.value) || 0;
    updatePriceRange(minPrice, filters.priceRange.max);
  }
};

// Handler para preço máximo
const handleMaxPriceChange = (event: Event) => {
  const target = event.target as { value: string } | null;
  if (target) {
    const maxPrice = parseFloat(target.value) || 10000;
    updatePriceRange(filters.priceRange.min, maxPrice);
  }
};

// Handler para ordenação
const handleSortChange = (event: Event) => {
  const target = event.target as { value: string } | null;
  if (target) {
    updateSortBy(target.value);
  }
};

// Handler para filtro de desconto
const handleDiscountFilter = (event: Event) => {
  const target = event.target as { checked: boolean } | null;
  if (target) {
    updateHasDiscount(target.checked);
  }
};

// Handler para filtro de estoque
const handleStockFilter = (event: Event) => {
  const target = event.target as { checked: boolean } | null;
  if (target) {
    updateInStock(target.checked);
  }
};

// Handler para filtro de avaliação
const handleRatingChange = (event: Event) => {
  const target = event.target as { value: string } | null;
  if (target) {
    updateRating(parseFloat(target.value));
  }
};

// Formatador de preço
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
};
</script>

<template>
  <div class="category-page">
    <!-- Cabeçalho da categoria -->
    <div class="category-header">
      <div class="category-header__content">
        <div class="category-header__text">
          <h1 class="category-header__title">{{ categoryInfo.name }}</h1>
          <p class="category-header__description">
            {{ categoryInfo.description }}
          </p>
          <div class="category-header__stats">
            <span class="category-stat">
              {{ categoryStats.total }} produto{{
                categoryStats.total !== 1 ? 's' : ''
              }}
            </span>
            <span
              v-if="categoryStats.withDiscount > 0"
              class="category-stat category-stat--discount"
            >
              {{ categoryStats.withDiscount }} com desconto
            </span>
          </div>
        </div>
        <div class="category-header__image">
          <img :src="categoryInfo.image" :alt="categoryInfo.name" />
        </div>
      </div>
    </div>

    <div class="category-container">
      <!-- Sidebar com filtros -->
      <aside class="category-sidebar">
        <div class="filters-section">
          <h2 class="filters-section__title">Filtros</h2>

          <!-- Filtro de busca -->
          <div class="filter-group">
            <label class="filter-group__label" for="search">
              Buscar produto
            </label>
            <div class="search-input-wrapper">
              <svg
                class="search-input__icon"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                id="search"
                type="text"
                class="search-input"
                placeholder="Digite o nome do produto..."
                :value="filters.searchTerm"
                @input="handleSearch"
              />
            </div>
          </div>

          <!-- Filtro de preço -->
          <div class="filter-group">
            <label class="filter-group__label">Faixa de preço</label>
            <div class="price-range-inputs">
              <div class="price-input-group">
                <label class="price-label" for="min-price">Min.</label>
                <input
                  id="min-price"
                  type="number"
                  class="price-input"
                  placeholder="0"
                  min="0"
                  :value="filters.priceRange.min"
                  @input="handleMinPriceChange"
                />
              </div>
              <div class="price-input-group">
                <label class="price-label" for="max-price">Max.</label>
                <input
                  id="max-price"
                  type="number"
                  class="price-input"
                  placeholder="10000"
                  min="0"
                  :value="filters.priceRange.max"
                  @input="handleMaxPriceChange"
                />
              </div>
            </div>
            <div class="price-range-display">
              {{ formatPrice(filters.priceRange.min) }} -
              {{ formatPrice(filters.priceRange.max) }}
            </div>
          </div>

          <!-- Filtro de avaliação -->
          <div class="filter-group">
            <label class="filter-group__label" for="rating">
              Avaliação mínima
            </label>
            <select
              id="rating"
              class="filter-select"
              :value="filters.rating"
              @change="handleRatingChange"
            >
              <option value="0">Todas as avaliações</option>
              <option value="4">4+ estrelas</option>
              <option value="4.5">4.5+ estrelas</option>
              <option value="4.8">4.8+ estrelas</option>
            </select>
          </div>

          <!-- Filtros de checkbox -->
          <div class="filter-group">
            <label class="filter-checkbox">
              <input
                type="checkbox"
                class="filter-checkbox__input"
                :checked="filters.hasDiscount"
                @change="handleDiscountFilter"
              />
              <span class="filter-checkbox__mark"></span>
              <span class="filter-checkbox__label">Apenas com desconto</span>
            </label>
          </div>

          <div class="filter-group">
            <label class="filter-checkbox">
              <input
                type="checkbox"
                class="filter-checkbox__input"
                :checked="filters.inStock"
                @change="handleStockFilter"
              />
              <span class="filter-checkbox__mark"></span>
              <span class="filter-checkbox__label">Apenas em estoque</span>
            </label>
          </div>

          <!-- Botão de limpar filtros -->
          <button class="filters-reset-button" @click="resetFilters">
            <svg
              class="filters-reset-button__icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                clip-rule="evenodd"
              />
            </svg>
            Limpar filtros
          </button>
        </div>
      </aside>

      <!-- Conteúdo principal -->
      <main class="category-main">
        <!-- Barra de controles -->
        <div class="category-controls">
          <div class="category-controls__left">
            <span class="products-count">
              {{ filteredProducts.length }} produto{{
                filteredProducts.length !== 1 ? 's' : ''
              }}
              encontrado{{ filteredProducts.length !== 1 ? 's' : '' }}
            </span>
            <span
              v-if="categoryStats.withDiscount > 0"
              class="products-discount-count"
            >
              ({{ categoryStats.withDiscount }} com desconto)
            </span>
          </div>

          <div class="category-controls__right">
            <label class="sort-label" for="sort">Ordenar por:</label>
            <select
              id="sort"
              class="sort-select"
              :value="filters.sortBy"
              @change="handleSortChange"
            >
              <option
                v-for="option in sortOptions"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
          </div>
        </div>

        <!-- Grid de produtos -->
        <div v-if="filteredProducts.length > 0" class="products-grid">
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="convertToMainProduct(product)"
            @click="handleProductClick"
            @buy-click="handleBuyClick"
          />
        </div>

        <!-- Estado vazio -->
        <div v-else class="products-empty">
          <div class="products-empty__icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h3 class="products-empty__title">Nenhum produto encontrado</h3>
          <p class="products-empty__description">
            Tente ajustar os filtros ou buscar por outros termos.
          </p>
          <button class="products-empty__button" @click="resetFilters">
            Limpar filtros
          </button>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
/* Layout da página */
.category-page {
  min-height: 100vh;
  background: #f9fafb;
}

/* Cabeçalho da categoria */
.category-header {
  background: white;
  border-bottom: 1px solid #e5e7eb;
  padding: 2rem 0;
  margin-bottom: 2rem;
}

.category-header__content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
  align-items: center;
}

.category-header__title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--dark-bg);
  margin: 0 0 0.5rem 0;
  line-height: 1.2;
}

.category-header__description {
  font-size: 1.125rem;
  color: #6b7280;
  margin: 0 0 1rem 0;
  line-height: 1.5;
}

.category-header__stats {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.category-stat {
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  background: #f3f4f6;
  color: var(--dark-bg);
  border-radius: 16px;
}

.category-stat--discount {
  background: rgba(6, 167, 125, 0.1);
  color: var(--primary);
}

.category-header__image {
  width: 200px;
  height: 120px;
  border-radius: 12px;
  overflow: hidden;
}

.category-header__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Container principal */
.category-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2rem;
  align-items: start;
}

/* Sidebar de filtros */
.category-sidebar {
  position: sticky;
  top: 2rem;
}

.filters-section {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.filters-section__title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--dark-bg);
  margin: 0 0 1.5rem 0;
}

/* Grupos de filtros */
.filter-group {
  margin-bottom: 1.5rem;
}

.filter-group__label {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--dark-bg);
  margin-bottom: 0.5rem;
}

/* Input de busca */
.search-input-wrapper {
  position: relative;
}

.search-input__icon {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1.25rem;
  height: 1.25rem;
  color: #9ca3af;
}

.search-input {
  width: 100%;
  padding: 0.75rem 0.75rem 0.75rem 2.5rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.875rem;
  transition: all 0.2s;
}

.search-input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(6, 167, 125, 0.1);
}

/* Filtro de preço */
.price-range-inputs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.price-input-group {
  display: flex;
  flex-direction: column;
  min-width: 0; /* Permite que o flex item encolha */
}

.price-label {
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 0.25rem;
  white-space: nowrap;
}

.price-input {
  width: 100%;
  min-width: 0; /* Evita overflow */
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.875rem;
  transition: all 0.2s;
  box-sizing: border-box;
}

.price-input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 2px rgba(6, 167, 125, 0.1);
}

.price-range-display {
  font-size: 0.75rem;
  color: #6b7280;
  text-align: center;
  padding: 0.25rem;
  background: #f9fafb;
  border-radius: 4px;
}

/* Select de filtros */
.filter-select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.875rem;
  background: white;
  transition: all 0.2s;
  cursor: pointer;
}

.filter-select:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(6, 167, 125, 0.1);
}

/* Checkbox customizado */
.filter-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.filter-checkbox__input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.filter-checkbox__mark {
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid #d1d5db;
  border-radius: 4px;
  margin-right: 0.75rem;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.filter-checkbox__mark::after {
  content: '✓';
  color: white;
  font-size: 0.875rem;
  font-weight: 700;
  opacity: 0;
  transition: opacity 0.2s;
}

.filter-checkbox__input:checked + .filter-checkbox__mark {
  background: var(--primary);
  border-color: var(--primary);
}

.filter-checkbox__input:checked + .filter-checkbox__mark::after {
  opacity: 1;
}

.filter-checkbox__label {
  font-size: 0.875rem;
  color: var(--dark-bg);
}

/* Botão de resetar filtros */
.filters-reset-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem;
  background: #f3f4f6;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  color: #6b7280;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.filters-reset-button:hover {
  background: #e5e7eb;
  color: var(--dark-bg);
}

.filters-reset-button__icon {
  width: 1rem;
  height: 1rem;
}

/* Conteúdo principal */
.category-main {
  min-height: 100vh;
}

/* Controles de categoria */
.category-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.category-controls__left {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.products-count {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--dark-bg);
}

.products-discount-count {
  font-size: 0.875rem;
  color: var(--primary);
  font-weight: 500;
}

.category-controls__right {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.sort-label {
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
}

.sort-select {
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.875rem;
  background: white;
  cursor: pointer;
  transition: all 0.2s;
}

.sort-select:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 2px rgba(6, 167, 125, 0.1);
}

/* Grid de produtos */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

/* Estado vazio */
.products-empty {
  text-align: center;
  padding: 4rem 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 4rem;
}

.products-empty__icon {
  width: 4rem;
  height: 4rem;
  margin: 0 auto 1.5rem;
  color: #d1d5db;
}

.products-empty__icon svg {
  width: 100%;
  height: 100%;
}

.products-empty__title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--dark-bg);
  margin: 0 0 0.5rem 0;
}

.products-empty__description {
  font-size: 1rem;
  color: #6b7280;
  margin: 0 0 2rem 0;
}

.products-empty__button {
  padding: 0.75rem 1.5rem;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.products-empty__button:hover {
  background: #059669;
  transform: translateY(-1px);
}

/* Design Responsivo */
@media (max-width: 1024px) {
  .category-container {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .category-sidebar {
    position: static;
    order: 1;
  }

  .category-main {
    order: 2;
  }

  .category-header__content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .category-header__image {
    justify-self: center;
  }
}

@media (max-width: 768px) {
  .category-header {
    padding: 1.5rem 0;
  }

  .category-header__title {
    font-size: 2rem;
  }

  .category-controls {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }

  .category-controls__left,
  .category-controls__right {
    justify-content: center;
  }

  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .category-header__title {
    font-size: 1.75rem;
  }

  .category-container {
    padding: 0 0.75rem;
  }

  .filters-section {
    padding: 1rem;
  }

  .products-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .category-header__image {
    width: 150px;
    height: 90px;
  }
}
</style>
