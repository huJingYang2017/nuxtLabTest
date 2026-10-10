<template>
  <div>
    <h1>服务端接口</h1>
    <DemoBlock
      title="server/api 就是后端"
      scene="表单提交、转发第三方接口、读取只该在服务器上出现的密钥。不必再另起一个服务。"
      hint="文件名决定方法和路径。notes.get.ts 是 GET /api/notes。posts/[id].get.ts 是 GET /api/posts/:id。"
    >
      <ol class="log">
        <li>server/api/notes.get.ts：返回笔记列表和生成时间。</li>
        <li>server/api/posts/[id].get.ts：按 id 查找，没有就 throw createError 404。</li>
        <li>server/api/config.get.ts：读取 runtimeConfig，只把密钥的前几个字符返回给浏览器。</li>
        <li>线上接口不写在 server/api。nuxt.config.ts 的 routeRules 把 /remote 转发过去。</li>
      </ol>
      <p>这些处理函数跑在 Nitro 里，可以用数据库和私钥。它们不会被打进浏览器包。</p>
      <div class="row">
        <NuxtLink to="/data">看笔记接口的页面</NuxtLink>
        <NuxtLink to="/proxy">看转发到线上的接口</NuxtLink>
        <NuxtLink to="/config">看密钥没有整段下发</NuxtLink>
      </div>
    </DemoBlock>
  </div>
</template>
