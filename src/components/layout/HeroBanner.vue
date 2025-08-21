<script setup lang="ts">
import { ref } from 'vue';

const showOverlay = ref(true);
</script>

<template>
  <section class="hero">
    <div class="hero__background">
      <img
        src="@/assets/hero-banner.png"
        alt="Banner principal"
        class="hero__image"
      />
      <div class="hero__overlay"></div>
    </div>

    <div class="hero__content" v-if="showOverlay">
      <div class="container mx-auto px-4">
        <div class="hero__wrapper">
          <div class="hero__text-content">
            <h1 class="hero__title">
              Descubra a Nova
              <span class="hero__title-highlight">Coleção</span>
            </h1>
            <p class="hero__subtitle">
              Produtos exclusivos com tecnologia avançada e design inovador para
              transformar sua experiência
            </p>
            <div class="hero__actions">
              <button class="hero__button hero__button--primary">
                <span>Explorar Produtos</span>
                <svg
                  class="hero__button-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <button class="hero__button hero__button--secondary">
                Saber Mais
              </button>
            </div>
            <div class="hero__stats">
              <div class="hero__stat">
                <span class="hero__stat-number">500+</span>
                <span class="hero__stat-label">Produtos</span>
              </div>
              <div class="hero__stat">
                <span class="hero__stat-number">10k+</span>
                <span class="hero__stat-label">Clientes</span>
              </div>
              <div class="hero__stat">
                <span class="hero__stat-number">99%</span>
                <span class="hero__stat-label">Satisfação</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Eleemntos decorativos -->
    <div class="hero__decoration">
      <div class="hero__decoration-circle hero__decoration-circle--1"></div>
      <div class="hero__decoration-circle hero__decoration-circle--2"></div>
      <div class="hero__decoration-gradient"></div>
    </div>
  </section>
</template>

<style scoped>
/* Bloco: Hero */
.hero {
  position: relative;
  width: 100%;
  height: 80vh;
  min-height: 500px;
  max-height: 700px;
  overflow: hidden;
  display: flex;
  align-items: center;
}

/* Elemento: Fundo */
.hero__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  filter: brightness(0.8) contrast(1.1);
}

.hero__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(6, 167, 125, 0.3) 50%,
    rgba(0, 0, 0, 0.4) 100%
  );
}

/* Elemento: Conteúdo */
.hero__content {
  position: relative;
  z-index: 2;
  width: 100%;
  color: white;
}

.hero__wrapper {
  display: flex;
  align-items: center;
  min-height: 60vh;
}

.hero__text-content {
  max-width: 600px;
  animation: slideInUp 1s ease-out;
}

/* Elemento: Título */
.hero__title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero__title-highlight {
  background: linear-gradient(135deg, var(--primary) 0%, #10b981 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
}

/* Elemento: Subtítulo */
.hero__subtitle {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  opacity: 0.95;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  max-width: 500px;
}

/* Elemento: Ações */
.hero__actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

/* Elemento: Botão */
.hero__button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  position: relative;
  overflow: hidden;
}

.hero__button::before {
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

.hero__button:hover::before {
  left: 100%;
}

/* Modificador: Botão Primário */
.hero__button--primary {
  background: linear-gradient(135deg, var(--primary) 0%, #10b981 100%);
  color: white;
  box-shadow: 0 8px 25px rgba(6, 167, 125, 0.3);
}

.hero__button--primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(6, 167, 125, 0.4);
}

/* Modificador: Botão Secundário */
.hero__button--secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.hero__button--secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}

/* Elemento: Ícone do Botão */
.hero__button-icon {
  width: 1.25rem;
  height: 1.25rem;
  transition: transform 0.3s ease;
}

.hero__button--primary:hover .hero__button-icon {
  transform: translateX(4px);
}

/* Elemento: Estatísticas */
.hero__stats {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.hero__stat {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.hero__stat-number {
  font-size: 2rem;
  font-weight: 800;
  color: var(--primary);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  line-height: 1;
}

.hero__stat-label {
  font-size: 0.875rem;
  opacity: 0.8;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 0.25rem;
}

/* Elemento: Decoração */
.hero__decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.hero__decoration-circle {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    rgba(6, 167, 125, 0.1),
    rgba(16, 185, 129, 0.05)
  );
  backdrop-filter: blur(20px);
}

.hero__decoration-circle--1 {
  width: 300px;
  height: 300px;
  top: -150px;
  right: -150px;
  animation: float 6s ease-in-out infinite;
}

.hero__decoration-circle--2 {
  width: 200px;
  height: 200px;
  bottom: -100px;
  left: -100px;
  animation: float 8s ease-in-out infinite reverse;
}

.hero__decoration-gradient {
  position: absolute;
  top: 50%;
  right: -20%;
  width: 40%;
  height: 60%;
  background: radial-gradient(
    circle,
    rgba(6, 167, 125, 0.1) 0%,
    transparent 70%
  );
  transform: translateY(-50%);
  animation: pulse 4s ease-in-out infinite;
}

/* Animações */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
}

/* Design Responsivo */
@media (max-width: 1024px) {
  .hero__title {
    font-size: 3rem;
  }

  .hero__actions {
    gap: 0.75rem;
  }
}

@media (max-width: 768px) {
  .hero {
    height: 70vh;
    min-height: 400px;
  }

  .hero__title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .hero__subtitle {
    font-size: 1.125rem;
    margin-bottom: 2rem;
  }

  .hero__actions {
    flex-direction: column;
    gap: 0.75rem;
  }

  .hero__button {
    padding: 0.875rem 1.5rem;
    font-size: 0.95rem;
    justify-content: center;
  }

  .hero__stats {
    gap: 1.5rem;
    justify-content: space-between;
  }

  .hero__stat-number {
    font-size: 1.75rem;
  }

  .hero__decoration-circle--1 {
    width: 200px;
    height: 200px;
    top: -100px;
    right: -100px;
  }

  .hero__decoration-circle--2 {
    width: 150px;
    height: 150px;
    bottom: -75px;
    left: -75px;
  }
}

@media (max-width: 480px) {
  .hero__title {
    font-size: 2rem;
  }

  .hero__subtitle {
    font-size: 1rem;
  }

  .hero__stats {
    gap: 1rem;
  }

  .hero__stat-number {
    font-size: 1.5rem;
  }

  .hero__stat-label {
    font-size: 0.75rem;
  }
}
</style>
