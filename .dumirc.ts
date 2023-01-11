import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: '企业组件开发',
    logo: 'logo1.png',
    prefersColor: { default: 'auto' },
  },
  favicons: ['logo1.png'],
  locales: [{ id: 'zh-CN', name: '中文' }]
});
