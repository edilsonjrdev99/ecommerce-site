<script setup lang="ts">
// COMPONENTS
import Header from '@/components/layout/Header.vue';
import Footer from '@/components/layout/Footer.vue';
import NotificationToast from '@/components/ui/NotificationToast.vue';
</script>

<template>
  <Header />
  <router-view />
  <Footer />
  <NotificationToast />
</template>
