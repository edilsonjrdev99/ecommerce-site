<script setup lang="ts">
import useNewsletter from '@/composables/layout/useNewsletter';
import Button from '@/components/ui/Button.vue';
import Input from '@/components/ui/Input.vue';

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
    <div class="flex flex-col sm:flex-row gap-2 mb-6 max-w-md mx-auto">
      <Input
        v-model="newsletter.email"
        type="email"
        placeholder="Digite seu melhor email"
        :fullWidth="true"
        :disabled="newsletter.isSubmitting"
        @enter="subscribeNewsletter"
      />
      <Button
        label="Assinar"
        :loading="newsletter.isSubmitting"
        :disabled="newsletter.isSubmitting"
        @click="subscribeNewsletter"
      />
    </div>

    <!-- Política de Privacidade -->
    <p class="text-xs text-gray-500">
      Ao se inscrever, você concorda com nossa política de privacidade. Sem
      spam, prometemos!
    </p>
  </div>
</template>

<style scoped></style>
