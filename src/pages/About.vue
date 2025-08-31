<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import StatsSection from '@/components/about/StatsSection.vue';
import ValueCard from '@/components/about/ValueCard.vue';
import Timeline from '@/components/about/Timeline.vue';

import useAbout from '@/composables/pages/useAbout';

const router = useRouter();
const { aboutContent } = useAbout();
const activeSection = ref('mission');

// Função para alternar seção ativa
const setActiveSection = (sectionId: string) => {
  activeSection.value = sectionId;
};

// Função para verificar se uma seção está ativa
const isSectionActive = (sectionId: string) => {
  return activeSection.value === sectionId;
};

// Função para navegar para produtos
const goToProducts = () => {
  router.push('/produtos');
};
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Seção Hero -->
    <section class="relative bg-emerald-600 text-white overflow-hidden">
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
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Conteúdo -->
          <div class="text-center lg:text-left">
            <h1
              class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white"
            >
              {{ aboutContent.hero.title }}
            </h1>
            <p
              class="text-xl md:text-2xl mb-6 text-white font-medium opacity-90"
            >
              {{ aboutContent.hero.subtitle }}
            </p>
            <p class="text-lg mb-8 text-white leading-relaxed opacity-85">
              {{ aboutContent.hero.description }}
            </p>

            <!-- Botão CTA -->
            <div
              class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                @click="goToProducts"
                class="bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors shadow-lg"
              >
                Ver Produtos
              </button>
              <button
                @click="setActiveSection('story')"
                class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-700 transition-colors"
              >
                Nossa História
              </button>
            </div>
          </div>

          <!-- Imagem -->
          <div class="relative">
            <div
              class="aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                :src="aboutContent.hero.image"
                :alt="aboutContent.hero.title"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção de Estatísticas -->
    <StatsSection :stats="aboutContent.hero.stats" />

    <!-- Seção de Conteúdo Principal -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Navegação por abas -->
        <div class="flex flex-wrap justify-center gap-2 mb-16">
          <button
            v-for="section in aboutContent.sections"
            :key="section.id"
            @click="setActiveSection(section.id)"
            :class="[
              'px-6 py-3 rounded-full font-semibold transition-all duration-300',
              isSectionActive(section.id)
                ? 'bg-emerald-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-600',
            ]"
          >
            {{ section.title }}
          </button>
        </div>

        <!-- Conteúdo da seção ativa -->
        <div class="transition-all duration-500">
          <div
            v-for="section in aboutContent.sections"
            v-show="isSectionActive(section.id)"
            :key="section.id"
            :class="[
              'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center',
              section.reverse ? 'lg:grid-flow-col-reverse' : '',
            ]"
          >
            <!-- Imagem -->
            <div v-if="section.image" class="relative">
              <div class="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  :src="section.image"
                  :alt="section.title"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <!-- Conteúdo -->
            <div>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {{ section.title }}
              </h2>
              <p class="text-lg text-gray-700 leading-relaxed mb-8">
                {{ section.content }}
              </p>

              <!-- Features -->
              <div v-if="section.features" class="space-y-4">
                <div
                  v-for="feature in section.features"
                  :key="feature"
                  class="flex items-start space-x-3"
                >
                  <svg
                    class="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="text-gray-700">{{ feature }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção de Valores -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Cabeçalho -->
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Nossos Valores
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Os princípios que guiam todas as nossas decisões e definem nossa
            cultura empresarial
          </p>
        </div>

        <!-- Grid de valores -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          <ValueCard
            v-for="value in aboutContent.values"
            :key="value.id"
            :value="value"
          />
        </div>
      </div>
    </section>

    <!-- Seção Timeline -->
    <section class="py-20 bg-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Cabeçalho -->
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Nossa Jornada
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Os marcos importantes que definiram nossa trajetória de crescimento
          </p>
        </div>

        <!-- Timeline -->
        <Timeline :milestones="aboutContent.timeline" />
      </div>
    </section>

    <!-- Seção CTA Final -->
    <section
      class="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white"
    >
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Pronto para fazer parte da nossa história?
        </h2>
        <p class="text-xl mb-8 text-emerald-100">
          Junte-se aos milhares de clientes que já confiam em nossos produtos e
          serviços
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            @click="goToProducts"
            class="bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors shadow-lg"
          >
            Ver Produtos
          </button>
          <button
            class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-700 transition-colors"
          >
            Fale Conosco
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Animação suave para transições de conteúdo */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Efeito hover personalizado para cards */
.hover\:scale-105:hover {
  transform: scale(1.05);
}

/* Gradiente personalizado */
.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}
</style>
