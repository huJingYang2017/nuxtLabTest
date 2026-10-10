export default defineEventHandler((event) => {
  const raw = getQuery(event).q
  const keyword = typeof raw === 'string' ? raw.trim() : ''
  const items = [
    { id: 1, title: '文件路由不需要手写 routes 数组' },
    { id: 2, title: 'useFetch 在服务端取数，结果随 HTML 一起交给浏览器' },
  ].filter(item => keyword === '' || item.title.includes(keyword))

  return {
    items,
    keyword,
    servedAt: new Date().toISOString(),
  }
})
