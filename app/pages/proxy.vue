<script setup lang="ts">
interface RemoteEcho {
  url: string
  origin: string
  args: Record<string, string>
}

const { data, error, status } = await useFetch<RemoteEcho>('/remote/get', {
  query: { from: 'nuxt-lab' },
})

useSeoMeta({
  title: '本地代理',
  description: '浏览器请求本机 /remote，由 Nitro 转发到线上接口。',
})
</script>

<template>
  <div>
    <h1>本地代理</h1>
    <DemoBlock
      title="routeRules 把本机路径转到线上"
      scene="页面在 localhost 上开发，数据在另一个域名。浏览器仍请求本机，避免被跨域拦住。"
      hint="配置在 nuxt.config.ts 的 routeRules。/remote/** 会转到 https://httpbin.org/**，/remote 这段会被去掉。"
    >
      <table class="map">
        <tbody>
          <tr>
            <th>页面里写的地址</th>
            <td><code>/remote/get?from=nuxt-lab</code></td>
          </tr>
          <tr>
            <th>Nitro 实际请求</th>
            <td><code>https://httpbin.org/get?from=nuxt-lab</code></td>
          </tr>
          <tr>
            <th>本地接口</th>
            <td><code>/api/notes</code> 仍走 <code>server/api/notes.get.ts</code>，不经过这条代理。</td>
          </tr>
        </tbody>
      </table>
      <p>状态 <code>{{ status }}</code></p>
      <p v-if="data">线上看到的地址是 <code>{{ data.url }}</code>，来源 IP <code>{{ data.origin }}</code>。</p>
      <p v-else-if="error" class="hint">{{ error.statusCode }} {{ error.statusMessage }}。转发失败时重启一次 dev，让 nuxt.config.ts 里的 routeRules 重新生效。</p>
      <div class="row">
        <NuxtLink to="/data">对比本地 /api/notes</NuxtLink>
        <NuxtLink to="/server">看 server/api 文件</NuxtLink>
      </div>
    </DemoBlock>
  </div>
</template>
