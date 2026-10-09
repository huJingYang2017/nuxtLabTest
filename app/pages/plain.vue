<script setup lang="ts">
definePageMeta({
  layout: 'blank',
  title: '空白布局',
})
</script>

<template>
  <section class="panel">
    <h1>另一套布局</h1>
    <p>这一页的 <code>definePageMeta</code> 指定了 <code>layout: 'blank'</code>，所以没有侧栏。</p>
    <p class="hint">默认布局是 app/layouts/default.vue。Nuxt 在没有声明时使用它。登录页、打印页通常换一套布局。</p>
  </section>
</template>
