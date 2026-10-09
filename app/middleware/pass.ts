export default defineNuxtRouteMiddleware((to) => {
  const allowed = useState('lab-pass', () => false)
  if (allowed.value) return
  return navigateTo({ path: '/guard', query: { denied: to.fullPath } })
})
