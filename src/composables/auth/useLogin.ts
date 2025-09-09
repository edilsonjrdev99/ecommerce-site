import type { Ref } from 'vue';
import { ref, reactive } from 'vue';

import type {
  LoginForm,
  LoginCredentials,
  AuthUser,
  AuthResponse,
} from '@/types/auth/login.type';

import useNotifications from '@/composables/ui/useNotifications';

export default function useLogin() {
  const isLoading = ref(false);
  const { success, error } = useNotifications();

  // Formulário reativo de login
  const form: LoginForm = reactive({
    email: '',
    password: '',
    rememberMe: false,
  });

  // Erros de validação
  const errors: Ref<Partial<LoginForm>> = ref({});

  // Estado do usuário autenticado
  const user: Ref<AuthUser | null> = ref(null);
  const isAuthenticated = ref(false);

  // Função para validar o formulário
  const validateForm = (): boolean => {
    const newErrors: Partial<LoginForm> = {};

    if (!form.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!form.password.trim()) {
      newErrors.password = 'Senha é obrigatória';
    } else if (form.password.length < 6) {
      newErrors.password = 'Senha deve ter pelo menos 6 caracteres';
    }

    errors.value = newErrors;
    return Object.keys(newErrors).length === 0;
  };

  // Função para simular login
  const authenticateUser = async (
    credentials: LoginCredentials
  ): Promise<AuthResponse> => {
    // Simular delay da API
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simulação de validação de credenciais
    if (
      credentials.email === 'admin@test.com' &&
      credentials.password === '123456'
    ) {
      return {
        user: {
          id: '1',
          name: 'Usuário Teste',
          email: credentials.email,
          avatar: '',
        },
        token: 'fake-jwt-token-123456789',
        refreshToken: 'fake-refresh-token-987654321',
      };
    }

    // Simular erro de credenciais inválidas
    throw new Error('Credenciais inválidas');
  };

  // Função para fazer login
  const login = async (): Promise<void> => {
    isLoading.value = true;

    try {
      const credentials: LoginCredentials = {
        email: form.email,
        password: form.password,
      };

      const response = await authenticateUser(credentials);

      // Armazenar dados do usuário
      user.value = response.user;
      isAuthenticated.value = true;

      // Armazenar token
      if (form.rememberMe) {
        localStorage.setItem('auth_token', response.token);
        localStorage.setItem('user_data', JSON.stringify(response.user));
      } else {
        window.sessionStorage.setItem('auth_token', response.token);
        window.sessionStorage.setItem(
          'user_data',
          JSON.stringify(response.user)
        );
      }

      // Exibir notificação de sucesso
      success(
        'Login realizado com sucesso!',
        `Bem-vindo, ${response.user.name}`,
        4000
      );

      // Limpar formulário
      Object.assign(form, {
        email: '',
        password: '',
        rememberMe: false,
      });
      errors.value = {};
    } catch (loginError) {
      // Exibir notificação de erro
      if (loginError instanceof Error) {
        error(
          'Erro no login',
          loginError.message === 'Credenciais inválidas'
            ? 'Email ou senha incorretos. Tente novamente.'
            : 'Ocorreu um erro inesperado. Tente novamente.',
          6000
        );
      } else {
        error(
          'Erro no login',
          'Ocorreu um erro inesperado. Tente novamente.',
          6000
        );
      }
      throw loginError;
    } finally {
      isLoading.value = false;
    }
  };

  // Função para fazer logout
  const logout = (): void => {
    user.value = null;
    isAuthenticated.value = false;
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
    window.sessionStorage.removeItem('auth_token');
    window.sessionStorage.removeItem('user_data');

    success('Logout realizado com sucesso!', 'Até a próxima!', 3000);
  };

  // Função para verificar se existe sessão ativa
  const checkAuthStatus = (): void => {
    const token =
      localStorage.getItem('auth_token') ||
      window.sessionStorage.getItem('auth_token');
    const userData =
      localStorage.getItem('user_data') ||
      window.sessionStorage.getItem('user_data');

    if (token && userData) {
      try {
        user.value = JSON.parse(userData) as AuthUser;
        isAuthenticated.value = true;
      } catch {
        logout(); // Limpar dados inválidos
      }
    }
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      await login();
    } catch {
      // Erro já foi tratado na função login com notificação
    }
  };

  // Verificar status de autenticação ao inicializar
  checkAuthStatus();

  return {
    // Estados
    form,
    errors,
    isLoading,
    user,
    isAuthenticated,

    // Métodos
    handleSubmit,
    logout,
    checkAuthStatus,
  };
}
