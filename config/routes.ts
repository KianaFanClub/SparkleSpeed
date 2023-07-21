import { defineConfig } from 'umi';

const routes: Parameters<typeof defineConfig>[0]['routes'] = [
  { path: '/', component: 'index' },
  { path: '/docs', component: 'docs' },
];

export default routes;
