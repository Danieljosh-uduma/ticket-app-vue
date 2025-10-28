<script setup lang="ts">
import { useRouter } from 'vue-router'
import Logo from "@/assets/images/transparent-black-logo.png"
import NavList from './NavList.vue'
const router = useRouter()

const click = () => {
  router.push('/')
}
const prop = defineProps<{
  class: string
}>()
const className = `w-60 h-screen md:flex flex-col gap-10 fixed shadow bg-white z-100 ${prop.class}`
</script>

<template>
  <aside :class="className" aria-labelledby="side-bar">
    <div class="h-20 flex justify-start pl-8 items-center">
      <figure class="w-20 md:w-32 h-auto" @click="click">
      <img :src="Logo" class="w-full h-full object-fit" alt="Ticket ease logo"/>
      </figure>

    </div>
    <NavList />
  </aside>
</template>
