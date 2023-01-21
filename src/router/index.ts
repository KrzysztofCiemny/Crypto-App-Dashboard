import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../components/layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        component: () => import('../components/pages/OverviewPage.vue'),
      },
      {
        path: '/BuySell',
        component: () => import('../components/pages/BuySellPage.vue'),
      },
      {
        path: '/Wallets',
        component: () => import('../components/pages/WalletsPage.vue'),
      },
      {
        path: '/Bundles',
        component: () => import('../components/pages/BundlesPage.vue'),
      },
      {
        path: '/Reporting',
        component: () => import('../components/pages/ReportingPage.vue'),
      },
      {
        path: '/Community',
        component: () => import('../components/pages/CommunityPage.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('../components/pages/ErrorNotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
