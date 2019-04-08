module.exports = {
  title: 'Grow UI',
  base:'/Grow-UI/',
  description: '一套用于交流和总结学习的UI',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: '起步',
        collapsable: false,
        children: [
          '/install/',
          '/get_started/',
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/basic',
          '/components/form',
          '/components/layout',
          '/components/Nav',
          '/components/Notice',
          '/components/Other',
        ]
      }
    ]
  }
}