export default defineEventHandler(() => {
  return {
    items: [
      { id: 1, title: '文件路由不需要手写 routes 数组' },
      { id: 2, title: 'useFetch 在服务端取数，结果随 HTML 一起交给浏览器' },
    ],
    servedAt: new Date().toISOString(),
  }
})
