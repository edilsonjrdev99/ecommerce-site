<script setup lang="ts">
import useFooter from '@/composables/layout/useFooter';
import Button from '@/components/ui/Button.vue';

const { footerSections, socialLinks, paymentMethods } = useFooter();
</script>

<template>
  <footer style="background-color: var(--dark-bg)" class="text-white">
    <div class="container mx-auto px-4 py-12">
      <!-- Conteúdo do footer -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
        <!-- Informações -->
        <div class="lg:col-span-1">
          <h3 class="text-2xl font-bold mb-4" style="color: var(--primary)">
            E-commerce-site
          </h3>
          <p class="text-gray-300 text-sm leading-relaxed mb-4">
            Sua loja online de tecnologia com os melhores produtos, experiência
            3D e realidade aumentada.
          </p>
          <div class="flex space-x-4">
            <a
              v-for="social in socialLinks"
              :key="social.id"
              :href="social.href"
              :aria-label="social.name"
              class="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path :d="social.icon" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Sessões -->
        <div
          v-for="section in footerSections"
          :key="section.id"
          class="lg:col-span-1"
        >
          <h4 class="font-semibold text-lg mb-4">{{ section.title }}</h4>
          <ul class="space-y-2">
            <li v-for="link in section.links" :key="link.id">
              <span
                class="text-gray-300 text-sm hover:text-white transition-colors duration-200 cursor-pointer"
              >
                {{ link.label }}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Newsletter -->
      <div
        class="border-t border-gray-700 pt-8 mb-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        <div>
          <h4 class="font-semibold text-lg mb-2">Receba nossas novidades</h4>
          <p class="text-gray-300 text-sm">
            Cadastre-se e seja o primeiro a saber sobre ofertas exclusivas
          </p>
        </div>
        <div class="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Seu melhor email"
            class="flex-1 px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
          <Button label="Inscrever" size="md" />
        </div>
      </div>

      <!-- Pagamento e segurança -->
      <div
        class="border-t border-gray-700 pt-8 mb-8 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div>
          <h4 class="font-semibold text-sm mb-3">Formas de Pagamento</h4>
          <div class="flex flex-wrap gap-2">
            <div
              v-for="payment in paymentMethods"
              :key="payment.id"
              class="bg-white rounded px-2 py-1 text-xs font-semibold text-gray-800"
            >
              {{ payment.name }}
            </div>
          </div>
        </div>
        <div>
          <h4 class="font-semibold text-sm mb-3">Segurança</h4>
          <div class="flex items-center space-x-3">
            <div class="flex items-center space-x-1">
              <svg
                class="w-4 h-4 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="text-xs text-gray-300">SSL Seguro</span>
            </div>
            <div class="flex items-center space-x-1">
              <svg
                class="w-4 h-4 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 8a6 6 0 01-7.743 5.743L10 14l-4-4 4-4 .257.257A6 6 0 0118 8z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="text-xs text-gray-300">LGPD Compatível</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Footer -->
      <div
        class="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center"
      >
        <p class="text-gray-400 text-sm">
          © 2025 E-commerce site. Todos os direitos reservados.
        </p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <span class="text-gray-400 text-xs">CNPJ: 00.000.000/0001-00</span>
          <span class="text-gray-400 text-xs">SAC: (11) 9999-9999</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
