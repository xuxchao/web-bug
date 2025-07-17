import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WEB BUG",
  description: "记录一些乱七八糟的 WEB BUG。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],

    sidebar: [
      {
        text: 'BUG',
        items: [
          { text: 'Css Level', link: '/css-level' },
          { text: 'Style 兼容', link: '/style-compat' },
          { text: 'flex width 超出容器', link: '/flex-width' },
        ]
      },
      {
        text: '不明原因的 BUG',
        items: [
          { text: 'Backdrop Filter', link: '/backdrop-filter' },
          { text: '0.5px border', link: '/border' },
          { text: 'overflow 作用 backdrop 失效', link: '/backdrop-overflow' }
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
