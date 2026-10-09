export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubled = computed(() => count.value * 2)

  function inc() {
    count.value += 1
  }

  return { count, doubled, inc }
})
