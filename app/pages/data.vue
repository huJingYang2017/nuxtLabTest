<script setup lang="ts">
interface NotesResponse {
  items: { id: number, title: string }[]
  servedAt: string
}

const { data, refresh, status } = await useFetch<NotesResponse>('/api/notes')
</script>

<template>
  <div>
    <h1>数据获取</h1>
    <DemoBlock
      title="useFetch"
      scene="列表页打开时就要有数据。搜索引擎和用户第一次看到的 HTML 里已经包含这些条目。"
      hint="地址 /api/notes 对应 server/api/notes.get.ts。服务端渲染时 Nuxt 在服务器内部调用它，并把结果放进 payload。浏览器水合时直接用这份结果，不会再请求一次。"
    >
      <p>状态 {{ status }}。服务端生成时间 {{ data?.servedAt }}</p>
      <ul>
        <li v-for="item in data?.items" :key="item.id">{{ item.title }}</li>
      </ul>
      <button type="button" @click="refresh()">refresh 再向接口要一次</button>
    </DemoBlock>
    <DemoBlock
      title="和 useAsyncData 的差别"
      scene="数据不是一个 URL，而是要先算再请求，或者要并行请求两份数据。"
      hint="useFetch(url) 相当于 useAsyncData(url, () => $fetch(url))。键相同的调用会共用同一次请求。"
    >
      <p>页面上的列表用的是 useFetch。需要自己写获取函数、或者用非 GET 的请求时，改用 useAsyncData，避免把逻辑塞进地址字符串。</p>
    </DemoBlock>
  </div>
</template>
