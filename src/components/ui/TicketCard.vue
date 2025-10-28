<script setup lang="ts">
const prop = defineProps<{
  title: string
  value: number
  textColor: string
}>()
const className = `text-4xl font-bold ${prop.textColor}`
</script>

<template>
  <div class="bg-white rounded-md shadow-md p-6 hover:shadow-[#e7008a5f]">
    <h2 class="text-xl font-medium text-gray-700 mb-2">{{ prop.title }}</h2>
    <p :class="className">{{ prop.value }}</p>
  </div>
</template>
