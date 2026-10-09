<script setup lang="ts">
const config = useRuntimeConfig()
const appConfig = useAppConfig()

interface ConfigResponse {
  publicTitle: string
  secretKnown: boolean
  secretPreview: string
}

const { data } = await useFetch<ConfigResponse>('/api/config')
</script>

<template>
  <div>
    <h1>配置</h1>
    <DemoBlock
      title="runtimeConfig"
      scene="接口域名、功能开关随环境变。密钥只能在服务器上用，不能出现在页面源码里。"
      hint="nuxt.config.ts 里写默认值。NUXT_API_SECRET 覆盖 apiSecret，NUXT_PUBLIC_APP_TITLE 覆盖 public.appTitle。改 .env 后要重启 dev。"
    >
      <table class="map">
        <tbody>
          <tr>
            <th>浏览器里的 public.appTitle</th>
            <td>{{ config.public.appTitle }}</td>
          </tr>
          <tr>
            <th>接口确认服务端认到了密钥</th>
            <td>{{ data?.secretKnown ? '是' : '否' }}，只回前缀 {{ data?.secretPreview }}</td>
          </tr>
          <tr>
            <th>app.config</th>
            <td>{{ appConfig.lab.note }}</td>
          </tr>
        </tbody>
      </table>
      <p class="hint">页面脚本里没有 config.apiSecret 这个字段。TypeScript 也只给浏览器暴露 public。</p>
    </DemoBlock>
  </div>
</template>
