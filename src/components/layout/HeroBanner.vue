<script setup lang="ts">
import { ref } from 'vue';

const showOverlay = ref(true);
</script>

<template>
  <div class="hero-banner-container">
    <img
      src="@/assets/hero-banner.png"
      alt="Banner principal"
      class="hero-banner-container__image"
    />

    <!-- Overlay opcional para texto -->
    <div class="hero-banner-container__overlay" v-if="showOverlay">
      <div class="hero-banner-container__content">
        <p class="hero-banner-container__text">
          Veja os produtos dessa coleção
        </p>
        <button class="hero-banner-container__button">Ver Produtos</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-banner-container {
  position: relative;
  width: 100%;
  height: 70vh; /* 70% da altura da tela */
  min-height: 400px; /* altura mínima */
  max-height: 600px; /* altura máxima */
  overflow: hidden;
}

.hero-banner-container__image {
  display: block;

  width: 100%;
  height: 100%;
  object-fit: cover; /* Mantém proporção sem distorcer */
  object-position: top; /* Centraliza a imagem */
}

.hero-banner-container__overlay {
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.1) 100%
  );
}

.hero-banner-container__content {
  text-align: center;

  max-width: 600px;
  padding: 2rem;

  color: white;
}

.hero-banner-container__text {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.hero-banner-container__button {
  padding: 12px 32px;

  background-color: var(--primary);
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(6, 167, 125, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

.hero-banner-container__button:hover {
  background-color: #059669;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(6, 167, 125, 0.4);
}

/* Responsivo */
@media (max-width: 768px) {
  .hero-banner-container {
    height: 50vh;
    min-height: 300px;
  }

  .hero-banner-container__text {
    font-size: 1rem;
  }

  .hero-banner-container__content {
    padding: 1rem;
  }
}
</style>
