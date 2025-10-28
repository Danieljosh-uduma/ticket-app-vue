<script setup lang="ts">
import type { Component } from 'vue'

const prop = defineProps<{
  title: string
  description: string
  icon: Component
}>()
</script>

<template>
  <div class="p-8 rounded-lg shadow-lg hover:shadow-[#e7008a21]">
    <div
      class="flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary-500 mx-auto mb-4"
    >
      <component :is="prop.icon"></component>
    </div>
    <h3 class="text-xl font-bold mb-2">{{ prop.title }}</h3>
    <p class="text-gray-600">{{ prop.description }}</p>
  </div>
</template>
