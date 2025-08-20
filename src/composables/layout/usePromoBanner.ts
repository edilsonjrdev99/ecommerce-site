import { computed, ref, onMounted, onUnmounted } from 'vue';
import type { PromoBanner } from '@/types/layout/promoBanner.type';

export default function usePromoBanner() {
  const promoBanner: PromoBanner = {
    id: 1,
    title: 'Super Oferta de Black Friday',
    subtitle: 'Desconto especial em toda loja por tempo limitado',
    discount: '40% OFF',
    ctaText: 'Aproveitar Oferta',
    ctaLink: '/ofertas',
    backgroundColor: 'var(--dark-bg)',
    textColor: 'white',
    isActive: true,
    expiresAt: new Date('2025-08-31'),
  };

  const currentTime = ref(new Date());
  let interval: number | null = null;

  const updateTime = () => {
    currentTime.value = new Date();
  };

  const isValidPromo = computed(() => {
    if (!promoBanner.isActive) return false;
    if (!promoBanner.expiresAt) return false;
    return currentTime.value < promoBanner.expiresAt;
  });

  const timeRemaining = computed(() => {
    if (!promoBanner.expiresAt) return null;

    const now = currentTime.value;
    const expiry = promoBanner.expiresAt;
    const diff = expiry.getTime() - now.getTime();

    if (diff <= 0) return null;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  });

  onMounted(() => {
    interval = window.setInterval(updateTime, 1000);
  });

  onUnmounted(() => {
    if (interval) {
      window.clearInterval(interval);
    }
  });

  return {
    promoBanner,
    isValidPromo,
    timeRemaining,
  };
}
