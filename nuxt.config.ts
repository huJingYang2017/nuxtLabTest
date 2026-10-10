// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 首次启动会询问是否参加匿名统计。提问在 IDE 终端里经常不出现，进程就停在这里。
  telemetry: false,
  modules: ['@pinia/nuxt'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  // Nuxt 4.6.0 在 Windows 上会把渲染器留在外部包里，页面变成 500。
  // 下一版会修好。这里把 nuxt/dist 打进服务端包，和 Linux 上的默认行为一致。
  nitro: {
    externals: {
      inline: [/[\\/]node_modules[\\/]nuxt[\\/]dist[\\/]/],
    },
  },
  // 浏览器只请求本机 /remote/...。Nitro 去掉 /remote 前缀，再转发到线上接口。
  // /api 仍由 server/api 处理，不要写进这里。改完要重启 nuxt dev。
  routeRules: {
    '/remote/**': { proxy: 'https://httpbin.org/**' },
  },
  // 服务端能读到全部字段。public 里的字段会送到浏览器。
  // 环境变量 NUXT_API_SECRET、NUXT_PUBLIC_APP_TITLE 会在启动时覆盖这里。
  runtimeConfig: {
    apiSecret: 'demo-secret-not-for-client',
    public: {
      appTitle: 'Nuxt 预习台',
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'zh-CN' },
      title: 'Nuxt 预习台',
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    },
  },
})
