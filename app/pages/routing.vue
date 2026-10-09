<script setup lang="ts">
definePageMeta({ title: '文件路由' })

const router = useRouter()

function goPost() {
  router.push('/posts/2')
}
</script>

<template>
  <div>
    <h1>文件路由</h1>
    <DemoBlock
      title="pages 目录就是路由表"
      scene="新增一个页面时，不用再去登记 path 和 component。"
      hint="app/pages/routing.vue 对应 /routing。NuxtLink 在视口内会预取目标页面的代码。"
    >
      <p>这一页的文件是 <code>app/pages/routing.vue</code>。动态参数在 <code>app/pages/posts/[id].vue</code>，嵌套页在 <code>app/pages/nested.vue</code> 和它的子目录。</p>
      <div class="row">
        <NuxtLink class="btn" to="/posts/1">NuxtLink 到文章 1</NuxtLink>
        <button type="button" @click="goPost">navigateTo 的底层：router.push 文章 2</button>
      </div>
    </DemoBlock>
    <DemoBlock
      title="页面元信息"
      scene="这一页要不要鉴权、用哪套布局、中间件叫什么，写在页面自己身上。"
      hint="definePageMeta 只能写在页面里，而且参数必须是编译期能看懂的对象，不能写运行时变量。"
    >
      <p>本页调用了 <code>definePageMeta({ title: '文件路由' })</code>。布局页、中间件页会用同一处声明切换布局或挂上中间件。</p>
    </DemoBlock>
  </div>
</template>
