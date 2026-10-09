<script setup lang="ts">
const { $labVersion } = useNuxtApp()
const { time } = useClock()
</script>

<template>
  <div>
    <h1>插件和自动导入</h1>
    <DemoBlock
      title="插件在应用创建时运行"
      scene="注入一个全局可用的版本号、接上第三方库、在浏览器端才注册的分析脚本。"
      hint="app/plugins/lab.ts 通过 provide 挂上 $labVersion。文件名以 .client.ts 结尾的插件只在浏览器运行，.server.ts 只在服务端运行。"
    >
      <p>插件提供的版本：{{ $labVersion }}</p>
    </DemoBlock>
    <DemoBlock
      title="composables 和 components 不用手写 import"
      scene="useClock、DemoBlock 在很多页出现。每页顶部堆一排 import 没有增加信息。"
      hint="Nuxt 扫描 app/composables、app/components、app/utils。这个时钟来自 useClock，离开页面时它会清掉定时器。"
    >
      <p>自动导入的时钟：{{ time }}</p>
      <p class="hint">服务端首次渲染时时间是 --:--:--，浏览器挂载后才开始跳。这是 onMounted 的结果，不是 ClientOnly。</p>
    </DemoBlock>
  </div>
</template>
