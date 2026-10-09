<script setup lang="ts">
defineProps<{
  title: string
  scene?: string
  hint?: string
}>()
</script>

<template>
  <section class="demo">
    <h2>{{ title }}</h2>
    <p v-if="scene" class="scene"><strong>用来干什么 </strong>{{ scene }}</p>
    <p v-if="hint" class="hint">{{ hint }}</p>
    <slot />
  </section>
</template>
