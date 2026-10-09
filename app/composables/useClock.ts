export function useClock() {
  const time = ref('--:--:--')
  let timer: ReturnType<typeof setInterval> | undefined

  onMounted(() => {
    const tick = () => {
      time.value = new Date().toLocaleTimeString()
    }
    tick()
    timer = setInterval(tick, 1000)
  })

  onUnmounted(() => {
    if (timer) clearInterval(timer)
  })

  return { time }
}
