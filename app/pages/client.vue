<script setup lang="ts">
const { time } = useClock()
</script>

<template>
  <div>
    <h1>仅客户端</h1>
    <DemoBlock
      title="ClientOnly"
      scene="地图、图表、依赖 window 的编辑器。服务端没有这些对象，硬在 setup 里读会让渲染失败。"
      hint="fallback 插槽在服务端和客户端准备好之前显示。useClock 的 setInterval 写在 onMounted，离开页面时 onUnmounted 清掉。"
    >
      <ClientOnly>
        <p class="ok">浏览器时间 {{ time }}。这段在服务端不会执行内部组件。</p>
        <template #fallback>
          <p>服务端没有 window，先显示这行占位。</p>
        </template>
      </ClientOnly>
    </DemoBlock>
  </div>
</template>
