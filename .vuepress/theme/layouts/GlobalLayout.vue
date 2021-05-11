<!-- .vuepress/theme/layouts/GlobalLayout.vue -->
<template>
  <div id="global-layout">
    <component :is="layout"/>
    <div style='position:static; left:0; right: 0;bottom:0; padding: 5px;text-align:center; background-color: #ffffff; z-index: 10;'>
    MIT Licensed | Copyright © 2018-present Star Lee | <a href="https://beian.miit.gov.cn" target="_blank">粤ICP备18161342号</a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    layout () {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // 你也可以像默认的 globalLayout 一样首先检测 layout 是否存在
          return this.$frontmatter.layout
        }
        return 'Layout'
      }
      return 'NotFound'
    }
  }
}
</script>