<script setup lang="ts">
import { ref } from 'vue';

import useHeader from '@/composables/layout/useHeader';

const { itemsPageHeader, itemsCustomerHeader } = useHeader();
const isMenuOpen = ref<boolean>(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <header class="header">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="header__logo">
          <RouterLink to="/" class="header__logo-link">
            <h1 class="text-xl font-bold text-white">E-commerce Site</h1>
          </RouterLink>
        </div>

        <!-- Menu Desktop -->
        <nav
          class="header__nav hidden lg:flex items-center space-x-8 ml-auto mr-5"
        >
          <div
            class="flex items-center space-x-6 border-l border-white/20 pl-6"
          >
            <RouterLink
              v-for="item in itemsCustomerHeader"
              :key="item.label"
              :to="item.path"
              class="header__nav-link"
            >
              {{ item.label }}
            </RouterLink>
          </div>
        </nav>

        <!-- Botão hambúrguer -->
        <button
          class="header__menu-btn lg:hidden"
          @click="toggleMenu"
          :class="{ 'header__menu-btn--active': isMenuOpen }"
          aria-label="Toggle menu"
        >
          <span class="header__menu-line"></span>
          <span class="header__menu-line"></span>
          <span class="header__menu-line"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Overlay -->
    <div
      class="header__overlay"
      :class="{ 'header__overlay--active': isMenuOpen }"
      @click="closeMenu"
    ></div>

    <!-- Menu mobile -->
    <nav
      class="header__mobile-nav"
      :class="{ 'header__mobile-nav--active': isMenuOpen }"
    >
      <div class="header__mobile-header">
        <h2>Menu</h2>
        <button
          class="header__close-btn"
          @click="closeMenu"
          aria-label="Close menu"
        >
          ✕
        </button>
      </div>

      <div class="header__mobile-content">
        <div class="header__mobile-section">
          <h3>Navegação</h3>
          <RouterLink
            v-for="item in itemsPageHeader"
            :key="item.label"
            :to="item.path"
            class="header__mobile-link"
            @click="closeMenu"
          >
            {{ item.label }}
          </RouterLink>
        </div>

        <div class="header__mobile-section">
          <h3>Conta</h3>
          <RouterLink
            v-for="item in itemsCustomerHeader"
            :key="item.label"
            :to="item.path"
            class="header__mobile-link"
            @click="closeMenu"
          >
            {{ item.label }}
          </RouterLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* Block: Header */
.header {
  position: sticky;
  top: 0;
  background-color: var(--primary);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  color: white;
  z-index: 1000;
}

.header__logo-link {
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s ease;
}

.header__logo-link:hover {
  opacity: 0.9;
}

/* Element: Menu desktop */
.header__nav-link {
  text-decoration: none;
  color: white;
  font-weight: 500;
  padding: 0.5rem 0;
  transition: all 0.2s ease;
  border-bottom: 2px solid transparent;
  position: relative;
}

.header__nav-link:hover {
  border-bottom-color: rgba(255, 255, 255, 0.8);
}

/* Element: Botão hambúrguer */
.header__menu-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.header__menu-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* Modifier: Botão hambúrguer ativo */
.header__menu-btn--active .header__menu-line:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

.header__menu-btn--active .header__menu-line:nth-child(2) {
  opacity: 0;
}

.header__menu-btn--active .header__menu-line:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

/* Element: Linhas */
.header__menu-line {
  width: 20px;
  height: 2px;
  background-color: white;
  border-radius: 1px;
  transition: all 0.3s ease;
  margin: 2px 0;
}

/* Element: Mobile Overlay */
.header__overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 999;
}

/* Modifier: Overlay ativo */
.header__overlay--active {
  opacity: 1;
  visibility: visible;
}

/* Element: Menu mobile */
.header__mobile-nav {
  position: fixed;
  top: 0;
  right: -100%;
  width: 300px;
  max-width: 80vw;
  height: 100vh;
  background-color: var(--primary);
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.2);
  transition: right 0.3s ease;
  z-index: 1000;
  overflow-y: auto;
}

/* Modifier: Menu mobile ativo */
.header__mobile-nav--active {
  right: 0;
}

/* Element: Mobile Header */
.header__mobile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.header__mobile-header h2 {
  margin: 0;
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
}

/* Element: Botão fechar */
.header__close-btn {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.2s ease;
  font-size: 1.25rem;
  line-height: 1;
}

.header__close-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Element: Conteúdo mobile */
.header__mobile-content {
  padding: 1rem;
}

/* Element: Sessões mobile */
.header__mobile-section {
  margin-bottom: 1.5rem;
}

.header__mobile-section h3 {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 0.75rem 0;
  padding: 0 0.5rem;
}

/* Element: Mobile Link */
.header__mobile-link {
  display: block;
  color: white;
  text-decoration: none;
  padding: 0.75rem;
  margin: 0.25rem 0;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.header__mobile-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.header__mobile-link:active {
  transform: scale(0.98);
}
</style>
