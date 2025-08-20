import { ref } from 'vue';
import type { Newsletter } from '@/types/layout/newsletter.type';
import useNotifications from '@/composables/ui/useNotifications';

export default function useNewsletter() {
  const newsletter = ref<Newsletter>({
    email: '',
    isSubmitting: false,
  });

  const { success, error } = useNotifications();

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const subscribeNewsletter = async (): Promise<void> => {
    if (!isValidEmail(newsletter.value.email)) {
      error('Email inválido', 'Por favor, insira um email válido');
      return;
    }

    newsletter.value.isSubmitting = true;

    try {
      // Simular chamada para API
      await new Promise(resolve => setTimeout(resolve, 1500));

      success(
        'Inscrição realizada!',
        'Verifique seu email para confirmar a inscrição'
      );
      newsletter.value.email = '';
    } catch (err) {
      error('Erro na inscrição', 'Tente novamente em alguns instantes');
      console.error('Erro na inscrição:', err);
    } finally {
      newsletter.value.isSubmitting = false;
    }
  };

  return {
    newsletter,
    subscribeNewsletter,
  };
}
