<script setup lang="ts">
import useMainProducts from '@/composables/layout/useMainProducts';

const { mainProducts } = useMainProducts();

// Função para calcular porcentagem de desconto
const calculateDiscountPercentage = (
  original: number,
  discount: number
): number => {
  return Math.round(((original - discount) / original) * 100);
};
</script>

<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8"
  >
    <article
      class="product-card"
      v-for="mainProduct in mainProducts"
      :key="mainProduct.id"
    >
      <!-- Badge de desconto -->
      <div
        v-if="mainProduct.discountValue"
        class="product-card__discount-badge"
      >
        {{
          calculateDiscountPercentage(
            mainProduct.price,
            mainProduct.discountValue
          )
        }}% OFF
      </div>

      <!-- Imagem do produto -->
      <div class="product-card__image-wrapper">
        <img
          :src="mainProduct.image"
          :alt="mainProduct.name"
          class="product-card__image"
        />
      </div>

      <!-- Conteúdo do card -->
      <div class="product-card__content">
        <h3 class="product-card__title">{{ mainProduct.name }}</h3>
        <p class="product-card__description">{{ mainProduct.description }}</p>

        <!-- Seção de preços -->
        <div class="product-card__pricing">
          <div class="product-card__price-wrapper">
            <span
              v-if="mainProduct.discountValue"
              class="product-card__price-original"
            >
              R$ {{ mainProduct.price.toFixed(2).replace('.', ',') }}
            </span>
            <span class="product-card__price-current">
              R$
              {{
                (mainProduct.discountValue || mainProduct.price)
                  .toFixed(2)
                  .replace('.', ',')
              }}
            </span>
          </div>
        </div>

        <!-- Botão de comprar -->
        <button class="product-card__buy-button">
          <svg
            class="product-card__buy-icon"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
            />
          </svg>
          <span>Comprar</span>
        </button>
      </div>
    </article>
  </div>
</template>

<style scoped>
/* Bloco: Product Card */
.product-card {
  position: relative;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  transform: translateY(-4px);
}

/* Elemento: Badge de Desconto */
.product-card__discount-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.375rem 0.75rem;
  background: linear-gradient(135deg, #dc2626, #ef4444);
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 16px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0 2px 8px rgba(220, 38, 38, 0.3);
  z-index: 2;
}

/* Elemento: Wrapper da Imagem */
.product-card__image-wrapper {
  background: #f3f4f6;
  height: 12rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  overflow: hidden;
  position: relative;
}

.product-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-card:hover .product-card__image {
  transform: scale(1.05);
}

/* Elemento: Conteúdo */
.product-card__content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
}

/* Elemento: Título */
.product-card__title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--dark-bg);
  margin: 0;
  line-height: 1.4;
}

/* Elemento: Descrição */
.product-card__description {
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.5;
  margin: 0;
  flex-grow: 1;
}

/* Elemento: Seção de Preços */
.product-card__pricing {
  margin: 0.5rem 0 1rem 0;
}

.product-card__price-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

/* Elemento: Preço Original */
.product-card__price-original {
  font-size: 0.875rem;
  color: #9ca3af;
  text-decoration: line-through;
  font-weight: 400;
}

/* Elemento: Preço Atual */
.product-card__price-current {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--primary);
}

/* Elemento: Botão de Comprar */
.product-card__buy-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem 1rem;
  background: linear-gradient(135deg, var(--primary) 0%, #10b981 100%);
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(6, 167, 125, 0.2);
  position: relative;
  overflow: hidden;
  margin-top: auto;
}

.product-card__buy-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s;
}

.product-card__buy-button:hover::before {
  left: 100%;
}

.product-card__buy-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(6, 167, 125, 0.3);
}

.product-card__buy-button:active {
  transform: translateY(0);
}

/* Elemento: Ícone do Botão */
.product-card__buy-icon {
  width: 1rem;
  height: 1rem;
  transition: transform 0.3s ease;
}

.product-card__buy-button:hover .product-card__buy-icon {
  transform: scale(1.1);
}

/* Design Responsivo */
@media (max-width: 768px) {
  .product-card {
    padding: 1rem;
  }

  .product-card__image-wrapper {
    height: 10rem;
  }

  .product-card__title {
    font-size: 1rem;
  }

  .product-card__description {
    font-size: 0.8125rem;
  }

  .product-card__price-current {
    font-size: 1.125rem;
  }

  .product-card__buy-button {
    padding: 0.625rem 0.875rem;
    font-size: 0.8125rem;
  }

  .product-card__discount-badge {
    top: 0.75rem;
    right: 0.75rem;
    padding: 0.25rem 0.5rem;
    font-size: 0.6875rem;
  }
}

@media (max-width: 480px) {
  .product-card__image-wrapper {
    height: 8rem;
  }

  .product-card__title {
    font-size: 0.9375rem;
  }

  .product-card__price-current {
    font-size: 1rem;
  }
}
</style>
