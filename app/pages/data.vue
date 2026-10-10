<script setup lang="ts">
interface NotesResponse {
  items: { id: number, title: string }[]
  keyword: string
  servedAt: string
}

const keyword = ref('')

// query 里放 ref。keyword 一变，Nuxt 会重新请求，不必自己 watch。
const { data, error, refresh, status } = await useFetch<NotesResponse>('/api/notes', {
  query: { q: keyword },
})

const requestPath = computed(() => {
  const q = keyword.value.trim()
  return q ? `/api/notes?q=${encodeURIComponent(q)}` : '/api/notes'
})
</script>

<template>
  <div>
    <h1>数据获取</h1>
    <DemoBlock
      title="useFetch 是 Nuxt 的组合函数"
      scene="列表页一打开就要有数据。搜索引擎和用户第一次看到的 HTML 里已经包含这些条目。"
      hint="写在 script setup 里，由 Nuxt 自动导入，不用自己 import。它不是 onMounted 这种生命周期钩子：setup 执行到这一行就会发请求。"
    >
      <p>这一页的调用是 <code>await useFetch&lt;NotesResponse&gt;('/api/notes', { query: { q: keyword } })</code>。</p>
      <table class="map">
        <tbody>
          <tr>
            <th>第一个参数</th>
            <td>请求地址。<code>/api/notes</code> 对应 <code>server/api/notes.get.ts</code>。</td>
          </tr>
          <tr>
            <th>&lt;NotesResponse&gt;</th>
            <td>只给 TypeScript 看返回值长什么样，不会发到服务器。</td>
          </tr>
          <tr>
            <th>await</th>
            <td>等这次请求结束再继续渲染。服务端渲染时，请求发生在服务器内部，结果放进 payload。浏览器水合时直接用这份结果，不会再请求一次。</td>
          </tr>
          <tr>
            <th>data</th>
            <td>接口返回的对象。还没回来时是 null，所以模板里写成 <code>data?.items</code>。</td>
          </tr>
          <tr>
            <th>status</th>
            <td><code>idle</code>、<code>pending</code>、<code>success</code>、<code>error</code> 四选一。</td>
          </tr>
          <tr>
            <th>error</th>
            <td>请求失败时的错误。成功时是空。</td>
          </tr>
          <tr>
            <th>refresh()</th>
            <td>用当前参数再请求一次。改筛选词时 Nuxt 会自己请求，这个按钮用来手动重来。</td>
          </tr>
        </tbody>
      </table>
      <p>状态 <code>{{ status }}</code>。服务端生成时间 <code>{{ data?.servedAt }}</code></p>
      <p v-if="error" class="hint">{{ error.statusCode }} {{ error.statusMessage }}</p>
      <button type="button" @click="refresh()">refresh 再向接口要一次</button>
    </DemoBlock>
    <DemoBlock
      title="参数放在第二个对象里"
      scene="搜索词、分页、筛选。这些值会变，就交给 query，不要自己把问号拼进地址再手动监听。"
      hint="query 里的 ref 变化后，useFetch 会重新请求。server/api/notes.get.ts 用 getQuery(event).q 读到这个词。"
    >
      <label>
        查询参数 q
        <input v-model="keyword" type="text" placeholder="试试输入「路由」或「浏览器」">
      </label>
      <p>实际请求 <code>{{ requestPath }}</code>，接口回显的 keyword：<code>{{ data?.keyword || '（空）' }}</code></p>
      <ul v-if="data?.items.length">
        <li v-for="item in data.items" :key="item.id">{{ item.title }}</li>
      </ul>
      <p v-else class="hint">没有标题包含这个词的笔记。</p>
      <ol class="log">
        <li>查询参数：<code>{ query: { q: keyword, page: 1 } }</code>。上面的输入框就是这种。q 会变成 <code>?q=路由</code>。</li>
        <li>参数不会变时，可以直接写在地址上：<code>useFetch('/api/notes?q=路由')</code>。</li>
        <li>路径参数用函数：<code>useFetch(() => `/api/posts/${route.params.id}`)</code>。动态参数那一页就是这样，换 id 会重新请求。</li>
        <li>提交 JSON 时加上方法和请求体：<code>{ method: 'POST', body: { title } }</code>。body 里的 ref 同样会跟着变。</li>
      </ol>
    </DemoBlock>
    <DemoBlock
      title="和 useAsyncData 的差别"
      scene="数据不是一个 URL，而是要先算再请求，或者要并行请求两份数据。"
      hint="useFetch(url) 相当于 useAsyncData(url, () => $fetch(url))。键相同的调用会共用同一次请求。"
    >
      <p>这一页的列表用 useFetch，因为数据就是一次 GET。要自己决定何时发请求、拼多次结果，或者发不是简单 GET 的请求时，改用 useAsyncData，把获取过程写在函数里。</p>
    </DemoBlock>
  </div>
</template>
