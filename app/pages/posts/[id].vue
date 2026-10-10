<script setup lang="ts">
const route = useRoute()

const { data, error, status } = await useFetch(() => `/api/posts/${route.params.id}`)

const errorText = computed(() => {
  const body = error.value?.data as { message?: string, statusMessage?: string } | undefined
  return body?.message || body?.statusMessage || error.value?.statusMessage
})
</script>

<template>
  <div>
    <h1>动态参数</h1>
    <DemoBlock
      title="[id].vue"
      scene="文章、订单、用户详情。地址里的一段就是参数，换一段就换一条数据。"
      hint="useFetch 的地址写成函数，参数变化时会重新请求。服务端渲染时这次请求发生在服务器上。"
    >
      <div class="row">
        <!-- 路由没有单独的配置文件。app/pages 里每个 .vue 文件的路径，就是一条地址。Nuxt 启动时会扫描这个目录，生成 Vue Router 的路由表。 -->
        <NuxtLink to="/posts/1">/posts/1</NuxtLink>
        <NuxtLink to="/posts/2">/posts/2</NuxtLink>
        <NuxtLink to="/posts/9">/posts/9 不存在</NuxtLink>
        <NuxtLink to="/boom">/boom</NuxtLink>
      </div>
      <p>当前 params.id：<code>{{ route.params.id }}</code>，请求状态 {{ status }}</p>
      <p v-if="data">{{ data.title }}</p>
      <p v-else-if="error" class="hint">{{ error.statusCode }} {{ errorText }}</p>
    </DemoBlock>
  </div>
</template>
