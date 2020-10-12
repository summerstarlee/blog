
module.exports = {
  title: "",
  description: "Welcome Star Lee's blog !",
  dest: 'dist',
  head: [
      ['link', { rel: 'icon', href: '/android-icon-36x36.png' }]
  ], 
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    repo: 'summerstarlee/blog', 
    lastUpdated: 'Last Updated', 
    sidebarDepth: 2,
    serviceWorker: {
      updatePopup: true
    }, 
    nav: [
      {
        text: '前端工程化',
        link: '/engineering/',
      },
      {
        text: 'webpack',
        link: '/webpack/',
      },
      {
        text: 'Element-UI 源码分析',
        link: '/element/',
      },
      {
        text: 'vue-cli 源码分析',
        link: '/vue-cli/',
      },
      {
        text: 'css 相关',
        link: '/css/',
      },
      {
        text: 'html 相关',
        link: '/html/',
      },
      {
        text: 'node.js 相关',
        link: '/nodejs/',
      },
      {
        text: '小程序 相关',
        link: '/wxMini/'
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
      },
      {
        text: 'KKB 学习记录',
        items: [
          {
            text: 'vue-router 实现原理',
            link: '/vue-router/'
          },
          {
            text: 'vuex 实现原理',
            link: '/vuex/'
          },
          {
            text: 'vue 源码分析',
            link: '/vue/'
          }
        ]
      }
    ], 
    sidebar: {
      '/engineering/': [
        '',
        'git-commit',
        'vs-eslint',
        'babel',
        'prettier',
        'npm_change_registry',
        'npm_1',
        'standard-version'
      ],
      '/git/': [
        'tag',
        'closeIssues',
        'repassword',
        'git-chached',
        'muti_user'
      ],
      '/server/': [
        '',
        'server-link',
        'window-kill-port',
        'nginx-install',
        'github_action_deploy'
      ],
      '/javascript/': [
        'this',
        'with',
        'comma',
        'context',
        "module-import",
        "function",
        'plus_sign',
        'prototype_link'
      ],
      '/dontKnowJs/': [
        ""
      ],
      '/vue-router/': [
        '',
        'simple'
      ],
      '/vuex/': [
        ''
      ],
      '/vue/': [
        '',
        'reactive',
        'workflow',
        'vue_reactive',
        'inject_provide',
        'async',

      ],
      '/webpack/': [
        "",
        "performance",
        'bundle_result',
        "tree-shaking",
        "style",
        'html-webpack-plugin',
        'ignore-plugin',
        'img-config',
        'lazy-loader',
        'muti-page',
        'no-parse',
        'out-file',
        'plugin'
      ],
      '/element/': [
        "",
        'project_analyse',
        "base",
        "make",
        "build_file",
        "theme-chalk",
        "npm_publish"
      ],
      '/css/': [
        "",
        "css_box",
        "pseudoElements",
        "grid"
      ],
      '/wxMini/': [
        "",
        "custom_component",
        "template"
      ],
      '/nodejs/': [
        "",
        "events",
        "process"
      ],
      '/vue-cli/':[
        ""
      ],
      '/html/':[
        "",
        "intersectionObserver",
        "event1",
        "event2",
        "event3",
        "event4",
        "event5",
      ]
    }
  }
}



