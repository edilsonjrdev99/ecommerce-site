<script setup lang="ts">
import { onMounted } from 'vue';
import useProduct3D from '@/composables/layout/useProduct3D';

const { featuredProduct3D, supportsAR } = useProduct3D();

onMounted(() => {
  import('@google/model-viewer');
});
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8">
    <div class="relative">
      <div
        class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 shadow-lg"
      >
        <model-viewer
          :src="featuredProduct3D.model"
          :ios-src="featuredProduct3D.iosModel"
          alt="MacBook Pro 3D Interativo"
          auto-rotate
          camera-controls
          ar
          :ar-modes="
            supportsAR() ? 'webxr scene-viewer quick-look' : 'scene-viewer'
          "
          ar-scale="auto"
          ar-placement="floor"
          shadow-intensity="1"
          shadow-softness="0.8"
          :animation-name="featuredProduct3D.animationName"
          :autoplay="featuredProduct3D.autoplay"
          animation-crossfade-duration="300"
          class="w-full h-110 rounded-xl"
          loading="eager"
          reveal="auto"
        />

        <div class="absolute top-6 left-6">
          <div class="bg-white rounded-full px-3 py-1 shadow-md">
            <span class="text-xs font-semibold" style="color: var(--primary)">
              3D + AR
            </span>
          </div>
        </div>

        <div v-if="supportsAR()" class="absolute top-6 right-6">
          <div class="bg-white bg-opacity-90 rounded-full p-2 shadow-md">
            <svg
              class="w-5 h-5"
              style="color: var(--primary)"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="space-y-6">
      <div>
        <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          {{ featuredProduct3D.name }}
        </h3>
        <p class="text-gray-600 leading-relaxed mb-4">
          {{ featuredProduct3D.description }}
        </p>
        <div class="text-3xl font-bold mb-6" style="color: var(--primary)">
          {{ featuredProduct3D.price }}
        </div>
      </div>

      <div class="space-y-4">
        <h4 class="text-lg font-semibold text-gray-900">
          Recursos Interativos:
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div
            v-for="feature in featuredProduct3D.features"
            :key="feature"
            class="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100"
          >
            <div
              class="w-2 h-2 rounded-full"
              style="background-color: var(--primary)"
            ></div>
            <span class="text-sm text-gray-700">{{ feature }}</span>
          </div>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row gap-3 pt-4">
        <button
          class="flex-1 px-6 py-3 font-semibold rounded-lg transition-all duration-200 hover:scale-105"
          style="background-color: var(--primary); color: white"
        >
          Comprar Agora
        </button>
        <button
          class="flex-1 px-6 py-3 font-semibold rounded-lg border-2 transition-all duration-200 hover:bg-gray-50"
          style="border-color: var(--primary); color: var(--primary)"
        >
          Ver Detalhes
        </button>
      </div>

      <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div class="flex items-start space-x-3">
          <svg
            class="w-5 h-5 text-blue-600 mt-0.5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            />
          </svg>
          <div>
            <h5 class="font-semibold text-blue-900 text-sm">
              Dica: Experimente em AR!
            </h5>
            <p class="text-blue-700 text-xs mt-1">
              Toque no modelo e selecione "Ver em AR" para visualizar o produto
              no seu ambiente.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
model-viewer {
  background-color: transparent;
}

model-viewer::part(default-progress-bar) {
  background-color: var(--primary);
}
</style>
