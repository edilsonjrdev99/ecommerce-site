import type { Testimonial } from '@/types/layout/testimonials.type';

export default function useTestimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Maria Silva',
      role: 'Designer Gráfica',
      content:
        'Excelente qualidade dos produtos! O smartphone que comprei superou todas as minhas expectativas. Entrega rápida e atendimento excepcional.',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150',
      verified: true,
    },
    {
      id: 2,
      name: 'João Santos',
      role: 'Desenvolvedor',
      content:
        'O notebook gamer que adquiri é perfeito para trabalho e jogos. Performance incrível e design elegante. Recomendo totalmente!',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      verified: true,
    },
    {
      id: 3,
      name: 'Ana Costa',
      role: 'Fotografa',
      content:
        'A câmera digital que comprei aqui mudou completamente meu trabalho. Qualidade profissional por um preço justo. Muito satisfeita!',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      verified: true,
    },
    {
      id: 4,
      name: 'Carlos Oliveira',
      role: 'Gamer',
      content:
        'Setup completo comprado aqui: monitor 4K, teclado mecânico e mouse gamer. Qualidade excepcional e preços competitivos!',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      verified: true,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => index < rating);
  };

  return {
    testimonials,
    renderStars,
  };
}
