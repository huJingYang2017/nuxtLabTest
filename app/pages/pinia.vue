<script setup lang="ts">
const counter = useCounterStore()
</script>

<template>
  <div>
    <h1>Pinia</h1>
    <DemoBlock
      title="模块自动注册 store"
      scene="购物车、当前用户。很多页面读写同一份状态，而且要在开发工具里能看见。"
      hint="@pinia/nuxt 会自动导入 app/stores 里的 useXxxStore，也会在服务端为每次请求准备独立的 store。"
    >
      <p>计数 {{ counter.count }}，双倍 {{ counter.doubled }}</p>
      <button type="button" @click="counter.inc()">+1</button>
      <p class="hint">和 useState 一样，客户端导航不会清掉它。刷新会重新从 0 开始，因为这里没有做持久化。</p>
    </DemoBlock>
  </div>
</template>
