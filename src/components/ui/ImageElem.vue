<script setup lang="ts">
const prop = defineProps<{
  src: string
  alt: string
  class: string
  caption?: string
  click?: () => void
}>()
</script>

<template>
  <figure :class="prop.class" @click="prop.click">
    <img :src="prop.src" :alt="prop.alt" class="w-full h-full object-fit" />
    <figcaption v-if="prop.caption">{{ prop.caption }}</figcaption>
  </figure>
</template>
