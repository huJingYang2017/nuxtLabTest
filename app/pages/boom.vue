<script setup lang="ts">
const route = useRoute()

if (route.query.throw === '1') {
  throw createError({
    statusCode: 500,
    message: '查询参数要求这一页在渲染时失败',
  })
}

function boom() {
  showError({
    statusCode: 503,
    message: '按钮调用了 showError',
  })
}
</script>

<template>
  <div>
    <h1>错误页</h1>
    <DemoBlock
      title="createError 和 showError"
      scene="文章不存在、接口 500。用户应看到说明和返回入口，而不是浏览器里一段未捕获异常。"
      hint="app/error.vue 接收 error。clearError 用来离开错误页。渲染过程中抛出的 createError 会走到这里；事件回调里要用 showError。"
    >
      <div class="row">
        <button type="button" @click="boom">showError</button>
        <NuxtLink class="btn" to="/boom?throw=1">渲染时 createError</NuxtLink>
        <NuxtLink to="/posts/9">接口 404</NuxtLink>
      </div>
    </DemoBlock>
  </div>
</template>
