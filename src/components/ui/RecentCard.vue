<script setup lang="ts">
const prop = defineProps<{
  id: string
  title: string
  description: string
  priority: string
  status: string
  func?: () => void
}>()

const priorityColor =
  prop.priority === 'high'
    ? 'text-red-600 font-semibold'
    : prop.priority === 'medium'
      ? 'text-blue-600 font-semibold'
      : 'text-orange-600 font-semibold'
const statusColor =
  prop.status === 'open'
    ? 'text-teal-600 font-semibold'
    : prop.status === 'closed'
      ? 'text-gray-600 font-semibold'
      : 'text-amber-600 font-semibold'
</script>

<template>
  <div @click="prop.func" class="bg-white rounded-lg shadow-md p-6">
    <div class="flex justify-between items-center relative">
      <h2 class="text-xl font-medium text-gray-700 mb-2">{{ prop.title }}</h2>
    </div>
    <p class="text-gray-600 mb-4">"{{ prop.description }}"</p>
    <div class="flex justify-between items-center text-sm text-gray-500">
      <span
        >Priority: <span :class="priorityColor">{{ prop.priority }}</span></span
      >
      <span
        >Status: <span :class="statusColor">{{ prop.status }}</span></span
      >
    </div>
  </div>
</template>
