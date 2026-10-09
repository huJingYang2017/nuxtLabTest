export default defineNuxtRouteMiddleware((to) => {
  // 水合阶段沿用服务端已经写进 payload 的记录，避免首屏 DOM 和客户端状态对不上。
  if (import.meta.client && useNuxtApp().isHydrating) return
  const trail = useState<string[]>('nav-trail', () => [])
  const side = import.meta.server ? 'server' : 'client'
  const line = `${side} ${to.path}`
  if (trail.value[0] === line) return
  trail.value = [line, ...trail.value].slice(0, 8)
})
