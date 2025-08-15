<script setup lang="ts">
import useHeader from '@/composables/layout/useHeader';

const { itemsPageHeader, itemsCustomerHeader } = useHeader();
</script>

<template>
  <div class="header-primary">
    <div class="flex gap-5">
      <span
        v-for="itemPageHeader in itemsPageHeader"
        :key="itemPageHeader.label"
      >
        <RouterLink :to="itemPageHeader.path">{{
          itemPageHeader.label
        }}</RouterLink>
      </span>
    </div>

    <div class="flex gap-5">
      <span
        v-for="itemCustomerHeader in itemsCustomerHeader"
        :key="itemCustomerHeader.label"
      >
        <RouterLink :to="itemCustomerHeader.path">{{
          itemCustomerHeader.label
        }}</RouterLink>
      </span>
    </div>
  </div>
</template>

<style scoped>
.header-primary {
  display: flex;
  justify-content: space-between;

  padding: 1rem;

  background-color: var(--primary);
  color: white;
}

.header-primary__items {
  display: flex;
  gap: 10px;
}
</style>
