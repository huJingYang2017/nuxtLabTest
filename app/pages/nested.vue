<template>
  <div>
    <h1>嵌套路由</h1>
    <DemoBlock
      title="父页面留下，子页面换掉"
      scene="设置页的左侧菜单不动，右侧内容跟着地址变。父文件负责外壳，子文件负责一块内容。"
      hint="app/pages/nested.vue 是外壳，必须写出 NuxtPage。/nested 由 nested/index.vue 填进这块，/nested/child 由 nested/child.vue 填进这块。"
    >
      <div class="row">
        <NuxtLink to="/nested">索引</NuxtLink>
        <NuxtLink to="/nested/child">子页</NuxtLink>
      </div>
      <div class="panel">
        <NuxtPage />
      </div>
    </DemoBlock>
  </div>
</template>
