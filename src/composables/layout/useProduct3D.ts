import type { Product3D } from '@/types/layout/product3D.type';

export default function useProduct3D() {
  const featuredProduct3D: Product3D = {
    id: 1,
    name: 'MacBook Pro 3D',
    description:
      'Explore cada detalhe do nosso MacBook Pro com tecnologia 3D e Realidade Aumentada',
    price: 'R$ 8.999,00',
    model: '/models/macbook.glb',
    iosModel: '/models/macbook.usdz',
    features: [
      'Visualização 360° completa',
      'Realidade Aumentada (AR)',
      'Animações interativas',
      'Interação em tempo real',
    ],
    hasAR: true,
    animationName: 'Take 001',
    autoplay: true,
  };

  const supportsAR = (): boolean => {
    if (typeof window === 'undefined') return false;
    return (
      'xr' in window.navigator ||
      /Android|iPhone|iPad/i.test(window.navigator.userAgent)
    );
  };

  return {
    featuredProduct3D,
    supportsAR,
  };
}
