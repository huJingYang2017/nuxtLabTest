<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

function goHome() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <main class="main">
    <PageAddress />
    <section class="panel">
      <h1>{{ props.error.statusCode }}</h1>
      <p>{{ props.error.message || props.error.statusMessage }}</p>
      <p class="hint">这是 app/error.vue。它替换整个应用，所以默认布局里的侧栏不会出现。</p>
      <button type="button" @click="goHome">回到总览</button>
    </section>
  </main>
</template>
