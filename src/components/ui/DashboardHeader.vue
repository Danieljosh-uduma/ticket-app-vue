<script setup lang="ts">
import { ref } from 'vue'
import SideBar from './SideBar.vue'
import HamburgerIcon from '../icons/HamburgerIcon.vue'
const prop = defineProps<{
  title: string
}>()
const show = ref(false)

const click = () => {
  show.value = !show.value
}
</script>

<template>
  <SideBar class="md:hidden pb-20" v-if="show" />

  <header
    class="h-20 w-full shadow-lg flex justify-between px-8 items-center sticky top-0 right-0 bg-white z-50"
  >
    <h3 class="text-2xl">{{ prop.title }}</h3>
    <div class="md:hidden" @click="click">
      <HamburgerIcon />
    </div>
  </header>
</template>
