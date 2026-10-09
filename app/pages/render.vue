<script setup lang="ts">
const renderedOn = useState('render-side', () => (import.meta.server ? 'server' : 'client'))
</script>

<template>
  <div>
    <h1>服务端渲染</h1>
    <DemoBlock
      title="先在服务器上跑一遍 Vue"
      scene="用户和搜索引擎拿到的第一份 HTML 里已经有标题和列表，而不是一个空的 #app。"
      hint="nuxt dev 和 nuxt build 默认开启 SSR。nuxt generate 则在构建时把页面渲染成静态 HTML。"
    >
      <p>这一页的 setup 首次执行位置被记进 payload：<code>{{ renderedOn }}</code>。浏览器水合时沿用这个值，所以不会和服务器 HTML 对不上。</p>
      <ol class="log">
        <li>请求进入 Nitro。</li>
        <li>Nuxt 在服务器上执行页面 setup。useFetch 若指向 /api，就在进程内调用对应的处理函数。</li>
        <li>渲染出的 HTML 和一份 payload 一起返回。</li>
        <li>浏览器下载页面 JS，Vue 用水合接上已有 DOM，之后的点击才是客户端导航。</li>
      </ol>
      <p>客户端导航不会再整页刷新。从总览点到这里时，上面的 server 标记来自这次导航里的服务端请求；若把 ssr 关掉，标记会变成 client。</p>
    </DemoBlock>
  </div>
</template>
