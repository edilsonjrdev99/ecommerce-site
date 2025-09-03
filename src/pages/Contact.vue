<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import Input from '@/components/ui/Input.vue';
import Section from '@/components/ui/Section.vue';

import useContact from '@/composables/pages/useContact';

const { contactInfo, isSubmitting, handleSubmit, form, errors } = useContact();
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Seção Hero -->
    <Section class="bg-emerald-600 text-white">
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
              Entre em <span class="text-emerald-200">Contato</span>
            </h1>
            <p
              class="text-xl lg:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed"
            >
              Estamos aqui para ajudar! Entre em contato conosco e responderemos
              o mais breve possível.
            </p>
          </div>
        </div>
      </div>
    </Section>

    <!-- Seção de Contato -->
    <Section class="py-16 lg:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <!-- Informações de Contato -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-8">
              Informações de Contato
            </h2>

            <div class="space-y-8">
              <!-- Endereço -->
              <div class="flex items-start space-x-4">
                <div
                  class="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900">Endereço</h3>
                  <p class="text-gray-600">{{ contactInfo.address }}</p>
                </div>
              </div>

              <!-- Telefone -->
              <div class="flex items-start space-x-4">
                <div
                  class="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900">Telefone</h3>
                  <p class="text-gray-600">{{ contactInfo.phone }}</p>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start space-x-4">
                <div
                  class="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900">Email</h3>
                  <p class="text-gray-600">{{ contactInfo.email }}</p>
                </div>
              </div>

              <!-- Horário de Funcionamento -->
              <div class="flex items-start space-x-4">
                <div
                  class="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900">
                    Horário de Funcionamento
                  </h3>
                  <p class="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                  <p class="text-gray-600">Sábado: 9h às 14h</p>
                </div>
              </div>
            </div>

            <!-- Redes Sociais -->
            <div class="mt-12">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Siga-nos</h3>
              <div class="flex space-x-4">
                <a
                  href="#"
                  class="w-10 h-10 bg-emerald-600 text-white rounded-lg flex items-center justify-center hover:bg-emerald-700 transition-colors"
                >
                  <span class="sr-only">Facebook</span>
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  class="w-10 h-10 bg-emerald-600 text-white rounded-lg flex items-center justify-center hover:bg-emerald-700 transition-colors"
                >
                  <span class="sr-only">Instagram</span>
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  class="w-10 h-10 bg-emerald-600 text-white rounded-lg flex items-center justify-center hover:bg-emerald-700 transition-colors"
                >
                  <span class="sr-only">WhatsApp</span>
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Formulário de Contato -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-8">
              Envie sua Mensagem
            </h2>

            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Nome -->
              <div>
                <Input
                  v-model="form.name"
                  type="text"
                  placeholder="Seu nome completo"
                  :error-message="errors.name"
                  full-width
                  required
                />
              </div>

              <!-- Email -->
              <div>
                <Input
                  v-model="form.email"
                  type="email"
                  placeholder="Seu melhor email"
                  :error-message="errors.email"
                  full-width
                  required
                />
              </div>

              <!-- Assunto -->
              <div>
                <Input
                  v-model="form.subject"
                  type="text"
                  placeholder="Assunto da mensagem"
                  :error-message="errors.subject"
                  full-width
                  required
                />
              </div>

              <!-- Mensagem -->
              <div>
                <textarea
                  v-model="form.message"
                  rows="6"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                  :class="{
                    'border-red-500 focus:ring-red-500 focus:border-red-500':
                      errors.message,
                  }"
                  placeholder="Escreva sua mensagem aqui..."
                  required
                />
                <p v-if="errors.message" class="mt-2 text-sm text-red-600">
                  {{ errors.message }}
                </p>
              </div>

              <!-- Botão de Envio -->
              <div>
                <Button
                  :label="isSubmitting ? 'Enviando...' : 'Enviar Mensagem'"
                  type="submit"
                  :loading="isSubmitting"
                  full-width
                />
              </div>
            </form>

            <!-- Mensagem de confirmação -->
            <div
              class="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg"
            >
              <p class="text-emerald-800 text-sm">
                <svg
                  class="w-4 h-4 inline mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                Responderemos sua mensagem em até 24 horas úteis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <!-- Seção Mapa (opcional) -->
    <Section class="bg-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Nossa Localização
          </h2>
          <p class="text-gray-600">
            Venha nos visitar! Estamos localizados no coração da cidade.
          </p>
        </div>

        <!-- Placeholder para mapa -->
        <div class="bg-white rounded-lg shadow-lg p-8 text-center">
          <div
            class="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center"
          >
            <div class="text-gray-500">
              <svg
                class="w-16 h-16 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              <p class="text-lg">Mapa em breve</p>
              <p class="text-sm">Integração com Google Maps</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </div>
</template>
