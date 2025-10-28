<script setup lang="ts">
const prop = defineProps<{
  feedback: string
  author: string
  position: string
}>()
</script>

<template>
  <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-[#e7008a21] text-gray-800">
    <p class="italic mb-4">"{{ prop.feedback }}"</p>
    <p class="font-bold">{{ prop.author }}</p>
    <p class="text-sm text-gray-600">{{ prop.position }}</p>
  </div>
</template>
