import { defineConfig } from 'umi';

export default defineConfig({
  layout: {},

  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },

  routes: [
    {
      path: '/',
      component: '@/layouts/',
      routes: [
        { path: '/', component: '@/pages/HomePage' },
        { path: '/login', component: '@/pages/LogInPage' },
        { path: '/welcome', component: '@/pages/WelcomePage' },
        {
          path: '/product/:id',
          component: '@/pages/product/_layout',
          routes: [{ path: '/product/:id', component: '@/pages/Product/[id]' }],
        },
        { path: '/orderlist/', component: '@/pages/OrderListPage' },
        { path: '/delaypage', component: '@/pages/DelayPage' },
        { path: '/morepage', component: '@/pages/MorePage' },
        { component: '@/pages/404' },
      ],
    },
  ],
});
