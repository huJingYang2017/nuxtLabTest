<script setup lang="ts">
definePageMeta({ middleware: ['pass'] })
</script>

<template>
  <div>
    <h1>会员页</h1>
    <p>能看见这段，是因为 lab-pass 已经是 true。直接打开 /members 会被中间件送回守卫页。</p>
  </div>
</template>
