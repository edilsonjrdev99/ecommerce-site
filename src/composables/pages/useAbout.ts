import type { AboutContent } from '@/types/pages/about.type';

export default function useAbout() {
  const aboutContent: AboutContent = {
    hero: {
      title: 'Sobre Nossa Empresa',
      subtitle: 'Construindo o futuro do e-commerce',
      description:
        'Somos uma empresa inovadora dedicada a oferecer os melhores produtos tecnológicos com qualidade excepcional e atendimento personalizado. Nossa missão é transformar a experiência de compra online.',
      image:
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&crop=center',
      stats: [
        {
          number: '10K+',
          label: 'Clientes Satisfeitos',
          description: 'Pessoas que confiam em nossos produtos',
        },
        {
          number: '500+',
          label: 'Produtos',
          description: 'Variedade de itens tecnológicos',
        },
        {
          number: '5',
          label: 'Anos de Experiência',
          description: 'No mercado de e-commerce',
        },
        {
          number: '98%',
          label: 'Satisfação',
          description: 'Taxa de aprovação dos clientes',
        },
      ],
    },

    sections: [
      {
        id: 'mission',
        title: 'Nossa Missão',
        content:
          'Democratizar o acesso à tecnologia de qualidade, oferecendo produtos inovadores com preços justos e atendimento excepcional. Acreditamos que a tecnologia deve ser acessível a todos, sem comprometer a qualidade ou o suporte ao cliente.',
        image:
          'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&crop=center',
        features: [
          'Produtos testados e certificados',
          'Atendimento personalizado',
          'Entrega rápida e segura',
          'Garantia estendida',
          'Suporte técnico especializado',
        ],
      },
      {
        id: 'vision',
        title: 'Nossa Visão',
        content:
          'Ser reconhecida como a principal plataforma de e-commerce tecnológico do Brasil, estabelecendo novos padrões de qualidade, inovação e experiência do cliente no mercado digital.',
        image:
          'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&crop=center',
        reverse: true,
        features: [
          'Liderança em inovação',
          'Expansão nacional',
          'Tecnologia de ponta',
          'Sustentabilidade',
          'Impacto social positivo',
        ],
      },
      {
        id: 'story',
        title: 'Nossa História',
        content:
          'Fundada em 2019 por entusiastas da tecnologia, nossa empresa nasceu do desejo de facilitar o acesso a produtos tecnológicos de qualidade. Começamos pequenos, mas com grandes sonhos e a determinação de fazer a diferença no mercado brasileiro.',
        image:
          'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&auto=format&fit=crop&crop=center',
        features: [
          'Fundação por especialistas',
          'Crescimento orgânico',
          'Foco na qualidade',
          'Relacionamento duradouro',
          'Inovação constante',
        ],
      },
    ],

    team: [
      {
        id: 1,
        name: 'Carlos Silva',
        role: 'CEO & Fundador',
        bio: 'Engenheiro de software com mais de 15 anos de experiência em tecnologia e e-commerce. Visionário por trás da criação da empresa.',
        avatar:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&crop=face',
        social: {
          linkedin: 'https://linkedin.com/in/carlossilva',
          twitter: 'https://twitter.com/carlossilva',
          email: 'carlos@empresa.com',
        },
      },
      {
        id: 2,
        name: 'Ana Santos',
        role: 'CTO',
        bio: 'Especialista em arquitetura de sistemas e desenvolvimento full-stack. Responsável pela inovação tecnológica da plataforma.',
        avatar:
          'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&auto=format&fit=crop&crop=face',
        social: {
          linkedin: 'https://linkedin.com/in/anasantos',
          email: 'ana@empresa.com',
        },
      },
      {
        id: 3,
        name: 'Roberto Costa',
        role: 'Diretor de Vendas',
        bio: 'Profissional com vasta experiência em vendas e relacionamento com cliente. Lidera nossa equipe comercial com foco em resultados.',
        avatar:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&crop=face',
        social: {
          linkedin: 'https://linkedin.com/in/robertocosta',
          email: 'roberto@empresa.com',
        },
      },
      {
        id: 4,
        name: 'Maria Oliveira',
        role: 'Head de Marketing',
        bio: 'Especialista em marketing digital e growth hacking. Responsável por nossa estratégia de crescimento e relacionamento com clientes.',
        avatar:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&auto=format&fit=crop&crop=face',
        social: {
          linkedin: 'https://linkedin.com/in/mariaoliveira',
          twitter: 'https://twitter.com/mariaoliveira',
          email: 'maria@empresa.com',
        },
      },
    ],

    values: [
      {
        id: 1,
        title: 'Qualidade',
        description:
          'Compromisso com a excelência em todos os produtos e serviços oferecidos aos nossos clientes.',
        icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      },
      {
        id: 2,
        title: 'Inovação',
        description:
          'Busca constante por novas tecnologias e soluções que melhorem a experiência do cliente.',
        icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      },
      {
        id: 3,
        title: 'Transparência',
        description:
          'Comunicação clara e honesta em todos os relacionamentos comerciais e interpessoais.',
        icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
      },
      {
        id: 4,
        title: 'Confiabilidade',
        description:
          'Construção de relacionamentos duradouros baseados na confiança e credibilidade.',
        icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
      },
      {
        id: 5,
        title: 'Sustentabilidade',
        description:
          'Responsabilidade ambiental e social em todas as nossas operações e decisões empresariais.',
        icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c5 0 9-4 9-9s-4-9-9-9',
      },
      {
        id: 6,
        title: 'Experiência do Cliente',
        description:
          'Foco total na satisfação e superação das expectativas de nossos clientes.',
        icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
      },
    ],

    timeline: [
      {
        id: 1,
        year: '2019',
        title: 'Fundação da Empresa',
        description:
          'Início das operações com foco em produtos eletrônicos de qualidade.',
        highlight: true,
      },
      {
        id: 2,
        year: '2020',
        title: 'Primeira Expansão',
        description:
          'Ampliação do catálogo e início das vendas online em todo o Brasil.',
      },
      {
        id: 3,
        year: '2021',
        title: 'Marco de 1.000 Clientes',
        description:
          'Atingimos nossa primeira marca significativa de clientes satisfeitos.',
        highlight: true,
      },
      {
        id: 4,
        year: '2022',
        title: 'Novo Centro de Distribuição',
        description:
          'Inauguração de centro logístico próprio para melhorar entregas.',
      },
      {
        id: 5,
        year: '2023',
        title: 'Certificação ISO',
        description:
          'Conquista da certificação de qualidade internacional ISO 9001.',
        highlight: true,
      },
      {
        id: 6,
        year: '2024',
        title: '10.000 Clientes',
        description:
          'Alcançamos a marca de 10 mil clientes ativos e satisfeitos.',
      },
    ],
  };

  // Função para obter seção específica
  const getSectionById = (id: string) => {
    return aboutContent.sections.find(section => section.id === id);
  };

  // Função para obter membro da equipe
  const getTeamMemberById = (id: number) => {
    return aboutContent.team.find(member => member.id === id);
  };

  // Função para obter marcos em destaque
  const getHighlightedMilestones = () => {
    return aboutContent.timeline.filter(milestone => milestone.highlight);
  };

  return {
    aboutContent,
    getSectionById,
    getTeamMemberById,
    getHighlightedMilestones,
  };
}
