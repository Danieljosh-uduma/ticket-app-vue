<script setup lang="ts">
import type { VNode } from 'vue'
import { RouterLink } from 'vue-router'

const prop = defineProps<{
  title: string
  url: string
  icon: VNode
}>()
</script>

<template>
  <li>
    <RouterLink
      :to="url"
      class="py-3 px-3 rounded-3xl shadow-lg hover:bg-[#cfdff7] flex items-center gap-2"
    >
      <component :is="prop.icon"></component>
      {{ prop.title }}
    </RouterLink>
  </li>
</template>
