import { ref, computed } from 'vue';
import type { AuthUser } from '@/types/auth/login.type';
import useNotifications from '@/composables/ui/useNotifications';

const user = ref<AuthUser | null>(null);
const isAuthenticated = computed(() => !!user.value);

export default function useAuth() {
  const { success } = useNotifications();

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
      } catch {
        logout(); // Limpar dados inválidos
      }
    }
  };

  // Função para fazer logout
  const logout = (): void => {
    user.value = null;
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
    window.sessionStorage.removeItem('auth_token');
    window.sessionStorage.removeItem('user_data');

    success('Logout realizado com sucesso!', 'Até a próxima!', 3000);
  };

  // Função para definir usuário autenticado
  const setUser = (userData: AuthUser): void => {
    user.value = userData;
  };

  // Verificar status de autenticação ao inicializar
  if (!user.value) {
    checkAuthStatus();
  }

  return {
    user: computed(() => user.value),
    isAuthenticated,
    logout,
    setUser,
    checkAuthStatus,
  };
}
