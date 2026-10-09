<script setup lang="ts">
const { browserHref, pageFile, shellFile, ideHref } = usePageAddress()
</script>

<template>
  <div class="page-address">
    <p>
      <span>页面地址</span>
      <a :href="browserHref">{{ browserHref }}</a>
    </p>
    <p v-if="pageFile">
      <span>源文件</span>
      <a v-if="ideHref(pageFile)" :href="ideHref(pageFile)" :title="`在 Cursor 中打开 ${pageFile}`">{{ pageFile }}</a>
      <code v-else>{{ pageFile }}</code>
    </p>
    <p v-if="shellFile">
      <span>父页面</span>
      <a v-if="ideHref(shellFile)" :href="ideHref(shellFile)" :title="`在 Cursor 中打开 ${shellFile}`">{{ shellFile }}</a>
      <code v-else>{{ shellFile }}</code>
    </p>
    <p v-if="shellFile" class="hint">点源文件或父页面，会在 Cursor 里打开对应的页面。</p>
    <p v-else class="hint">点源文件，会在 Cursor 里打开这一页。</p>
  </div>
</template>
