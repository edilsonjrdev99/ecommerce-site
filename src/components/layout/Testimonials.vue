<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/css/core';

import useTestimonials from '@/composables/layout/useTestimonials';

const { testimonials, renderStars } = useTestimonials();

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
  <div class="hidden md:grid md:grid-cols-2 gap-6 mt-8">
    <div
      class="testimonial-card"
      v-for="testimonial in testimonials"
      :key="testimonial.id"
    >
      <!-- Estrelas -->
      <div class="flex items-center mb-4">
        <div class="flex space-x-1">
          <svg
            v-for="(filled, index) in renderStars(testimonial.rating)"
            :key="index"
            class="w-5 h-5"
            :class="filled ? 'text-yellow-400' : 'text-gray-300'"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        </div>
        <span
          v-if="testimonial.verified"
          class="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
        >
          <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
          Verificado
        </span>
      </div>

      <!-- Conteúdo -->
      <blockquote class="text-gray-700 mb-6 leading-relaxed">
        "{{ testimonial.content }}"
      </blockquote>

      <!-- Informação do usuário -->
      <div class="flex items-start">
        <img
          :src="testimonial.avatar"
          :alt="testimonial.name"
          class="w-12 h-12 rounded-full object-cover mr-4 flex-shrink-0"
        />
        <div class="flex-1 min-w-0">
          <div class="font-semibold text-gray-900 leading-tight">
            {{ testimonial.name }}
          </div>
          <div class="text-sm text-gray-500 leading-tight mt-1">
            {{ testimonial.role }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Layout Mobile - Slider com Splide -->
  <div class="md:hidden mt-8">
    <Splide :options="splideOptions" class="testimonials-splide">
      <SplideSlide
        v-for="testimonial in testimonials"
        :key="testimonial.id"
        class="testimonials-splide__slide"
      >
        <div class="testimonial-card">
          <!-- Estrelas -->
          <div class="flex items-center mb-4">
            <div class="flex space-x-1">
              <svg
                v-for="(filled, index) in renderStars(testimonial.rating)"
                :key="index"
                class="w-5 h-5"
                :class="filled ? 'text-yellow-400' : 'text-gray-300'"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>
            <span
              v-if="testimonial.verified"
              class="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
            >
              <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              Verificado
            </span>
          </div>

          <!-- Conteúdo -->
          <blockquote class="text-gray-700 mb-6 leading-relaxed">
            "{{ testimonial.content }}"
          </blockquote>

          <!-- Informação do usuário -->
          <div class="flex items-start">
            <img
              :src="testimonial.avatar"
              :alt="testimonial.name"
              class="w-12 h-12 rounded-full object-cover mr-4 flex-shrink-0"
            />
            <div class="flex-1 min-w-0">
              <div class="font-semibold text-gray-900 leading-tight">
                {{ testimonial.name }}
              </div>
              <div class="text-sm text-gray-500 leading-tight mt-1">
                {{ testimonial.role }}
              </div>
            </div>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  </div>
</template>

<style scoped>
/* Bloco: Testimonial Card - Padrão Reutilizado */
.testimonial-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #f3f4f6;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  min-height: 280px;
  display: flex;
  flex-direction: column;
}

.testimonial-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

/* Customização do Splide para Testimonials */
.testimonials-splide {
  padding: 0;
  position: relative;
  margin: 0 4rem;
}

/* Setas personalizadas */
.testimonials-splide :deep(.splide__arrow) {
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

.testimonials-splide :deep(.splide__arrow:hover) {
  background: var(--primary) !important;
  box-shadow: 0 6px 20px rgba(6, 167, 125, 0.3) !important;
}

.testimonials-splide :deep(.splide__arrow svg) {
  fill: var(--primary) !important;
  transition: fill 0.3s ease !important;
  width: 20px !important;
  height: 20px !important;
}

.testimonials-splide :deep(.splide__arrow:hover svg) {
  fill: white !important;
}

.testimonials-splide :deep(.splide__arrow--prev) {
  left: -4rem !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  right: auto !important;
}

.testimonials-splide :deep(.splide__arrow--next) {
  right: -4rem !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  left: auto !important;
}

/* Corrigir ícones das setas */
.testimonials-splide :deep(.splide__arrow--prev svg) {
  transform: rotate(180deg);
}

.testimonials-splide :deep(.splide__arrow--next svg) {
  transform: rotate(0deg);
}

/* Garantir posicionamento correto das setas */
.testimonials-splide :deep(.splide__arrow--prev:hover) {
  transform: translateY(-50%) scale(1.1) !important;
}

.testimonials-splide :deep(.splide__arrow--next:hover) {
  transform: translateY(-50%) scale(1.1) !important;
}

/* Indicadores personalizados */
.testimonials-splide :deep(.splide__pagination) {
  bottom: -3rem;
}

.testimonials-splide :deep(.splide__pagination__page) {
  background: #d1d5db;
  border: none;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  margin: 0 4px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.testimonials-splide :deep(.splide__pagination__page.is-active) {
  background: var(--primary);
  border-radius: 4px;
  width: 24px;
}

.testimonials-splide :deep(.splide__pagination__page:hover) {
  background: #9ca3af;
  transform: scale(1.2);
}

.testimonials-splide :deep(.splide__pagination__page.is-active:hover) {
  background: var(--primary);
}

/* Design Responsivo */
@media (max-width: 640px) {
  .testimonial-card {
    min-height: 260px;
    padding: 1.25rem;
  }

  .testimonials-splide {
    margin: 0 3rem;
  }

  .testimonials-splide :deep(.splide__arrow) {
    width: 36px !important;
    height: 36px !important;
  }

  .testimonials-splide :deep(.splide__arrow--prev) {
    left: -3rem !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
    right: auto !important;
  }

  .testimonials-splide :deep(.splide__arrow--next) {
    right: -3rem !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
    left: auto !important;
  }
}

@media (max-width: 480px) {
  .testimonial-card {
    min-height: 240px;
    padding: 1rem;
  }

  .testimonials-splide :deep(.splide__arrow) {
    width: 32px !important;
    height: 32px !important;
  }

  .testimonials-splide {
    margin: 0 2.5rem;
  }

  .testimonials-splide :deep(.splide__arrow--prev) {
    left: -2.5rem !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
    right: auto !important;
  }

  .testimonials-splide :deep(.splide__arrow--next) {
    right: -2.5rem !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
    left: auto !important;
  }

  .testimonials-splide :deep(.splide__pagination__page) {
    width: 6px;
    height: 6px;
  }

  .testimonials-splide :deep(.splide__pagination__page.is-active) {
    width: 18px;
  }
}

/* Acessibilidade */
@media (prefers-reduced-motion: reduce) {
  .testimonial-card,
  .testimonials-splide :deep(.splide__arrow),
  .testimonials-splide :deep(.splide__pagination__page) {
    transition: none;
  }
}
</style>
