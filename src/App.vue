<script setup>
import { provide } from 'vue'
import { createGlobalState, globalInjectionKey } from './composables/global.js'
import Auth from './components/Auth.vue'
import Test from './components/Test.vue'

const global = createGlobalState()
provide(globalInjectionKey, global)
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Auth />
    <main
      class="mx-auto flex max-w-2xl flex-1 flex-col items-center justify-center px-4"
    >
      <h1 class="mb-4 text-2xl font-bold">Hello World</h1>
      <Test />
    </main>
  </div>
</template>
