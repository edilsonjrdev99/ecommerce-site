<script setup lang="ts">
import useNewsletter from '@/composables/layout/useNewsletter';

const { newsletter, subscribeNewsletter } = useNewsletter();
</script>

<template>
  <div
    class="bg-white rounded-lg shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300 text-center"
  >
    <h3 class="text-2xl font-bold mb-4 text-gray-900">
      Fique por dentro das novidades
    </h3>
    <p class="text-gray-600 mb-6 leading-relaxed">
      Assine nossa newsletter e receba ofertas exclusivas, lançamentos e dicas
      tecnológicas diretamente no seu email.
    </p>

    <!-- Formulário -->
    <div class="flex flex-col sm:flex-row gap-3 mb-6 max-w-md mx-auto">
      <input
        v-model="newsletter.email"
        type="email"
        placeholder="Digite seu melhor email"
        class="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        :disabled="newsletter.isSubmitting"
        @keyup.enter="subscribeNewsletter"
      />
      <button
        @click="subscribeNewsletter"
        :disabled="newsletter.isSubmitting"
        class="px-6 py-3 font-semibold rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed min-w-[120px]"
        style="background-color: var(--primary); color: white"
        :class="{
          'hover:opacity-90': !newsletter.isSubmitting,
        }"
      >
        <span v-if="!newsletter.isSubmitting">Assinar</span>
        <div v-else class="flex items-center justify-center">
          <svg
            class="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      </button>
    </div>

    <!-- Política de Privacidade -->
    <p class="text-xs text-gray-500">
      Ao se inscrever, você concorda com nossa política de privacidade. Sem
      spam, prometemos!
    </p>
  </div>
</template>

<style scoped></style>
