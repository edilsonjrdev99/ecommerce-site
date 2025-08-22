<script setup lang="ts">
import usePromoBanner from '@/composables/layout/usePromoBanner';

const { promoBanner, isValidPromo, timeRemaining } = usePromoBanner();
</script>

<template>
  <div
    v-if="isValidPromo"
    class="rounded-lg p-8 text-center relative overflow-hidden"
    :style="{
      backgroundColor: promoBanner.backgroundColor,
      color: promoBanner.textColor,
    }"
  >
    <div class="relative z-10">
      <div class="max-w-4xl mx-auto">
        <div class="mb-4">
          <span
            class="inline-block text-4xl md:text-6xl font-bold mb-2"
            style="color: var(--primary)"
          >
            {{ promoBanner.discount }}
          </span>
        </div>

        <h2 class="text-2xl md:text-3xl font-bold mb-2">
          {{ promoBanner.title }}
        </h2>

        <p class="text-lg md:text-xl opacity-90 mb-6">
          {{ promoBanner.subtitle }}
        </p>

        <div v-if="timeRemaining" class="mb-6">
          <p class="text-sm opacity-75 mb-2">Oferta termina em:</p>
          <div class="flex justify-center gap-3 text-center flex-wrap">
            <div
              class="bg-white text-emerald-500 bg-opacity-20 rounded-lg p-3 min-w-[50px]"
            >
              <div class="text-lg md:text-xl font-bold">
                {{ timeRemaining.days }}
              </div>
              <div class="text-xs opacity-75">Dias</div>
            </div>
            <div
              class="bg-white text-emerald-500 bg-opacity-20 rounded-lg p-3 min-w-[50px]"
            >
              <div class="text-lg md:text-xl font-bold">
                {{ timeRemaining.hours }}
              </div>
              <div class="text-xs opacity-75">Hrs</div>
            </div>
            <div
              class="bg-white text-emerald-500 bg-opacity-20 rounded-lg p-3 min-w-[50px]"
            >
              <div class="text-lg md:text-xl font-bold">
                {{ timeRemaining.minutes }}
              </div>
              <div class="text-xs opacity-75">Min</div>
            </div>
            <div
              class="bg-white text-emerald-500 bg-opacity-20 rounded-lg p-3 min-w-[50px]"
            >
              <div class="text-lg md:text-xl font-bold">
                {{ timeRemaining.seconds }}
              </div>
              <div class="text-xs opacity-75">Seg</div>
            </div>
          </div>
        </div>

        <button
          class="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
          style="background-color: var(--primary); color: white"
        >
          {{ promoBanner.ctaText }}
          <svg
            class="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>
    </div>

    <div
      class="absolute inset-0 opacity-10"
      style="
        background-image: radial-gradient(
          circle at 20% 80%,
          var(--primary) 0%,
          transparent 50%
        );
      "
    ></div>
  </div>
</template>

<style scoped></style>
