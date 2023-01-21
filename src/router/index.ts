import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        component: () => import('../pages/OverviewPage.vue'),
      },
      {
        path: '/BuySell',
        component: () => import('../pages/BuySellPage.vue'),
      },
      {
        path: '/Wallets',
        component: () => import('../pages/WalletsPage.vue'),
      },
      {
        path: '/Bundles',
        component: () => import('../pages/BundlesPage.vue'),
      },
      {
        path: '/Reporting',
        component: () => import('../pages/ReportingPage.vue'),
      },
      {
        path: '/Community',
        component: () => import('../pages/CommunityPage.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/ErrorNotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
