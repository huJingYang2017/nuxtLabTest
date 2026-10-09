# Nuxt 预习台

用当前的 Nuxt 4、Vue 3 和 Pinia 4 做的功能示例。项目在 `c:\Work\nuxt-lab`，和旁边的 Vue 实验台分开。

```bash
npm run dev
```

开发服务器默认是 http://localhost:3000 。

覆盖配置时，把 `.env.example` 复制为 `.env`，改完后重启 `npm run dev`。

```bash
npm run build
npm run preview
```

`build` 产出带服务端渲染的 Node 服务。`npm run generate` 会在构建时把页面渲染成静态文件。
