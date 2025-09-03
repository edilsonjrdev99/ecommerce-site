import type { Ref } from 'vue';
import { ref, reactive } from 'vue';

import useNotifications from '@/composables/ui/useNotifications';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export default function useContact() {
  const isSubmitting = ref(false);
  const { success, error } = useNotifications();

  // Informações de contato da empresa
  const contactInfo: ContactInfo = reactive({
    address: 'Rua de teste, 123 - Centro, São Paulo - SP, 01234-567',
    phone: '(11) 99999-8888',
    email: 'contato@ecommerceloja.com.br',
  });

  // Formulário reativo
  const form: ContactForm = reactive({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Erros de validação
  const errors: Ref<Partial<ContactForm>> = ref({});

  // Função para validar o formulário
  const validateForm = (): boolean => {
    const newErrors: Partial<ContactForm> = {};

    if (!form.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!form.subject.trim()) {
      newErrors.subject = 'Assunto é obrigatório';
    }

    if (!form.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    }

    errors.value = newErrors;
    return Object.keys(newErrors).length === 0;
  };

  // Função para enviar formulário de contato
  const submitForm = async (): Promise<void> => {
    isSubmitting.value = true;

    try {
      // Simular envio do formulário (aqui você integraria com sua API)
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Mostrar notificação de sucesso
      success(
        'Mensagem enviada com sucesso!',
        'Entraremos em contato em breve.',
        6000
      );
    } catch (submitError) {
      // Mostrar notificação de erro
      error(
        'Erro ao enviar mensagem',
        'Tente novamente ou entre em contato conosco diretamente.',
        8000
      );
      throw submitError;
    } finally {
      isSubmitting.value = false;
    }
  };

  // Função para enviar o formulário com validação
  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      await submitForm();
      // Limpar formulário após envio
      Object.assign(form, {
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      errors.value = {};
    } catch {
      // Erro já foi tratado na função submitForm com notificação
    }
  };

  return {
    contactInfo,
    isSubmitting,
    form,
    errors,
    handleSubmit,
  };
}
