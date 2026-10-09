<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()

const groups = computed(() => {
  const order: string[] = []
  const map = new Map<string, typeof labNav>()
  for (const item of labNav) {
    if (!map.has(item.group)) {
      map.set(item.group, [])
      order.push(item.group)
    }
    map.get(item.group)?.push(item)
  }
  return order.map((name) => ({ name, items: map.get(name) ?? [] }))
})

function isCurrent(to: string) {
  if (to === '/') return route.path === '/'
  return route.path === to || route.path.startsWith(`${to}/`)
}
</script>

<template>
  <div class="shell">
    <aside class="sidebar">
      <div class="brand">
        <strong>{{ config.public.appTitle }}</strong>
        <span>Nuxt 4 · Vue 3 · Pinia 4</span>
      </div>
      <nav v-for="group in groups" :key="group.name">
        <p class="group-name">{{ group.name }}</p>
        <NuxtLink
          v-for="item in group.items"
          :key="item.to"
          :to="item.to"
          :class="{ current: isCurrent(item.to) }"
        >
          <span>{{ item.title }}</span>
          <span class="nav-path">{{ item.to }}</span>
        </NuxtLink>
      </nav>
    </aside>
    <main class="main">
      <PageAddress />
      <slot />
    </main>
  </div>
</template>
