<script setup lang="ts">
import type { Component } from 'vue'

const prop = defineProps<{
  class?: string
  type: 'button' | 'submit' | 'reset'
  click?: () => void
  text: string
  icon?: Component
}>()
</script>

<template>
  <button :class="prop.class" @click="prop.click" :type="prop.type">
    <component :is="prop.icon" v-if="prop.icon"></component>
    {{ prop.text }}
  </button>
</template>
