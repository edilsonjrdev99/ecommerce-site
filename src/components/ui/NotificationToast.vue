<script setup lang="ts">
import type { Notification } from '@/types/ui/notification.type';
import useNotifications from '@/composables/ui/useNotifications';

const { notifications, removeNotification } = useNotifications();

const getNotificationStyles = (type: Notification['type']) => {
  const baseClasses = [
    'flex items-center p-4 mb-3 rounded-lg shadow-lg border-l-4',
    'transition-all duration-300 ease-in-out',
  ].join(' ');

  switch (type) {
    case 'success':
      return `${baseClasses} bg-green-50 border-green-500 text-green-800`;
    case 'error':
      return `${baseClasses} bg-red-50 border-red-500 text-red-800`;
    case 'warning':
      return `${baseClasses} bg-yellow-50 border-yellow-500 text-yellow-800`;
    case 'info':
      return `${baseClasses} bg-blue-50 border-blue-500 text-blue-800`;
    default:
      return `${baseClasses} bg-gray-50 border-gray-500 text-gray-800`;
  }
};
</script>

<template>
  <Teleport to="body" class="notify">
    <div class="fixed top-4 right-4 z-[9999] space-y-2 max-w-sm">
      <TransitionGroup name="notification" tag="div">
        <div
          v-for="notification in notifications"
          :key="notification.id"
          :class="getNotificationStyles(notification.type)"
        >
          <div class="flex items-start space-x-3 flex-1">
            <div class="flex-1">
              <p class="font-semibold">{{ notification.title }}</p>
              <p v-if="notification.message" class="text-sm opacity-90 mt-1">
                {{ notification.message }}
              </p>
            </div>
          </div>

          <button
            @click="removeNotification(notification.id)"
            class="ml-3 text-current opacity-60 hover:opacity-100 transition-opacity"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<style scoped>
.notification-enter-active {
  transition: all 0.3s ease-out;
}

.notification-leave-active {
  transition: all 0.3s ease-in;
}

.notification-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.notification-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.notification-move {
  transition: transform 0.3s ease;
}
</style>
