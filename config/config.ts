import { defineConfig } from 'umi';
import antd from './antd';
import layout from './layout';
import plugins from './plugins';

export default defineConfig({
  npmClient: 'pnpm',
  title: 'umi test',
  plugins,
  // routes,
  antd,
  layout,
  initialState: {},
  model: {},
});
