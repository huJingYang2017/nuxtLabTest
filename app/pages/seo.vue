<script setup lang="ts">
useSeoMeta({
  title: '页面头部示例',
  description: '这一页单独的标题和描述，给浏览器标签和搜索结果用。',
  ogTitle: '页面头部示例',
})
</script>

<template>
  <div>
    <h1>页面头部</h1>
    <DemoBlock
      title="useSeoMeta"
      scene="每篇文章有自己的标题和摘要。分享到别处时，预览卡片用的是这一页的信息，不是整站默认值。"
      hint="它最终写成 head 里的 title 和 meta。查看这一页的文档头，title 是「页面头部示例」，其他页回到各自的标题。"
    >
      <p>全站默认标题写在 nuxt.config.ts 的 app.head。某一页需要换标题时，在该页调用 useSeoMeta 或 useHead，不要去改默认布局里的 document.title。</p>
    </DemoBlock>
  </div>
</template>
