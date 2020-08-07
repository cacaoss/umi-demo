import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },

  routes: [{ path: '/', component: '@/pages/index' }],
});
