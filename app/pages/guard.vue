<script setup lang="ts">
const route = useRoute()
const allowed = useState('lab-pass', () => false)
const trail = useState<string[]>('nav-trail', () => [])

function enter() {
  allowed.value = true
  navigateTo('/members')
}
</script>

<template>
  <div>
    <h1>路由中间件</h1>
    <DemoBlock
      title="进某些页之前先看一眼"
      scene="未登录不能进会员页。全局则可以给每次导航补日志、改语言。"
      hint="app/middleware/trail.global.ts 对每次导航生效。app/middleware/pass.ts 只挂在声明了 middleware: ['pass'] 的页面上。"
    >
      <p v-if="route.query.denied" class="hint">刚才被拦住了，目标是 {{ route.query.denied }}。</p>
      <button type="button" @click="enter">允许并进入 /members</button>
      <ol class="log">
        <li v-for="line in trail" :key="line">{{ line }}</li>
      </ol>
    </DemoBlock>
  </div>
</template>
