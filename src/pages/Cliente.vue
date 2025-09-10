<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

import useAuth from '@/composables/auth/useAuth';
import Button from '@/components/ui/Button.vue';

const { user, isAuthenticated, logout } = useAuth();
const router = useRouter();

// Verifica se o usuário está autenticado, se não, redireciona para login
onMounted(() => {
  if (!isAuthenticated.value) {
    router.push('/login');
  }
});

const handleLogout = () => {
  logout();
  router.push('/');
};

const userInfo = computed(() => {
  if (!user.value) return null;

  return {
    name: user.value.name,
    email: user.value.email,
    avatar: user.value.avatar || '',
    memberSince: 'Janeiro 2024', // Mock data
    totalOrders: 5, // Mock data
    loyaltyPoints: 120, // Mock data
  };
});
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="relative bg-emerald-600 text-white overflow-hidden">
      <!-- Background Gradient -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800"
      ></div>

      <!-- Decorative Elements -->
      <div
        class="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full transform translate-x-48 -translate-y-48"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full transform -translate-x-32 translate-y-32"
      ></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div v-if="userInfo" class="text-center">
          <!-- User Avatar -->
          <div class="cliente-avatar-container">
            <div class="cliente-avatar-large">
              {{ userInfo.name.charAt(0).toUpperCase() }}
            </div>
          </div>

          <!-- User Info -->
          <div class="mt-6">
            <h1 class="text-4xl md:text-5xl font-bold mb-2">
              {{ userInfo.name }}
            </h1>
            <p class="text-emerald-100 text-xl mb-1">{{ userInfo.email }}</p>
            <p class="text-emerald-200">
              Membro desde {{ userInfo.memberSince }}
            </p>
          </div>
        </div>

        <div v-else class="text-center py-12">
          <div class="animate-pulse">
            <div
              class="w-24 h-24 bg-emerald-500/20 rounded-full mx-auto mb-4"
            ></div>
            <div class="h-8 bg-emerald-500/20 rounded w-64 mx-auto mb-2"></div>
            <div class="h-4 bg-emerald-500/20 rounded w-48 mx-auto"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Stats Section -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div class="cliente-stat-card">
          <div class="cliente-stat-icon">
            <svg
              class="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </div>
          <div class="cliente-stat-content">
            <h3 class="cliente-stat-number">
              {{ userInfo?.totalOrders || 0 }}
            </h3>
            <p class="cliente-stat-label">Pedidos realizados</p>
          </div>
        </div>

        <div class="cliente-stat-card">
          <div class="cliente-stat-icon">
            <svg
              class="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </div>
          <div class="cliente-stat-content">
            <h3 class="cliente-stat-number">
              {{ userInfo?.loyaltyPoints || 0 }}
            </h3>
            <p class="cliente-stat-label">Pontos de fidelidade</p>
          </div>
        </div>

        <div class="cliente-stat-card">
          <div class="cliente-stat-icon">
            <svg
              class="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="cliente-stat-content">
            <h3 class="cliente-stat-number">Premium</h3>
            <p class="cliente-stat-label">Status da conta</p>
          </div>
        </div>
      </div>

      <!-- Actions Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div class="cliente-action-card">
          <div class="cliente-action-icon">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <h3 class="cliente-action-title">Editar Perfil</h3>
          <p class="cliente-action-description">
            Atualize suas informações pessoais e preferências
          </p>
          <Button label="Gerenciar" variant="outline" class="mt-4 w-full" />
        </div>

        <div class="cliente-action-card">
          <div class="cliente-action-icon">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
          <h3 class="cliente-action-title">Meus Pedidos</h3>
          <p class="cliente-action-description">
            Visualize e acompanhe todos os seus pedidos
          </p>
          <Button label="Ver Histórico" variant="outline" class="mt-4 w-full" />
        </div>

        <div class="cliente-action-card">
          <div class="cliente-action-icon">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <h3 class="cliente-action-title">Endereços</h3>
          <p class="cliente-action-description">
            Gerencie seus endereços de entrega e cobrança
          </p>
          <Button label="Gerenciar" variant="outline" class="mt-4 w-full" />
        </div>

        <div class="cliente-action-card">
          <div class="cliente-action-icon">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
          </div>
          <h3 class="cliente-action-title">Métodos de Pagamento</h3>
          <p class="cliente-action-description">
            Configure seus cartões e formas de pagamento
          </p>
          <Button label="Configurar" variant="outline" class="mt-4 w-full" />
        </div>

        <div class="cliente-action-card">
          <div class="cliente-action-icon">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <h3 class="cliente-action-title">Lista de Desejos</h3>
          <p class="cliente-action-description">
            Produtos que você salvou para comprar depois
          </p>
          <Button label="Ver Lista" variant="outline" class="mt-4 w-full" />
        </div>

        <div class="cliente-action-card">
          <div class="cliente-action-icon">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <h3 class="cliente-action-title">Configurações</h3>
          <p class="cliente-action-description">
            Personalize sua experiência e privacidade
          </p>
          <Button label="Configurar" variant="outline" class="mt-4 w-full" />
        </div>
      </div>

      <!-- Logout Section -->
      <div class="flex justify-center">
        <Button
          label="Sair da Conta"
          variant="secondary"
          @click="handleLogout"
          class="px-8 py-3"
          left-icon="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Avatar */
.cliente-avatar-container {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.cliente-avatar-large {
  width: 120px;
  height: 120px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.1)
  );
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  font-weight: bold;
  backdrop-filter: blur(10px);
}

/* Stats Cards */
.cliente-stat-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(6, 167, 125, 0.1);
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;
}

.cliente-stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border-color: rgba(6, 167, 125, 0.2);
}

.cliente-stat-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.cliente-stat-content {
  flex: 1;
}

.cliente-stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 0.25rem 0;
  line-height: 1;
}

.cliente-stat-label {
  font-size: 0.875rem;
  color: #718096;
  margin: 0;
  font-weight: 500;
}

/* Action Cards */
.cliente-action-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(6, 167, 125, 0.1);
  transition: all 0.3s ease;
  text-align: center;
}

.cliente-action-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border-color: rgba(6, 167, 125, 0.2);
}

.cliente-action-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 0 auto 1.5rem auto;
}

.cliente-action-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 0.75rem 0;
}

.cliente-action-description {
  font-size: 0.875rem;
  color: #718096;
  margin: 0;
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 768px) {
  .cliente-avatar-large {
    width: 100px;
    height: 100px;
    font-size: 2.5rem;
  }

  .cliente-stat-card {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }

  .cliente-stat-icon {
    margin-bottom: 1rem;
  }

  .cliente-action-card {
    padding: 1.5rem;
  }

  .cliente-stat-number {
    font-size: 1.75rem;
  }
}

@media (max-width: 640px) {
  .cliente-avatar-large {
    width: 80px;
    height: 80px;
    font-size: 2rem;
  }
}
</style>
