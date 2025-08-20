export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
}

export interface NotificationOptions {
  type?: 'success' | 'error' | 'warning' | 'info';
  message?: string;
  duration?: number;
}
