import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/produtos',
    name: 'Products',
    component: () => import('@/pages/Products.vue'),
  },
  {
    path: '/produto/:id',
    name: 'ProductDetail',
    component: () => import('@/pages/ProductDetail.vue'),
  },
  {
    path: '/sobre',
    name: 'About',
    component: () => import('@/pages/About.vue'),
  },
  {
    path: '/categoria/:id',
    name: 'Category',
    component: () => import('@/pages/Category.vue'),
  },
  {
    path: '/contato',
    name: 'Contact',
    component: () => import('@/pages/Contact.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Sempre rola para o topo quando navegar para uma nova página
    if (savedPosition) {
      return savedPosition;
    } else {
      // Garante que a navegação sempre inicie do topo com um pequeno delay
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({ top: 0, left: 0, behavior: 'smooth' });
        }, 100);
      });
    }
  },
});

export default router;
