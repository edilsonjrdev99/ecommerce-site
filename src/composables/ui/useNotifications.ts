import { ref } from 'vue';
import type {
  Notification,
  NotificationOptions,
} from '@/types/ui/notification.type';

const notifications = ref<Notification[]>([]);

export default function useNotifications() {
  const addNotification = (
    title: string,
    options: NotificationOptions = {}
  ): void => {
    const notification: Notification = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      type: options.type || 'info',
      title,
      message: options.message,
      duration: options.duration || 5000,
    };

    notifications.value.push(notification);

    if (notification.duration && notification.duration > 0) {
      setTimeout(() => {
        removeNotification(notification.id);
      }, notification.duration);
    }
  };

  const removeNotification = (id: string): void => {
    const index = notifications.value.findIndex(n => n.id === id);
    if (index > -1) {
      notifications.value.splice(index, 1);
    }
  };

  const success = (
    title: string,
    message?: string,
    duration?: number
  ): void => {
    addNotification(title, { type: 'success', message, duration });
  };

  const error = (title: string, message?: string, duration?: number): void => {
    addNotification(title, { type: 'error', message, duration });
  };

  const warning = (
    title: string,
    message?: string,
    duration?: number
  ): void => {
    addNotification(title, { type: 'warning', message, duration });
  };

  const info = (title: string, message?: string, duration?: number): void => {
    addNotification(title, { type: 'info', message, duration });
  };

  const clear = (): void => {
    notifications.value = [];
  };

  return {
    notifications,
    addNotification,
    removeNotification,
    success,
    error,
    warning,
    info,
    clear,
  };
}
