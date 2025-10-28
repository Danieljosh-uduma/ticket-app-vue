<script setup lang="ts">
import { useRouter } from 'vue-router'
import ImageElem from './ImageElem.vue'
import { RouterLink } from 'vue-router'

const prop = defineProps<{
  link: string
  title: string
}>()
const router = useRouter()

const click = () => {
  router.push('/')
}
</script>

<template>
  <header className="w-full h-25 flex justify-between items-center px-4 md:px-8 lg:px-12">
    <ImageElem
      src="/src/assets/images/transparent-black-logo.png"
      alt="Ticket ease logo"
      class="w-32 md:w-40 h-auto"
      @click="click"
    />
    <RouterLink
      :to="prop.link"
      class="text-base md:text-lg font-semibold bg-[#e7008a] text-white rounded px-4 py-2 md:px-5 md:py-2.5"
    >
      {{ prop.title }}
    </RouterLink>
  </header>
</template>
