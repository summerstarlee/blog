
module.exports = {
  title: "",
  description: "Welcome Star Lee's blog !",
  dest: 'dist',
  base: '/blog/',
  head: [
      ['link', { rel: 'icon', href: '/android-icon-36x36.png' }]
  ], 
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    repo: 'summerstarlee/blog', 
    lastUpdated: 'Last Updated', 
    serviceWorker: {
      updatePopup: true
    }, 
    nav: [
      {
        text: '前端工程化',
        link: '/engineering/',
      },
      {
        text: 'Javascript',
        items: [
          {
            text: '你不知道的js 读后感', 
            items: [
              {
                text: '上卷',
                link: '/dontKnowJs/'
              }
            ]
          },
          {
            text: '基础语法',
            link: '/javascript/'
          }
        ],
        link: '/javascript/',

      },
      {
        text: 'git',
        link: '/git/'
      },
      {
        text: '服务器运维',
        link: '/server/'
      }
    ], 
    sidebar: {
      '/engineering/': [
        '',
        'git-commit',
        'vs-eslint',
        'babel'
      ],
      '/git/': [
        'tag',
        'closeIssues',
        'repassword'
      ],
      '/server/': [
        '',
        'server-link'
      ],
      '/javascript/': [
        'this'
      ],
      '/dontKnowJs/': [
        ""
      ]
    }
  }
}



