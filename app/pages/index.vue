<script setup lang="ts">
const config = useRuntimeConfig()
const appConfig = useAppConfig()
const renderedOn = useState('home-rendered-on', () => (import.meta.server ? 'server' : 'client'))

useSeoMeta({
  title: '总览',
  description: 'Nuxt 4 的路由、数据、渲染和状态示例。',
})
</script>

<template>
  <div>
    <h1>{{ config.public.appTitle }}</h1>
    <p>这份 HTML 的 setup 首先跑在 <code>{{ renderedOn }}</code>。刷新后仍是 server，说明页面不是空的 #app 等浏览器再画。</p>
    <p class="hint">{{ appConfig.lab.note }}</p>
    <DemoBlock
      title="这个项目覆盖什么"
      scene="用 Nuxt 做一个会被搜索引擎看到、又带接口的站点时，这些就是每天会碰到的部分。"
      hint="侧栏按目录走一遍。每一页只演示一块，避免把路由、数据和渲染写在同一个例子里。"
    >
      <table class="map">
        <thead>
          <tr>
            <th>目录</th>
            <th>Nuxt 提供的东西</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>app/pages</td><td>文件即路由。动态段、嵌套页、definePageMeta。</td></tr>
          <tr><td>app/layouts</td><td>default 是这套侧栏，blank 是没有侧栏的一页。</td></tr>
          <tr><td>server/api</td><td>Nitro 接口。useFetch 在服务端渲染时直接调用它。</td></tr>
          <tr><td>routeRules</td><td>把 /remote 转发到线上接口。/api 仍留在本机。</td></tr>
          <tr><td>runtimeConfig</td><td>公开配置进浏览器，密钥只留在服务端。</td></tr>
          <tr><td>app/middleware</td><td>全局中间件记录每次导航；具名中间件可以拦住一页。</td></tr>
          <tr><td>useState / Pinia</td><td>跨页面的临时状态，以及正式的 store。</td></tr>
          <tr><td>app/plugins、composables、components</td><td>自动导入，不用在每页写 import。</td></tr>
          <tr><td>app/error.vue</td><td>接口或页面抛出的错误换成错误页，而不是白屏。</td></tr>
        </tbody>
      </table>
    </DemoBlock>
  </div>
</template>
